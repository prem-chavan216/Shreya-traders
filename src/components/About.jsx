import React from 'react';
import { CheckCircle, Truck, Award, Shield, User, MapPin } from 'lucide-react';

const About = () => {
  const features = [
    { icon: CheckCircle, text: '100% Natural & Chemical Free' },
    { icon: Truck, text: 'Direct from Farm to Market' },
    { icon: Award, text: 'Competitive Wholesale Prices' },
    { icon: Shield, text: 'Hygienic Packaging Standards' }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="relative">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-red-50 border border-red-100">
              <span className="text-red-700 font-bold text-xs uppercase tracking-widest">Since 2016 • Tasgaon Market</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              A Legacy of Quality in <span className="text-red-700">Kishmish & Raisins</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Established in the heart of <span className="font-bold text-gray-800 underline decoration-yellow-400">Tasgaon's Krushi Utpann Bazar Samitee Market Yard</span>, 
              Shreya Traders is a premier wholesaler and retailer specializing in premium raisins.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium italic border-l-4 border-yellow-500 pl-4 bg-gray-50 py-4 rounded-r-lg">
              "We bridge the gap between farmers and global markets, ensuring that only the finest, naturally dried raisins reach your doorstep."
            </p>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <feature.icon className="text-yellow-700" size={20} />
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Owner/Location Info */}
            <div className="flex flex-wrap gap-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-red-700 p-3 rounded-full text-white">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Proprietor</p>
                  <p className="font-bold text-gray-900">Shankar Chavan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-700 p-3 rounded-full text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Location</p>
                  <p className="font-bold text-gray-900 text-sm">TASGAON, Dist. Sangli</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-50 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl font-black text-red-700 mb-2">10+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-tight">Years Of<br/>Experience</div>
              </div>
              
              <div className="bg-red-700 rounded-3xl p-8 shadow-xl text-center text-white hover:-translate-y-2 transition-transform duration-300 sm:mt-12">
                <div className="text-4xl font-black mb-2 text-yellow-400">500+</div>
                <div className="text-sm font-bold opacity-90 uppercase tracking-tight text-white">Satisfied<br/>Wholesalers</div>
              </div>
              
              <div className="bg-yellow-500 rounded-3xl p-8 shadow-xl text-center text-gray-900 hover:-translate-y-2 transition-transform duration-300">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-sm font-bold opacity-80 uppercase tracking-tight">Quality<br/>Assurance</div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-50 text-center hover:-translate-y-2 transition-transform duration-300 sm:mt-12">
                <div className="text-4xl font-black text-red-700 mb-2">24/7</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-tight">Direct<br/>Support</div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm font-medium">Licensed Wholesaler & Retailer of Kishmish Raisins</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;