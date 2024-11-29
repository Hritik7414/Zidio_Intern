import React from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';

const ContactUsSection = () => {
  return (
    <div className="bg-blue-600 py-12 text-white">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">Don't Forget to Contact Us</h2>
          <div className="flex items-center space-x-4 mb-4">
            <MapPin size={24} />
            <span>Bengaluru, Karnataka, India</span>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <Mail size={24} />
            <span>support@zidio.in</span>
          </div>
          <div className="flex items-center space-x-4">
            <Clock size={24} />
            <span>9.00 AM to 5.00 PM</span>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Get A Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection; 