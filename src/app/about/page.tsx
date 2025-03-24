'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  Rakshit Communication
                </span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Your trusted electronics shop in Dungla since 2014. We pride ourselves on offering quality products, competitive prices, and exceptional customer service.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">We offer authentic products with manufacturer warranty</p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Expert technical support and after-sales service</p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Competitive pricing and special offers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Wide range of electronics products from trusted brands</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/shop_images/shop_img2.jpg"
                  alt="Rakshit Communication Shop"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Owner Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Owner</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The visionary behind Rakshit Communication who has been serving the Dungla community since 2014.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-64 h-64 rounded-full overflow-hidden shadow-xl flex-shrink-0 bg-gray-100"
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/shop_images/owner.jpg" 
                  alt="Mahaver Gang - Owner" 
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Mahaver Gang</h3>
              <p className="text-blue-600 font-medium mb-4">Owner</p>
              <p className="text-gray-700 mb-4">
                Mahaveer Gang founded Rakshit Communication in 2014 with a vision to provide high-quality electronics products to the local community in Dungla. His commitment to quality, authenticity, and customer satisfaction has been the driving force behind our growth.
              </p>
              <p className="text-gray-700">
                With over 11 years of experience in the electronics industry, Mahaveer personally ensures that every product offered at our store meets the highest standards of quality. His expertise and dedication to customer service have made Rakshit Communication a trusted name in Dungla.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 