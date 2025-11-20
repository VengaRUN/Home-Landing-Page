import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Story />
        <Features />
        <Location />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
};

export default App;