// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
import "./YourCollectible.sol";
contract YourCollectibleWithRoyalties is YourCollectible {
	mapping(uint256 => address) private _creators; // 存储每个tokenId的创作者地址
	mapping(uint256 => TransactionHistory[]) public tokenTransactionHistory; // 每个 tokenId 对应的交易历史记录
	uint256 public royaltyPercentage = 5; // 版税百分比，默认设置为5%
	uint256 public mysteryBoxPrice = 0.1 ether; // 盲盒价格
	uint256[] public availableTokens; // 可供选择的NFT tokenId列表
	mapping(uint256 => uint256) public holdingStartTime; // 持有NFT的开始时间
	mapping(uint256 => bool) public loyaltyRewardClaimed; // 是否已领取忠诚度奖励
	address[] public profitSharingAddresses; // 收益分享地址
	uint256[] public profitSharingPercentages; // 收益分享比例（以百分比表示，100为最大）
	uint256 public loyaltyPeriod = 30 days; // 忠诚度奖励的持有期

	enum Rarity {
		Common,
		Rare,
		Epic,
		Legendary
	} //枚举类型 ，表示稀有度 普通 稀有 史诗 传奇
	mapping(uint256 => Rarity) public tokenRarities; // tokenId 对应的稀有度

	struct TransactionHistory {
		address seller;
		address buyer;
		uint256 price;
		uint256 timestamp;
	}
	struct Rental {
		address renter;
		uint256 rentPrice;
		uint256 startTime;
		uint256 duration;
		bool active;
	}
	mapping(uint256 => Rental) public rentals; // 每个 tokenId 对应的租赁信息

	struct Auction {
		address seller;
		uint256 tokenId;
		uint256 minBid;
		uint256 highestBid;
		address highestBidder;
		uint256 endTime;
		bool active;
	}
	mapping(uint256 => Auction) public auctions; // 每个 tokenId 对应的拍卖信息
	struct FractionalOwnership {
		uint256 totalShares;
		mapping(address => uint256) sharesOwned;
	}
	mapping(uint256 => FractionalOwnership) public fractionalOwnerships; // 每个 tokenId 对应的碎片化所有权

	// 覆盖 mintItem 方法，保存创作者地址
	function mintItem(
		address to,
		string memory uri
	) public override returns (uint256) {
		uint256 tokenId = super.mintItem(to, uri);
		_creators[tokenId] = msg.sender; // 保存创作者地址
		return tokenId;
	}

	// 设置分红信息
	function setProfitSharing(
		address[] memory addresses,
		uint256[] memory percentages
	) public onlyOwner {
		require(addresses.length == percentages.length, "The address and scale length do not match");
		uint256 totalPercentage = 0;
		for (uint256 i = 0; i < percentages.length; i++) {
			totalPercentage += percentages[i];
		}
		require(totalPercentage <= 100, "The sum of the dividend percentage cannot exceed 100%");

		profitSharingAddresses = addresses;
		profitSharingPercentages = percentages;
	}

	// 分配利润
	function distributeProfits(uint256 amount) internal {
		for (uint256 i = 0; i < profitSharingAddresses.length; i++) {
			uint256 share = (amount * profitSharingPercentages[i]) / 100;
			payable(profitSharingAddresses[i]).transfer(share);
		}
	}

	// banquanbuyNFT 函数，增加版税支付逻辑
	function banshuibuyNFT(uint256 tokenId) public payable {
		uint256 price = tokenPrices[tokenId];
		require(price > 0, "The copyright has not been sold");
		require(msg.value == price, "The wrong price was sent");

		address seller = ownerOf(tokenId);
		address creator = _creators[tokenId];
		uint256 royaltyAmount = (msg.value * royaltyPercentage) / 100; // 计算版税金额
		uint256 sellerAmount = msg.value - royaltyAmount;

		_transfer(seller, msg.sender, tokenId);
		// 分红逻辑
		distributeProfits(msg.value);
		// 支付给创作者版税
		payable(creator).transfer(royaltyAmount);
		// 剩余金额支付给卖家
		payable(seller).transfer(sellerAmount);
		// 记录交易历史
		tokenTransactionHistory[tokenId].push(
			TransactionHistory({
				seller: seller,
				buyer: msg.sender,
				price: msg.value,
				timestamp: block.timestamp
			})
		);

		// 支付卖家
		payable(seller).transfer(msg.value);
		tokenPrices[tokenId] = 0;
	}

	// 查询指定NFT的交易历史记录
	function getTokenTransactionHistory(
		uint256 tokenId
	) public view returns (TransactionHistory[] memory) {
		return tokenTransactionHistory[tokenId];
	}

	// 修改版税百分比
	function setRoyaltyPercentage(uint256 percentage) public onlyOwner {
		royaltyPercentage = percentage;
	}

	// 创建拍卖
	function createAuction(
		uint256 tokenId,
		uint256 minBid,
		uint256 duration
	) public {
		require(
			ownerOf(tokenId) == msg.sender,
			"Only the owner can initiate an auction"
		);
		require(
			!auctions[tokenId].active,
			"Only the owner can initiate an auction"
		);

		auctions[tokenId] = Auction({
			seller: msg.sender,
			tokenId: tokenId,
			minBid: minBid,
			highestBid: 0,
			highestBidder: address(0),
			endTime: block.timestamp + duration,
			active: true
		});
	}
	// 开始拍卖
	function startAuction(
		uint256 tokenId,
		uint256 minBid,
		uint256 auctionDuration
	) public {
		require(
			ownerOf(tokenId) == msg.sender,
			"Only NFT owners can initiate auctions"
		);
		require(
			!auctions[tokenId].active,
			"This NFT auction has been activated"
		);

		auctions[tokenId] = Auction({
			seller: msg.sender,
			tokenId: tokenId,
			minBid: minBid,
			highestBid: 0,
			highestBidder: address(0),
			endTime: block.timestamp + auctionDuration,
			active: true
		});
	}

	// 出价
	function placeBid(uint256 tokenId) public payable {
		Auction storage auction = auctions[tokenId];
		require(auction.active, "The auction is inactive");
		require(block.timestamp < auction.endTime, "The auction has ended");
		require(
			msg.value > auction.highestBid,
			"The bid is lower than the current maximum bid"
		);

		// 退还之前的最高出价者
		if (auction.highestBidder != address(0)) {
			payable(auction.highestBidder).transfer(auction.highestBid);
		}

		auction.highestBid = msg.value;
		auction.highestBidder = msg.sender;
	}

	// 结束拍卖并转移NFT
	function endAuction(uint256 tokenId) public {
		Auction storage auction = auctions[tokenId];
		require(auction.active, "The auction is not activated");
		require(
			block.timestamp >= auction.endTime,
			"The auction is not over yet"
		);

		auction.active = false;
		if (auction.highestBidder != address(0)) {
			// 将NFT转移给最高出价者
			_transfer(ownerOf(tokenId), auction.highestBidder, tokenId);
			// 将拍卖款项转移给卖家
			payable(ownerOf(tokenId)).transfer(auction.highestBid);
		}
	}

	// 创建租赁
	function createRental(
		uint256 tokenId,
		uint256 rentPrice,
		uint256 duration
	) public {
		require(ownerOf(tokenId) == msg.sender, "Only NFT owners can rent out");
		require(!rentals[tokenId].active, "The NFT has been rented out");

		rentals[tokenId] = Rental({
			renter: address(0),
			rentPrice: rentPrice,
			startTime: 0,
			duration: duration,
			active: true
		});
	}

	// 租用NFT
	function rentNFT(uint256 tokenId) public payable {
		Rental storage rental = rentals[tokenId];
		require(rental.active, "The NFT is not rentable");
		require(msg.value == rental.rentPrice, "The rent paid is incorrect");

		rental.renter = msg.sender;
		rental.startTime = block.timestamp;

		// 临时转移NFT的所有权给租用者
		_transfer(ownerOf(tokenId), msg.sender, tokenId);

		// 支付租金给NFT持有者
		payable(ownerOf(tokenId)).transfer(msg.value);
	}

	// 结束租赁并归还NFT
	function endRental(uint256 tokenId) public {
		Rental storage rental = rentals[tokenId];
		require(rental.active, "The NFT is not rented");
		require(
			block.timestamp >= rental.startTime + rental.duration,
			"The lease period has not yet ended"
		);
		require(rental.renter != address(0), "The NFT is not rented");

		// 归还NFT给所有者
		_transfer(rental.renter, ownerOf(tokenId), tokenId);

		// 重置租赁信息
		rental.renter = address(0);
		rental.startTime = 0;
		rental.active = false;
	}

	// 创建碎片化NFT
	function createFractionalNFT(uint256 tokenId, uint256 totalShares) public {
		require(
			ownerOf(tokenId) == msg.sender,
			"Only NFT owners can do fractionation"
		);
		require(totalShares > 0, "The number of shares must be greater than 0");

		fractionalOwnerships[tokenId].totalShares = totalShares;
		fractionalOwnerships[tokenId].sharesOwned[msg.sender] = totalShares;
	}

	// 转移NFT份额
	function transferShares(
		uint256 tokenId,
		address to,
		uint256 shares
	) public {
		require(
			fractionalOwnerships[tokenId].sharesOwned[msg.sender] >= shares,
			"Holding shares not enough"
		);

		fractionalOwnerships[tokenId].sharesOwned[msg.sender] -= shares;
		fractionalOwnerships[tokenId].sharesOwned[to] += shares;
	}

	// 查询某地址的份额
	function getShares(
		uint256 tokenId,
		address owner
	) public view returns (uint256) {
		return fractionalOwnerships[tokenId].sharesOwned[owner];
	}

	// 获取NFT的总份额
	function getTotalShares(uint256 tokenId) public view returns (uint256) {
		return fractionalOwnerships[tokenId].totalShares;
	}

	// 设置盲盒价格
	function setMysteryBoxPrice(uint256 price) public onlyOwner {
		mysteryBoxPrice = price;
	}

	// 添加可供选择的NFT
	function addAvailableToken(uint256 tokenId) public onlyOwner {
		availableTokens.push(tokenId);
	}

	// 随机从盲盒中获取NFT
	function buyMysteryBox() public payable returns (uint256) {
		require(msg.value == mysteryBoxPrice, "The price paid is incorrect");
		require(availableTokens.length > 0, "There are no NFTs available");

		// 随机选择一个NFT
		uint256 randomIndex = uint256(
			keccak256(abi.encodePacked(block.timestamp, msg.sender))
		) % availableTokens.length;
		uint256 tokenId = availableTokens[randomIndex];

		// 从可用列表中移除该NFT
		availableTokens[randomIndex] = availableTokens[
			availableTokens.length - 1
		];
		availableTokens.pop();

		// 将NFT转移给购买者
		_transfer(ownerOf(tokenId), msg.sender, tokenId);

		return tokenId;
	}

	// 批量铸造NFT
	function mintBatch(
		address to,
		string[] memory uris
	) public returns (uint256[] memory) {
		uint256[] memory tokenIds = new uint256[](uris.length);

		for (uint256 i = 0; i < uris.length; i++) {
			tokenIds[i] = mintItem(to, uris[i]);
		}

		return tokenIds;
	}

	// 销毁NFT
	function burnNFT(uint256 tokenId) public {
		require(
			ownerOf(tokenId) == msg.sender,
			"Only NFT holders can burn NFTs"
		);
		_burn(tokenId);
	}

	// 将NFT作为礼物赠送
	function giftNFT(address to, uint256 tokenId) public {
		require(
			ownerOf(tokenId) == msg.sender,
			"Only NFT holders can transfer NFTs"
		);
		_transfer(msg.sender, to, tokenId);
	}

	// 设置NFT的稀有度
	function setTokenRarity(uint256 tokenId, Rarity rarity) public onlyOwner {
		tokenRarities[tokenId] = rarity;
	}

	// 获取NFT的稀有度
	function getTokenRarity(uint256 tokenId) public view returns (Rarity) {
		return tokenRarities[tokenId];
	}

	// 空投NFT给多个地址
	function airdropNFT(
		address[] memory recipients,
		string memory uri
	) public onlyOwner {
		for (uint256 i = 0; i < recipients.length; i++) {
			mintItem(recipients[i], uri);
		}
	}

	// 持有NFT时记录开始时间
	function _transfer(
		address from,
		address to,
		uint256 tokenId
	) internal override {
		super._transfer(from, to, tokenId);
		holdingStartTime[tokenId] = block.timestamp;
		loyaltyRewardClaimed[tokenId] = false; // 转移时重置忠诚奖励领取状态
	}

	// 领取忠诚度奖励
	function claimLoyaltyReward(uint256 tokenId) public {
		require(
			ownerOf(tokenId) == msg.sender,
			"Only NFT owners can claim rewards"
		);
		require(
			!loyaltyRewardClaimed[tokenId],
			"The loyalty reward has been claimed"
		);
		require(
			block.timestamp >= holdingStartTime[tokenId] + loyaltyPeriod,
			"If you don't hold it for enough time, you can't claim the reward"
		);

		// 发送忠诚度奖励 (例如：ERC20 代币或其他奖励)
		// 奖励逻辑可以在此处实现

		loyaltyRewardClaimed[tokenId] = true; // 标记为已领取
	}

	// 设置忠诚度奖励持有期
	function setLoyaltyPeriod(uint256 newPeriod) public onlyOwner {
		loyaltyPeriod = newPeriod;
	}
}
