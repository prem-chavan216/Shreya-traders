import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Real world scenario: Here you can call EmailJS or a backend API
    alert(`Thank you ${formData.name}! Shreya Traders will contact you shortly.`);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Connect With Us</h2>
          <div className="w-24 h-1.5 bg-red-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below or call us directly for bulk orders and the best wholesale rates.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-red-700" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">Our Warehouse</h3>
                <p className="text-gray-600 leading-relaxed">
                  Krushi Utpann Bazar Samitee Market Yard, <br/>
                  TASGAON, Dist. Sangli (Maharashtra)
                </p>
              </div>
            </div>

            {/* Phone/WhatsApp Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-green-700" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">Call / WhatsApp</h3>
                <div className="space-y-1">
                  <p className="text-gray-700 font-bold text-lg">+91 9970725735</p>
                  <p className="text-gray-700 font-bold text-lg">+91 8208326059</p>
                </div>
                <a 
                  href="https://wa.me/919970725735" 
                  className="inline-flex items-center gap-2 mt-3 text-green-700 font-bold text-sm hover:underline"
                >
                  <MessageSquare size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-5 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="text-yellow-700" size={28} />
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-1">Business Hours</h3>
                <p className="text-gray-700 font-medium">Monday - Saturday</p>
                <p className="text-gray-500 text-sm italic">9:00 AM to 7:00 PM (IST)</p>
              </div>
            </div>

          </div>

          {/* Right Side: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-50">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h3>
                <p className="text-gray-500">Our team will get in touch with you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="e.g. Rahul Patil" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-700 focus:ring-0 transition-all outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="e.g. 98XXXXXXXX" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-700 focus:ring-0 transition-all outline-none" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="e.g. rahul@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-700 focus:ring-0 transition-all outline-none" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Order Details / Questions</label>
                  <textarea 
                    name="message" 
                    rows="4" 
                    placeholder="Please specify the quality and quantity of raisins you require." 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:border-red-700 focus:ring-0 transition-all outline-none resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-red-700 text-white rounded-xl font-bold text-lg hover:bg-red-800 shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <Send size={20} /> Send Enquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;