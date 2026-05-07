import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUpCircle } from 'lucide-react';
import stlogo from '../assets/ST logo.jpeg'; // Tumcha logo import

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500">
                <img src={stlogo} alt="ST Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-black text-xl leading-none">SHREYA <br/><span className="text-red-600 font-bold">TRADERS</span></h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tasgaon Market's premium kishmish wholesaler. We deliver quality that builds trust across generations.
            </p>
            <div className="flex gap-4">
               <a href="https://wa.me/919970725735" className="bg-gray-800 p-2.5 rounded-lg hover:bg-green-600 transition-colors">
                  <MessageCircle size={20} />
               </a>
               <a href="tel:9970725735" className="bg-gray-800 p-2.5 rounded-lg hover:bg-red-700 transition-colors">
                  <Phone size={20} />
               </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b-2 border-red-700 w-fit pb-1">Quick Links</h4>
            <ul className="space-y-3">
              {['home', 'products', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(item)} 
                    className="text-gray-400 hover:text-yellow-500 transition-colors capitalize text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Details */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b-2 border-red-700 w-fit pb-1">Business Info</h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start text-gray-400">
                <MapPin size={20} className="text-red-600 shrink-0" />
                <p className="text-sm">
                  Krushi Utpann Bazar Samitee <br/>
                  Market Yard, TASGAON <br/>
                  Dist. Sangli - 416312
                </p>
              </div>
              <div className="flex gap-3 items-center text-gray-400">
                <Phone size={18} className="text-red-600 shrink-0" />
                <p className="text-sm font-bold">+91 9970725735</p>
              </div>
            </div>
          </div>

          {/* Ownership Status */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b-2 border-red-700 w-fit pb-1">Proprietor</h4>
            <p className="text-yellow-500 font-black text-xl mb-1">Shankar Chavan</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Wholesaler & Retailer</p>
            <button 
              onClick={() => scrollToSection('home')}
              className="mt-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-bold"
            >
              <ArrowUpCircle size={18} /> BACK TO TOP
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-wider">
          <p className="font-medium font-mono">
            &copy; {currentYear} SHREYA TRADERS. DEVELOPED FOR BUSINESS EXCELLENCE.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-gray-300">TASGAON RAISINS MARKET</span>
            <span className="hover:text-gray-300 underline decoration-red-900 underline-offset-4">QUALITY GUARANTEED</span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;