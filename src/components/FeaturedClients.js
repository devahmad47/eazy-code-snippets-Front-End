// import React from "react";
// import shark from "../assests/shark.webp";
// import defidino from "../assests/defi dino.webp";
// import azha from "../assests/azha.webp";
// import banner from "../assests/banner.webp";
// import alphhadex from "../assests/alphhadex.webp";
// import sw from "../assests/sw.webp";
// const items = [
//   {
//     image: shark,
//   },
//   {
//     image: sw,
//   },
//   {
//     image: defidino,
//   },
//   {
//     image: banner,
//   },
//   {
//     image: alphhadex,
//   },
//   {
//     image: azha,
//   },
// ];
// const FeaturedClients = () => {
//   return (
//     <div
//       className="text-center container w-full mx-auto px-4 lg:p-6 p-0"
//       style={{ opacity: 1, transform: "none" }}
//     >
//       <div className="lg:py-10 py-10">
//         <h5 className="text-indigo-500 uppercase text-lg font-semibold lg:mb-1 mb-2">
//           FEATURED CLIENTS
//         </h5>
//         <h1 class="mx-auto max-w-3xl lg:whitespace-nowrap font-display text-4xl font-bold tracking-normal text-white-300 dark:text-gray-900 sm:text-5xl">
//           We partner with amazing companies{""}
//           {/* <span class="relative whitespace-nowrap text-white-600 dark:text-gray-900"></span> */}
//         </h1>
//         <p className="text-black mt-2 text-lg">
//           Top review and rating platforms have named us the foremost development
//           company.
//           <br className="lg:block hidden" />
//           We proudly Embrace.
//         </p>
//       </div>
//       <div className="relative flex  w-full mt-6 bg-white items-center">
//         <div className="relative flex max-w-[100vw] overflow-hidden py-5">
//           <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
//             {[...items, ...items].map((item, index) => (
//               <div key={index} className="h-full px-2.5">
//                 <div className="relative w-[10rem] rounded-2xl px-2 py-6">
//                   <div className="mt-auto flex items-center gap-2">
//                     {item.image === alphhadex || alphhadex ? (
//                       <img
//                         src={item.image}
//                         alt="nan"
//                         className="h-9 w-9 rounded-full"
//                         style={{ height: "100px", width: ["25rem"] }} // Set your desired height and width
//                       />
//                     ) : (
//                       <img
//                         src={item.image}
//                         alt="as"
//                         className="h-100 w-100 rounded-full"
//                       />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedClients;
