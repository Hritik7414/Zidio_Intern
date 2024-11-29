import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full bg-gradient-to-r from-blue-700 to-blue-500 py-24 overflow-hidden"
    >
      {/* Animated Hexagonal pattern overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l5.373 5.373v49.254L54.627 60H5.373L0 54.627V5.373L5.373 0h49.254zm-3.627 3H9v54h42V3zm-9 24l9 9-9 9-9-9 9-9zm-21 0l9 9-9 9-9-9 9-9z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          animation: 'hexagonRotate 10s linear infinite'
        }}
      />
      
      <div className="relative container mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-white space-y-4 text-center md:text-left">
            <motion.h2 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold"
            >
              Get Latest Update from ZIDIO
            </motion.h2>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-blue-100"
            >
              Stay Connected with Us
            </motion.p>
          </div>
          
          <motion.form 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit} 
            className="flex flex-col md:flex-row w-full md:w-auto gap-4"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="w-full md:w-80 px-6 py-3 rounded-lg text-gray-800 
                placeholder-gray-500 focus:outline-none focus:ring-2 
                focus:ring-blue-400 transition-all duration-300"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`px-8 py-3 font-semibold rounded-lg transition-all duration-300 
                ${isSubscribed 
                  ? 'bg-green-500 text-white' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
            >
              {isSubscribed ? 'Subscribed!' : 'Subscribe'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes hexagonRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

export default NewsletterSection;