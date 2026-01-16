import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Shirt, ShoppingBag, User, Sun, GraduationCap, Venus, Volleyball, Footprints, BookOpen, ChevronLeft, ChevronRight,} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Category = () => {
  const [slides, setslides] = useState(9); 
  const [startx, setstartx] = useState(0);
  const getSlidesToShow = () => {
    const w = window.innerWidth;
    if (w <= 480) return 2;
    if (w <= 640) return 3;
    if (w <= 768) return 5;
    if (w <= 1024) return 6;
    if (w <= 1280) return 8;
    return 9;
  };

  useEffect(() => {
    const updateSlides = () => setslides(getSlidesToShow());
    updateSlides(); 
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const categories = [
    { name: "Blazer", icon: <Shirt size={28} />, link: "/category/blazer" },
    { name: "Cap", icon: <GraduationCap size={24} />, link: "/category/cap" },
    { name: "Sports", icon: <Volleyball size={24} />, link: "/category/sports" },
    { name: "Pants", icon: <Shirt size={24} />, link: "/category/pants" },
    { name: "Bags", icon: <ShoppingBag size={24} />, link: "/category/bags" },
    { name: "T-Shirt", icon: <Shirt size={24} />, link: "/category/t-shirt" },
    { name: "Women", icon: <Venus size={24} />, link: "/category/women" },
    { name: "Men", icon: <User size={24} />, link: "/category/men" },
    { name: "Summer", icon: <Sun size={24} />, link: "/category/summer" },
    { name: "Shoes", icon: <Footprints size={24} />, link: "/category/shoes" },
    { name: "Accessories", icon: <BookOpen size={24} />, link: "/category/accessories" },
  ];
  const Next = ({ onClick }) => (
    <div onClick={onClick} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-500">
      <ChevronRight size={22} />
    </div>
  );
  const Prev = ({ onClick }) => (
    <div onClick={onClick} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-500">
      <ChevronLeft size={22} />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: slides,
    slidesToScroll: 1,
    swipeToSlide: true,
    next: <Next />,
    prev: <Prev />,
  };
  const handleMouseDown = (e) => setstartx(e.clientX);
  const handleClick = (e) => {
    if (Math.abs(e.clientX - startx) > 5) {
      e.preventDefault();
    }
  };
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto relative group">
        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-1 select-none">
              <Link to={category.link} draggable="false" onMouseDown={handleMouseDown} onClick={handleClick}>
                <div className=" flex flex-col items-center justify-center text-center w-[130px] h-[110px] rounded-xl cursor-pointer transition-all duration-300 bg-[#eff3f8] text-gray-900 hover:bg-gray-800 hover:text-white">
                  <div className="w-12 h-12 flex items-center justify-center mb-3">
                    {category.icon}
                  </div>
                  <span className="text-sm font-semibold">
                    {category.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Category;

