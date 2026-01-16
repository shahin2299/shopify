import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Star, MessageCircle } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Darakha Eman",
    subtitle: "Sub title",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
  },
  {
    name: "Nike Sime",
    subtitle: "Sub title",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
  },
  {
    name: "Samule Das",
    subtitle: "Sub title",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    text:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
  },
  {
    name: "Mina Kader",
    subtitle: "Sub title",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
  },
  {
    name: "John Lee",
    subtitle: "Sub title",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    text:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
  },
  {
    name: "Sophia Roy",
    subtitle: "Sub title",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
  },
  {
    name: "Hassan Malik",
    subtitle: "Sub title",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    text:
      "Thanks for the feedback. We are always looking to improve our product and we would love to look into this issue with you further.",
  },
];














export default function Testimonials() {
  const [slides, setSlides] = useState(3); 
  const getSlidesToShow = () => {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 1024) return 2;
    return 3;
  };
  useEffect(() => {
    const updateSlides = () => setSlides(getSlidesToShow());
    updateSlides(); 
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: slides,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
  };
  return (
    <div className="bg-[#fafafa] py-16 px-6 flex justify-center font-inter">
      <div>
        <h1 className="text-center py-5 text-4xl font-bold text-gray-800 mb-2">
          Testimonial
        </h1>
        <div className="w-full max-w-7xl relative">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-3">
                <div className="relative bg-white border border-gray-200 rounded-[20px] shadow-md p-8 text-center">
                  <div className="flex flex-col items-center">
                    <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"/>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {t.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {t.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                    {t.text}
                  </p>
                  <div className="flex justify-center items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400"/>
                    ))}
                  </div>
                  <MessageCircle
                    className="absolute bottom-6 right-6 text-gray-300"
                    size={26}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

