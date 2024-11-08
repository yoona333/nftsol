import React from "react";
import "./NFTCard.css";

interface Collectible {
  tokenId: number; // 将 tokenId 类型改为 number
  image: string;
  name?: string;
  description?: string;
  nftholder?: string;
  price?: string;
  delisted: boolean;
}

interface NFTCardProps {
  nft: Collectible;
  onTransfer?: (tokenId: number, toAddress: string) => void;
  onDelete?: (tokenId: number) => void;
  onDelist?: (tokenId: number) => void; // 添加 onDelist prop
  onList?: (tokenId: number) => void;
  hideTransferButton?: boolean;
  hideDeleteButton?: boolean;
  hidePurchaseButton?: boolean;
  hideOnListButton?: boolean;
  hideDelistButton?: boolean;
  ownerAddress?: string;
  onPurchase?: (tokenId: number) => void;
}

const NFTCard: React.FC<NFTCardProps> = ({
  nft,
  onTransfer,
  onDelete,
  onDelist,
  onList,
  hideTransferButton,
  hideDeleteButton,
  hidePurchaseButton,
  hideOnListButton,
  hideDelistButton,
  ownerAddress,
  onPurchase,
}) => {
  const handleTransfer = () => {
    const toAddress = prompt("输入转移目标地址");
    if (toAddress) {
      onTransfer && onTransfer(nft.tokenId, toAddress);
    }
  };

  const handleDelete = () => {
    if (confirm("确定删除吗？")) {
      onDelete && onDelete(nft.tokenId);
    }
  };

  const handlePurchase = async (tokenId: number) => {
    if (onPurchase) {
      try {
        await onPurchase(nft.tokenId);
      } catch (error) {
        console.error("购买 NFT 失败:", error);
      }
    }
  };

  const handleOnList = () => {
    if (nft.delisted) {
      // 如果 NFT 已下架，则提示上架
      if (window.confirm("确定要上架这个 NFT 吗？")) {
        onList && onList(nft.tokenId);
      }
    } else {
      // 如果 NFT 已上架，则提示已上架
      alert("该 NFT 已经上架");
    }
  };

  const handleDelist = () => {
    if (!nft.delisted) {
      // 如果 NFT 未下架，则提示下架
      if (window.confirm("确定要下架这个 NFT 吗？")) {
        onDelist && onDelist(nft.tokenId);
      }
    } else {
      // 如果 NFT 已下架，则提示已下架
      alert("该 NFT 已经下架");
    }
  };

  return (
    <div className={`nft-card ${nft.delisted ? "delisted" : ""}`}>
      <div className="image-container">
        <img src={nft.image} alt={nft.name} />
        <div className="overlay">
          <h3>NFT名称: {nft.name}</h3>
          <p>NFT描述: {nft.description}</p>
          <p className="owner">NFT拥有者: {nft.nftholder}</p>
        </div>
      </div>
      <p>NFT价格: {nft.price}</p>
      <p>NFT ID: {nft.tokenId}</p>
      <p>描述：{nft.description}</p>
      <div className="button-container">
        {!hideTransferButton && <button onClick={handleTransfer}>转赠</button>}
        {!hideDeleteButton && (
          <button className="delete-button button-common" onClick={handleDelete}>
            删除
          </button>
        )}
        {!hideDelistButton && (
          <button className="delist-button button-common" onClick={handleDelist}>
            下架
          </button>
        )}
        {!hideOnListButton && (
          <button className="onList-button button-common" onClick={handleOnList}>
            上架
          </button>
        )}
        {hidePurchaseButton && (
          <button className="purchase-button button-common" onClick={() => handlePurchase(nft.tokenId)}>
            购买
          </button>
        )}
      </div>
    </div>
  );
};

export default NFTCard;
