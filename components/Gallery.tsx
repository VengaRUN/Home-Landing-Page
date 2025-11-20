import React from 'react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery">
      {/* Parallax Section */}
      <div 
        className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: 'url("https://venga.run/wp-content/uploads/home-images/SG-2.webp?q=80&w=2600&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="font-script text-5xl md:text-7xl text-white mb-4 drop-shadow-lg">Deck Life is the Best Life</h2>
          <p className="font-sans text-white text-lg tracking-widest uppercase font-medium drop-shadow-md">Sunsets you'll take pictures of (Every time)</p>
        </div>
      </div>

      {/* Split Feature */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-primary text-white p-16 md:p-24 flex flex-col justify-center">
            <h3 className="font-serif text-4xl mb-6 leading-tight">Dinner, Drinks & <br/><span className="text-secondary italic">Do-Nothing Moments</span></h3>
            <p className="font-sans text-gray-300 leading-relaxed mb-8 text-lg">
                The covered front deck is a daily highlight for at least 3 seasons. We’ve had birthday dinners, morning coffees, and quiet sunsets up there. You’re surrounded by trees, wrapped in sky, and everything tastes better outside.
            </p>
            <div className="w-16 h-1 bg-secondary"></div>
        </div>
        <div className="h-[500px] md:h-auto">
            <img 
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2670&auto=format&fit=crop" 
                alt="Relaxing deck scene" 
                className="w-full h-full object-cover"
            />
        </div>
      </div>
      
      {/* Lower Level */}
      <div className="bg-cream py-24 px-6">
          <div className="max-w-5xl mx-auto bg-white shadow-xl overflow-hidden flex flex-col md:flex-row rounded-sm">
              <div className="md:w-1/2 h-80 md:h-auto">
                   <img 
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop"
                    alt="Wide open interior living space"
                    className="w-full h-full object-cover"
                   />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                  <h3 className="font-serif text-3xl text-primary mb-4">Flexible Living Space</h3>
                  <p className="font-sans text-gray-600 mb-8 leading-relaxed">
                      The lower level is wide open—literally and creatively. It could be a separate unit, an office, a gym, or a theater room. Basically, it’s a choose-your-own-adventure space.
                  </p>
                  <button className="self-start border-b-2 border-primary text-primary font-sans uppercase tracking-widest text-xs pb-1 hover:text-secondary hover:border-secondary transition-colors">
                    View Floor Plans
                  </button>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Gallery;
