'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };
  
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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to help! Contact us with any questions or visit our store in Dungla.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">
                Near Bus Stand, Dungla, Chittorgarh, Rajasthan, India - 312402
              </p>
              <a
                href="https://maps.app.goo.gl/6wAsuheibLcNnBLY6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Get Directions
              </a>
            </motion.div>
            
            {/* Contact Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-green-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Call or WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                +91 98280 44966
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:+919828044966"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919828044966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline flex items-center"
                >
                  <FaWhatsapp className="mr-1" /> WhatsApp
                </a>
              </div>
            </motion.div>
            
            {/* Contact Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-purple-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                mahaveer4580@gmail.com
              </p>
              <a
                href="mailto:mahaveer4580@gmail.com"
                className="text-blue-600 font-medium hover:underline"
              >
                Send Email
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map & Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-[400px] md:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-md"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.666736220251!2d74.33119987502742!3d24.506857478161887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3966368b41c98231%3A0x5bc361e783bc7d81!2sRakshit%20Communication!5e1!3m2!1sen!2sin!4v1742741471151!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                
                {formStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting us. We'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-300 resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-6 py-3 rounded-lg transition-opacity duration-300 ${
                        formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                      }`}
                    >
                      {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Business Hours Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Business Hours
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit us at your convenience during our operating hours.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-xl shadow-md max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                <FaClock className="text-blue-600" size={28} />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-medium text-gray-800">Monday - Saturday</span>
                <span className="text-blue-600 font-bold">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="font-medium text-gray-800">Sunday</span>
                <span className="text-blue-600 font-bold">10:00 AM - 7:00 PM</span>
              </div>
              
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Need assistance outside business hours? Contact us through WhatsApp or email, and we'll get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 