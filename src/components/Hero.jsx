import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import heroBg from '../assets/goal.jpeg'; // Professional Raisin HD Photo for Shreya Traders

const Hero = ({ scrollToSection }) => {
  return (
    // 'pt-24' ensures the Hero section starts properly below the fixed Navbar
    <section 
      id="home" 
      className="min-h-screen pt-24 md:pt-32 flex items-center justify-center relative overflow-hidden"
    >
      
      {/* Background Image Section with Professional Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transition-all duration-1000" 
        style={{ 
          // Professional Raisin HD Photo for Shreya Traders
          backgroundImage: `url(${heroBg})`
        }}
      >
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/95"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        
        {/* Trusted Badge - Pulsing Animation */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md text-yellow-500 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
          </span>
          Trusted Since 2016 in Tasgaon Market
        </div>

        {/* Main Heading - Professional B2B Branding */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
          Tasgaon's Finest <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-600">
            Kishmish & Raisins
          </span>
        </h1>

        {/* Subtitle - Quality & Source Highlight */}
        <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
          <span className="text-white font-bold underline decoration-red-700 decoration-4 underline-offset-8">
            Premium Wholesaler & Retailer
          </span> of Quality Bedane. <br />
          <span className="mt-4 block opacity-90 italic">
            Directly Sourced from Krushi Utpann Bazar Samitee Yard.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('products')} 
            className="group px-12 py-5 bg-red-700 text-white rounded-2xl font-black text-xl hover:bg-red-800 transition-all duration-300 shadow-[0_20px_50px_rgba(185,28,28,0.4)] flex items-center gap-3 active:scale-95"
          >
            Explore Gallery 
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <a 
            href="https://wa.me/919970725735" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-12 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white rounded-2xl font-black text-xl hover:bg-white hover:text-gray-900 transition-all duration-500 flex items-center gap-3 shadow-xl"
          >
            <MessageSquare size={24} className="text-green-400" /> WhatsApp Now
          </a>
        </div>

        {/* Stats Section with Ultra-Modern Glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-24 pt-12 border-t border-white/10 max-w-6xl mx-auto text-white">
          <div className="p-6 rounded-3xl hover:bg-white/5 transition-all">
            <div className="text-3xl md:text-5xl font-black text-yellow-500 mb-2">500+</div>
            <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Happy Clients</div>
          </div>
          <div className="p-6 rounded-3xl hover:bg-white/5 transition-all">
            <div className="text-3xl md:text-5xl font-black text-yellow-500 mb-2">100%</div>
            <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Natural</div>
          </div>
          <div className="p-6 rounded-3xl hover:bg-white/5 transition-all">
            <div className="text-3xl md:text-5xl font-black text-yellow-500 mb-2">9Yrs+</div>
            <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Experience</div>
          </div>
          <div className="p-6 rounded-3xl hover:bg-white/5 transition-all">
            <div className="text-3xl md:text-5xl font-black text-yellow-500 mb-2">Bulk</div>
            <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Orders</div>
          </div>
        </div>
      </div>

      {/* Decorative Wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-24 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V46.29C80.7,71.4,210,66.03,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;