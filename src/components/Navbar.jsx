import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import stlogo from '../assets/ST logo.jpeg'

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          
          {/* Logo Section */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-100 shadow-md group-hover:scale-105 transition-transform">
              <img 
                src={stlogo} 
                alt="ST Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-red-700 leading-none">Shreya Traders</h1>
              <p className="text-[10px] text-yellow-600 font-bold uppercase tracking-widest mt-1">
                Kishmish & Raisins
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className={`px-3 py-2 font-semibold transition-all duration-300 relative ${
                  activeSection === item.id ? 'text-red-700' : 'text-gray-600 hover:text-red-700'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white">
            {navItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => { 
                  scrollToSection(item.id); 
                  setIsOpen(false); 
                }} 
                className={`block w-full text-left py-3 px-6 font-bold ${
                  activeSection === item.id 
                    ? 'text-red-700 bg-red-50 border-l-4 border-red-700' 
                    : 'text-gray-600 border-l-4 border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;