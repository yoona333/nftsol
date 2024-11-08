// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2; // Do not change the solidity version as it negatively impacts submission grading

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol"; // 引入 ECDSA 库
contract YourCollectible is
	ERC721,
	ERC721Enumerable,
	ERC721URIStorage,
	Ownable
{
	using Counters for Counters.Counter;
	using ECDSA for bytes32;

	Counters.Counter public tokenIdCounter;
	mapping(uint256 => uint256) public tokenPrices;
	mapping(bytes32 => bool) private usedHashes;

	// 映射记录每个NFT的 nonce 值
	mapping(uint256 => uint256) public nonces;

	event PurchaseNFT(
		uint256 indexed tokenId,
		address indexed buyer,
		address indexed seller,
		uint256 price,
		uint256 timestamp
	);
	constructor() ERC721("YourCollectible", "YCB") {}


    // 使用多重签名和时间戳购买NFT
    function buyNFTWithMultiSig(
        uint256 tokenId,
        uint256 price,
        uint256 timestamp,
        bytes memory signatureSeller
    ) public payable {
        require(tokenPrices[tokenId] == price, "Price does not match the listed price");
        require(block.timestamp <= timestamp + 10 minutes, "Transaction has expired");
        
        address seller = ownerOf(tokenId);
        bytes32 hash = keccak256(abi.encodePacked(tokenId, price, msg.sender, seller, timestamp));
        
        // 检查hash是否已被使用
        require(!usedHashes[hash], "Transaction already processed");
        
        // 验证卖家签名
        require(_verify(hash, signatureSeller, seller), "Invalid seller signature");
        
        require(msg.value == price, "Incorrect price sent");
        
        // 完成NFT转移
        _transfer(seller, msg.sender, tokenId);
        
        // 将交易资金发送给卖家
        payable(seller).transfer(msg.value);
        
        // 更新已使用的hash
        usedHashes[hash] = true;
        
        // 记录交易事件
        emit PurchaseNFT(tokenId, msg.sender, seller, price, block.timestamp);
    }

    // 验证签名
    function _verify(bytes32 hash, bytes memory signature, address signer) internal pure returns (bool) {
        return hash.toEthSignedMessageHash().recover(signature) == signer;
    }



	 // 使用随机数（nonce）和多重签名购买NFT
    function buyNFTWithNonce(
        uint256 tokenId,
        uint256 price,
        uint256 timestamp,
        uint256 nonce,
        bytes memory signatureSeller
    ) public payable {
        require(tokenPrices[tokenId] == price, "Price does not match the listed price");
        require(block.timestamp <= timestamp + 10 minutes, "Transaction has expired");
        
        address seller = ownerOf(tokenId);
        bytes32 hash = keccak256(abi.encodePacked(tokenId, price, msg.sender, seller, timestamp, nonce));

        // 检查hash是否已被使用
        require(!usedHashes[hash], "Transaction already processed");
        // 确保nonce匹配
        require(nonce == nonces[tokenId], "Nonce does not match");

        // 验证卖家签名
        require(_verify(hash, signatureSeller, seller), "Invalid seller signature");

        require(msg.value == price, "Incorrect price sent");

        // 完成NFT转移
        _transfer(seller, msg.sender, tokenId);

        // 将交易资金发送给卖家
        payable(seller).transfer(msg.value);

        // 更新nonce和hash
        nonces[tokenId]++; // 更新NFT的nonce
        usedHashes[hash] = true;

        // 记录交易事件
        emit PurchaseNFT(tokenId, msg.sender, seller, price, block.timestamp);
    }


    // 覆盖 ERC721 标准的部分函数
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721URIStorage, ERC721) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721URIStorage, ERC721) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }


	function _baseURI() internal pure override returns (string memory) {
		return "https://gateway.pinata.cloud/ipfs/";
	}

	function mintItem(
		address to,
		string memory uri
	) public virtual returns (uint256) {
		tokenIdCounter.increment();
		uint256 tokenId = tokenIdCounter.current();
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, uri);
		return tokenId;
	}

	// The following functions are overrides required by Solidity.


	function setTokenPrice(uint256 tokenId, uint256 price) public {
		require(
			ownerOf(tokenId) == msg.sender,
			"Only the owner can set the price"
		);
		tokenPrices[tokenId] = price;
	}

	function purchaseNFT(uint256 tokenId) public payable {
		uint256 price = tokenPrices[tokenId];
		address owner = ownerOf(tokenId);
		require(msg.value == price, "Incorrect value sent");

		_transfer(owner, msg.sender, tokenId);
		payable(owner).transfer(msg.value);
		tokenPrices[tokenId] = 0;

		emit Transfer(owner, msg.sender, tokenId);
	}
}
