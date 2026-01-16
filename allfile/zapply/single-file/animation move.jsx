import React from 'react';
import './ani.css'; 

const fashonss = [
  { text: "BLAZER", url: "https://www.shutterstock.com/image-photo/handsome-bearded-young-man-outdoor-600nw-1037393362.jpg" },
  { text: "SPORTS", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4BWuMzCnutgTfPpTl3FW3jPF4B8sNbxn3g&s" },
  { text: "T-SHIRT", url: "https://amorina.in/cdn/shop/articles/1.webp?v=1694756190&width=360" },
  { text: "PANTS", url: "https://media.istockphoto.com/id/1018293976/photo/attractive-fashionable-woman-posing-in-white-trendy-sweater-beige-pants-and-autumn-heels-on.jpg?s=612x612&w=0&k=20&c=_CLawpZw6l9z0uV4Uon-7lqaS013E853ub883pkIK3c=" },
  { text: "JACKET", url: "https://leatherskinshop.com/cdn/shop/articles/leather-jacket-outfits-women.png?v=1704532981" },
  { text: "DRESSES", url: "https://cdn.pixabay.com/photo/2018/09/02/20/17/girl-3649758_1280.jpg" },
];
const messagess = "LIMITED-TIME PET FOOD DISCOUNTS!";
const separass = "•";
const duplicatcount = 6;
const elementss = fashonss.flatMap((item, index) => [
  { type: 'IMAGE', data: item },
  { type: 'TEXT', data: item, style: index % 2 === 0 ? 'outlined' : 'solid' },
]);
const itemsdatas = Array(duplicatcount).fill(null).flatMap((_, i) => [
  { text: separass, isSeparator: true },
  { text: messagess, isSeparator: false, isWhiteWithBorder: i % 2 === 0 },
]);
const allelements = [...elementss, ...elementss];
const allPromoItems = [...itemsdatas, ...itemsdatas];
const Maritems = React.memo(({ element }) => {
  const { type, data, style } = element;
    if (type === 'IMAGE') {
    return (
      <div className="flex-shrink-0 flex items-center justify-center h-24 cursor-pointer px-4">
        <img src={data.url} alt={data.text} className="w-[120px] h-[80px] object-cover rounded-3xl flex-shrink-0" />
      </div>
    );
  }
  if (type === 'TEXT') {
    const textStyle = style === 'outlined' ? "text-outline text-5xl font-extrabold" : "text-black text-5xl font-extrabold";
    return (
      <div className="flex-shrink-0 flex items-center justify-center h-24 cursor-pointer">
        <span className={`px-8 whitespace-nowrap tracking-wide ${textStyle}`}>
          {data.text}
        </span>
      </div>
    );
  }
  if (type === 'PROMO') {
    let textStyle;
    if (data.isSeparator) {
      textStyle = "text-black text-3xl font-extrabold";
    } else {
      textStyle = data.isWhiteWithBorder ? "text-promo-outline text-3xl font-extrabold" : "text-black text-3xl font-extrabold";
    }
    return (
      <span className={`flex-shrink-0 whitespace-nowrap px-6 leading-none ${textStyle}`}>
        {data.text}
      </span>
    );
  }
  return null;
});
Maritems.displayName = 'Maritems';

function App() {
  return (
    <div className="bg-[#fafafa] flex flex-col items-center justify-center p-4 py-16">
      <div className="w-full max-w-8xl overflow-hidden py-4 bg-[#fafafa] relative">
        <div className="flex space-x-0 animate-scroll w-fit marq-ho">
          {allelements.map((element, index) => (
            <Maritems key={`f-${index}`} element={{ ...element }} />
          ))}
        </div>
      </div>
      <div className="w-full max-w-8xl overflow-hidden bg-[#fafafa] relative">
        <div className="flex justify-start items-center animate-scroll-reverse w-fit marq-ho h-12">
          {allPromoItems.map((item, index) => (
            <Maritems key={`p-${index}`} element={{ type: 'PROMO', data: item }} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;























































// import React from 'react';

// const fashonss = [
//   { text: "BLAZER", url: "https://www.shutterstock.com/image-photo/handsome-bearded-young-man-outdoor-600nw-1037393362.jpg" },
//   { text: "SPORTS", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4BWuMzCnutgTfPpTl3FW3jPF4B8sNbxn3g&s" },
//   { text: "T-SHIRT", url: "https://amorina.in/cdn/shop/articles/1.webp?v=1694756190&width=360" },
//   { text: "PANTS", url: "https://media.istockphoto.com/id/1018293976/photo/attractive-fashionable-woman-posing-in-white-trendy-sweater-beige-pants-and-autumn-heels-on.jpg?s=612x612&w=0&k=20&c=_CLawpZw6l9z0uV4Uon-7lqaS013E853ub883pkIK3c=" },
//   { text: "JACKET", url: "https://leatherskinshop.com/cdn/shop/articles/leather-jacket-outfits-women.png?v=1704532981" },
//   { text: "DRESSES", url: "https://cdn.pixabay.com/photo/2018/09/02/20/17/girl-3649758_1280.jpg" },
// ];
// const messagess = "LIMITED-TIME PET FOOD DISCOUNTS!";
// const separass = "•";
// const duplicatcount = 6;
// const elementss = fashonss.flatMap((item, index) => [
//     { type: 'IMAGE', data: item },
//     { type: 'TEXT', data: item, style: index % 2 === 0 ? 'outlined' : 'solid' },
// ]);
// const itemsdatas = Array(duplicatcount).fill(null).flatMap((_, i) => [
//     { text: separass, isSeparator: true },
//     { text: messagess, isSeparator: false, isWhiteWithBorder: i % 2 === 0 }, 
// ]);
// const allelements = [...elementss, ...elementss];
// const allPromoItems = [...itemsdatas, ...itemsdatas];
// const Maritems = React.memo(({ element }) => {
//   const { type, data, style } = element;
//     if (type === 'IMAGE') {
//     return (
//       <div className="flex-shrink-0 flex items-center justify-center h-24 cursor-pointer px-4">
//         <img src={data.url} alt={data.text} className="w-[120px] h-[80px] object-cover rounded-3xl flex-shrink-0"/>
//       </div>
//     );
//   }
//   if (type === 'TEXT') {
//     const textStyle = style === 'outlined'? "text-outline text-5xl font-extrabold" : "text-black text-5xl font-extrabold";
//     return (
//       <div className="flex-shrink-0 flex items-center justify-center h-24 cursor-pointer">
//           <span className={`px-8 whitespace-nowrap tracking-wide ${textStyle}`}>
//               {data.text}
//           </span>
//       </div>
//     );
//   }
//   if (type === 'PROMO') {
//     let textStyle;
//     if (data.isSeparator) {
//       textStyle = "text-black text-3xl font-extrabold"; 
//     } 
//     else {
//       textStyle = data.isWhiteWithBorder ? "text-promo-outline text-3xl font-extrabold" : "text-black text-3xl font-extrabold"; 
//     }
//     return (
//       <span className={`flex-shrink-0 whitespace-nowrap px-6 leading-none ${textStyle}`}>
//         {data.text}
//       </span>
//     );
//   }
//   return null;
// });
// Maritems.displayName = 'Maritems';




// function App() {
  
//   return (
//     <>
//       <style>
//         {`
//         .text-outline {
//             color: transparent; 
//             -webkit-text-stroke-width: 1px; 
//             -webkit-text-stroke-color: black; 
//         }
//         .text-promo-outline {
//             color: white; 
//             -webkit-text-stroke-width: 1.5px;
//             -webkit-text-stroke-color: black; 
//         }
//         @keyframes scroll-x {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @keyframes scroll-x-reverse {
//           0% { transform: translateX(-50%); }
//           100% { transform: translateX(0); }
//         }
//         .animate-scroll { animation: scroll-x 20s linear infinite; }
//         .animate-scroll-reverse { animation: scroll-x-reverse 20s linear infinite; }
//         .marq-ho:hover { animation-play-state: paused; }
        
//         `}
//       </style>
//       <div className="bg-[#fafafa] flex flex-col items-center justify-center p-4 py-16">
//         <div className="w-full max-w-8xl overflow-hidden py-4 bg-[#fafafa] relative"> 
//           <div className="flex space-x-0 animate-scroll w-fit marq-ho">
//             {allelements.map((element, index) => (
//               <Maritems key={`f-${index}`} element={{ ...element, type: element.type }} />
//             ))}
//           </div>
//         </div>
//         <div className="w-full max-w-8xl overflow-hidden bg-[#fafafa] relative"> 
//           <div className="flex justify-start items-center animate-scroll-reverse w-fit marq-ho h-12">
//             {allPromoItems.map((item, index) => (
//               <Maritems key={`p-${index}`} element={{ type: 'PROMO', data: item }} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default App;


