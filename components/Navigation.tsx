import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Story', href: '#story' },
    { name: 'The Lifestyle', href: '#features' },
    { name: 'Location', href: '#location' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-serif font-bold text-xl md:text-2xl tracking-wide ${isScrolled ? 'text-primary' : 'text-white'}`}>
          42485 DEERFOOT LN
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-sans text-sm font-medium tracking-widest uppercase hover:opacity-70 transition ${isScrolled ? 'text-charcoal' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-primary text-white px-6 py-2 rounded-none font-sans text-sm uppercase tracking-wider hover:bg-opacity-90 transition"
          >
            Book Tour
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
             <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
             <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cream shadow-lg py-8 px-6 flex flex-col space-y-6 border-t border-gray-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-serif text-xl text-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
             href="#contact"
             className="bg-primary text-white px-6 py-3 text-center uppercase tracking-wider"
             onClick={() => setIsMenuOpen(false)}
          >
            Book Tour
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;