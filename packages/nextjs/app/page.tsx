// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;
"use client";

import React, { useEffect, useState } from "react";
// 使用 scaffold-eth 中的 notification 函数显示通知
import "./page.css";
import type { NextPage } from "next";
// 导入 NFTCard 组件
import { useAccount } from "wagmi";
import NFTCard from "~~/components/simpleNFT/NFTCard";
// 使用 wagmi 中的 useAccount hook 获取当前用户地址
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
// 使用 scaffold-eth 中的 useScaffoldContractWrite hook 处理合约写入
import { notification } from "~~/utils/scaffold-eth/notification";

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";
// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;

// "use client";
// import Image from "next/image";
// import type { NextPage } from "next";

// const Home: NextPage = () => {
//   return (
//     <div className="flex items-center flex-col flex-grow pt-10">
//       <div className="px-5 w-[90%] md:w-[75%]">
//         <h1 className="text-center mb-16 text-4xl font-bold text-gray-900">
//           我的NFT收藏
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/1.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ❤你在身边 在你身边❤
//             </p>
//           </div>

//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/9.png"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             😘 love 😘
//             </p>
//           </div>

//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/11.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              🎨ovo🎨
//             </p>
//           </div>

//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/4.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//             ✨ happy ✨
//             </p>
//           </div>

//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/13.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//              😀 smile 😀
//             </p>
//           </div>

//           <div className="flex flex-col items-center justify-center hover:scale-105 transform transition-transform duration-300">
//             <div className="relative w-72 h-72 overflow-hidden border-4 border-gray-300">
//               <Image
//                 src="/14.jpg"
//                 layout="fill"
//                 objectFit="cover"
//                 alt="challenge banner"
//               />

//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-xs">作者：张欢</p>
//                 <p className="text-xs">拥有者：杨翔</p>
//                 <p className="text-xs">版权信息：版权所有，未经授权禁止转载</p>
//               </div>
//             </div>
//             <p className="text-center text-lg mt-8 text-gray-700">
//               ☀ 你就是我的风景 ☀
//             </p>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default Home;

// 导入页面样式

// 定义 NFT 类型
interface NFT {
  tokenId: number; // NFT 的 token ID
  image: string; // NFT 的图片
  name: string; // NFT 的名称
  description: string; // NFT 的描述
  owner: string; // NFT 的拥有者地址
  price: string; // NFT 的价格
  delisted: boolean; // NFT 是否已下架
}

const Home: NextPage = () => {
  const { address: currentUserAddress } = useAccount(); // 获取当前用户地址
  const { writeAsync: purchaseAsync } = useScaffoldContractWrite({
    // 获取 purchaseNFT 合约写入方法
    contractName: "YourCollectible", // 合约名称
    functionName: "purchaseNFT", // 合约方法名
    args: [BigInt(0)], // 合约参数，这里使用 BigInt(0) 作为默认参数
  });

  const [nfts, setNfts] = useState<NFT[]>([]); // 使用 useState 定义 NFT 列表的状态
  const [searchQuery, setSearchQuery] = useState(""); // 定义搜索关键字的状态

  // 处理购买 NFT 的函数
  const handlePurchase = async (tokenId: number, price: string) => {
    try {
      const tx = await purchaseAsync({ args: [BigInt(tokenId)], value: BigInt(price) }); // 调用 purchaseAsync 方法购买 NFT

      if (tx) {
        setNfts(prevNFTs => {
          const updatedNFTs = prevNFTs.map(nft =>
            nft.tokenId === tokenId ? { ...nft, owner: currentUserAddress! } : nft,
          );
          localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs));
          return updatedNFTs;
        });
        notification.success("NFT 购买成功"); // 显示购买成功的通知
      }
    } catch (error) {
      notification.error(`NFT 购买失败: ${(error as Error).message}`); // 显示购买失败的通知
    }
  };

  const handleDelist = (tokenId: number) => {
    setNfts(prevNFTs => {
      const updatedNFTs = prevNFTs.map(nft => (nft.tokenId === tokenId ? { ...nft, delisted: true } : nft));
      localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs));
      return updatedNFTs;
    });
  };

  const handleDelete = (tokenId: number) => {
    if (window.confirm("确定要删除这个 NFT 吗？")) {
      setNfts(prevNFTs => {
        const updatedNFTs = prevNFTs.filter(nft => nft.tokenId !== tokenId);
        localStorage.setItem("createdNFTs", JSON.stringify(updatedNFTs));
        return updatedNFTs;
      });
    }
  };

  // 在组件挂载时加载本地存储中的 NFT 数据
  useEffect(() => {
    const savedNFTs = localStorage.getItem("createdNFTs");
    if (savedNFTs) {
      const loadedNFTs = JSON.parse(savedNFTs);
      setNfts(loadedNFTs);
    }
  }, []);

  // 根据搜索关键字过滤 NFT 列表
  const filteredNFTs = nfts.filter(
    nft =>
      nft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.nftholder.toLowerCase().includes(searchQuery.toLowerCase()) ||
      nft.price.includes(searchQuery) ||
      nft.tokenId.toString().includes(searchQuery),
  );

  const visibleNFTs = filteredNFTs.filter(nft => !nft.delisted);

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-full max-w-3xl mx-auto">
        <h1 className="text-center mb-4 text-4xl font-bold text-gray-900">NFT文创展示</h1>
        <input
          type="text"
          placeholder="搜索 NFT..."
          className="mb-4 px-4 py-2 border rounded w-full"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-large">
          {visibleNFTs.length === 0 ? (
            <p className="text-center col-span-full text-lg mt-8 text-gray-700">没有符合搜索条件的NFT。</p>
          ) : (
            visibleNFTs.map(nft => (
              <NFTCard
                key={nft.tokenId}
                nft={nft}
                hideTransferButton={true}
                hideDeleteButton={nft.owner !== currentUserAddress}
                hideOnListButton={true}
                onDelist={handleDelist}
                onDelete={handleDelete}
                hideDelistButton={nft.owner !== currentUserAddress}
                hidePurchaseButton={nft.owner !== currentUserAddress}
                onPurchase={() => handlePurchase(nft.tokenId, nft.price)}
                ownerAddress={currentUserAddress}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
