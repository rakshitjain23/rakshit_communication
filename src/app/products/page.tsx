'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaSearch, FaFilter, FaWhatsapp, FaStar } from 'react-icons/fa';

// Sample product data
const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'coolers', name: 'Coolers' },
  { id: 'air-conditioners', name: 'Air Conditioners' },
  { id: 'mobile-phones', name: 'Mobile Phones' },
  { id: 'accessories', name: 'Accessories' },
  { id: 'audio', name: 'Audio' },
  { id: 'wearables', name: 'Wearables' },
  { id: 'laptops', name: 'Laptops' },
];

const productsData = [
  {
    id: 1,
    name: 'Tecno Pop 9',
    description: 'Affordable and stylish smartphone with essential features for everyday use.',
    price: '₹6,599',
    originalPrice: '₹9,499',
    image: '/products/mobile-phones/techno_mob1.webp',
    category: 'mobile-phones',
    tags: ['mobile-phone', 'tecno', 'pop 9'],
    specifications: [
      { name: 'Display', value: '6.6-inch HD+ (720 x 1612 pixels)' },
      { name: 'Processor', value: 'MediaTek Dimensity 6300' },
      { name: 'RAM', value: '4 GB' },
      { name: 'Storage', value: '64 GB (expandable via microSD)' },
      { name: 'Camera', value: '48 MP rear, 8 MP front' },
      { name: 'Battery', value: '5000 mAh' },
      { name: 'Operating System', value: 'Android 14' },
    ],
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    description: 'Premium quality wireless earbuds with noise cancellation and crystal clear sound.',
    price: '₹2,499',
    originalPrice: '₹3,999',
    rating: 4.5,
    reviews: 86,
    image: '/products/earbuds.jpg',
    category: 'accessories',
    tags: ['Wireless', 'Bluetooth', 'Offer'],
    specifications: [
      { name: 'Type', value: 'In-ear' },
      { name: 'Battery Life', value: '24 hours' },
      { name: 'Connectivity', value: 'Bluetooth 5.2' },
      { name: 'Warranty', value: '1 Year' },
    ],
  },
  {
    id: 3,
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring and smartphone connectivity.',
    price: '₹3,999',
    originalPrice: '₹4,999',
    rating: 4.3,
    reviews: 62,
    image: '/products/smartwatch.jpg',
    category: 'wearables',
    tags: ['Fitness', 'Smart', 'Health'],
    specifications: [
      { name: 'Display', value: '1.4" AMOLED' },
      { name: 'Battery', value: '7 days' },
      { name: 'Water Resistant', value: 'Yes (5ATM)' },
      { name: 'Sensors', value: 'Heart Rate, SpO2' },
    ],
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    description: 'Portable Bluetooth speaker with immersive sound and long battery life.',
    price: '₹1,999',
    originalPrice: '₹2,499',
    rating: 4.6,
    reviews: 78,
    image: '/products/speaker.jpg',
    category: 'audio',
    tags: ['Portable', 'Wireless', 'Bestseller'],
    specifications: [
      { name: 'Output', value: '20W' },
      { name: 'Battery Life', value: '10 hours' },
      { name: 'Water Resistant', value: 'IPX7' },
      { name: 'Connectivity', value: 'Bluetooth 5.0' },
    ],
  },
  {
    id: 5,
    name: 'Gaming Laptop',
    description: 'High-performance gaming laptop with dedicated graphics and fast processor.',
    price: '₹69,999',
    originalPrice: '₹79,999',
    rating: 4.8,
    reviews: 42,
    image: '/products/laptop.jpg',
    category: 'laptops',
    tags: ['Gaming', 'Performance', 'Limited Stock'],
    specifications: [
      { name: 'Processor', value: 'Intel Core i7' },
      { name: 'RAM', value: '16GB' },
      { name: 'Storage', value: '512GB SSD' },
      { name: 'Graphics', value: 'NVIDIA RTX 3060' },
      { name: 'Display', value: '15.6" 144Hz' },
    ],
  },
  {
    id: 6,
    name: 'JioPhone Prime 2 4G Keypad Phone',
    description: 'Compact and reliable 4G phone with essential features for seamless connectivity.',
    price: '₹2,799',
    originalPrice: '₹4,199',
    image: '/products/mobile-phones/jiophone.webp',
    category: 'mobile-phones',
    tags: ['mobile-phone', 'jiophone', 'prima 2', '4g', 'keypad phone'],
    specifications: [
      { name: 'Display', value: '2.8-inch QVGA (320 x 240 pixels)' },
      { name: 'Processor', value: 'Spreadtrum SC9820A' },
      { name: 'RAM', value: '512 MB' },
      { name: 'Storage', value: '4 GB (expandable via microSD)' },
      { name: 'Camera', value: '2 MP rear, 0.3 MP front' },
      { name: 'Battery', value: '2000 mAh' },
      { name: 'Connectivity', value: '4G VoLTE, Wi-Fi, Bluetooth' },
      { name: 'Operating System', value: 'KaiOS' },
    ],
  },
  {
    id: 7,
    name: 'Wireless Headphones',
    description: 'Over-ear wireless headphones with active noise cancellation and premium sound quality.',
    price: '₹4,999',
    originalPrice: '₹6,999',
    rating: 4.7,
    reviews: 94,
    image: '/products/headphones.jpg',
    category: 'audio',
    tags: ['Noise Cancellation', 'Wireless', 'Premium'],
    specifications: [
      { name: 'Type', value: 'Over-ear' },
      { name: 'Battery Life', value: '30 hours' },
      { name: 'Connectivity', value: 'Bluetooth 5.0' },
      { name: 'Noise Cancellation', value: 'Active' },
    ],
  },
  {
    id: 8,
    name: 'Fitness Tracker Band',
    description: 'Lightweight fitness tracker band with activity monitoring and notifications.',
    price: '₹1,799',
    originalPrice: '₹2,299',
    rating: 4.4,
    reviews: 118,
    image: '/products/fitness-band.jpg',
    category: 'wearables',
    tags: ['Fitness', 'Lightweight', 'Waterproof'],
    specifications: [
      { name: 'Display', value: '0.96" OLED' },
      { name: 'Battery', value: '14 days' },
      { name: 'Water Resistant', value: 'Yes (5ATM)' },
      { name: 'Sensors', value: 'Heart Rate, Steps' },
    ],
  },
  {
    id: 9,
    name: 'Symphony 55 XL',
    description: 'Stay cool with the latest energy-efficient coolers.',
    price: '₹9,499',
    originalPrice: '₹10,999',
    image: '/products/coolers/symphony 55.webp',
    category: 'coolers',
    tags: ['cooler', 'symphony', '55 xl'],
    specifications: [
      { name: 'Cooling Capacity', value: '55000 BTU' },
      { name: 'Power Consumption', value: '1.5 kW' },
      { name: 'Dimensions', value: '100 x 60 x 30 cm' },
      { name: 'Weight', value: '15 kg' },
    ],
  },
  {
    id: 10,
    name: 'Symphony 27 XL',
    description: 'Compact and efficient cooling for small spaces.',
    price: '₹5,999',
    originalPrice: '₹8,499',
    image: '/products/coolers/symphony 27.jpg',
    category: 'coolers',
    tags: ['cooler', 'symphony', '27 xl'],
    specifications: [
      { name: 'Cooling Capacity', value: '27000 BTU' },
      { name: 'Power Consumption', value: '1.0 kW' },
      { name: 'Dimensions', value: '80 x 50 x 25 cm' },
      { name: 'Weight', value: '12 kg' },
    ],
  },
  {
    id: 11,
    name: 'Symphony 65 XL',
    description: 'High-performance cooling for medium-sized rooms.',
    price: '₹9,999',
    originalPrice: '₹13,499',
    image: '/products/coolers/symphony 65.webp',
    category: 'coolers',
    tags: ['cooler', 'symphony', '65 xl'],
    specifications: [
      { name: 'Cooling Capacity', value: '65000 BTU' },
      { name: 'Power Consumption', value: '1.8 kW' },
      { name: 'Dimensions', value: '110 x 70 x 35 cm' },
      { name: 'Weight', value: '20 kg' },
    ],
  },
  {
    id: 12,
    name: 'Symphony 75 XL',
    description: 'Powerful cooling with robust design and features.',
    price: '₹10,499',
    originalPrice: '₹15,499',
    image: '/products/coolers/symphony 75.png',
    category: 'coolers',
    tags: ['cooler', 'symphony', '75 xl'],
    specifications: [
      { name: 'Cooling Capacity', value: '75000 BTU' },
      { name: 'Power Consumption', value: '2.0 kW' },
      { name: 'Dimensions', value: '115 x 75 x 40 cm' },
      { name: 'Weight', value: '22 kg' },
    ],
  },
  {
    id: 13,
    name: 'Symphony 95 XL',
    description: 'Premium cooling with advanced technology for large spaces.',
    price: '₹12,499',
    originalPrice: '₹18,999',
    image: '/products/coolers/symphony 95.webp',
    category: 'coolers',
    tags: ['cooler', 'symphony', '95 xl'],
    specifications: [
      { name: 'Cooling Capacity', value: '95000 BTU' },
      { name: 'Power Consumption', value: '2.5 kW' },
      { name: 'Dimensions', value: '120 x 80 x 45 cm' },
      { name: 'Weight', value: '25 kg' },
    ],
  },
  {
    id: 14,
    name: 'Samsung 1 Ton 3 Star Fixed Speed Split AC',
    description: 'Efficient cooling with reliable performance, perfect for compact spaces.',
    price: '₹33,499',
    originalPrice: '₹55,999',
    image: '/products/ac/samsung_ac.jpg',
    category: 'air-conditioners',
    tags: ['air-conditioner', 'split ac', '1 ton', 'samsung', '3 star'],
    specifications: [
      { name: 'Cooling Capacity', value: '1 Ton' },
      { name: 'Energy Rating', value: '3 Star' },
      { name: 'Compressor Type', value: 'Fixed Speed' },
      { name: 'Power Consumption', value: '945 W' },
      { name: 'Dimensions', value: '85 x 30 x 20 cm (Indoor Unit)' },
      { name: 'Weight', value: '9 kg (Indoor Unit)' },
      { name: 'Refrigerant', value: 'R32 Eco-Friendly Gas' },
    ],
  },
  {
    id: 15,
    name: 'Haier AC HU52-5BN-INV/ HS52V-TBS5BN-INV Heavy Duty AC',
    description: 'Heavy-duty cooling with a durable copper condenser for long-lasting performance.',
    price: '₹36,999',
    originalPrice: '₹61,999',
    image: '/products/ac/haier_ac1.webp',
    category: 'air-conditioners',
    tags: ['air-conditioner', 'split ac', 'heavy duty', 'haier', 'copper condenser'],
    specifications: [
      { name: 'Cooling Capacity', value: '1.5 Ton' },
      { name: 'Energy Rating', value: '5 Star' },
      { name: 'Compressor Type', value: 'Inverter' },
      { name: 'Power Consumption', value: '1.2 kW' },
      { name: 'Dimensions', value: '91 x 31 x 21 cm (Indoor Unit)' },
      { name: 'Weight', value: '12 kg (Indoor Unit)' },
      { name: 'Refrigerant', value: 'R32 Eco-Friendly Gas' },
      { name: 'Condenser Type', value: '100% Copper' },
    ],
  },
  {
    id: 16,
    name: 'IFB CI1451G213GN1 Air Conditioner 1 Ton | 5 Star | Grand Series',
    description: 'Premium cooling efficiency with 5-star energy savings, perfect for modern homes.',
    price: '₹41,999',
    originalPrice: '₹63,499',
    image: '/products/ac/crompton_ac.webp',
    category: 'air-conditioners',
    tags: ['air-conditioner', 'split ac', '1 ton', 'ifb', '5 star', 'grand series'],
    specifications: [
      { name: 'Cooling Capacity', value: '1 Ton' },
      { name: 'Energy Rating', value: '5 Star' },
      { name: 'Compressor Type', value: 'Inverter' },
      { name: 'Power Consumption', value: '840 W' },
      { name: 'Dimensions', value: '88 x 28 x 20 cm (Indoor Unit)' },
      { name: 'Weight', value: '10 kg (Indoor Unit)' },
      { name: 'Refrigerant', value: 'R32 Eco-Friendly Gas' },
      { name: 'Special Feature', value: 'Dual Gold Fin Technology' },
    ],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(productsData);
  
  // Filter products based on category and search query
  const filterProducts = () => {
    let filtered = productsData;
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setVisibleProducts(filtered);
  };
  
  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };
  
  // Handle search input change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Search form submit
  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    filterProducts();
  };
  
  // Filter when category or search changes
  useEffect(() => {
    filterProducts();
  }, [selectedCategory]); // Only auto-filter on category change, search requires submit
  
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our wide range of electronic products from trusted brands at competitive prices.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search products..."
                  className="w-full px-5 py-3 rounded-lg border text-blue-600 border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300 pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-3 text-gray-500 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaSearch size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar / Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-64 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                  <FaFilter size={16} className="mr-2" /> Categories
                </h2>
                <div className="space-y-2">
                  {productCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Products Grid */}
            <div className="flex-1">
              {visibleProducts.length === 0 ? (
                <div className="bg-gray-50 rounded-xl p-10 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any products matching your criteria.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                      filterProducts();
                    }}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visibleProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative h-48 md:h-56 bg-gray-200">
                        <div className="relative w-full h-full">
                          <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            unoptimized
                          />
                        </div>
                        {product.originalPrice && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                            Sale
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.tags.map((tag, i) => (
                            <span key={i} className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
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
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 