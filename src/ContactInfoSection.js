import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfoSection = () => {
  const contactItems = [
    { 
      icon: Phone, 
      title: "Call us Anytime", 
      content: "+91845580796", 
      link: "tel:+918455807965",
      color: "blue"
    },
    { 
      icon: Mail, 
      title: "Send E-Mail", 
      content: "support@zidio.in", 
      link: "mailto:support@zidio.in",
      color: "green"
    },
    { 
      icon: Clock, 
      title: "Opening Hours", 
      content: "Mon - Fri (9.00 - 5.30)",
      color: "purple"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300 
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-[Inter]">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We're here to help and answer any questions you might have</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {contactItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-${item.color}-500`}>
                <div className="flex flex-col items-center">
                  <div className="mb-6 relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className={`absolute inset-0 bg-${item.color}-100 rounded-full scale-150 opacity-20 group-hover:scale-175 transition-transform duration-300`}
                    ></motion.div>
                    <div className={`relative bg-${item.color}-50 rounded-full p-5`}>
                      <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className={`text-${item.color}-600 font-medium hover:text-${item.color}-700 transition-colors`}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.content}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;