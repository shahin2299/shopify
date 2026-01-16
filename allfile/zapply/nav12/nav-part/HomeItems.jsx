import React from 'react';
import { Link } from 'react-router-dom';

export const homeMenuData = [
  { 
    title: "Demo list 1", 
    lists: [
      { name: "Elegant Fashion", link: "/elegant-fashion" },
      { name: "Mega Store", link: "/mega-store" },
      { name: "Default Fashion", link: "/default-fashion" },
      { name: "Boutique Fashion", link: "/boutique-fashion" },
      { name: "Phone Case", link: "/phone-case" },
      { name: "Headphones", link: "/headphones" },
      { name: "Smart Watches", link: "/smart-watches" },
      { name: "Electronics Store 2", link: "/electronics-store-2" },
      { name: "Single Product", link: "/single-product" },
    ],
  },
  { 
    title: "Demo list 2", 
    lists: [
      { name: "Sneaker", link: "/sneaker" },
      { name: "Footwear", link: "/footwear" },
      { name: "Fashion 03", link: "/fashion-03" },
      { name: "Fashion 04", link: "/fashion-04" },
      { name: "Fashion 05", link: "/fashion-05" },
      { name: "Activewear", link: "/activewear" },
      { name: "Nutrition", link: "/nutrition" },
      { name: "Pizza", link: "/pizza" },
      { name: "Coffee", link: "/coffee" },
    ],
  },
  { 
    title: "Demo list 3", 
    lists: [
      { name: "Grocery Shop", link: "/grocery" },
      { name: "Books", link: "/books" },
      { name: "Lingerie", link: "/lingerie" },
      { name: "Backpack", link: "/backpack" },
      { name: "Pet Food", link: "/pet-food" },
      { name: "Skin Care", link: "/skin-care" },
      { name: "Lipstain", link: "/lipstain" },
      { name: "Jewelry 1", link: "/jewelry-1" },
      { name: "Jewelry 2", link: "/jewelry-2" },
    ],
  },
  { 
    title: "Demo list 4", 
    lists: [
      { name: "Auto Parts", link: "/auto-parts" },
      { name: "Car Accessories", link: "/car-accessories" },
      { name: "Basketball", link: "/basketball" },
      { name: "Skateboard", link: "/skateboard" },
      { name: "Surfboard", link: "/surfboard" },
      { name: "Furniture", link: "/furniture" },
      { name: "Plant & Garden", link: "/plant-garden" },
      { name: "POD", link: "/pod" },
      { name: "Glasses", link: "/glasses" },
    ],
  },
  { 
    title: "Demo list 5", 
    lists: [
      { name: "Plumbing Supplies", link: "/plumbing-supplies" },
      { name: "Craft & Decor", link: "/craft-decor" },
      { name: "Baby Shop", link: "/baby-shop" },
      { name: "Socks", link: "/socks" },
      { name: "Toys", link: "/toys" },
      { name: "Tools", link: "/tools" },
      { name: "Christmas", link: "/christmas" },
      { name: "RTL Demo", link: "/rtl-demo" },
    ],
  },
];

const Items = ({ Open, toggles }) => (
  <div
    className={`absolute left-0 right-0 z-20 transition-all duration-300 ease-in-out shadow-xl border-t border-gray-100 bg-white
    ${Open ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible '}`}
    onMouseEnter={() => toggles(true)}
    onMouseLeave={() => toggles(false)}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-5 gap-6">
        {homeMenuData.map((column, index) => (
          <div key={index} className="flex flex-col space-y-0.5 px-0 py-0">
            <h3 className="text-base font-bold text-gray-900 mb-4">
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.lists.map((item, listIndex) => (
                <li key={listIndex}>
                  <Link
                    to={item.link}
                    className="text-sm text-gray-600 hover:text-indigo-600 transition duration-150"
                    onClick={() => toggles(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Items;



























