import React, { useState, useCallback, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar1 from "../nav12/nav1";
import Navbar2 from "../nav12/nav2";
import Home from "./Home";
import Wishlistpage from "./Wishlistpage";
import Otherpage  from "./Otherpage";
import Quickview from "./Quickview";
import MiniCarts from "./Minicart";
import Checkoutpage  from "./chakeout";
import Productsearch from "./Productsearch";
import Cartpage  from "./viewcart";
import Twocard from '../cards/twocard';
import Thrdcard from '../cards/thrdcard';
import Frstcard from '../cards/frstcard';
import Lastcard from '../cards/lastcard';
import Secendlastcard from '../cards/secendlastcard';
import Heroslider from '../cards/HeroSlider';
import Prodet from '../single-file/product-detail';
import Ani from '../single-file/animation move';
import Box from '../single-file/box';
import FServices from '../single-file/FServices';
import Footer from '../single-file/footer';
import Collapsible from '../single-file/Collapsible';
import Scrolltext from '../single-file/scrolltext';
import Cardthree from '../single-file/cardthree';

function App() {
    const [open, setopen] = useState(false);
    const [selectedproduct, setselectedproduct] = useState(null);
    const [cartitems, setcartitems] = useState([]);
    const [carts, setcarts] = useState(false);
    const [searchs, setsearchs] = useState(false);
    const [wishlist, setwishlist] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const Routess = ['/checkout', '/cart', '/wishlist'];
    const Pagess = Routess.includes(location.pathname);

    useEffect(() => {
        if (open || carts || searchs) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open, carts, searchs]);
    const togglew = useCallback((product) => {
        setwishlist(prev => {
            if (prev.some(item => item.id === product.id)) {
                return prev.filter(item => item.id !== product.id);
            } else {
                return [product, ...prev];
            }
        });
    }, []);
    const openqv = useCallback((product) => {
        setselectedproduct(product);
        setopen(true);
        setsearchs(false); 
    }, []);
    const closeqv = useCallback(() => {
        setopen(false);
        setselectedproduct(null);
    }, []);
    const opencart = useCallback(() => {
        setcarts(true);
    }, []);
    const closecart = useCallback(() => {
        setcarts(false);
    }, []);
    const opensearch = useCallback(() => {
        setsearchs(true);
    }, []);
    const closesearch = useCallback(() => {
        setsearchs(false);
    }, []);
    const Cartids = () => Date.now() + Math.floor(Math.random() * 100000);
    const additems = useCallback((newItem) => {
        const item = { quantity: 1, ...newItem };
        setcartitems(prevItems => {
            const existingIndex = prevItems.findIndex(i =>
                i.id === item.id &&
                (i.color ?? null) === (item.color ?? null) &&
                (i.size ?? null) === (item.size ?? null)
            );
            if (existingIndex > -1) {
                return prevItems.map((it, idx) =>
                    idx === existingIndex ? { ...it, quantity: it.quantity + item.quantity } : it
                );
            } else {
                const cartItem = { ...item, cartId: Cartids() };
                return [cartItem, ...prevItems];
            }
        });
    }, []);
    const addcart = useCallback((newItem) => {
        additems(newItem);
        opencart();
    }, [additems, opencart]);
    const Cartquantity = useCallback((cartId, newQty) => {
        setcartitems(prev => prev.map(i => i.cartId === cartId ? { ...i, quantity: newQty } : i));
    }, []);
    const removecartitem = useCallback((cartId) => {
        setcartitems(prev => prev.filter(i => i.cartId !== cartId));
    }, []);
    const Minicart = useCallback(() => {
        closecart();
        navigate('/checkout');
    }, [closecart, navigate]);
    const Buyit = useCallback((newItem) => {
        additems(newItem);
        closeqv();
        navigate('/checkout');
    }, [additems, closeqv, navigate]);
    const totalitems = cartitems.reduce((acc, item) => acc + (item.quantity || 0), 0);
    const wishlistcount = wishlist.length;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans overflow-x-hidden">
            <Navbar1 />         
            <Navbar2
                cartitems={totalitems}
                wishlistss={wishlistcount}
                Cartss={opencart}
                Searchss={opensearch}
            />
            {!Pagess && <Frstcard/>}
            {!Pagess && <Heroslider/>}




            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={
                        <Home
                            QV={openqv}
                            addcart={addcart}
                            TW={togglew}
                            WS={wishlist}
                        />
                    } />
                    <Route path="/cart" element={
                        <Cartpage
                            CI={cartitems}
                            UPQ={Cartquantity}
                            RI={removecartitem}
                            CC={Minicart}
                        />
                    } />
                    <Route path="/checkout" element={<Checkoutpage CIS={cartitems} />} />
                    <Route path="/blog" element={<Otherpage title="Our Blog" content="Check out the latest fashion trends and tips from our editors." />} />
                    <Route path="/wishlist" element={
                        <Wishlistpage
                            wishlist={wishlist}
                            TWs={togglew}
                            QVs={openqv}
                        />
                    } />
                </Routes>
            </main>
            {open && selectedproduct && (
                <Quickview
                    product={selectedproduct}
                    cl={closeqv}
                    AC={addcart}
                    BN={Buyit}
                />
            )}
            <MiniCarts
                Cartopen={carts}
                cartitems={cartitems}
                Close={closecart}
                upqs={Cartquantity}
                ris={removecartitem}
                ckout={Minicart}
            />
            <Productsearch
                Open={searchs}
                Close={closesearch}
            />
            {!Pagess && <Thrdcard/>}
            {!Pagess && <Ani/>}
            {!Pagess && <Cardthree/>}
            {!Pagess && <Twocard/>}
            {!Pagess && <Scrolltext/>}
            {!Pagess && <Prodet/>}
            {!Pagess && <FServices/>}
            {!Pagess && <Box/>}
            {!Pagess && <Secendlastcard/>}
            {!Pagess && <Collapsible/>}
            {!Pagess && <Lastcard/>}
            <Footer />
        </div>
    );
}
export default App;
