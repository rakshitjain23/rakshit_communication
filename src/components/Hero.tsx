'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const shopImages = [
    '/shop_images/shop_img1.jpg',
    '/shop_images/shop_img2.jpg',
    '/shop_images/shop_img3.jpg'
  ];

  // Auto-rotate through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === shopImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Rakshit Communication
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your trusted electronics shop in Dungla offering a wide range of quality electronic products with expert service and support.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Link 
                href="/products" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 text-center"
              >
                Explore Products
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-gray-800 border border-gray-300 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-center"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
          
          {/* Shop Images Carousel */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl"
            >
              {shopImages.map((img, index) => (
                <motion.div
                  key={img}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
                    <Image
                      src={img}
                      alt={`Rakshit Communication Shop Image ${index + 1}`}
                      fill
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                      priority={index === 0}
                      className="max-h-full"
                      unoptimized
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Your Trusted Electronics Shop</h3>
                    <p className="text-gray-200">Quality products with expert service</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
                {shopImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-6 -right-8 w-24 h-24 bg-yellow-400 rounded-full opacity-80"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut" 
              }}
            />
            
            <motion.div 
              className="absolute -bottom-10 -left-8 w-20 h-20 bg-purple-500 rounded-full opacity-80"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 