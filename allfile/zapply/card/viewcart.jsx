import React, { useMemo } from 'react';
import { Plus, Minus, Trash, ChevronDown, Truck,} from 'lucide-react';
import { Link } from 'react-router-dom';

const Cartpage = ({ CI = [], UPQ = () => {}, RI = () => {}, CC = () => {} }) => {
  const Freeshiping = 200;
  const subtotal = useMemo(() => CI.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 0), 0), [CI]);
  const progress = Math.min(100, (subtotal / Freeshiping) * 100);
  const free = subtotal >= Freeshiping;
  const formatcurrency = (n) => `$${(n || 0).toFixed(2)}`;
  return (
    <div className="min-h-screen bg-white font-['Inter'] p-4 sm:p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Your Shopping Cart</h1>
          <p className="text-sm text-gray-500"> <Link to="/" className="hover:underline">Shop</Link> / <span className="font-semibold text-gray-700">Cart</span></p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-4 px-6 border-b border-gray-200 text-xs uppercase tracking-wider font-semibold text-gray-500">
            <div className="md:col-span-2">Product</div>
            <div className="md:col-span-1 flex justify-start md:justify-center">Quantity</div>
            <div className="md:col-span-1 hidden md:block"></div>
            <div className="md:col-span-1 flex justify-start md:justify-end">Total</div>
          </div>
          {CI && CI.length > 0 ? (
            CI.map((item) => (
              <div key={item.cartId ?? item.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 py-6 px-6 border-b border-gray-200 items-start md:items-center">
                <div className="md:col-span-2 flex items-start space-x-4">
                  <img src={item.image || 'https://placehold.co/100x100/cccccc/000?text=Item'} alt={item.name} className="w-24 h-24 object-cover rounded-md"/>
                  <div>
                    {item.category && <p className="text-xs text-gray-500 tracking-wider font-medium">{item.category}</p>}
                    <h3 className="text-base font-semibold text-gray-800 mt-0.5 line-clamp-2">{item.name}</h3>
                    <p className="text-sm text-gray-600">Color: <span className="font-medium">{item.color ?? '-'}</span></p>
                    <p className="text-sm text-gray-600">Size: <span className="font-medium">{item.size ?? '-'}</span></p>
                    <div className="mt-2">
                      <button onClick={() => RI(item.cartId ?? item.id)} className="text-sm text-gray-500 flex items-center space-x-1 underline hover:text-red-500 transition">
                        <Trash className="w-4 h-4" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 flex justify-start md:justify-center mt-4 md:mt-0">
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden text-sm w-fit">
                    <button onClick={() => UPQ(item.cartId ?? item.id, Math.max(1, (item.quantity || 1) - 1))} className="px-3 py-1 text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition" disabled={(item.quantity || 1) <= 1}>
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 py-1 font-semibold border-x border-gray-300 w-10 text-center">{item.quantity}</span>
                    <button onClick={() => UPQ(item.cartId ?? item.id, (item.quantity || 1) + 1)} className="px-3 py-1 text-gray-700 hover:bg-gray-100 transition">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="md:col-span-1 hidden md:block"></div>
                <div className="md:col-span-1 flex justify-start md:justify-end text-right font-semibold text-gray-900 mt-4 md:mt-0">
                  {formatcurrency((item.price || 0) * (item.quantity || 0))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-xl  border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-700 mb-2">Empty Cart</h2>
                <Link to="/" className="h-12 px-6 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-md inline-flex items-center justify-center">
                    Start Shopping
                </Link>
            </div>
          )}
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <div className="lg:col-span-3">
            <h3 className="text-sm font-normal text-gray-900 mb-2">Apply a discount code</h3>
            <div className="flex items-center space-x-3">
              <input type="text" placeholder="Enter discount code here" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-0 focus:border-gray-500 transition" />
            </div>
            <h3 className="text-sm font-normal text-gray-900 mt-6 mb-2">Order special instructions</h3>
            <textarea rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm resize-none focus:ring-0 focus:border-gray-500 transition"></textarea>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="w-full">
              <p className={`text-center font-medium ${free ? 'text-green-700' : 'text-gray-700'} text-sm mb-3`}>
                {free ? 'Congratulations! You qualify for free shipping!' : `You are ${formatcurrency(Freeshiping - subtotal)} away from free shipping!`}
              </p>
              <div className="relative h-2 bg-gray-200 rounded-full w-full">
                <div className="absolute top-0 left-0 h-full rounded-full transition-all duration-500 bg-green-500" style={{ width: `${progress}%` }}></div>
                <div style={{ position: 'absolute', right: `${100 - progress}%`, top: '50%', transform: 'translate(50%, -50%)' }}>
                  <div className="w-6 h-6 p-1 rounded-full text-white bg-green-500" style={{ boxShadow: '0 0 0 3px white' }}>
                    <Truck className="w-full h-full" />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="flex justify-center items-center space-x-2 text-xl font-medium mb-1">
                  <span className="text-gray-900">Subtotal</span>
                  <span className="text-gray-900 font-bold">{formatcurrency(subtotal)} USD</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Taxes and shipping calculated at checkout</p>
                <button onClick={CC} disabled={CI.length === 0} className="w-full bg-black text-white font-semibold py-4 rounded-full text-lg hover:bg-gray-800 transition duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                  <span>Check out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-6 text-center">Estimate Shipping</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center px-4">
            <div className="relative w-full sm:w-1/3">
              <select defaultValue="" className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-full text-sm font-medium text-gray-500 bg-white focus:outline-none focus:ring-0 focus:border-gray-500 transition cursor-pointer">
                <option value="" disabled>--</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="BD">Bangladesh</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>

            <div className="relative w-full sm:w-1/3">
              <input type="text" placeholder="Postal/ZIP code" className="w-full px-4 py-3 border border-gray-300 rounded-full text-sm focus:ring-0 focus:border-gray-500 transition pr-10" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              </div>
            </div>
            <button className="w-full sm:w-1/3 bg-black text-white font-semibold py-3 rounded-full text-base hover:bg-gray-800 transition duration-300">Shipping calculator</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cartpage;
