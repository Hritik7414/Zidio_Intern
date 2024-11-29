import React from 'react';
import PartnerSection from './PartnerSection';
import ServicesSection from './ServicesSection';
import TeamSection from './TeamSection';
import StatsSection from './StatsSection';
import WorkingProcess from './WorkingProcess';
import TestimonialsSection from './TestimonialsSection';
import ContactInfoSection from './ContactInfoSection';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './AboutPage';
import homeImage from './image/home.jpg';
import { Search, MapPin, Mail, Clock, Facebook, Twitter, Linkedin, Youtube, Briefcase, Users, Headphones } from 'lucide-react';
import ServicesSection2 from './ServicesSection2';
import NewsletterSection from './NewsletterSection';
import ContactUsSection from './ContactUs';




const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {/* Top bar */}
        <div className="bg-blue-700 text-white py-3 px-6 flex justify-between items-center text-sm font-medium">
          <div className="flex items-center space-x-6">
            <div className="flex items-center hover:text-blue-200 transition-colors">
              <MapPin size={16} className="mr-2" />
              <span>Bengaluru, Karnataka, India</span>
            </div>
            <div className="flex items-center hover:text-blue-200 transition-colors">
              <Mail size={16} className="mr-2" />
              <span>support@zidio.in</span>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center hover:text-blue-200 transition-colors">
              <Clock size={16} className="mr-2" />
              <span>9.00 am - 5.30 pm</span>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <Icon
                  key={index}
                  size={18}
                  className="hover:text-blue-200 transition-colors cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main header */}
        <header className="bg-white shadow-lg py-6 px-6 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-4xl font-black text-blue-700 tracking-tight mr-2">ZIDIO</div>
              <div className="text-sm font-semibold tracking-wider text-gray-600">DEVELOPMENT</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </Link>
              <Search className="text-gray-600 hover:text-blue-700 cursor-pointer transition-colors" />
            </nav>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md">
              Get A Quote
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero section */}
              <main className="flex-grow bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 overflow-hidden">
                <div className="container mx-auto px-6 py-24 flex items-center">
                  <div className="w-1/2 pr-12 animate-fade-in-left">
                    <h2 className="text-blue-200 text-lg font-semibold tracking-wider mb-4">
                      SOFTWARE DEVELOPMENT & CONSULTANCY
                    </h2>
                    <h1 className="text-white text-6xl font-black leading-tight mb-6">
                      BUSINESS INNOVATION THROUGH TECHNOLOGY
                    </h1>
                    <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                      Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
                    </p>
                    <div className="space-x-6">
                      <button className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                        Let's Talk →
                      </button>
                      <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all">
                        Read More →
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-end animate-fade-in-right">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-30"></div>
                      <img
                        src={homeImage}
                        alt="Smiling professional"
                        className="relative rounded-full w-96 h-96 object-cover shadow-2xl ring-4 ring-white/20"
                      />
                    </div>
                  </div>
                </div>
              </main>

              {/* Features section */}
              <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                      icon={<Briefcase className="w-14 h-14 text-blue-600" />}
                      title="3+ Year Experience"
                      description="Over 3 years of expertise delivering unparalleled solutions and insights for your success"
                    />
                    <FeatureCard
                      icon={<Users className="w-14 h-14 text-blue-600" />}
                      title="Dedicated Members"
                      description="Passionate team members dedicated to exceeding expectations and achieving mutual success"
                    />
                    <FeatureCard
                      icon={<Headphones className="w-14 h-14 text-blue-600" />}
                      title="Valuable Supports"
                      description="Tailored support and guidance ensuring reliability and innovation every step of the way"
                    />
                  </div>
                </div>
              </section>
              <PartnerSection />
              <ServicesSection />
              <TeamSection />
              <StatsSection />
              <WorkingProcess />
              <TestimonialsSection />
              <ContactInfoSection />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={
            <>
              <ServicesSection2 />
              <NewsletterSection />
            </>
          } />
          <Route path="/contact" element={<ContactUsSection />} />

        </Routes>
        <Footer />
      </div>
    </Router >
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-4 hover:scale-105">
      <div className="flex justify-center mb-6">
        <div className="bg-blue-50 rounded-full p-4 group-hover:bg-blue-100 transition-colors transform group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-6 border-t-2 border-blue-600 w-20 mx-auto transform origin-left transition-transform group-hover:scale-x-150"></div>
    </div>
  );
};

export default App;