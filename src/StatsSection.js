import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { number: "1K+", label: "HAPPY CUSTOMERS", icon: "👥", color: "bg-blue-500" },
    { number: "2K+", label: "WORKS COMPLETED", icon: "✓", color: "bg-green-500" },
    { number: "99+", label: "EXPERT MEMBERS", icon: "👨‍💻", color: "bg-purple-500" },
    { number: "100%", label: "SATISFACTION RATES", icon: "⭐", color: "bg-yellow-500" }
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const incrementCounters = () => {
      setCounters(prevCounters => 
        prevCounters.map((counter, idx) => {
          const target = parseInt(stats[idx].number) || 100;
          return counter < target ? counter + 1 : counter;
        })
      );
    };

    const interval = setInterval(incrementCounters, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#000c24] to-[#001a3d] py-16 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 200 
              }}
              whileHover={{ scale: 1.1 }}
              className="text-center transform transition-transform duration-300 relative group"
            >
              <div className={`absolute -inset-2 ${stat.color} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-2 text-white">
                  {typeof counters[index] === 'number' ? 
                    `${counters[index]}${stat.number.includes('%') ? '%' : '+'}` : 
                    stat.number}
                </div>
                <div className="text-xl opacity-80 uppercase tracking-wider">{stat.label}</div>
                <div className="text-4xl mt-4 opacity-80 transform group-hover:scale-125 transition-transform">
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;