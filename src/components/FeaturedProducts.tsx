'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import Image from 'next/image';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Latest Coolers',
    description: 'High-performance Coolers & Stay cool with the latest energy-efficient coolers.',
    price: '₹10,499',
    originalPrice: '₹15,499',
    rating: 4.7,
    image: '/products/coolers/symphony 75.png',
    category: 'coolers'
  },
  {
    id: 2,
    name: 'Air Conditioners',
    description: 'Efficient cooling with reliable performance, perfect for compact spaces.',
    price: '₹33,499',
    originalPrice: '₹55,999',
    rating: 4.5,
    image: '/products/ac/samsung_ac.jpg',
    category: 'air-conditioners'
  },
  {
    id: 3,
    name: 'Smart Phones',
    description: 'Affordable and stylish smartphone with essential features for everyday use.',
    price: '₹6,599',
    originalPrice: '₹9,499',
    rating: 4.3,
    image: '/products/mobile-phones/techno_mob1.webp',
    category: 'mobile-phones'
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with immersive sound and long battery life.',
    price: '₹599',
    originalPrice: '₹999',
    rating: 4.6,
    image: '/products/mobile-phones/speaker.webp',
    category: 'Audio'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium electronic products at competitive prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <div className="relative h-full w-full">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                  />
                </div>
                <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.category}
                </div>
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Sale
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    <FaStar className="text-yellow-400 mr-1" size={14} />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    )}
                  </div>
                  <Link 
                    href={`https://wa.me/919828044966?text=I'm interested in ${product.name}`}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                    <span>Enquire</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            href="/products"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 