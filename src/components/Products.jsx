import React from 'react';
import { ShoppingBag, TrendingUp, CheckCircle2 } from 'lucide-react';

// Images Import
import goalImg from '../assets/goal.jpeg'; 
import lambadaImg from '../assets/lambada.jpeg';
import goal2Img from '../assets/goal2.jpeg';

const productsList = [
  { 
    name: 'Premium Golden Kishmish', 
    description: 'Tasgaon special export quality golden raisins with honey-like sweetness.', 
    image: goalImg, 
    tags: ['Export Grade', 'Long Size']
  },
  { 
    name: 'Special Black Raisins', 
    description: 'Naturally sun-dried black grapes. High in iron and natural antioxidants.', 
    image: lambadaImg, 
    tags: ['Heart Healthy', '100% Natural']
  },
  { 
    name: 'Fresh Yellow Kishmish', 
    description: 'Standard medium-sized yellow raisins, perfect for daily use and sweets.', 
    image: goal2Img, 
    tags: ['A-Grade Quality', 'Farm Fresh']
  },
  { 
    name: 'Malayar / Brown Raisins', 
    description: 'Traditional brown raisins with a rich chewy texture and natural fiber.', 
    image: lambadaImg, 
    tags: ['Bulk Favorite', 'Preservative Free']
  }
];

const Products = ({ scrollToSection }) => {
  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Premium Selection</h2>
          <div className="w-24 h-1.5 bg-gray-200 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Directly sourced from the orchards of Tasgaon, our raisins are processed with 
            uncompromised hygiene and traditional expertise.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {productsList.map((product, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container - No Color Overlay */}
              <div className="relative h-64 overflow-hidden shrink-0 bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                   <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-gray-100">
                     Tasgaon Origin
                   </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col grow bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-4 min-h-15">
                  {product.description}
                </p>
                
                {/* Neutral Tags */}
                <div className="flex flex-wrap gap-2 mb-6 grow items-start">
                  {product.tags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-md border border-gray-200">
                      <CheckCircle2 size={10} className="text-gray-400" /> {tag}
                    </span>
                  ))}
                </div>

                {/* Neutral Dark Button */}
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-95 mt-auto"
                >
                  <ShoppingBag size={18} /> Enquiry Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Minimal Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-lg">
          <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-gray-900">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <TrendingUp size={32} className="text-gray-900" />
                <h3 className="text-3xl font-black tracking-tight">Wholesale & Bulk Supplies</h3>
              </div>
              <p className="text-xl text-gray-600 max-w-xl">
                We offer Pan-India delivery. Please contact us directly for the best market prices.
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-black transition-all shadow-xl active:scale-95"
            >
              Get Bulk Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;