import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// Assuming image imports remain the same
import Ranjan from './image/ranjan.png';
import Suraj from './image/suraj.png';
import David from './image/david.png';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mr. Ranjan Kumar Senapati",
      image: Ranjan,
      text: "Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn't be happier with the results.",
      rating: 5
    },
    {
      id: 2,
      name: "Mr. Suraj Adhikari",
      image: Suraj,
      text: "Working with Zidio was a game-changer for our business. Their innovative solutions and dedicated support made the entire process smooth and efficient.",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      image: David,
      text: "The team at Zidio demonstrated exceptional expertise and commitment. Their attention to detail and strategic approach helped us achieve outstanding results.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const navigate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 'next') {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => navigate('next'), 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction === 'next' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction === 'next' ? -1000 : 1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h4 className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">Testimonials</h4>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div 
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <motion.button
                onClick={() => navigate('prev')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </motion.button>
            </motion.div>

            <motion.div 
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <motion.button
                onClick={() => navigate('next')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </motion.button>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-100" />
              
              <div className="text-center">
                <div className="flex justify-center items-center mb-8 relative h-24">
                  <AnimatePresence initial={false} custom={direction}>
                    {testimonials.map((testimonial, index) => 
                      index === currentIndex && (
                        <motion.div
                          key={testimonial.id}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                          }}
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={1}
                          onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            
                            if (swipe < -swipeConfidenceThreshold) {
                              navigate('next');
                            } else if (swipe > swipeConfidenceThreshold) {
                              navigate('prev');
                            }
                          }}
                          className="absolute w-24 h-24 rounded-full border-4 border-blue-500 overflow-hidden"
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      )
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative h-[200px]">
                  <AnimatePresence initial={false} custom={direction}>
                    {testimonials.map((testimonial, index) => 
                      index === currentIndex && (
                        <motion.div
                          key={testimonial.id}
                          custom={direction}
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                          }}
                          className="absolute w-full"
                        >
                          <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex justify-center space-x-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-yellow-400 fill-current"
                              />
                            ))}
                          </div>
                          
                          <h4 className="text-xl font-bold text-gray-900 mb-1">
                            {testimonial.name}
                          </h4>
                        </motion.div>
                      )
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;