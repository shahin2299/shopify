import React, { useState } from 'react';

const spots = [
  { id: 1, top: '18%', left: '20%', content: { name: 'Applique Evening Gown', price: '$42.00' },},
  { id: 2, top: '18%', left: '78%', content: { name: 'Stretch Chino Pants', price: '$38.00' },},
  { id: 3, top: '67%', left: '28%', content: { name: 'Floral Maxi Wrap Dress', price: '$36.00' },},
  { id: 4, top: '69%', left: '70%', content: { name: 'Oversized Chunky Sweater', price: '$42.00' },},
];
const imagurl = 'https://media.macphun.com/img/uploads/skylum/marketplace/product/155/ba/_0004_Depositphotos_424473252_xl-2015.jpg?w=1270&h=650&resize=cover';
const Hotspot = ({ ho }) => {
  const [Hover, setHover] = useState(false);
  const { top, left, content } = ho;
  return (
    <div className="absolute z-10" style={{ top: top, left: left, transform: 'translate(-50%, -50%)' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <div className="w-4 h-4 rounded-full bg-pink-500 shadow-lg cursor-pointer transform transition duration-200 hover:scale-125 border-2 border-white animate-pulse">
        <div className="absolute inset-1/2 w-1 h-1 bg-white rounded-full"></div>
      </div>
      <div className={`absolute z-20 transition-all duration-300 ease-out p-2 min-w-[220px] bg-white rounded-lg shadow-xl border border-gray-100 ${Hover ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} `} style={{ bottom: '150%', left: '50%', transform: 'translate(-50%, 0)' }}>
        <p className="font-semibold text-gray-900 text-lg mb-0 leading-tight">{content.name}</p>
        <p className="text-gray-600 font-normal text-md">{content.price}</p>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-b border-r border-gray-100"></div>
      </div>
    </div>
  );
};











const box = () => {
  return (
    <div className="bg-[#fafafa] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden">
        <div className="relative w-full " style={{ aspectRatio: '1000 / 600', backgroundColor: '#1e293b' }}>
          <img src={imagurl.replace('Product+Hotspots', 'Product+Model')} alt="spots" className="w-full h-full object-cover mix-blend-screen opacity-70"/>
          {spots.map(e => (<Hotspot key={e.id} ho={e} />))}
        </div>
      </div>
    </div>
  );
};
export default box;