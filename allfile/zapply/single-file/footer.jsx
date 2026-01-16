import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';

const App = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12 pt-12">
      <div className="container mx-auto px-4 lg:px-0 max-w-8xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-700 ">
          <div>
            <h3 className="text-xl font-bold text-gray-900  mb-4 flex items-center">Suruchi Brand</h3>
            <p className="text-sm leading-relaxed mb-6">
              The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics, offering quality and style.
            </p>
            <div className="flex space-x-4 text-gray-500 text-lg">
              <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-sky-500 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-blue-800 cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-500">Find store location</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-500 ">Wishlist</a></li>
              <li><a href="#" className="hover:text-blue-500"> My Orders</a></li>
              <li><a href="#" className="hover:text-blue-500"> Product Catalog</a></li>
              <li><a href="#" className="hover:text-blue-500"> Cart</a></li>
              <li><a href="#" className="hover:text-blue-500">About us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Write your email first to know about any information
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 pr-16 text-sm border border-gray-300 rounded-full "
              />
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
             <select className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg  focus:outline-none  focus:ring-blue-500">
              <option>United States USD $</option>
              <option>Bangladesh USD $</option>
              <option>Germany USD $</option>
              <option>Luxembourg USD $</option>
              <option>New Zealand USD $</option>
              <option>United Kingdom USD $</option>
            </select>
            <select className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg  focus:outline-none  focus:ring-blue-500">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>العربية</option>
              <option>עברית</option>
            </select>
          </div>
          <p className="text-center">
            © {new Date().getFullYear()} Suruchi Brand. Powered by HookThemes
          </p>
        <div className="flex space-x-2">         
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa"width="20px" height="20px"/>
            <img src="https://pentagram-production.imgix.net/de996aa4-5343-4200-a466-ab8fc7eafa80/am_amex_01.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C172%2C3000%2C1875&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548" alt="American Express"width="20px" height="20px" />
            <img src="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/shopify-shop-app-icon.png" alt="Shop Pay"width="20px" height="20px" />
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968601.png" alt="Apple Pay"width="20px" height="20px" />
            <img src="https://img.icons8.com/fluent/512w/google-pay.png" alt="Google Pay"width="20px" height="20px" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default App;

