import React, { useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {  Plus, ArrowRight, X, Minus } from 'lucide-react';

const Quickview = ({ product, cl, AC, BN }) => {
    const Images = {
        '#FAD8C0': product.mainImage,
        '#ffffff': "https://www.shutterstock.com/image-photo/relaxed-fashion-man-sunglasses-walking-260nw-740429020.jpg",
        '#DCDCDC': "https://img.freepik.com/premium-photo/fashion-model_917213-123657.jpg",
        '#FFA500': 'https://i.imgur.com/uGzH7R0.jpg', 
        '#00008B': 'https://i.imgur.com/oK3J2u2.jpg',
    };
    const Sizes = ['S', 'M', 'L', 'XL'];
    const [quantity, setquantity] = useState(1);
    const [Color, setColor] = useState(product.variants[0]);
    const [Size, setSize] = useState('M');
    const modal = useRef(null);
    const Image = Images[Color.hex] || product.mainImage;
    const Click = (e) => {
        if (modal.current && !modal.current.contains(e.target)) {
            cl();
        }
    };
        const Details = () => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        color: Color.color,
        size: Size,
        image: Image,
    });
    const addtocart = () => {
        AC(Details());
        cl(); 
    }
    const buyitnow = () => {
        BN(Details());
    }
    const Colorcircle = ({ variant }) => {
        const isSelected = variant.hex === Color.hex;
        const Imageee = Images[variant.hex];
        return (
            <button
                onClick={() => setColor(variant)}
                className={`w-12 h-12 rounded-full mx-1 transition-all duration-200 p-0.5 border-2 hover:cursor-pointer
                    ${isSelected ? 'border-gray-900 ring-2 ring-gray-900' : 'border-gray-300 hover:border-gray-500 '}
                    flex items-center justify-center relative overflow-hidden`}
            >
                <img
                    src={Imageee || product.mainImage} //????
                    alt={variant.color}
                    className="w-full h-full object-cover rounded-full"
                />
            </button>
        ); 
    };
    return (
        <div onClick={Click} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4747477e] bg-opacity-70 backdrop-blur-sm transition-opacity">
            <div ref={modal} className="bg-white  w-[1150px] h-[750px] overflow-y-auto  md:relative">
                <button onClick={cl} className="absolute top-4 right-4 p-2 rounded-full bg-black text-white hover:cursor-pointer">
                    <X size={24} />
                </button>
                <div className="flex flex-col md:flex-row gap-3 ">
                    <div className="w-full md:w-1/2 relative flex">
                        <div className="aspect-[3/4] w-[550px] h-[750px] bg-gray-100 overflow-hidden relative">
                            <img
                                src={Image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-700 text-white text-xs font-semibold px-2 py-0.5 rounded-sm z-10">Sale</div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col  pt-[25px] pr-[40px]">
                        <h1 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h1>
                        <div className="flex items-center space-x-3 mb-6">
                            <span className="text-gray-900 font-extrabold text-2xl">${product.price.toFixed(2)}</span>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-700 mb-2">Color: <span className="font-semibold">{Color.color}</span></p>
                            <div className="flex flex-wrap items-center ">
                                {product.variants.map((variant) => (
                                    <Colorcircle key={variant.id} variant={variant} />
                                ))}
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="text-sm font-medium text-gray-700 mb-3">Size: <span className="font-semibold">{Size}</span></p>
                            <div className="flex space-x-2">
                                {Sizes.map((e) => {
                                    const issize = Size === e;
                                    return (
                                        <button
                                            key={e}
                                            onClick={() => setSize(e)}
                                            className={`w-10 h-10 border font-medium text-sm rounded-md transition-colors duration-150 hover:cursor-pointer ${
                                                issize ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 text-gray-700 hover:border-gray-500'
                                            }`}
                                        >
                                            {e}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-row gap-5">
                            <div class="flex items-stretch w-[175px] max-w-[200px] border border-gray-300 rounded-lg">
                                <button onClick={() => setquantity(prev => Math.max(1, prev - 1))} className="p-3 text-gray-600 hover:bg-gray-100">
                                    <Minus size={16} />
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setquantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="text-base font-semibold w-10 text-center focus:outline-none border-x border-gray-300"
                                    min="1"
                                />
                               <button onClick={() => setquantity(prev => prev + 1)} className="p-3 text-gray-600 hover:bg-gray-100">
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button onClick={addtocart} className="flex items-center justify-center w-full h-12 bg-black text-white rounded-full font-bold text-base transition-colors duration-200 hover:bg-red-600 shadow-md cursor-pointer">
                                Add to cart
                            </button>
                            </div>
                            <button onClick={buyitnow} className="flex items-center justify-center w-full h-12 border bg-black text-white rounded-full font-bold text-base transition-colors duration-200 hover:bg-red-600 cursor-pointer">
                                Buy it now
                            </button>
                        </div>
                        
                        <div className="mt-4 text-left">
                            <Link 
                                to={`/product/${product.id}`} 
                                onClick={cl} 
                                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors flex items-center cursor-pointer"
                            >
                                View full details<ArrowRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Quickview;