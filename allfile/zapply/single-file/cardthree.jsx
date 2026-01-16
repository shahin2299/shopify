import React, { useState } from "react";
import './ani.css';
export default function Gallery() {
  const images = {
    best: [
      "https://ambaz-skin-3.myshopify.com/cdn/shop/files/collection7.png?v=1750751018&",
      "https://ambaz-skin-3.myshopify.com/cdn/shop/files/collection6.png?v=1750750993&",
      "https://ambaz-skin-3.myshopify.com/cdn/shop/files/collection5.png?v=1750750969&",
    ],
    new: [
      "https://ae01.alicdn.com/kf/H2ceba2a5aaa649b5a75943b1a036fada0.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtP7aKmRD9EmEK8W8oS7v-b5ez_wxpuYjjYDXpjGZAW_W5876du25_55RLJS3tLUXFNrs&usqp=CAU",
      "https://www.phase-eight.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-master-Catalog-P8/default/dwf97b4e40/images/240488890/240488890-01-lovell-floral-embroidered-dress.jpg?sw=1280&sh=1792&strip=false",
    ],
    top: [
      "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/6/06c28fbYUF-9598DRSRD_1.jpg?rnd=20200526195200&tr=w-512",
      "https://media.istockphoto.com/id/1294339577/photo/young-beautiful-woman.jpg?s=612x612&w=0&k=20&c=v41m_jNzYXQtxrr8lZ9dE8hH3CGWh6HqpieWkdaMAAM=",
      "https://i.pinimg.com/originals/db/d1/c6/dbd1c6a7a68d846a83654cb12d2fe3f3.jpg",
    ],
    accessories: [
      "https://media.istockphoto.com/id/1407656268/photo/blonde-young-woman-in-elegant-white-dress.jpg?s=612x612&w=0&k=20&c=qowkq4wau0LFqqfeN9LXaItwRJTjvtpUaLmewZSA4oY=",
      "https://i.pinimg.com/736x/96/97/d5/9697d588e222258c5344740e6fb98e06.jpg",
      "https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Sites-biba-product-catalog/default/dwf3b7a5b8/images/ss25/csld1935ess25lbl_1.jpg?sw=502&sh=753&q=100&strip=false",
    ],
  };
  const [current, setCurrent] = useState("best");
  return (
    <>
      <section className="bg-[#011F3E] text-white py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
            <div className="hidden lg:flex flex-col justify-between gap-16">
              <div className="w-64 h-64 rounded-xl overflow-hidden shadow-lg self-start float-animation1">
                <img src={images[current][0]} className="w-full h-full object-cover" />
              </div>
              <div className="w-64 h-48 rounded-xl overflow-hidden shadow-lg self-start float-animation2">
                <img src={images[current][1]} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full flex justify-evenly gap-3 lg:hidden mb-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={images[current][0]} className="w-3xs h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={images[current][1]} className="w-3xs h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img src={images[current][2]} className="w-3xs h-full object-cover" />
                </div>
              </div>
              <nav className="w-full max-w-xl text-center">
                <ul className="space-y-8">
                  <li>
                    <p onMouseEnter={() => setCurrent("best")} className="group text-3xl lg:text-4xl font-semibold text-[#7D8D9D] hover:text-white cursor-pointer">
                      <span className="group-hover:underline">Best Selling</span>
                      <sup className="ml-3 group-hover:underline">(12)</sup>
                    </p>
                  </li>
                  <li>
                    <p onMouseEnter={() => setCurrent("new")} className="group text-3xl lg:text-4xl font-semibold text-[#7D8D9D] hover:text-white cursor-pointer">
                      <span className="group-hover:underline">New Arrivals</span>
                      <sup className="ml-3 group-hover:underline">(12)</sup>
                    </p>
                  </li>
                  <li>
                    <p onMouseEnter={() => setCurrent("top")} className="group text-3xl lg:text-4xl font-semibold text-[#7D8D9D] hover:text-white cursor-pointer">
                      <span className="group-hover:underline">Top Rating</span>
                      <sup className="ml-3 group-hover:underline">(12)</sup>
                    </p>
                  </li>
                  <li>
                    <p onMouseEnter={() => setCurrent("accessories")} className="group text-3xl lg:text-4xl font-semibold text-[#7D8D9D] hover:text-white cursor-pointer">
                      <span className="group-hover:underline">Accessories</span>
                      <sup className="ml-3 group-hover:underline">(12)</sup>
                    </p>
                  </li>
                  <li className="lg:hidden flex justify-center">
                    <div className="w-14 h-0.5 bg-[#7D8D9D] mt-2 rounded"></div>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="w-96 h-[520px] rounded-xl overflow-hidden shadow-2xl float-animation3">
                <img src={images[current][2]} className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

