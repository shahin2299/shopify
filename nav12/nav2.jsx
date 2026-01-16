import React, { useState, useRef } from 'react';
import {Link } from 'react-router-dom';
import { ChevronDown, Search, User, Heart, ShoppingBag, Menu,} from 'lucide-react';
import Mega from './nav-part/MegaMenu';
import Category from './nav-part/CategoryItems';
import Home from './nav-part/HomeItems';
import PagesItems from './nav-part/PagesItems';
import Mobile from './nav-part/mobile';
import Product from './nav-part/ProductsItems';

const Navbar = ({ cartitems, wishlistss, Cartss, Searchss }) => {
  const [home, sethome] = useState(false);
  const [shop, setshop] = useState(false);
  const [category, setcategory] = useState(false);
  const [products, setproducts] = useState(false);
  const [pages, setpages] = useState(false);
  const homeref = useRef(null);
  const shopref = useRef(null);
  const categoryref = useRef(null);
  const productref = useRef(null);
  const pagesef = useRef(null);
  const [mobile, setmobile] = useState(false);
  const toggle = (open, setstate, timeref) => {
    if (timeref.current) clearTimeout(timeref.current);
    if (open) {
      closemenus(setstate);
      setstate(true);
    } else {
      timeref.current = setTimeout(() => {
        setstate(false);
      }, 200);
    }
  };
  const closemenus = (currentSetstate) => {
    if (currentSetstate !== sethome) sethome(false);
    if (currentSetstate !== setshop) setshop(false);
    if (currentSetstate !== setcategory) setcategory(false);
    if (currentSetstate !== setproducts) setproducts(false);
    if (currentSetstate !== setpages) setpages(false);
  };
  const togglemobile = (open) => {
    setmobile(open);
  };

  React.useEffect(() => {
    if (mobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobile]);
  return (
<nav className="sticky top-0 left-0 w-full bg-white z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-gray-100">
        <button onClick={() => togglemobile(true)} className="lg:hidden text-gray-700 hover:text-indigo-600 mr-4">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex-shrink-0 lg:flex-grow lg:flex lg:justify-start">
          <Link to="/" className="text-3xl font-bold text-blue-700">
            <span className="text-red-600">a</span>
            <span className="text-black">mbaz</span>
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6 xl:space-x-8 lg:flex-grow lg:justify-center absolute lg:static top-0 right-0 left-0 justify-center">
          <div className="relative flex items-center h-full" onMouseEnter={() => toggle(true, sethome, homeref)} onMouseLeave={() => toggle(false, sethome, homeref)} >
            <Link to="/" className={`flex items-center space-x-1 text-sm font-semibold transition py-2 ${ home ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
              <span>Home</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </Link>
          </div>
          <div className="relative flex items-center h-full" onMouseEnter={() => toggle(true, setshop, shopref)} onMouseLeave={() => toggle(false, setshop, shopref)}>
            <Link to="#" className={`flex items-center space-x-1 text-sm font-semibold transition py-2 ${ shop ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
              <span>Shop</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </Link>
          </div>
          <div className="relative flex items-center h-full" onMouseEnter={() => toggle(true, setcategory, categoryref)} onMouseLeave={() => toggle(false, setcategory, categoryref)}>
            <Link to="#" className={`flex items-center space-x-1 text-sm font-semibold transition py-2 ${ category ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
              <span>Categories</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </Link>
          </div>
        <div className="relative flex items-center h-full" onMouseEnter={() => toggle(true, setproducts, productref)} onMouseLeave={() => toggle(false, setproducts, productref)}>
          <Link to="#" className={`flex items-center space-x-1 text-sm font-semibold transition py-2 ${ products ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
            <span>Products</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </Link>
        </div>
          <div className="relative flex items-center h-full">
            <Link to="/blog" className="flex items-center space-x-1 text-sm font-semibold transition py-2 text-gray-700 hover:text-indigo-600">
              <span>Blog</span>
            </Link>
          </div>
          <div className="relative flex items-center h-full" onMouseEnter={() => toggle(true, setpages, pagesef)} onMouseLeave={() => toggle(false, setpages, pagesef)}>
            <Link to="#" className={`flex items-center space-x-1 text-sm font-semibold transition py-2 ${ pages ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
              <span>Pages</span>
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </Link>
            <PagesItems Open={pages} toggles={(open) => toggle(open, setpages, pagesef)}/>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button onClick={Searchss} className="text-gray-500  p-2 rounded-full  transition-colors">
            <Search size={22} />
          </button>
          <button className="hidden lg:block text-gray-500  p-2 rounded-full transition-colors">
            <User size={22} />
          </button>
          <Link to="/wishlist" className="hidden lg:flex p-2 rounded-full transition-colors relative text-gray-500">
            <Heart size={22} />
            {wishlistss > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white text-xs font-bold border-2 border-white">
                {wishlistss}
              </span>
            )}
          </Link>
          <button onClick={Cartss} className="text-gray-500 p-2 rounded-full  transition-colors relative">
            <ShoppingBag size={22} />
            {cartitems > 0 && (
              <span className="absolute top-0 right-0 flex items-center justify-center h-5 w-5 rounded-full bg-red-600 text-white text-xs font-bold border-2 border-white">
                {cartitems}
              </span>
            )}
          </button>
        </div>
      </div>

      <Home Open={home} toggles={(open) => toggle(open, sethome, homeref)}/>
      <Mega Open={shop} toggles={(open) => toggle(open, setshop, shopref)}/>
      <Category Open={category} toggles={(open) => toggle(open, setcategory, categoryref)}/>
      <Product Open={products} toggles={(open) => toggle(open, setproducts, productref)}/>
      <Mobile Open={mobile} onClose={() => togglemobile(false)}/>
    </nav>
  );
};

export default Navbar;

