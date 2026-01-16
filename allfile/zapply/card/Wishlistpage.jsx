import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './Productcard';
const Wishlistpage = ({ wishlist, TWs, QVs }) => {
    return (
        <div className="w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800"> Wishlist </h1>
            </div>
            {wishlist.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-xl  border border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Empty Wishlist</h2>
                    <Link to="/" className="h-12 px-6 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800  inline-flex items-center justify-center">
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
                    {wishlist.map((product) => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            Quickview={QVs} 
                            Toggless={TWs} 
                            Wishlist={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
export default Wishlistpage;
