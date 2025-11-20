import React from 'react';
import { COPY } from '../constants';

const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-32 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="mb-8">
              <span className="font-script text-6xl text-secondary opacity-60 block -mb-4 ml-[-1rem]">
                Home
              </span>
              <h2 className="font-serif text-5xl text-primary">
                STORY
              </h2>
            </div>
            
            <div className="space-y-6 font-sans text-charcoal leading-relaxed text-lg font-light">
              {COPY.story.letter.map((paragraph, index) => (
                <p key={index} className={index === 2 ? "font-serif text-2xl text-primary italic border-l-4 border-secondary pl-6 py-2 my-8" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-10">
              <p className="font-script text-4xl text-primary">
                {COPY.story.signature}
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img 
                src="https://venga.run/wp-content/uploads/home-images/DFL-1a.webp?q=80&w=2565&auto=format&fit=crop" 
                alt="Home nestled in nature" 
                className="w-full shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 -z-10 rounded-full blur-2xl"></div>
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary/10 -z-10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg max-w-xs hidden md:block z-20 border-l-4 border-primary">
              <p className="font-serif text-primary italic text-lg">
                "You can’t build privacy, or buy quiet."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Story;
