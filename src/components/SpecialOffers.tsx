'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaTag, FaWhatsapp } from 'react-icons/fa';

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
            Limited Time
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Special Offers & New Arrivals
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Take advantage of our exclusive deals and discover our latest products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Special Offer Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl overflow-hidden shadow-lg h-full"
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <FaTag className="text-yellow-400" size={20} />
                  <span className="font-bold text-yellow-400">SUMMER SEASON OFFER</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Get Up to 20% OFF on Selected Cooler & A.C
                </h3>
                <p className="text-blue-100 mb-6">
                  Limited time offer valid on selected cooler & a.c models. Hurry and grab your favorite cooler & a.c at a discounted price!
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-purple-700 text-blue-100 text-sm px-3 py-1 rounded-full">
                    Samsung
                  </span>
                  <span className="bg-purple-700 text-blue-100 text-sm px-3 py-1 rounded-full">
                    Symphony
                  </span>
                  <span className="bg-purple-700 text-blue-100 text-sm px-3 py-1 rounded-full">
                    Haier
                  </span>
                  <span className="bg-purple-700 text-blue-100 text-sm px-3 py-1 rounded-full">
                    Crompton
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products"
                  className="bg-white text-purple-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  View Offers
                </Link>
                <Link 
                  href="https://wa.me/919828044966?text=I'm interested in your summer season coolers offers"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  <span>Enquire on WhatsApp</span>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* New Arrivals Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl overflow-hidden shadow-lg relative h-full"
          >
            <div className="p-8 md:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-block bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-6">
                  NEW ARRIVAL
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Latest Smart Accessories & Gadgets
                </h3>
                <p className="text-blue-100 mb-6">
                  Check out our newly arrived smart accessories and gadgets. Be the first to get your hands on these cutting-edge products.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-blue-700 p-3 rounded-lg text-center">
                    <h4 className="font-bold mb-1">Smart Watch</h4>
                    <p className="text-sm text-blue-200">Starting at ₹1,999</p>
                  </div>
                  <div className="bg-blue-700 p-3 rounded-lg text-center">
                    <h4 className="font-bold mb-1">Earbuds</h4>
                    <p className="text-sm text-blue-200">Starting at ₹899</p>
                  </div>
                  <div className="bg-blue-700 p-3 rounded-lg text-center">
                    <h4 className="font-bold mb-1">Speakers</h4>
                    <p className="text-sm text-blue-200">Starting at ₹1,499</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products"
                  className="bg-white text-blue-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Explore New Arrivals
                </Link>
                <Link 
                  href="https://wa.me/919XXXXXXXX?text=I'm interested in your new arrivals"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  <span>Enquire on WhatsApp</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers; 