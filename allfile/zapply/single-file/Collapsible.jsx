import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const items = [
  { id: 1, title: "Collapsible row 1:", content: "Inform your customers about your brand. Make announcements, describe a product, or welcome customers to your store.", isOpen: true },
  { id: 2, title: "Collapsible row 2:", content: "Inform your customers about your brand. Make announcements, describe a product, or welcome customers to your store.", isOpen: false },
  { id: 3, title: "Collapsible row 3:", content: "Inform your customers about your brand. Make announcements, describe a product, or welcome customers to your store.", isOpen: false },
  { id: 4, title: "Collapsible row 4:", content: "Inform your customers about your brand. Make announcements, describe a product, or welcome customers to your store.", isOpen: false },
];







const CollapsibleRow = ({ item: { id, title, content, isOpen }, onToggle }) => {
  const Icon = isOpen ? Minus : Plus;
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => onToggle(id)} className="flex justify-between items-center w-full py-5 ">
        <span className="text-2xl font-bold text-gray-900">{title}</span>
        <div className="text-gray-900 ">
          <Icon className="h-5 w-5 "/>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0 '}`}>
        <p className="text-base text-gray-700 pr-8 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};


const Collapsible = () => {
  const [fas, setfas] = useState(items);
  const handletoggle = (toggle) => {
    setfas(prevfas => prevfas.map(fa => ({ ...fa, isOpen: fa.id === toggle ? !fa.isOpen : false,})));
  };
  return (
    <div className="p-4 sm:p-16">
      <div className="max-w-screen-xl mx-auto bg-[#fafafa]  p-8 sm:p-12 ">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10 mt-2 lg:mb-16">
          Collapsible content
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="w-full order-1 lg:order-2">
            <img  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCSVFfbGh19Akpc4ZFjqjj9_KMzgZRdaYSpV2lhKDiVjGFDZ1i"  alt="customer" className="w-full h-auto object-contain max-h-[500px] mx-auto "/>
          </div>
          <div className=" order-2 lg:order-1 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            {fas.map(fa => (<CollapsibleRow key={fa.id} item={fa} onToggle={handletoggle}/>))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Collapsible;
