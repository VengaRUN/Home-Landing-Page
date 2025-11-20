import React from 'react';
import { COPY } from '../constants';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2574&auto=format&fit=crop" 
          alt="Steamboat Springs Mountain Landscape" 
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        <h2 className="text-white font-sans text-xs md:text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in-up shadow-sm">
          Steamboat Springs, CO
        </h2>
        <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 drop-shadow-xl animate-fade-in-up delay-100">
          {COPY.hero.title}
        </h1>
        <p className="text-gray-100 font-sans text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200 drop-shadow-md">
          {COPY.hero.subtitle}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a 
            href="#contact" 
            className="bg-white text-primary px-8 py-4 uppercase tracking-widest font-medium text-sm hover:bg-cream transition transform hover:-translate-y-1 shadow-lg"
          >
            Schedule Private Tour
          </a>
          <a 
            href="#story" 
            className="border border-white text-white px-8 py-4 uppercase tracking-widest font-medium text-sm hover:bg-white/10 transition backdrop-blur-sm"
          >
            Read The Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/80">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;