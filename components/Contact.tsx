import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          {/* Call to Action */}
          <div className="lg:w-1/2">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              You Have to <span className="italic text-secondary">Hear</span> the Silence to Believe It.
            </h2>
            <p className="font-sans text-gray-400 text-lg mb-10 max-w-md">
              Pictures don't do it justice. Come stand on the deck and see how your shoulders drop.
            </p>
            
            <div className="bg-[#363636] p-8 rounded-sm border border-gray-700">
              <h3 className="font-sans uppercase tracking-widest text-sm text-secondary mb-6">Schedule a Private Tour</h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-500 rounded-full overflow-hidden border-2 border-secondary">
                   <img 
                    src="https://venga.run/wp-content/uploads/home-images/RH-KD.webp?q=80&w=1000&auto=format&fit=crop" 
                    alt="Randall Hannaway & Kevin Detrich" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <div>
                  <p className="font-serif text-xl">{CONTACT_INFO.agent}</p>
                  <p className="text-gray-400 text-sm">Licensed Real Estate Agent</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <a href={`tel:${CONTACT_INFO.phone.replace(/-/g, '')}`} className="flex items-center justify-center gap-3 bg-secondary hover:bg-white hover:text-primary text-white px-6 py-4 transition duration-300 uppercase tracking-wider font-medium text-sm">
                  <Phone size={18} />
                  Call {CONTACT_INFO.phone}
                </a>
                <button className="flex items-center justify-center gap-3 border border-gray-600 hover:border-white hover:text-secondary text-gray-300 px-6 py-4 transition duration-300 uppercase tracking-wider font-medium text-sm">
                  <Mail size={18} />
                  Email Cheryl
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white text-charcoal p-10 md:p-12 shadow-2xl rounded-sm">
            <h3 className="font-serif text-3xl text-primary mb-2">Request Info / Download Brochure</h3>
            <p className="text-gray-500 mb-8 font-sans text-sm">Get the full digital brochure and floor plans sent to your inbox.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">First Name</label>
                  <input type="text" className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 transition-colors bg-transparent" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Last Name</label>
                  <input type="text" className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 transition-colors bg-transparent" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                <input type="email" className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 transition-colors bg-transparent" placeholder="jane@example.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Phone (Optional)</label>
                <input type="tel" className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 transition-colors bg-transparent" placeholder="(555) 555-5555" />
              </div>
              
              <div className="pt-4">
                <button className="group w-full bg-primary text-white py-4 px-6 flex items-center justify-between hover:bg-opacity-90 transition">
                  <span className="uppercase tracking-widest font-medium">Send Request</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-sans">
          <p>&copy; 2024 {CONTACT_INFO.address}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Contact;
