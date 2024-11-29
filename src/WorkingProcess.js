import React from 'react';
import { motion } from 'framer-motion';

const WorkingProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Start A Project",
      description: "Kick off your project with a clear understanding of your goals and requirements, setting the foundation for success.",
      icon: () => (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-blue-400 to-purple-500"
    },
    {
      number: "02",
      title: "Project Analysis",
      description: "Conduct a thorough analysis to create a tailored strategy, ensuring all aspects align with your business objectives.",
      icon: () => (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-green-400 to-blue-500"
    },
    {
      number: "03",
      title: "Deliver to Success",
      description: "Execute and deliver the project with precision, ensuring it meets your expectations and drives your success.",
      icon: () => (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 relative overflow-hidden">
      {/* Background Glow Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with Advanced Animations */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 10 
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p 
            initial={{ letterSpacing: "0em" }}
            whileInView={{ letterSpacing: "0.2em" }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-semibold mb-4 tracking-wide uppercase text-sm"
          >
            Working Process
          </motion.p>
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            We Follow the Easy
            <motion.span 
              initial={{ backgroundSize: "0% 100%" }}
              whileInView={{ backgroundSize: "100% 100%" }}
              transition={{ duration: 1 }}
              className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:0%_100%] bg-no-repeat"
            >
              Working Steps
            </motion.span>
          </h2>
        </motion.div>

        {/* Process Steps with Advanced Interactions */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                delay: index * 0.3 
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                whileHover={{ 
                  scale: 1.05,
                  rotate: index % 2 === 0 ? 2 : -2
                }}
                className="bg-gradient-to-br from-gray-800 to-gray-850 rounded-2xl p-8 h-full group"
              >
                {/* Number Badge with Gradient */}
                <motion.div 
                  whileHover={{ rotate: 0, scale: 1.2 }}
                  className={`absolute -top-4 -right-4 bg-gradient-to-r ${step.gradient} text-white w-14 h-14 rounded-xl flex items-center justify-center font-bold shadow-2xl transform rotate-12`}
                >
                  {step.number}
                </motion.div>

                {/* Animated Icon */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0.6 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6 text-blue-400 group-hover:text-white transition-colors duration-300"
                >
                  {step.icon()}
                </motion.div>

                {/* Content */}
                <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;