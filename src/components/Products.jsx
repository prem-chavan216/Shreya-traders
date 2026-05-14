import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { ShoppingBag, TrendingUp, CheckCircle2, Loader2 } from 'lucide-react';

const Products = ({ scrollToSection }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setProducts(productsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const sendWhatsApp = (product) => {
    const phoneNumber = "919373111112";
    
    // मेसेजचे फॉरमॅट सेट करा
    const message = `*Shreya Traders - New Enquiry*%0A` +
                    `------------------------------%0A` +
                    `*Product:* ${product.name}%0A` +
                    `*Price:* ₹${product.price}%0A` +
                    `*Grade:* ${product.grade}%0A` +
                    `*Image Link:* ${product.imageUrl}%0A` +
                    `------------------------------%0A` +
                    `Please provide more details about this product.`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <section id="products" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Our Premium Selection
          </h2>

          <div className="w-24 h-1.5 bg-gray-200 mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Directly sourced from the orchards of Tasgaon, our raisins are
            processed with uncompromised hygiene and traditional expertise.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="animate-spin text-gray-400 mb-4" size={40} />

            <p className="text-gray-500 font-bold">
              Loading Products...
            </p>
          </div>
        ) : (
          /* Product Grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
              >

                {/* Image */}
                <div className="relative h-64 overflow-hidden shrink-0 bg-gray-50">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm border border-gray-100">
                      Tasgaon Origin
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow bg-white">

                  {/* Product Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 min-h-15">
                    {product.description}
                  </p>

                  {/* Price & Grade */}
                  <div className="flex justify-between items-center mb-4">

                    <span className="text-2xl font-black text-gray-900">
                      ₹{product.price}
                    </span>

                    <span className="bg-gray-100 px-3 py-1 rounded-lg text-xs font-bold text-gray-600 uppercase">
                      {product.grade}
                    </span>

                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 grow items-start">

                    <span className="flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-md border border-gray-200">
                      <CheckCircle2
                        size={10}
                        className="text-gray-400"
                      />

                      Export Grade
                    </span>

                    <span className="flex items-center gap-1 px-2 py-1 bg-gray-50 text-gray-500 text-[10px] font-bold rounded-md border border-gray-200">
                      <CheckCircle2
                        size={10}
                        className="text-gray-400"
                      />

                      100% Natural
                    </span>

                  </div>

                  {/* WhatsApp Button */}
                  <button
                    onClick={() => sendWhatsApp(product)}
                    className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all flex items-center justify-center gap-2 active:scale-95 mt-auto"
                  >
                    <ShoppingBag size={18} />

                    Enquiry Now
                  </button>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 mb-20">

            <p className="text-gray-400 font-bold">
              No products available. Visit /admin to add some!
            </p>

          </div>
        )}

        {/* Wholesale Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-lg">

          <div className="p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="text-gray-900">

              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <TrendingUp size={32} className="text-gray-900" />

                <h3 className="text-3xl font-black tracking-tight">
                  Wholesale & Bulk Supplies
                </h3>
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