import React from 'react';
import teamimg from './image/team.jpg';
import profimg from './image/prof.jpg';
import { Users, Headphones } from 'lucide-react';

const PartnerSection = () => {
  const benefits = [
    {
      icon: <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-colors">
        <span className="text-blue-600 text-2xl font-bold">$</span>
      </div>,
      title: "Cost Effective Solutions",
      description: "Optimized pricing for maximum value"
    },
    {
      icon: <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-colors">
        <Users className="text-blue-600 w-7 h-7" />
      </div>,
      title: "Expert & Dedicated Team",
      description: "Skilled professionals at your service"
    },
    {
      icon: <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-colors">
        <Headphones className="text-blue-600 w-7 h-7" />
      </div>,
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance available"
    },
    {
      icon: <div className="w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center bg-blue-50 group-hover:bg-blue-100 transition-colors">
        <span className="text-blue-600 text-2xl font-bold">✓</span>
      </div>,
      title: "100% Satisfaction",
      description: "Committed to exceeding expectations"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Experience badge - Moved more to the left */}
            <div className="absolute -top-6 -left-12 bg-blue-600 p-6 text-white rounded-2xl shadow-lg transform hover:scale-110 transition-transform z-10 animate-subtle-bounce">
              <div className="text-5xl font-black">3+</div>
              <div className="text-sm font-medium tracking-wider">Years Of<br />Experience</div>
            </div>

            {/* Image grid with hover effects */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group animate-fade-in-left">
                <div className="absolute inset-0 bg-blue-600/20 rounded-2xl transform scale-105 blur-xl group-hover:blur-2xl transition-all"></div>
                <img src={teamimg} alt="Team working" className="rounded-2xl w-full h-full object-cover shadow-xl relative transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative group animate-fade-in-right mt-16">
                <div className="absolute inset-0 bg-blue-600/20 rounded-2xl transform scale-105 blur-xl group-hover:blur-2xl transition-all"></div>
                <img src={profimg} alt="Professional at work" className="rounded-2xl w-full h-full object-cover shadow-xl relative transform group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <div className="inline-block bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-full mb-4">
              Software Development & Services
            </div>
            <h2 className="text-4xl font-black mb-6 leading-tight text-gray-900">
              Your Reliable Partner for IT Services Dedicated to Your Success
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              At Zidio, we're your trusted IT services partner, ensuring your success with reliable solutions tailored to your business needs. Count on us for robust software development, comprehensive IT support, and cutting-edge technology solutions that empower your business to thrive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group hover:bg-white hover:shadow-xl rounded-xl p-6 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    {benefit.icon}
                    <div>
                      <div className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
