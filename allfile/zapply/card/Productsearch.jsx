import React, { useState, useRef, useEffect } from 'react';
import { X, Search } from 'lucide-react';

const Searchsss = ({ product }) => {
    const displayPrice = product.price.toFixed(2);
    const originalprice = product.originalPrice ? parseFloat(product.originalPrice).toFixed(2) : null;
           return (
        <a href="#"
            onClick={(e) => {
            e.preventDefault();
            console.log(`Searching for ${product.name}`);
            }}
            className="flex items-center p-3 hover:bg-gray-50 transition-colors rounded-lg group"
        >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border border-gray-200 mr-4">
                <img src={product.mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
                <p className="text-sm font-medium text-gray-900  line-clamp-2 overflow-hidden">
                    {product.name}
                </p>
                <div className="flex items-center space-x-2 mt-0.5">
                    {originalprice && (
                        <span className="text-xs text-gray-400 line-through">${originalprice}</span>
                    )}
                    <span className="text-sm font-semibold text-gray-900">${displayPrice}</span>
                </div>
            </div>
        </a>
    );
};





const Productsearch = ({ Open, Close }) => {
    const [products, setProducts] = useState([]);
    const [searchdd, setSearchdd] = useState('');
    const popularsearches = ["T-Shirt", "Blue Jacket", "Casual Dress", "Sneakers", "Winter Hat"];
    const searchref = useRef(null);
    useEffect(() => {
        const fetchproducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=15'); 
                const data = await response.json();
                const productsss = data.slice(0, 15).map((item, index) => ({
                    id: item.id,
                    name: item.title, 
                    price: item.price,
                    originalPrice: (item.price * 1.30).toFixed(2), 
                    mainImage: item.image,
                }));
                setProducts(productsss);
            } catch (error) {
                console.error("Failed to fetch products for search:", error);
            } 
        };
        fetchproducts();
            }, []);

    useEffect(() => {
        if (Open && searchref.current) {
            searchref.current.focus();
        }
    }, [Open]);
    const backdrop = Open ? 'opacity-100 visible bg-[#4747477e] bg-opacity-50' : 'opacity-0 invisible pointer-events-none';//????
    const drawer = Open ? 'translate-x-0' : 'translate-x-full';
    const Clickdd = (e) => e.target.classList.contains('backdrop') && Close();
    const fil = products.filter(product => product.name.toLowerCase().includes(searchdd.toLowerCase()));
    return (
        <div className={`backdrop fixed inset-0 z-[60] transition-opacity duration-300 ${backdrop}`} onClick={Clickdd}>
            <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-in-out ${drawer}`} onClick={(e) => e.stopPropagation()} >
                <div className="p-6 border-b border-gray-100 flex items-center sticky top-0 bg-white z-10">
                    <div className="relative flex-grow">
                        <input ref={searchref} type="text" placeholder="What are you looking for..." value={searchdd} onChange={(e) => setSearchdd(e.target.value)} className="w-full h-12 pl-12 pr-4 text-gray-800 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition-shadow text-base font-medium"/>
                        <Search size={22} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button onClick={Close} className="p-3 ml-4 rounded-full text-gray-500  transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto h-[calc(100%-76px)]">
             <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">Popular searches:</h4>
                        <div className="flex flex-wrap gap-2">
                            {popularsearches.map((term, i) => (
                                <button key={i} className="px-3 py-1.5 text-sm rounded-full border border-gray-300 text-gray-700 transition-colors">
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                <div>
                <h4 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                    Most searched products:
                </h4>
                    <>
                    {fil.length > 0 ? (
                        <div className="space-y-2">
                        {fil.map(p => (
                            <Searchsss key={p.id} product={p} />
                        ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm py-4 text-center">
                        No matching products found.
                        </p>
                    )}
                    </>
                </div>
                </div>
            </div>
        </div>
    );
};
export default Productsearch;