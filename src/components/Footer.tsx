import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Rakshit Communication</h3>
            <p className="text-gray-300 mb-4">
              Your trusted electronics shop in Dungla providing quality products and excellent service since 2014.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/share/1X8o7TiCVH/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://www.instagram.com/rakshitcommunication/" className="text-gray-300 hover:text-pink-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://wa.me/919828044966" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Near Bus Stand, Dungla, Chittorgarh, Rajasthan, India - 312402</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98280 44966</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">mahaveer4580@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Rakshit Communication. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 