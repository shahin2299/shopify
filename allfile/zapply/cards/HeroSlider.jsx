import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    id: 1,
    title: "High-quality knitwear",
    subtitle: "Buy and get 10% off on selected items",
    imageUrl:"https://content.api.news/v3/images/bin/4fa771e6df4a8bcdd921fb974fefa15f?width=1024",
    link: "/shop/knitwear",
  },
  {
    id: 2,
    title: "Luxury Winter Collection",
    subtitle: "New arrivals in store now",
    imageUrl:
      "https://i.ytimg.com/vi/miZu4EIi-SI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDMCab-jAlEWk11XHs8cFyuvWzfJg",
    link: "/shop/winter",
  },
  {
    id: 3,
    title: "Seasonal Essentials",
    subtitle: "Shop cozy sweaters and hats",
    imageUrl:"https://im.uniqlo.com/global-cms/spa/res816693e341f4f7b769bce378f75baf27fr.jpg",
    link: "/shop/essentials",
  },
  {
    id: 4,
    title: "New Arrivals",
    subtitle: "Check out our latest collection",
    imageUrl:"https://img.freepik.com/premium-photo/glamor-stylish-beautiful-young-woman-model-casual-hipster-clothes-pretty-girl-posing-studio_926199-2375945.jpg?semt=ais_hybrid&w=740&q=80",
    link: "/shop/new",
  },
  {
    id: 5,
    title: "Summer Collection",
    subtitle: "Bright colors for sunny days",
    imageUrl:"https://www.shutterstock.com/image-photo/three-handsome-male-friends-vibrant-260nw-2383583231.jpg",
    link: "/shop/summer",
  },
];
export default function Heroslider() {
  const [Slide, setSlide] = useState(0);

  const settings = {
    dots: false, 
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "15%",
    swipeToSlide: true,
    afterChange: (current) => setSlide(current),
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {data.map((card, i) => {
          const isActive = i === Slide;

          return (
            <div key={card.id} className="px-2">
              {/*larg screen*/}
              <div className="hidden sm:block">
                <div className="relative w-full h-[68vh] max-h-[700px] rounded-3xl overflow-hidden ">
                
                  <div
                    className={`absolute inset-0 bg-center bg-cover transition-transform duration-[1200ms] ease-out ${
                      isActive ? "scale-100" : "scale-110"
                    }`}
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  ></div>

                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6">
                    <h2
                      className={`text-3xl sm:text-5xl font-semibold mb-2 drop-shadow-lg transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {card.title}
                    </h2>
                    <p
                      className={`text-base sm:text-lg mb-4 drop-shadow-md transition-all duration-700 ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {card.subtitle}
                    </p>
                    <Link
                      to={card.link}
                      className={`px-8 py-2 bg-gray-200 text-black font-semibold rounded-full transition-all duration-700 delay-200 hover:bg-red-500 hover:text-white ${
                        isActive
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      Shop now →
                    </Link>
                  </div>
                </div>
              </div>









              {/*small screen*/}
              <div className="block sm:hidden">
                <div className="w-full overflow-hidden ">
                  <div
                    className={`w-full h-[40vh] max-h-[360px] bg-center bg-cover transition-transform duration-[1200ms] ease-out ${
                      isActive ? "scale-100" : "scale-105"
                    }`}
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  />
                </div>

                <div
                  className={`mt-6 px-6 text-center transition-all duration-700 ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    {card.subtitle}
                  </p>
                  <Link
                    to={card.link}
                    className="inline-flex items-center px-6 py-2 bg-black text-white font-semibold rounded-full "
                  >
                    Shop now →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

