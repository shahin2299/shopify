import React from 'react';
import {Link } from 'react-router-dom';
import {  Plus, X, CheckCircle, Component, Truck, Minus, Pencil } from 'lucide-react';

const Cart = ({ item, UP, RE }) => {
    const quantity = (d) => {
        const ne = item.quantity + d;
        if (ne < 1) {
            RE(item.cartId); 
        } else {
            UP(item.cartId, ne);
        }
    };
    return (
        <div className="flex p-4 border-b border-gray-100 last:border-b-0">
            <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border border-gray-200">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
            </div>
            <div className="ml-4 flex flex-col justify-between flex-grow">
                <div>
                    <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Color: {item.color} | Size: {item.size}</p>
                    <p className="text-sm font-bold text-gray-900 mt-2">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-stretch border border-gray-300 rounded-md">
                        <button onClick={() => quantity(-1)} className="p-2 text-gray-600 hover:bg-gray-50 rounded-l-md">
                            <Minus size={14} />
                        </button>
                        <input type="number" value={item.quantity} onChange={(e) => UP(item.cartId, Math.max(1, parseInt(e.target.value) || 1))} className="text-sm font-semibold w-8 text-center focus:outline-none" min="1"/>
                        <button onClick={() => quantity(1)} className="p-2 text-gray-600 hover:bg-gray-50 rounded-r-md">
                            <Plus size={14} />
                        </button>
                    </div>
                    <button onClick={() => RE(item.cartId)} className="text-xs font-medium text-red-600 hover:text-red-700 ml-4 underline">
                        remove
                    </button>
                </div>
            </div>
        </div>
    );
};






const Mini = ({ Cartopen, cartitems, Close, upqs, ris, ckout }) => {
    const total = cartitems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cartitems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const freeSh = 200;
    const freeshipping = Math.max(0, freeSh - subtotal);
    const shipping = Math.min(100, (subtotal / freeSh) * 100);

    const dropclick = (e) => e.target.classList.contains('backdrop') && Close();
    const dropclass = Cartopen ? 'opacity-100 visible bg-[#4747477e] bg-opacity-50' : 'opacity-0 invisible pointer-events-none';
    const drclass = Cartopen ? 'translate-x-0' : 'translate-x-full';

const Colorss = () => {
  if (shipping <= 40) return "bg-red-600";
  if (shipping <= 75) return "bg-yellow-500";
  if (shipping <= 99) return "bg-blue-600";
  return "bg-green-600";
};
    return (
        <div className={`backdrop fixed inset-0 z-[60] transition-opacity duration-300 ${dropclass}`} onClick={dropclick}>
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-in-out ${drclass}`} onClick={(e) => e.stopPropagation()} >
                <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                    <h3 className="text-xl font-bold text-gray-900">
                        {total > 0 ? "Items in your cart" : "Your cart is empty"}
                    </h3>
                    <button onClick={Close} className="p-2 rounded-full text-gray-500 transition-colors">
                        <X size={24} />
                    </button>
                </div>
                {total > 0 && (
                    <div className="p-4 bg-white text-red-700 text-sm font-medium">
                        {freeshipping > 0 ? (
                            <p className="flex items-center justify-center">
                                <Truck size={16} className="mr-2"/>
                                ${freeshipping.toFixed(2)}away from Free Shipping!
                            </p>
                        ) : (
                            <p className="flex items-center justify-center text-green-700 bg-green-50 p-2 rounded-lg">
                                <CheckCircle size={16} className="mr-2"/>
                                You qualify for free shipping!
                            </p>
                        )}
                        {freeshipping > 0 && (
                            <div className="mt-2 h-1 bg-red-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full transition-all duration-500 ${Colorss()}`}
                                style={{ width: `${shipping}%` }}
                              ><Truck size={16} className="mr-2"/></div>
                            </div>
                        )}
                    </div>
                )}
                {total > 0 ? (
                    <div className="h-[calc(100%-250px)] overflow-y-auto">
                        {cartitems.map(item => (
                            <Cart 
                                key={item.cartId} 
                                item={item} 
                                UP={upqs} 
                                RE={ris}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[calc(100%-150px)] p-6 text-center">
                        <p className="text-black mb-6">Your cart is currently empty.</p>
                        <button onClick={Close} className="w-full max-w-xs h-12 bg-gray-900 text-white rounded-lg font-bold text-base transition-colors hover:bg-gray-800">
                        Return to shop
                        </button>
                    </div>
                )}
                {total > 0 && (
            <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 p-6 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]">
            <div className="flex justify-around text-xs text-gray-500 mb-4">
              <div className="flex flex-col items-center">
                <Pencil size={18} className="mb-1" />
                Note
              </div>
              <div className="flex flex-col items-center">
                <Truck size={18} className="mb-1" />
                Shipping
              </div>
              <div className="flex flex-col items-center">
                <Component size={18} className="mb-1" />
                Coupon
              </div>
            </div>
                        
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-gray-900">Subtotal</span>
                    <span className="text-lg font-semibold text-gray-900">${subtotal.toFixed(2)} USD</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">Taxes and shipping calculated at checkout</p>
                <div className="flex space-x-3">
                    <Link to="/cart" onClick={Close} className="flex-1 h-12 border border-gray-300 text-gray-900 rounded-lg font-bold text-base transition-colors hover:bg-black hover:text-white flex items-center justify-center">View Cart</Link>
                    <button onClick={ckout} className="flex-1 h-12 bg-black text-white rounded-lg font-bold text-base transition-colors hover:bg-red-700">
                        Check out
                    </button>
                </div>
            </div>
                )}
            </div>
        </div>
    );
};
export default Mini;