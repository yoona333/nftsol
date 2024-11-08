// import React, { useEffect, useState } from 'react'; // 导入React及其Hooks
// import { notification } from '~~/utils/scaffold-eth/notification'; // 导入通知函数
// import { getMetadataFromIPFS } from '~~/utils/simpleNFT/ipfs-fetch'; // 导入从IPFS获取元数据的函数
// import NFTCard from './NFTCard'; // 导入NFTCard组件
// import './MyHoldings.css'; // 导入组件的CSS样式文件

// // 定义Collectible接口，描述单个NFT的数据结构
// interface Collectible {
//   tokenId: string;    // NFT的Token ID
//   image: string;      // NFT的图片链接
//   name?: string;      // NFT的名称
//   description?: string; // NFT的描述
//   owner?: string;     // NFT的所有者地址
//   price?: string;     // NFT的价格
// }

// // 定义MyHoldingsProps接口，描述组件的props
// interface MyHoldingsProps {
//   address: string | null; // 用户的以太坊地址，可能为null
//   nfts: { // NFT列表
//     tokenId: string; // NFT的Token ID
//     tokenUri: string; // NFT的Token URI，用于获取元数据
//     owner?: string; // NFT的所有者地址
//     price?: string; // NFT的价格
//   }[];
//   onTransfer: ( // 定义异步的转赠函数，接受Token ID、目标地址和NFT对象
//     tokenId: string,
//     toAddress: string,
//     nft: Collectible
//   ) => Promise<void>;
// }

// // 定义MyHoldings组件
// const MyHoldings: React.FC<MyHoldingsProps> = ({ address, nfts, onTransfer }) => {
//   const [collectibles, setCollectibles] = useState<Collectible[]>([]); // 状态：存储解析后的NFT列表
//   const [isLoading, setIsLoading] = useState<boolean>(true); // 状态：加载状态标志
//   const [error, setError] = useState<string | null>(null); // 状态：错误信息

//   // 使用useEffect Hook在组件渲染后获取NFT的元数据
//   useEffect(() => {
//     const fetchMetadata = async () => {
//       try {
//         // 使用Promise.all并行获取所有NFT的元数据
//         const fetchedCollectibles = await Promise.all(
//           nfts.map(async (nft) => {
//             const metadata = await getMetadataFromIPFS(nft.tokenUri); // 从IPFS获取单个NFT的元数据
//             return {
//               tokenId: nft.tokenId,
//               image: metadata.image ?? '', // 如果image存在则使用，否则为空字符串
//               name: metadata.name,
//               description: metadata.description,
//               owner: nft.owner,
//               price: nft.price,
//             };
//           })
//         );
//         setCollectibles(fetchedCollectibles); // 更新状态以存储获取的NFT数据
//       } catch (error) {
//         console.error('Error fetching NFT metadata:', error); // 打印错误信息
//         notification.error('获取 NFT 元数据时出错'); // 显示通知
//         setError('获取 NFT 元数据时出错'); // 设置错误状态
//       } finally {
//         setIsLoading(false); // 不管成功或失败，都设置加载状态为false
//       }
//     };

//     fetchMetadata(); // 调用获取元数据的函数
//   }, [nfts]); // 依赖数组nfts，当nfts变化时重新运行

//   // 如果isLoading为true，显示加载提示
//   if (isLoading) {
//     return <div className="loading">Loading...</div>;
//   }

//   // 如果存在错误，显示错误信息
//   if (error) {
//     return <div className="error">{error}</div>;
//   }

//   // 渲染组件的UI
//   return (
//     <div className="my-holdings">
//       {collectibles.length === 0 && <p>你没有持有任何 NFT。</p>} // 如果没有NFT，显示提示信息
//       {collectibles.length > 0 && ( // 如果有NFT，渲染NFT列表
//         <div className="nft-list">
//           {collectibles.map((nft) => (
//             <NFTCard // 渲染NFTCard组件
//               key={nft.tokenId} // 唯一key值
//               nft={nft} // 传递NFT数据给NFTCard组件
//               onTransfer={async (toAddress: string) => { // 传递转赠函数
//                 if (address && onTransfer) {
//                   await onTransfer(nft.tokenId, toAddress, nft); // 执行转赠操作
//                 }
//               }}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyHoldings; // 导出MyHoldings组件供其他文件使用
