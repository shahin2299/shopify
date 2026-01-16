import React from 'react';
import { BsBoxSeam, BsHeadphones, BsShieldLock } from 'react-icons/bs';

const FServices = () => {
  return (
    <section className="bg-[#fafafa] py-12">
      <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center space-x-4 p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-3xl text-gray-700">
            <BsBoxSeam />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Free Shipping & Return</h3>
            <p className="text-sm text-gray-500">Free shipping for all orders over $135</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-3xl text-gray-700">
            <BsHeadphones />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Customer Support 24/7</h3>
            <p className="text-sm text-gray-500">Instant access to perfect support everyday</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-6 border border-gray-200 rounded-lg shadow-sm">
          <div className="text-3xl text-gray-700">
            <BsShieldLock />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">100% Secure Payment</h3>
            <p className="text-sm text-gray-500">We ensure secure payment for customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FServices;





















































