import React, { useRef } from "react";
import Slider from "react-slick";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const messages = [
  "Welcome to our store ",
  "Welcome to our store ➡️",
];

const Navbar = () => {
  const sliderRef = useRef(null);
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  };

  return (
    <div className="bg-[#1C2C45] text-white py-2 px-4 text-sm md:text-base">
      <div className="container mx-auto flex items-center justify-between">

        <div className="hidden md:flex text-white items-center space-x-3  ">
<a href="#" className="transform transition-transform duration-300 scale-100 hover:scale-120 ">
    <FaFacebookF />
  </a>
  <a href="#" className="transform transition-transform duration-300 scale-100 hover:scale-120 ">
    <FaTwitter />
  </a>
  <a href="#" className="transform transition-transform duration-300 scale-100 hover:scale-120 ">
    <FaInstagram />
  </a>
  <a href="#" className="transform transition-transform duration-300 scale-100 hover:scale-120 ">
    <SiTiktok />
  </a>
  <a href="#" className="transform transition-transform duration-300 scale-100  hover:scale-120">
    <FaLinkedinIn />
  </a>
        </div>
        <div className="flex items-center justify-center w-[440px]">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="mx-2 text-xl font-bold hover:scale-125 transition"
          >
            &lt;
          </button>

          <div className="flex-1 overflow-hidden text-center">
            <Slider ref={sliderRef} {...sliderSettings}>
              {messages.map((msg, i) => (
                <div key={i}>
                  <p className="font-semibold whitespace-nowrap">{msg}</p>
                </div>
              ))}
            </Slider>
          </div>

          <button
            onClick={() => sliderRef.current.slickNext()}
            className="mx-2 text-xl font-bold hover:scale-125 transition"
          >
            &gt;
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <select className="px-3 py-1 bg-[#1C2C44] rounded text-white">
            <option>United States USD $</option>
            <option>Bangladesh USD $</option>
            <option>Germany USD $</option>
            <option>Luxembourg USD $</option>
            <option>New Zealand USD $</option>
            <option>United Kingdom USD $</option>
          </select>
          <select className="px-3 py-1 bg-[#1C2C44] rounded text-white">
            <option>English</option>
            <option>العربية</option>
            <option>Français</option>
            <option>עברית</option>
            <option>Español</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

