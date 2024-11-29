import React from 'react';
import { Globe, ShoppingCart, Database, Users } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105 hover:border-blue-500 border-2 border-transparent">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-blue-50">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSectionAbout = () => {
  const services = [
    {
      icon: Globe,
      title: "Business Growth",
      description: "Boost your business with strategies to reach new markets, optimize operations, and increase profits."
    },
    {
      icon: ShoppingCart,
      title: "eCommerce",
      description: "Enhance your online presence with user-friendly eCommerce solutions and secure payment gateways."
    },
    {
      icon: Database,
      title: "Secure Database",
      description: "Safeguard your data with robust security measures and industry-standard compliance."
    },
    {
      icon: Users,
      title: "Audience Growth",
      description: "Expand your reach by connecting with your target audience to drive visibility and growth."
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionAbout;