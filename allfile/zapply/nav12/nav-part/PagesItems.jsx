import React from 'react';
import { Link } from 'react-router-dom';
export const pagesMenuData = [
  { name: "About us", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "FAQ", link: "/faq" },
  { name: "Store Location", link: "/store-location" },
  { name: "Wishlist", link: "/wishlist" },
  { name: "Compare", link: "/compare" },
  { name: "404", link: "/not-found" },
  { name: "Privacy Policy", link: "/privacy-policy" },
  { name: "Terms of Service", link: "/terms-of-service" },
  { name: "Refund Policy", link: "/refund-policy" },
];

const Items = ({ Open, toggles }) => (
  <div
    className={`absolute left-0 top-full mt-5 z-30 w-56 rounded-md shadow-lg border border-gray-100 bg-white transition-all duration-200 ease-in-out 
    ${Open ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible'}`}
    onMouseEnter={() => toggles(true)}
    onMouseLeave={() => toggles(false)}
  >
    <ul className="py-2 space-y-0.5">
      {pagesMenuData.map((item, i) => (
        <li key={i}>
          <Link
            to={item.link}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition duration-150"
            onClick={() => toggles(false)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);


export default Items;

