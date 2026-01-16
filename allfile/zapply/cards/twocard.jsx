import React from "react";
import { Link } from "react-router-dom";

const Threecards = () => {
  const Data = [
    {
      image: "https://t4.ftcdn.net/jpg/14/97/75/41/360_F_1497754100_pA7nu6AmjVtHBCpa76XUNmKt6MISrQNP.jpg",
      alt: "woman",
      offer: "UP TO 25% OFF",
      title: "Rose Petal Face Oil",
      buttonText: "Shop Now",
      link: "/shop/dfghdf",
    },
    {
      image:"https://amorina.in/cdn/shop/articles/1.webp?v=1694756190&width=360",
      alt: "man",
      offer: "UP TO 25% OFF",
      title: "Rose Petal Face Oil",
      buttonText: "Shop Now",
      link: "/shop/dfghdfdf",
    },
  ];
 return (
    <section className="bg-gray-50 p-4 sm:p-8">
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-2 gap-6 lg:gap-8 pl-0 lg:pl-[200px] pr-0 lg:pr-[200px]">
        {Data.map((card, index) => (
          <div key={index} className="group relative w-full h-[580px] overflow-hidden rounded-xl ">
            <img src={card.image} alt={card.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 text-white">
                <p className="mb-2 text-xs font-semibold  opacity-80">
                  {card.offer}
                </p>
                <h2 className="mb-6 text-3xl font-extrabold  ">
                  {card.title}
                </h2>
                <Link to={card.link} className="inline-block rounded-full bg-white px-8 py-3 text-sm font-medium uppercase text-gray-800 duration-400 hover:bg-orange-600 hover:text-white">
                  {card.buttonText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Threecards;


