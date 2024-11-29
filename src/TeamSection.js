import React from 'react';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import Animesh from './image/animesh.jpg';
import Salma from './image/salama.jpg';
import Chandan from './image/chandan.png';
import Harsa from './image/harash.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Animesh Singh",
      role: "Full Stack Web Developer",
      image: Animesh
    },
    {
      name: "Salma Husna Salsabila",
      role: "UI/UX Designer",
      image: Salma
    },
    {
      name: "Chandan Mishra",
      role: "Data Scientist",
      image: Chandan
    },
    {
      name: "Harsa Dash",
      role: "Developer Team Lead",
      image: Harsa
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
    <section className="bg-gray-50 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-6"
      >
        <div className="flex justify-between items-center mb-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-600 font-medium mb-2">Dedicated Team</p>
            <h2 className="text-4xl font-bold">
              Meet Our Dedicated Members<br />
              For Any Inquiry
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
          >
            <span>ALL MEMBERS</span>
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center ml-2">
              <span className="text-blue-600 text-xs">→</span>
            </div>
          </motion.button>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden group"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-80 overflow-hidden"
              >
                <motion.img 
                  src={member.image} 
                  alt={member.name}
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <motion.button
                  whileHover={{ rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors"
                >
                  <Share2 size={18} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamSection;