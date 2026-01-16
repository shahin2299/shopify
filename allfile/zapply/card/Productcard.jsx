import React, { useState} from 'react';
import { Heart, SlidersHorizontal,CircleCheckBig, Eye, ShoppingBag, Plus, Trash } from 'lucide-react';


const Productcard = ({ product, Quickview, Toggless, Wishlist  }) => {
    const [hovered, sethovered] = useState(false);
    const [selectedid, setSelectedid] = useState(product.variants[0].id);
    const [compare, setcompare] = useState(false);

    const selectedv = product.variants.find(v => v.id === selectedid);
    const currentim = hovered ? product.hoverImage : (selectedv?.selectedImage || product.mainImage);
    const Circle = ({va}) => {
        const isSelected = va.id === selectedid;
        return (
            <button onClick={(e) => { e.stopPropagation(); setSelectedid(va.id); }} className={` w-5 h-5 rounded-full mx-1 transition-all duration-200 ease-in-out border-2 ${isSelected ? 'border-gray-900 ring-2 ring-gray-200' : 'border-gray-300 hover:border-gray-500'} flex items-center justify-center`} style={{ backgroundColor: va.hex }}> </button>
        );
    };

const toggles = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setcompare(prev => !prev);
};

    const hovers = hovered ? 'opacity-100 visible' : 'opacity-0 invisible';
    const Quickadd = (e) => {
        e.stopPropagation();
        Quickview(product); 
    }


    return (
        <div 
            className="w-full max-w-sm flex flex-col items-center cursor-pointer"
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
            onClick={() => console.log(`Navigating to ${product.name}`)}
        >
            <div className="relative pt-[125%] w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={currentim} alt={product.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out"/>
                 <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10">Sale</div>
            <div className={`absolute top-4 right-4 flex flex-col space-y-2 z-10 transition-opacity duration-300 ${hovers} `}>
                <div className="relative group" onClick={(e) => { e.preventDefault(); e.stopPropagation(); Toggless(product); }}>
                    <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap `}>
                        {Wishlist ? "Remove from wishlist" : "Add to wishlist"}
                    </div>
                    <button className={`p-2.5 m-1 rounded-full bg-white shadow-md transition-colors duration-200  ${Wishlist ? 'text-red-500 hover:bg-red-100' : 'text-gray-900 hover:bg-gray-100'}`} aria-label={Wishlist ? "Remove from wishlist" : "Add to wishlist"}>
                        {Wishlist ? <Trash size={20} /> : <Heart size={20} />}
                    </button>
                </div>

<div
    className="relative group"
    onClick={toggles}
>
    <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap`}> {compare ? "remove from compare" : "add to compare"}
    </div>

    <button className={`p-2.5 m-1 rounded-full bg-white shadow-md transition-colors duration-200 ${compare ? "text-green-600 hover:bg-green-100" : "text-gray-900 hover:bg-gray-100"}`}>
        {compare ? <CircleCheckBig size={20} /> : <SlidersHorizontal size={20} />}
    </button>
</div>

                <div className="relative group">
                    <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap`}>
                        {"Quick view"}
                    </div>
                    <button onClick={Quickadd} className={"p-2.5 m-1 rounded-full bg-white shadow-md transition-colors duration-200 sm:inline hidden" } >
                         < Eye size={20} />
                    </button>
                </div> 
            </div>

                <button onClick={Quickadd} className={`absolute bottom-0 left-0 right-0 h-14 mx-4 mb-4 lg:flex items-center justify-center bg-white text-gray-900 rounded-lg font-semibold text-sm transition-all duration-300 ease-in-outshadow-xl z-20  hover:bg-gray-900 hover:text-white sm:inline hidden ${hovers}`}>
                    <div className='flex items-center space-x-2'>
                        <ShoppingBag size={20} className='-mt-0.5' />
                        <span>Quick Add</span>
                    </div>
                </button>
                {/* --- mobile */}
                <div className={`absolute top-4 right-4 flex flex-col space-y-2 z-10 transition-opacity duration-300 sm:hidden  `}>
                
                <div className="relative group" onClick={(e) => { e.preventDefault(); e.stopPropagation(); Toggless(product); }}>
                    <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap `}>
                        {Wishlist ? "Remove from wishlist" : "Add to wishlist"}
                    </div>
                    <button className={`p-2.5 m-1 rounded-full bg-white shadow-md transition-colors duration-200  ${Wishlist ? 'text-red-500 hover:bg-red-100' : 'text-gray-900 hover:bg-gray-100'}`} aria-label={Wishlist ? "Remove from wishlist" : "Add to wishlist"}>
                        {Wishlist ? <Trash size={20} /> : <Heart size={20} />}
                    </button>
                </div>
                                      
                <div className="relative group" >
                    <div className={`absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap`}>
                        {"Add to wishlist"}
                    </div>
                    <button className={"p-2.5 m-1 rounded-full bg-white shadow-md transition-colors duration-200"}>
                         < SlidersHorizontal size={20} />
                    </button>
                </div>
                </div>
                
                <div className='absolute bottom-0 left-0 right-0 h-14 flex sm:hidden z-20 overflow-hidden border-t border-gray-100'>
                  <button onClick={Quickadd} className="w-1/2 h-full flex items-center justify-center bg-white text-gray-900 border-r border-gray-100 transition-colors duration-200 hover:bg-gray-100">
                    <ShoppingBag size={20} />
                  </button>
                  <button onClick={Quickadd} className="w-1/2 h-full flex items-center justify-center bg-white text-gray-900 transition-colors duration-200 hover:bg-gray-100">
                    <Eye size={20} />
                  </button>
                </div>
            </div>
            
            <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-medium text-gray-800 mt-2 h-14 overflow-hidden line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-center space-x-2 mt-2 mb-4">
                    <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                    <span className="text-gray-900 font-bold text-lg">${product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    {product.variants.map((va) => (
                        <Circle key={va.id} va={va} />
                    ))}

                    <span className="ml-2 text-sm text-gray-500 font-medium">
                        <Plus size={14} className="inline mr-0.5" />
                        {product.variants.length} 
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Productcard;
