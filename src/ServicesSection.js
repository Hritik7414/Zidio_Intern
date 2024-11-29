import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Cloud, Code, Megaphone, Box, Database, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      number: "01",
      title: "Graphic Design",
      description: "Creating visually stunning designs that capture your brand's essence and message."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      number: "02",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure that enhances your business flexibility and efficiency."
    },
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      number: "03",
      title: "Web Development",
      description: "Building responsive, high-performance websites with cutting-edge technologies."
    },
    {
      icon: <Megaphone className="w-12 h-12 text-blue-600" />,
      number: "04",
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions that drive growth and engagement."
    },
    {
      icon: <Box className="w-12 h-12 text-blue-600" />,
      number: "05",
      title: "3D Visualization",
      description: "Immersive 3D experiences that bring your ideas to life with stunning detail."
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      number: "06",
      title: "Hosting Services",
      description: "Reliable and secure hosting solutions for optimal performance."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }} 
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }} 
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-2 rounded-full mb-6 shadow-lg"
          >
            IT Support For Business
          </motion.div>
          <h2 className="text-white text-5xl md:text-6xl font-black mb-6 leading-tight">
            What we are
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Offering
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl p-8 relative overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300"
                    >
                      {service.icon}
                    </motion.div>
                    <span className="text-blue-600/40 text-3xl font-black tracking-tight">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-blue-600 font-semibold group/button cursor-pointer"
                  >
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-5 h-5 transform group-hover/button:translate-x-2 transition-transform" />
                  </motion.div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;