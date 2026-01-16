import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { Heart, X, LogIn, Plus, Minus } from 'lucide-react';
import {homeMenuData} from './HomeItems';
import {megaMenuData}from './MegaMenu';
import{ pagesMenuData }from './PagesItems';

const Mobileitems = ({ title, link, children, hasChevron, onClose, depth = 0, Open, onToggle }) => {
  const handleItemClick = (e) => {
    if (hasChevron) {
        e.preventDefault(); 
        if (onToggle) onToggle(); 
    } else {
      onClose(); 
    }
  };

  const basess = depth === 0 ? 'px-4' : `pl-${6 + depth * 2} pr-4`; 
  const textstyle = depth === 0 ? 'font-semibold text-gray-700' : 'font-medium text-gray-700';
  const borderstyle = depth === 0 ? 'border-b border-gray-100' : 'border-0';
  const Tag = hasChevron ? 'button' : Link;
  const tagprops = hasChevron ? { onClick: handleItemClick } : { to: link || '#', onClick: handleItemClick };
  return (
    <div className={borderstyle}>
      <Tag {...tagprops} className={`flex items-center justify-between w-full py-3 ${basess} text-sm ${textstyle} hover:text-indigo-600 transition duration-150 text-left`}>
        <span className='w-full text-left'>{title}</span>
        {hasChevron && ( Open ? <Minus className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 flex-shrink-0`} /> : <Plus className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 flex-shrink-0`} />)}
      </Tag>
      {hasChevron && (
        <div style={{ maxHeight: Open ? '5000px' : '0' }} className={`overflow-hidden transition-[max-height] duration-0 ease-in-out`} >
          <div className={`${depth === 0 ? 'pb-3 pl-6 pr-4' : 'pb-1 pl-4 pr-2'} space-y-1 text-sm`}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const Nestedss = ({ data, onClose }) => {
  const [activess, setActivess] = useState(null);
const Toggless = (index) => {
    setActivess(prev => (prev === index ? null : index));
  };

  if (!data || data.length === 0) return <p className="text-gray-500 italic">No sub-items defined.</p>;
  return data.map((column, colIndex) => {
    if (column.lists && column.lists.length > 0) {
        return (
            <Mobileitems
                key={colIndex}
                title={column.title}
                link="#"
                hasChevron={true}
                onClose={onClose}
                depth={1} 
                Open={activess === colIndex} 
                onToggle={() => Toggless(colIndex)}
                >
                
                <ul className="pl-2 space-y-1">
                    {column.lists.map((linkItem, linkIndex) => (
                        <li key={linkIndex}>
                            <Link
                                to={linkItem.link}
                                className="text-gray-600 hover:text-indigo-600 block py-1 font-normal"
                                onClick={onClose}
                            >
                                {linkItem.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Mobileitems>
        );
    }

    return (
        <div key={colIndex} className="space-y-1 mb-2">
            {column.title && <p className="font-bold text-gray-900 text-xs uppercase pl-4">{column.title}</p>}
        </div>
    );
  });
};

const Mobilebar = ({ Open, onClose }) => {
    const [activeindexsss, setActiveindexsss] = useState(null);
    const handletoggless = (index) => {
      setActiveindexsss(prev => (prev === index ? null : index));
    };
    const mobilemapss = [
      { title: "Home", link: "/", hasSubMenu: true, data: homeMenuData.map(col => ({ title: col.title, lists: col.lists })) },
      { title: "Shop", link: "/shop", hasSubMenu: true, data: megaMenuData.map(col => ({ title: col.title, lists: col.lists }))},
      { title: "Categories", link: "/categories", hasSubMenu: false },
      { title: "Products", link: "/products", hasSubMenu: true, data: megaMenuData.map(col => ({ title: col.title, lists: col.lists })) }, 
      { title: "Blog", link: "/blog", hasSubMenu: false },
      { title: "Pages", link: "/pages", hasSubMenu: true, data: [{ title: "General Pages", lists: pagesMenuData }] },
    ];
    return (
      <>
        <div className={`fixed inset-0 bg-black transition-opacity duration-300 z-[40] ${Open ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={onClose}></div>
        <div className={`fixed top-0 left-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out z-[50] transform ${ Open ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
          <div className="flex items-center justify-between p-5 border-b border-gray-100 flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-blue-700" onClick={onClose}>
              <span className="text-red-600">e</span>
              <span className="text-blue-700">mbaz</span>
            </Link>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-900 p-1 rounded-full hover:bg-gray-100">
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto pb-20">
            {mobilemapss.map((item, index) => (
              <Mobileitems
                key={index}
                title={item.title}
                link={item.link}
                hasChevron={item.hasSubMenu}
                onClose={onClose}
                Open={activeindexsss === index} 
                onToggle={() => handletoggless(index)}
              >
                {item.hasSubMenu && <Nestedss data={item.data} onClose={onClose} />}
              </Mobileitems>
            ))}

            <div className="border-b border-gray-100">
              <Link
                to="/wishlist"
                className="flex items-center py-3 px-4 text-sm font-semibold text-gray-700 hover:text-indigo-600 transition duration-150"
                onClick={onClose}
              >
                <Heart size={18} className="mr-2 text-red-500" />
                My wishlist (0)
              </Link>
            </div>
          </div>
          <div className="p-5 border-t border-gray-100 bg-white flex-shrink-0">
            <h3 className="text-lg font-bold text-gray-900 mb-3">My account</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition">
                <LogIn size={18} className="mr-2" /> Log in
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition">
                Register
              </button>
            </div>
            <div className="flex justify-between mt-4 text-xs text-gray-500">
              <div className="flex items-center">
             <select className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>United States USD $</option>
              <option>Bangladesh USD $</option>
              <option>Germany USD $</option>
              <option>Luxembourg USD $</option>
              <option>New Zealand USD $</option>
              <option>United Kingdom USD $</option>
            </select>
              </div>
              <div className="flex items-center">
            <select className="bg-gray-200 text-gray-700 py-2 px-5 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>العربية</option>
              <option>עברית</option>
            </select>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Mobilebar;



