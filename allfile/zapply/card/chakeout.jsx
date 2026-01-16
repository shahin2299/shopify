import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Checkoutpage = ({ CIS }) => {
  const sub = CIS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingfee = sub > 100 ? 0.00 : 5.00;
  const total = sub + shippingfee;
const [name1, setname1] = useState('');
const [terms, setterms] = useState(false);
const order = (e) => {
        e.preventDefault();
        if (CIS.length === 0) {
            console.error("Cannot place order, cart is empty.");
        } else if (!terms) {
            console.warn("Please accept the terms and conditions.");
        } else {
            console.log("Order Placed for:", total);
        }
    };
    if (CIS.length === 0) {
        return (
            <div className="w-full max-w-7xl mx-auto py-20 text-center text-gray-700">
                <ShoppingBag size={48} className="text-red-400 mx-auto mb-4" strokeWidth={1.5} />
                <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
                <p className="text-lg mb-6">You need items in your cart to proceed to checkout.</p>
                <Link to="/" className="h-12 px-6 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-md inline-flex items-center justify-center">Start Shopping</Link>
            </div>
        );
    }
    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Checkout</h1>
             <p className="text-sm text-gray-500 mb-8"> <Link to="/" className='hover:text-gray-700'>Home </Link> / Checkout</p> 
            <form onSubmit={order} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 bg-white p-8 ">
                    <h2 className="text-xl font-bold text-gray-900 border-b pb-3 mb-6">Billing Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">First Name*</span>
                            <input type="text" value={name1} onChange={(e) => setname1(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="First Name" />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Last Name*</span>
                            <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="Last Name" />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Email Address*</span>
                            <input type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="Email Address" />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Phone No*</span>
                            <input type="tel" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="Phone number" />
                        </label>
                        <label className="block md:col-span-2">
                            <span className="text-sm font-medium text-gray-700">Company Name</span>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="Company Name" />
                        </label>
                        <label className="block md:col-span-2">
                            <span className="text-sm font-medium text-gray-700">Address*</span>
                            <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5 mb-2" placeholder="Address line 1" />
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="Address line 2" />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Country*</span>
                            <select required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5 bg-white">
                                <option>Bangladesh (Mock)</option>
                                <option>United States</option>
                            </select>
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Town / City*</span>
                            <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="Town/City" />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">State*</span>
                            <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="State" />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium text-gray-700">Zip Code*</span>
                            <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2.5" placeholder="Zip Code" />
                        </label>
                    </div>

                </div>
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-gray-200 p-6 ">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-3 mb-4">Cart Total</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm font-semibold text-gray-600 border-b pb-2">
                                <span>Product</span>
                                <span>Total</span>
                            </div>
                            {CIS.map((item, index) => (
                <div key={index} className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-700">
                        {item.name} <br/>
                        <span className="font-semibold text-xs text-gray-500">
                            X {item.quantity} ({item.color}, {item.size})
                        </span>
                    </span>
                    <span className="text-sm font-medium text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            ))}
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-base text-gray-700 border-t pt-2">
                                <span>Sub Total</span>
                                <span>${sub.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-base text-gray-700 border-b pb-2">
                                <span>Shipping Fee</span>
                                <span>{shippingfee === 0 ? 'Free' : `$${shippingfee.toFixed(2)}`}</span>
                            </div>
                            <div className="flex justify-between text-2xl font-extrabold text-gray-900 pt-3">
                                <span>Grand Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 p-6 ">
                        <h2 className="text-xl font-bold text-gray-900 border-b pb-3 mb-4">Payment Method</h2>
                        
                        <div className="space-y-3 text-gray-700">
                            <label className="flex items-center space-x-3">
                                <input type="radio" name="payment" value="check" defaultChecked className="text-indigo-600 focus:ring-indigo-500" />
                                <span className="text-sm font-medium">Check Payment</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input type="radio" name="payment" value="bank" className="text-indigo-600 focus:ring-indigo-500" />
                                <span className="text-sm font-medium">Direct Bank Transfer</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input type="radio" name="payment" value="cash" className="text-indigo-600 focus:ring-indigo-500" />
                                <span className="text-sm font-medium">Cash On Delivery</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input type="radio" name="payment" value="paypal" className="text-indigo-600 focus:ring-indigo-500" />
                                <span className="text-sm font-medium">PayPal</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input type="radio" name="payment" value="payoneer" className="text-indigo-600 focus:ring-indigo-500" />
                                <span className="text-sm font-medium">Payoneer</span>
                            </label>
                        </div>
                        <label className="flex items-start space-x-2 mt-6 pt-4 border-t border-gray-200">
                            <input  type="checkbox"  checked={terms} onChange={(e) => setterms(e.target.checked)} required className="mt-1.5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"/>
                            <span className="text-xs font-medium text-gray-600">I've read and accept the <a href="#" className="underline hover:text-indigo-600">terms & conditions</a></span>
                        </label>
                        
                        <button type="submit" className="w-full h-12 mt-6 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-md disabled:opacity-50" disabled={!terms}>
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkoutpage;