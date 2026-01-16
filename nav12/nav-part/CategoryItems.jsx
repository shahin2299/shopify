import React from 'react';
const Data = [
  { 
    name: "Blazer", 
    itemscount: 12, 
    url: "https://www.shutterstock.com/image-photo/handsome-bearded-young-man-outdoor-600nw-1037393362.jpg"
  },
  { 
    name: "Jacket", 
    itemscount: 12, 
    url: "https://leatherskinshop.com/cdn/shop/articles/leather-jacket-outfits-women.png?v=1704532981"
  },
  { 
    name: "Men", 
    itemscount: 12, 
    url: "https://amorina.in/cdn/shop/articles/1.webp?v=1694756190&width=360"
  },
  { 
    name: "Cap", 
    itemscount: 12, 
    url: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/13aaaac2-a57a-4ea1-8a61-a3d18999c1a3.__CR0,0,332,364_PT0_SX166_V1___.jpg"
  },
  { 
    name: "T-Shirt", 
    itemscount: 12, 
    url: "https://imagescdn.pantaloons.com/img/app/product/4/467772-3291924.jpg?auto=format&w=450"
  },
];

const Categoryitems = ({ Open, toggles }) => {

    return (
        <div className={`absolute top-full left-0 right-0 z-20 transition-all duration-500 ease-in-out  shadow-xl border-t border-gray-100 bg-white ${Open ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`} onMouseEnter={() => toggles(true)} onMouseLeave={() => toggles(false)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-5 gap-6">
                    {Data.map((c, i) => (
                        <div key={i} className="flex flex-col items-center justify-start group cursor-pointer p-2">
                            <div className="bg-gray-50 w-full max-w-[180px] h-[250px] flex items-center justify-center overflow-hidden ">
                                <img src={c.url} alt={c.name} className="h-full w-auto object-cover  "/>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 ">
                                    {c.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5">
                                    {c.itemscount} Items
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Categoryitems;