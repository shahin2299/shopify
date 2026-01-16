import React, { useState, useRef } from 'react';
import { ShoppingCart, Check, Share2, Feather, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Facebook, Twitter } from 'lucide-react';
const product = {
  title: 'Base Layer Top',
  price: 48.00,
  discount: 8,
  mainimage: 'https://img.freepik.com/premium-photo/autumn-portrait-attractive-girl-autumn-shades-stylish-girl-relaxes-warm-autumn_257482-809.jpg', 
  thumbnail: [
    'https://www.shutterstock.com/image-photo/young-black-woman-cream-suit-600nw-2491218847.jpg', 
    'https://fashionisers.com/wp-content/uploads/2015/03/7-Pieces-You-Need-to-Embrace-the-1970s-Fashion-Trend-woman-in-trendy-suede-skirt.jpg', 
    'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/OCTOBER/24/oag0JtnO_a8350bd190e64a1dbdeabdff1e2e36be.jpg', 
    'https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-black-jacket-jeans-fashion-male-posing-studio-near-grey-wall_158538-24002.jpg?semt=ais_hybrid&w=740&q=80', 
    'https://img.freepik.com/premium-photo/confident-businessman-blazer-with-sunglasses-studio-corporate-fashion-clothes-pride-employee-eyewear-work-with-pose-professional-style-classy-outfit-by-white-background_590464-487371.jpg?semt=ais_hybrid&w=740&q=80', 
    'https://i.pinimg.com/736x/2d/c1/37/2dc1371cfc0ab2d5da9afde6ab1cedbd.jpg', 
    'https://blackberrys.com/cdn/shop/files/2-pcs-suit-in-black-jerret-blackberrys-clothing-2_df0460a0-261d-4e69-9d33-fac771fa5a6b.jpg?v=1710221065', 
  ],
  colors: [
    { name: 'White', hex: '#FFFFFF', class: 'border border-gray-300' },
    { name: 'Light Gray', hex: '#F0F0F0', class: 'border border-gray-300' },
    { name: 'Tan', hex: '#E5C9A4', class: 'bg-[#E5C9A4] border border-gray-300' },
    { name: 'Peach', hex: '#FFDAB9', class: 'bg-[#FFDAB9] border border-gray-300' },
    { name: 'Black', hex: '#000000', class: 'bg-black' },
    { name: 'Cream', hex: '#FFFDD0', class: 'bg-[#FFFDD0] border border-gray-300' },
  ],
  sizes: ['S', 'M', 'L', 'XL'],
  stock: 15,
  description: {
    short: 'The "Base Layer Top" is a fundamental piece of apparel designed to provide comfort and functionality across various activities. Typically worn next to the skin, it serves as the first layer of clothing and is often crafted from moisture-wicking materials to keep you dry.',
    details: [
      { title: 'Moisture-Wicking Fabric', text: 'Helps to manage sweat and keep you dry.' },
      { title: 'Breathability', text: 'Promotes air circulation to regulate body temperature.' },
      { title: 'Stretchability', text: 'Allows freedom of movement for dynamic activities.' },
      { title: 'Seamless or Flatlock Seams', text: 'Reduces chafing and enhances comfort during prolonged wear.' },
      { title: 'Thermal Insulation', text: '(Optional) Some base layer tops are designed for warmth, making them suitable for colder conditions.' },
    ],
  },
  pickup: 'Pickup available at US Warehouse. Usually ready in 24 hours.',
};
const Color = ({ color, isSelected, onSelect, showTooltip, onMouseEnter, onMouseLeave }) => (
  <div className="relative">
    <button onClick={onSelect} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`w-6 h-6 rounded-full m-0.5 p-0 transition duration-150 ease-in-out ${isSelected ? 'border-2 border-black p-0' : 'border border-transparent'}`}>
      <div className={`w-full h-full rounded-full ${color.class}`} style={{ backgroundColor: color.hex }}/>
    </button>
    {showTooltip && (
  <div className="absolute bottom-full left-1/2 mb-2 px-3 py-1.5 bg-black text-white text-xs rounded-lg whitespace-nowrap z-10  after:content-[''] after:absolute after:left-1/2 after:top-full after:border-4 after:border-t-black  after:border-l-transparent after:border-r-transparent after:border-b-transparent" style={{ transform: 'translate(-45%, 0%)' }}>
    {color.name}
  </div>
)}
  </div>
);







const Size = ({ size, isSelected, onSelect }) => (
  <button onClick={() => onSelect(size)} className={`px-5 py-3 text-sm rounded-lg border transition duration-150 font-medium ${isSelected ? 'bg-black text-white border-black' : 'bg-white text-gray-800 border-gray-300 hover:border-gray-500'}`}>
    {size}
  </button>
);



const Scroll = ({ direction, isVisible, scrollThumbnails }) => (
    <button onClick={() => scrollThumbnails(direction)} className={`absolute top-1/4 h-15 w-10  bg-black/40 text-white flex items-center justify-center transition duration-200 hover:bg-black/60 z-10 ${direction === 'left' ? 'left-0 ' : 'right-0 '} ${isVisible ? 'lg:flex' : 'hidden'}`}>
      {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );









  const App = () => {
  const { title, price, discount, colors, sizes, stock, description, mainimage, thumbnail } = product;
  const [Sized, setSized] = useState(sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [Description, setDescription] = useState(true);
  const [Colordd, setColordd] = useState(null); 
  const [thumbnaild, setthumbnaild] = useState(false);
  const thumbnailsss = useRef(null); 
  const all = [mainimage, ...thumbnail];
  const colorsi = colors.map((color, i) => ({ ...color, imageUrl: all[i % all.length],}));
  const [selectecolor, setSelectedColor] = useState(colorsi[0].name);
  const [imageeee, setSelectedImage] = useState(colorsi[0].imageUrl);
  const Colorselect = (colorName, imageUrl) => {
    setSelectedColor(colorName);
    setSelectedImage(imageUrl);
  };
  const currency = (amount) => 
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  const Quantity = (change) => setQuantity(prev => Math.max(1, prev + change));
  const priced = currency(price);
  const scrolldd = (direction) => {
    if (thumbnailsss.current) {
      const scrollAmount = direction === 'left' ? -120 : 120;
      thumbnailsss.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const imagesss = all.map((src, i) => (
    <button key={i} onClick={() => setSelectedImage(src)} className={`w-24 h-28 flex-shrink-0 rounded-lg overflow-hidden transition duration-200 ease-in-out border-2 ${imageeee === src ? 'border-black' : 'border-transparent hover:border-gray-300'}`}>
        <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
    </button>
  ));
  const detoggle = (
    <button onClick={() => setDescription(!Description)} className="w-full flex justify-between items-center text-lg font-semibold text-gray-900 focus:outline-none py-2">
        <span className="flex items-center space-x-2">
            <Feather size={20} className="text-gray-500" />
            <span>Description</span>
        </span>
        {Description ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
    </button>
  );
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-[Inter] antialiased">
      <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden shadow-none lg:shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-0 sm:p-8">
          <div className="flex flex-col">
            <div className="mb-4 rounded-b-lg lg:rounded-lg overflow-hidden border-b lg:border border-gray-200 aspect-[2/3] h-auto max-h-[80vh] lg:max-h-none">
              <img src={imageeee} alt={title} className="w-full h-full object-cover"/>
            </div>
            <div  className="relative px-4 lg:px-0" onMouseEnter={() => setthumbnaild(true)} onMouseLeave={() => setthumbnaild(false)}> 
              <div ref={thumbnailsss} className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide"  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {imagesss}
              </div>
              <Scroll direction="left" isVisible={thumbnaild} scrollThumbnails={scrolldd} />
              <Scroll direction="right" isVisible={thumbnaild} scrollThumbnails={scrolldd} />
            </div>
          </div>
          <div className="flex flex-col space-y-5 px-4 lg:px-0 pt-4 lg:pt-0">
            <div className="flex flex-col space-y-1">
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                <div className="flex items-center space-x-2 text-xl font-medium pt-1">
                    <span className="text-gray-900">{priced}</span>
                    <span className="bg-black text-white text-xs font-medium px-2 py-0.5 rounded-full tracking-wider">
                        -{discount}%
                    </span>
                </div>
            </div>
            <div className="space-y-2 pt-2 border-t border-gray-100 lg:border-t-0">
              <p className="text-sm font-medium text-gray-700">Color: <span className="font-semibold text-black">{selectecolor}</span></p>
              <div className="flex items-center space-x-1">
                {colorsi.map((color) => (
                  <Color
                    key={color.name}
                    color={color}
                    isSelected={selectecolor === color.name}
                    onSelect={() => Colorselect(color.name, color.imageUrl)}
                    showTooltip={Colordd === color.name}
                    onMouseEnter={() => setColordd(color.name)}
                    onMouseLeave={() => setColordd(null)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Size: <span className="font-semibold text-black">{Sized}</span></p>
              <div className="flex space-x-2">
                {sizes.map((s) => (
                  <Size
                    key={s}
                    size={s}
                    isSelected={Sized === s}
                    onSelect={setSized}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3 pt-3">
              <div className="flex space-x-3">
                <div className="w-32 flex border border-gray-400 rounded-lg overflow-hidden h-12">
                  <button onClick={() => Quantity(-1)} className="flex-1 text-gray-600 hover:bg-gray-100 transition duration-150 text-xl font-light">
                    &minus;
                  </button>
                  <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} className="w-1/3 text-center focus:outline-none text-base font-medium border-x border-gray-300" min="1"/>
                  <button onClick={() => Quantity(1)} className="flex-1 text-gray-600 hover:bg-gray-100 transition duration-150 text-xl font-light">
                    +
                  </button>
                </div>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-white text-black border border-black rounded-lg py-3 font-semibold hover:bg-gray-100 transition duration-150 h-12">
                  <ShoppingCart size={18} />
                  <span className="text-sm">Add to cart</span>
                </button>
              </div>
              <button className="w-full bg-black text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition duration-150 h-12">
                Buy it now
              </button>
            </div>
            <div className="pt-2 border-t border-gray-100 space-y-2">
              <div className="flex items-start space-x-2 text-sm">
                <Check size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-800 font-medium">Pickup available at US Warehouse</p>
                  <p className="text-gray-500 text-xs">Usually ready in 24 hours</p>
                </div>
              </div>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition duration-150 underline decoration-gray-400 hover:decoration-gray-700 underline-offset-4">
                View store information
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-700 pt-1 pb-4 border-b border-gray-100">
              <a href="#" className="flex items-center space-x-1 underline-offset-4 decoration-gray-400 hover:decoration-gray-700 hover:text-gray-900 transition duration-150">
                <Facebook size={16} />
                <span>Facebook</span>
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="flex items-center space-x-1 underline-offset-4 decoration-gray-400 hover:decoration-gray-700 hover:text-gray-900 transition duration-150">
                <Twitter size={16} />
                <span>Twitter</span>
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="flex items-center space-x-1 underline-offset-4 decoration-gray-400 hover:decoration-gray-700 hover:text-gray-900 transition duration-150">
                <Share2 size={16} />
                <span>Share</span>
              </a>
            </div>
            <div className="pt-2 border-b border-gray-100">
              {detoggle}
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${Description ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  {description.short}
                </p>
                {description.details.map((d, i) => (
                  <p key={i} className="text-gray-800 text-sm mb-3">
                    <span className="font-bold">{d.title}:</span> {d.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="pt-2 pb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">{stock} in stock</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: `${Math.min(100, (stock / 50) * 100)}%` }}></div>
                </div>
                <a href="#" className="mt-2 text-xs text-gray-700 hover:text-gray-900 transition duration-150 flex items-center underline-offset-4 decoration-gray-400 hover:decoration-gray-700">
                  View full details &rarr;
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;


