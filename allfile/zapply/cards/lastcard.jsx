import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Imagecard = ({ imageUrl }) => (
  <div className="group relative w-full h-80 overflow-hidden rounded-xl cursor-pointer">
    <img src={imageUrl} className="w-full h-full object-cover" draggable="false"/>
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <Instagram className="w-12 h-12 text-white" />
    </div>
  </div>
);


const App = () => {
  const [slides, setslides] = useState(6); 
  const [startx, setstartx] = useState(0);
  const [showarrows, setshowarrows] = useState(false);
  const slideshow = () => {
    const w = window.innerWidth;
    if (w <= 480) return 1;
    if (w <= 640) return 2;
    if (w <= 768) return 3;
    if (w <= 1024) return 4;
    if (w <= 1280) return 5;
    return 6;
  };
  useEffect(() => {
    const update = () => setslides(slideshow());
    update(); 
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const images = [
    "https://img.freepik.com/premium-photo/autumn-portrait-attractive-girl-autumn-shades-stylish-girl-relaxes-warm-autumn_257482-809.jpg",
    "https://img.freepik.com/premium-photo/stylish-woman-wearing-jacket-with-shining-sequins-city-street-with-neon-lights_144962-20655.jpg?w=360",
    "https://img.kwcdn.com/product/fancy/59b80250-42a5-4874-8e10-3de60e9a255e.jpg",
    "https://zoa-polynesie.com/wp-content/uploads/2025/07/island-fashion-seductive-stylish-woman-bohemian-summer-clothes-posing-tropical-luxury-resort-vacation-concept-scaled.jpg",
    "https://img.freepik.com/free-photo/full-shot-smiley-woman-posing-outdoors_23-2150360988.jpg?w=740",
    "https://i0.wp.com/www.in-spades.com/wp-content/uploads/2021/10/WideLegJeans_3.jpg",
    "https://cdn.pixabay.com/photo/2018/09/02/20/17/girl-3649758_1280.jpg",
  ];

 






  const Next = ({ onClick }) => (
    <div onClick={onClick} className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full cursor-pointer ${showarrows ? "opacity-100" : "opacity-0"}`}>
      <ChevronRight size={22} />
    </div>
  );
  const Prev = ({ onClick }) => (
    <div onClick={onClick} className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full cursor-pointer ${showarrows ? "opacity-100" : "opacity-0"}`}>
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
    if (Math.abs(e.clientX - startx) > 5) e.preventDefault();
  };
  return (
    <div className="bg-[#fafafa] py-10 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">
        Stay Connected
      </h1>
      <div className="relative max-w-7xl mx-auto" onMouseEnter={() => setshowarrows(true)} onMouseLeave={() => setshowarrows(false)}>
        <Slider {...settings}>
          {images.map((url, i) => (
            <div key={i} className="px-2 select-none">
              <Link to="/style" draggable="false" onMouseDown={handleMouseDown} onClick={handleClick}>
                <Imagecard imageUrl={url} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default App;











