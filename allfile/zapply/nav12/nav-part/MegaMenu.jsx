import React from 'react';
import { Link } from 'react-router-dom';

export const megaMenuData = [
  { 
    title: "Shop Layouts", 
    lists: [
      { name: "Filter sidebar", link: "/filter-sidebar" },
      { name: "Filter drawer", link: "/filter-drawer" },
      { name: "Filter horizontal", link: "/filter-horizontal" },
      { name: "Full width", link: "/full-width" },
      { name: "Price filter input", link: "/price-filter" },
      { name: "Product 4 columns", link: "/product-4-columns" },
    ] 
  },
  { 
    title: "Product Layouts", 
    lists: [
      { name: "Thumbnails Slider", link: "/thumbnails-slider" },
      { name: "Product stacked", link: "/stacked" },
      { name: "Thumbnails 2 columns", link: "/thumbnails-2-columns" },
      { name: "Product thumbnails", link: "/thumbnails" },
      { name: "Product cart sticky", link: "/cart-sticky" },
      { name: "Product large media", link: "/large-media" },
    ] 
  },
  { 
    title: "Collections", 
    lists: [
      { name: "Collection list", link: "/list" },
      { name: "New Collection", link: "/new" },
      { name: "Trending Collection", link: "/trending" },
      { name: "Featured Collection", link: "/featured" },
      { name: "On Sale", link: "/on-sale" },
      { name: "Bestseller", link: "/bestseller" },
    ] 
  },
  { 
    title: "Explore More", 
    lists: [
      { name: "Collection banner", link: "/banner" },
      { name: "Collection sorting", link: "/sorting" },
      { name: "Advanced filters", link: "/advanced-filters" },
      { name: "Price Slider", link: "/price-slider" },
      { name: "Slider input", link: "/slider-input" },
      { name: "Ajax Filter", link: "/ajax-filter" },
    ] 
  },
];

const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8146Eq20RNZtIptJW65OV97CxVGvSUoIESg&s';

const MegaMenu = ({ Open, toggles }) => (
  <div
    className={`absolute left-0 right-0 z-20 transition-all duration-300 ease-in-out shadow-xl border-t border-gray-100 bg-white
    ${Open ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}
    onMouseEnter={() => toggles(true)}
    onMouseLeave={() => toggles(false)}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6 border-r pr-6">
          { megaMenuData.map((c, i) => (
            <div key={i} className="flex flex-col space-y-0.5 px-0 py-0">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">{c.title}</h3>
              <ul className="space-y-2">
                {c.lists.map((item, i) => (
                  <li key={i}>
                    <Link to={item.link} className="text-sm text-gray-600 hover:text-indigo-600 transition duration-150" onClick={() => toggles(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:col-span-1 flex flex-col items-center justify-start p-0 pl-8">
          <div className="relative w-full rounded-lg overflow-hidden shadow-sm group">
            <img src={URL} alt="Up to 70% off promotional image" className="w-full h-auto object-cover transition-opacity duration-300 "/>
            <div className="absolute inset-0 bg-opacity-10 rounded-lg"></div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm font-semibold text-gray-800 tracking-wide">
              UP TO <span className="text-indigo-600">70% OFF</span>
            </p>
            <Link to="/shop/all" className="mt-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition" onClick={() => toggles(false)}>
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MegaMenu;
























