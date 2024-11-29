import React from 'react';
import ServicesSectionAbout from './ServicesSectionabout';
import PartnerSection from './PartnerSection';
import TeamSection from './TeamSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';

const AboutPage = () => {
  return (
    <div className="pt-20"> {/* Add padding-top to account for fixed header */}
      {/* About Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-white text-4xl font-bold mb-4">About Us</h1>
          <div className="flex items-center text-blue-100">
            <span>Home</span>
            <span className="mx-2">{'>'}</span>
            <span>About</span>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <ServicesSectionAbout />
      <PartnerSection/>
      <TeamSection/>
      <StatsSection/>
      <TestimonialsSection/>
    </div>
  );
};

export default AboutPage;