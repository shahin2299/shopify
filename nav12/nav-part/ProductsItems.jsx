import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const productsMenuData = [
  {
    title: "Product Layout",
    lists: [
      { name: "Default layout", link: "/product-layout/default" },
      { name: "Variant swatch", link: "/product-layout/variant-swatch" },
      { name: "Variant dropdown", link: "/product-layout/variant-dropdown" },
      { name: "Product tab", link: "/product-layout/tab" },
      { name: "Product accordion", link: "/product-layout/accordion" },
      { name: "Product media gallery", link: "/product-layout/media-gallery" },
      { name: "Product recommendations", link: "/product-layout/recommendations" },
    ],
  },
  {
    title: "Product Types",
    lists: [
      { name: "Simple product", link: "/simple" },
      { name: "Variable product", link: "/variable" },
      { name: "Product video", link: "/video" },
      { name: "Product color swatches", link: "/color-swatches" },
      { name: "Product image swatches", link: "/image-swatches" },
      { name: "Product recently viewed", link: "/recently-viewed" },
      { name: "Product 3D, AR models", link: "/3d" },
    ],
  },
  {
    title: "Product Features",
    lists: [
      { name: "Ask a question", link: "/question" },
      { name: "Local pickup available", link: "/pickup" },
      { name: "Share product", link: "/share" },
      { name: "Pre-order product", link: "/preorder" },
      { name: "Product collapsible tabs", link: "/tabs" },
      { name: "Product terms & conditions", link: "/terms" },
      { name: "Dynamic checkout button", link: "/checkout" },
    ],
  },
  {
    title: "Exclusive Features",
    lists: [
      { name: "Size guide popup", link: "/size-guide" },
      { name: "Sticky add to cart", link: "/sticky-cart" },
      { name: "Frequently Bought Together", link: "/fbt" },
      { name: "Advanced custom fields", link: "/custom-fields" },
      { name: "Stock counter", link: "/stock-counter" },
      { name: "Countdown timer", link: "/countdown" },
      { name: "Back in stock alert", link: "/back-in-stock" },
    ],
  },

];

const Products = [
  { name: "Floral Maxi Wrap Dress", price: "$36.00", url: "https://assets.ajio.com/medias/sys_master/root/20240904/jDzd/66d78f6b6f60443f3150281e/-473Wx593H-700347571-multi-MODEL.jpg", placeholder: "https://placehold.co/200x300/F8F8F8/333333?text=Dress" },
  { name: "Mermaid Hem Gown", price: "$32.00", url: "https://m.media-amazon.com/images/I/51jZffEJUUL._AC_UL1500_.jpg", placeholder: "https://placehold.co/200x300/F8F8F8/333333?text=Gown" },
  { name: "Red Summer Dress", price: "$40.00", url: "https://www.hindustantimes.com/web-stories/nina-dobrev-in-elegant-long-dresses-_NFYAYXGrtY9u_KakLtA/assets/1.jpeg", placeholder: "https://placehold.co/200x300/F8F8F8/333333?text=Red+Dress" },
  { name: "Blue Evening Dress", price: "$50.00", url: "https://image.made-in-china.com/202f0j00ZBTUShKzbokG/Halter-Beading-Evening-Dress-Navy-blue-Prom-Party-Dress-Formal-Cocktail-Gown-Women-Dress.jpg", placeholder: "https://placehold.co/200x300/F8F8F8/333333?text=Blue+Dress" },
  { name: "Green Maxi Dress", price: "$45.00", url: "https://i.pinimg.com/736x/19/10/47/19104738ddd6b15f29cb47bf0489c773.jpg", placeholder: "https://placehold.co/200x300/F8F8F8/333333?text=Green+Dress" },
  { name: "Yellow Summer Dress", price: "$38.00", url: "https://img.ltwebstatic.com/images3_pi/2020/06/04/15912462538345e7d20e452fe5c39e7169d888aab2.jpg", placeholder: "https://placehold.co/200x300/F8F8F8/333333?text=Yellow+Dress" },
];

const ProductsItems = ({ Open, toggles }) => {
  const sliderRef = useRef(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false, 
  };

  return (
    <div
      className={`absolute left-0 right-0 z-20 transition-all duration-300 ease-in-out shadow-xl border-t border-gray-100 bg-white
      ${Open ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible "}`}
      onMouseEnter={() => toggles(true)}
      onMouseLeave={() => toggles(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-6 gap-6">

          <div className="col-span-6 lg:col-span-4 grid grid-cols-4 gap-6 border-r pr-6">
            {productsMenuData.map((c, i) => (
              <div key={i} className="flex flex-col space-y-0.5 px-0 py-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase">{c.title}</h3>
                <ul className="space-y-2">
                  {c.lists.map((item, i) => (
                    <li key={i}>
                      <Link to={item.link} className="text-sm text-gray-600 hover:text-indigo-600 transition duration-150">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-span-6 lg:col-span-2 pl-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase">Promotional Products</h3>
              <div className="flex space-x-2">
                <button onClick={() => sliderRef.current.slickPrev()} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={() => sliderRef.current.slickNext()} className="p-1 rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Slider ref={sliderRef} {...sliderSettings}>
              {Products.map((p, i) => (
                <div key={i} className="px-2">
                  <div className="bg-gray-50 w-full h-[250px] flex items-center justify-center overflow-hidden rounded-md">
                    <img
                      src={p.url}
                      alt={p.name}
                      className="h-full w-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="text-sm text-gray-700 hover:text-indigo-600 transition">{p.name}</p>
                    <p className="text-sm font-semibold text-gray-900 mt-0.5">{p.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductsItems;

