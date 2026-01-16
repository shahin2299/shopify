import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Loader2} from 'lucide-react';
import ProductCard from './Productcard';
const Home = ({ QV,  TW, WS }) => {
    const caref = useRef(null);
    const [car, setcar] = useState(false);  
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(true);
    const width = 296; 
    const limit = 10;
    const base = [
        { id: 1, color: "Cream", hex: "#FAD8C0", images: null },
        { id: 2, color: "White", hex: "#ffffff", images: "https://www.shutterstock.com/image-photo/relaxed-fashion-man-sunglasses-walking-260nw-740429020.jpg" },
        { id: 3, color: "Light Grey", hex: "#DCDCDC", images: "https://img.freepik.com/premium-photo/fashion-model_917213-123657.jpg" },
    ];
    const Productwishlist = (productId) => WS.some(item => item.id === productId);

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=15'); 
                const data = await response.json();
                const mapped = data.map(item => ({
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    originalPrice: (item.price * 1.30).toFixed(2), 
                    mainImage: item.image,
                    hoverImage: item.image,
                    variants: base.map(variant => ({ ...variant, images: variant.images || item.image,})),
                }));
                setproducts(mapped);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setloading(false);
            }
        };
        fetchproducts();
    }, []);
    const scrollss = useCallback((e) => {
        if (caref.current) {
            const scrollAmount = e === 'left' ? -width : width;    
            caref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }, []);
    const Nav = ({ e }) => {
        const Icon = e === 'left' ? ChevronLeft : ChevronRight;
        const position = e === 'left' ? 'left-2' : 'right-2';
        const visibility = car ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none';
        return (
            <button onClick={() => scrollss(e)} className={`absolute top-[35%] transform -translate-y-1/2 p-3 rounded-full shadow-lg bg-red-600 text-white z-20 transition-all duration-300 hover:bg-red-700 ${position} ${visibility}`}>
                <Icon size={24} />
            </button>
        );
    };
    const displayp = products.slice(0, limit);
    const Headbutton = (
        <a href="/shop" className="flex items-center text-sm font-semibold text-gray-800 underline hover:text-red-600 transition-colors">
            Shop All products
            <ArrowRight size={16} className="ml-1" />
        </a>
    );
    return (
        <div className="w-full max-w-7xl mx-auto py-8">
            <div className="flex justify-between items-center mb-6 px-4 sm:px-0">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Featured Collection
                </h2>
                {Headbutton}
            </div>
            {loading ? (
                <div className="flex items-center justify-center h-96">
                    <Loader2 className="animate-spin text-gray-400 mr-2" size={32} />
                    <span className="text-lg text-gray-600">Loading products...</span>
                </div>
            ) : (
                <div className="relative"onMouseEnter={() => setcar(true)} onMouseLeave={() => setcar(false)}>
                    <Nav e="left" />
                    <Nav e="right" />
                    <div ref={caref} className="flex overflow-x-scroll snap-x snap-mandatory space-x-6 pb-6 scrollbar-hide px-4 sm:px-0" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                        {displayp.map((product) => (
                            <div key={product.id} className="min-w-[280px] w-full max-w-[280px] snap-start">
                                <ProductCard 
                                    product={product} 
                                    Quickview={QV}
                                    Toggless={TW}
                                    Wishlist={Productwishlist(product.id)} 
                                />
                            </div>
                        ))}
                        <div className="min-w-[4px]"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Home;

