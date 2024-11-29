import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Settings, 
  RefreshCw, 
  Brain, 
  Globe, 
  Code, 
  Shield, 
  BarChart3 
} from 'lucide-react';

const ServicesSection2 = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Deliver scalable cloud solutions to enhance your business's flexibility and operational efficiency.",
    },
    {
      icon: Settings,
      title: "IT Management",
      description: "Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.",
    },
    {
      icon: RefreshCw,
      title: "Software Renew",
      description: "Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Develop and implement machine learning models to automate processes and drive intelligent decision-making.",
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Design and build responsive, high-performance websites using the latest web technologies.",
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.",
    },
    {
      icon: BarChart3,
      title: "Data Analytic",
      description: "Transform raw data into valuable insights, enabling informed and strategic business decisions.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-gray-50 to-blue-50 py-24"
    >
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-blue-600 font-semibold mb-2"
          >
            What We Provides?
          </motion.p>
          <motion.h2 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-4"
          >
            Provide Interactive IT Solution &
          </motion.h2>
          <motion.h2 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold"
          >
            Business Services
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group bg-white rounded-2xl p-8 shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                overflow-hidden relative"
            >
              {/* Service Icon */}
              <motion.div 
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 
                  group-hover:bg-blue-100 transition-colors duration-300 relative z-10"
              >
                <service.icon className="w-8 h-8 text-blue-600 group-hover:scale-110 
                  transition-transform duration-300" />
              </motion.div>
              
              {/* Service Title */}
              <motion.h3 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-xl font-bold mb-4 group-hover:text-blue-600 
                  transition-colors duration-300 relative z-10"
              >
                {service.title}
              </motion.h3>
              
              {/* Service Description */}
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                className="text-gray-600 mb-6 group-hover:text-gray-700 
                  transition-colors duration-300 relative z-10"
              >
                {service.description}
              </motion.p>
              
              {/* Learn More Button */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-blue-600 font-semibold flex items-center 
                  group-hover:text-blue-700 transition-all duration-300 
                  group-hover:translate-x-2"
              >
                Learn More
                <motion.span 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </motion.button>

              {/* Hover Indicator */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute bottom-0 left-0 h-1 bg-blue-600"
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesSection2;