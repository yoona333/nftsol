"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./page.css";
import { useAccount, useConnect } from "wagmi";
import NFTCard from "~~/components/simpleNFT/NFTCard";
import { uploadToPinata } from "~~/components/simpleNFT/pinata";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth/notification";

interface FormFields {
  imageurl: string;
  nftName: string;
  nftessance: string;
  nftholder: string;
  nftPrice: string;
  nftDescription: string;
}

interface CreatedNFT extends FormFields {
  nfturl: string;
  tokenId: number;
  owner: string;
  image: string;
  name: string;
  price: string;
  description: string;
  delisted: boolean; // 新增字段
}

const MyNFTs: React.FC = () => {
  const { address } = useAccount();
  const { connect, connectors } = useConnect();
  const [formFields, setFormFields] = useState<FormFields>({
    imageurl: "",
    nftName: "",
    nftessance: "",
    nftholder: "",
    nftPrice: "",
    nftDescription: "",
  });
  const [createdNFTs, setCreatedNFTs] = useState<CreatedNFT[]>(() => {
    // 从本地存储加载所有 NFT，不进行过滤
    const savedNFTs = localStorage.getItem("createdNFTs");
    return savedNFTs ? JSON.parse(savedNFTs) : [];
  });

  const [filteredNFTs, setFilteredNFTs] = useState<CreatedNFT[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { writeAsync: mintAsync } = useScaffoldContractWrite({
    contractName: "YourCollectible",
    functionName: "mintItem",
    args: [address, ""],
  });

  const { writeAsync: transferAsync } = useScaffoldContractWrite({
    contractName: "YourCollectible",
    functionName: "transferFrom",
    args: [address, "", BigInt(0)],
  });

  const { data: tokenIdCounter } = useScaffoldContractRead({
    contractName: "YourCollectible",
    functionName: "tokenIdCounter",
    watch: true,
    cacheOnBlock: true,
  });

  const { writeAsync: setPricetransferAsync } = useScaffoldContractWrite({
    contractName: "YourCollectible",
    functionName: "setTokenPrice",
    args: [BigInt(0), BigInt(0)],
  });

  useEffect(() => {
    if (address) {
      // 根据当前地址更新展示的 NFT 列表，这里不过滤下架的 NFT
      setFilteredNFTs(createdNFTs.filter(nft => nft.owner.toLowerCase() === address.toLowerCase()));
    }
  }, [address, createdNFTs]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      if (!address) {
        throw new Error("请先连接钱包");
      }

      const nftData = {
        image: formFields.imageurl,
        nftName: formFields.nftName,
        nftessance: formFields.nftessance,
        nftholder: formFields.nftholder,
        nftPrice: formFields.nftPrice,
        nftDescription: formFields.nftDescription,
      };

      const ipfsHash = await uploadToPinata(nftData);

      const tx = await mintAsync({
        args: [address, ipfsHash],
      });

      if (tx) {
        const newId = Number(tokenIdCounter) + 1;

        const newNFT: CreatedNFT = {
          ...formFields,
          nfturl: ipfsHash,
          tokenId: newId,
          owner: address,
          image: formFields.imageurl,
          name: formFields.nftName,
          price: formFields.nftPrice,
          description: formFields.nftDescription,
          delisted: false, // 初始为上架状态
        };

        await setPricetransferAsync({
          args: [BigInt(newId), BigInt(formFields.nftPrice)],
        });

        setCreatedNFTs(prevNFTs => {
          const updatedNFTs = [...prevNFTs, newNFT];
          localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs)); // 保存到本地存储
          return updatedNFTs;
        });

        setFormFields({
          imageurl: "",
          nftName: "",
          nftessance: "",
          nftholder: "",
          nftPrice: "",
          nftDescription: "",
        });

        // 向后端发送 POST 请求
        const response = await fetch("http://localhost:5000/api/createNFT", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNFT),
        });

        if (!response.ok) {
          throw new Error("Failed to create NFT");
        }

        notification.success("NFT 创建成功");
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleConnectWallet = async () => {
    try {
      if (connectors.length > 0) {
        await connect({ connector: connectors[0] });
      } else {
        throw new Error("没有可用的连接器。");
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  const handleTransfer = async (tokenId: number, toAddress: string) => {
    try {
      if (!toAddress) {
        notification.error("无效的接收地址");
        return;
      }

      const tx = await transferAsync({
        args: [address, toAddress, BigInt(tokenId)],
      });

      if (tx) {
        setCreatedNFTs(prevNFTs => {
          const updatedNFTs = prevNFTs.map(nft => (nft.tokenId === tokenId ? { ...nft, owner: toAddress } : nft));
          localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs));
          return updatedNFTs;
        });
        notification.success("NFT 转移成功");
      }
    } catch (error) {
      notification.error(`NFT 转移失败: ${(error as Error).message}`);
    }
  };

  const handleDelete = (tokenId: number) => {
    if (window.confirm("确定要删除这个 NFT 吗？")) {
      setCreatedNFTs(prevNFTs => {
        const updatedNFTs = prevNFTs.filter(nft => nft.tokenId !== tokenId);
        localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs));
        return updatedNFTs;
      });
    }
  };

  const handleList = (tokenId: number) => {
    setFilteredNFTs(prevNFTs => {
      const updatedNFTs = prevNFTs.map(nft => (nft.tokenId === tokenId ? { ...nft, delisted: false } : nft));
      localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs));
      return updatedNFTs;
    });
  };

  const handleDelist = (tokenId: number) => {
    setFilteredNFTs(prevNFTs => {
      const updatedNFTs = prevNFTs.map(nft => (nft.tokenId === tokenId ? { ...nft, delisted: true } : nft));
      localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs));
      return updatedNFTs;
    });
  };

  return (
    <div className="my-nfts-container">
      <h1>我的 NFT</h1>
      {!address && <button onClick={handleConnectWallet}>连接钱包</button>}
      {address && (
        <>
          <form onSubmit={handleSubmit}>
            {/* 表单用于输入创建NFT的相关信息。 */}
            <input
              type="text"
              name="imageurl"
              placeholder="NFT 图片链接"
              value={formFields.imageurl}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="nftName"
              placeholder="NFT 名称"
              value={formFields.nftName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="nftessance"
              placeholder="NFT 品质"
              value={formFields.nftessance}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="nftholder"
              placeholder="NFT 持有人"
              value={formFields.nftholder}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="nftPrice"
              placeholder="NFT 价格"
              value={formFields.nftPrice}
              onChange={handleChange}
              required
            />
            <textarea
              name="nftDescription"
              placeholder="NFT 描述"
              value={formFields.nftDescription}
              onChange={handleChange}
              required
            />
            <button type="submit">创建 NFT</button>
          </form>
          {error && <p className="error">{error}</p>}
          <div className="nft-grid">
            {filteredNFTs.map(nft => (
              <NFTCard
                key={nft.tokenId}
                nft={nft}
                onTransfer={handleTransfer}
                onDelete={handleDelete}
                onList={handleList}
                onDelist={handleDelist}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyNFTs;
