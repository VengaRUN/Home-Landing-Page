import React from 'react';
import { MapPin, Clock, Mountain } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="bg-cream py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl text-primary mb-8 leading-tight">
              Close to Town.<br/>
              <span className="italic text-secondary">Far From the Noise.</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Clock size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">8 Minutes to Downtown</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    You can be parked downtown in under 10 minutes. No traffic jams. Just a quick, scenic drive to restaurants, shops, and groceries.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Mountain size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">4 Minutes to Adventure</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Mad Creek, Swamp Park, and Hot Springs trails are your neighbors. 5-mile morning loops or 15-mile Saturday slogs—right out your door.
                  </p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <MapPin size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-charcoal mb-2">0 Minutes to Nature</h3>
                  <p className="font-sans text-gray-600 leading-relaxed">
                    Deer in the driveway. Elk in the valley. And absolute silence in the backyard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://venga.run/wp-content/uploads/home-images/SG-4-Winter.webp?q=80&w=2670&auto=format&fit=crop" 
                alt="Snowy winter road in Colorado" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white p-4 border-l-2 border-secondary">
                <p className="font-script text-3xl mb-2">Winter Thrills</p>
                <p className="font-sans text-sm uppercase tracking-widest font-semibold">Best Sledding Driveway in Routt County</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
