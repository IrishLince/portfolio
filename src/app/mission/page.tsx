'use client';

import { Navbar } from '../../components/navbar';
import { Footer } from '../../components/footer';
import { ArrowRight, Target, Users, Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const missionCards = [
    {
      Icon: Target,
      title: "Our Vision",
      description: "To be a leading force in technological innovation, creating solutions that make a meaningful impact on people's lives."
    },
    {
      Icon: Users,
      title: "Our Values",
      description: "Innovation, integrity, collaboration, and excellence guide everything we do as we strive to create positive change."
    },
    {
      Icon: Heart,
      title: "Our Promise",
      description: "We're committed to delivering exceptional value while maintaining the highest standards of quality and service."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex flex-col">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content that takes remaining space */}
      <main className="flex-grow container mx-auto pt-16 md:pt-24 pb-16 px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <section className={`flex flex-col items-center justify-center text-center mb-12 md:mb-16 opacity-0 ${
          isVisible ? 'animate-fade-in' : ''
        }`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Our Mission
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Empowering individuals through technology and innovation to create positive change in the world.
          </p>
        </section>

        {/* Mission Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {missionCards.map(({ Icon, title, description }, index) => (
            <div 
              key={title}
              className={`flex flex-col items-center md:items-start text-center md:text-left 
                bg-gray-800/50 p-6 md:p-8 rounded-lg backdrop-blur-sm border border-gray-700 
                hover:border-gray-600 transition-all duration-300 opacity-0 
                ${isVisible ? 'animate-scale-in' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Icon className="w-12 h-12 text-[#ff4d00] mb-4" />
              <h2 className="text-xl font-bold text-white mb-3">
                {title}
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className={`flex flex-col items-center text-center bg-gray-800/50 p-6 md:p-8 
          lg:p-12 rounded-lg backdrop-blur-sm border border-gray-700 opacity-0 
          ${isVisible ? 'animate-slide-in' : ''}`}
          style={{ animationDelay: '800ms' }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-6 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Together, we can create innovative solutions that address real-world challenges and improve lives.
          </p>
          <button className="inline-flex items-center justify-center gap-2 bg-[#ff4d00] text-white 
            px-6 py-3 rounded-lg hover:bg-[#ff6b33] transition-all duration-300 
            hover:transform hover:scale-105 text-base md:text-lg font-medium">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </section>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}