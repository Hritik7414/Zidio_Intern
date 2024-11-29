import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, ArrowRight, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#000c24] to-[#001845] text-white font-sans">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img src="/api/placeholder/48/48" alt="ZIDIO" className="mr-3" />
              <div className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                ZIDIO
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 font-light">
              At Zidio Development, we craft innovative software solutions that drive success. 
              Our passion for excellence and cutting-edge technology sets us apart.
            </p>
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:translate-x-1 flex items-center shadow-lg hover:shadow-blue-500/30">
              Explore More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Company
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {['About', 'Our Team', 'Contact', 'Careers'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 transition-all duration-300 group-hover:w-3"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></div>
              </h3>
              <ul className="space-y-4">
                {[
                  'IT Solutions',
                  'Cyber Security',
                  'Digital Marketing',
                  'Machine Learning',
                  'Cloud Services'
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-300 hover:text-white flex items-center group">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 transition-all duration-300 group-hover:w-3"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Newsletter
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full"></div>
            </h3>
            <p className="text-gray-300 mb-6 font-light">Stay updated with our latest news and updates</p>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-blue-500/30">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zidio Development. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;