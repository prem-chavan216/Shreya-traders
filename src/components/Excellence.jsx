import React from 'react';
import { Award, Zap, ShieldCheck, Globe, Leaf, Users } from 'lucide-react';

const Excellence = () => {
  const highlights = [
    {
      icon: <Leaf className="text-green-500" size={32} />,
      title: "100% Organic Process",
      desc: "Our raisins are naturally sun-dried without the use of any harmful chemicals."
    },
    {
      icon: <ShieldCheck className="text-blue-500" size={32} />,
      title: "Quality Assurance",
      desc: "Every batch undergoes rigorous double-sorting and cleaning to ensure only premium quality products reach you."
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Direct From Tasgaon",
      desc: "Sourced directly from the Krushi Utpann Bazar Samitee, allowing us to offer the best market rates."
    },
    {
      icon: <Globe className="text-purple-500" size={32} />,
      title: "Pan India Delivery",
      desc: "Our dedicated logistics team ensures safe and timely delivery for wholesale bulk orders across India."
    },
    {
      icon: <Award className="text-red-500" size={32} />,
      title: "9+ Years Experience",
      desc: "Under the guidance of Shankar Chavan, Shreya Traders has built a legacy of trust in the raisin market."
    },
    {
      icon: <Users className="text-orange-500" size={32} />,
      title: "Customer Centric",
      desc: "We maintain professional relationships with over 500+ wholesalers and retailers nationwide."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-red-700 font-bold tracking-[0.2em] uppercase text-sm mb-4">Why Shreya Traders</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Commitment to Quality & <br/> <span className="text-yellow-600">Pure Tasgaon Excellence</span>
            </h3>
          </div>
          <p className="text-gray-500 font-medium max-w-sm border-l-4 border-yellow-500 pl-6">
            We supply the highest quality raisins by combining modern processing technology with traditional hygiene standards.
          </p>
        </div>

        {/* Excellence Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:border-yellow-200 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-gray-50 rounded-full group-hover:bg-yellow-50 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-gray-50 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="mt-20 p-1 bg-gradient-to-r from-red-700 via-yellow-500 to-red-700 rounded-[2rem] shadow-2xl">
          <div className="bg-gray-900 rounded-[1.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to grow your business?</h4>
              <p className="text-gray-400 font-medium">Contact Shreya Traders today for a wholesale quotation.</p>
            </div>
            <a 
              href="tel:9970725735" 
              className="px-10 py-4 bg-white text-gray-900 rounded-2xl font-black text-lg hover:bg-yellow-500 hover:text-white transition-all active:scale-95 whitespace-nowrap shadow-xl"
            >
              Request Best Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Excellence;