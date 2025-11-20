import React from 'react';
import { Trees, Star, MapPin, Unlock, CloudRain, Coffee } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, detail, image }) => (
  <div className="group h-[450px] perspective-1000 cursor-pointer">
    <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-xl rounded-sm overflow-hidden">
      
      {/* Front Side */}
      <div className="absolute inset-0 bg-white backface-hidden flex flex-col">
        <div className="h-3/5 w-full overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
        </div>
        <div className="h-2/5 p-8 flex flex-col items-center justify-center text-center bg-white relative">
          <div className="absolute -top-8 bg-white p-3 rounded-full shadow-md text-primary mb-4 transform group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="font-serif text-2xl text-primary mb-2 mt-4">{title}</h3>
          <p className="font-sans text-xs text-gray-500 uppercase tracking-widest">{description}</p>
        </div>
      </div>

      {/* Back Side */}
      <div className="absolute inset-0 bg-primary text-white backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-6 text-secondary scale-125">
            {icon}
        </div>
        <h3 className="font-serif text-2xl mb-4">{title}</h3>
        <p className="font-sans font-light leading-relaxed text-sm md:text-base text-gray-100">
          {detail}
        </p>
        <div className="mt-6 w-12 h-1 bg-secondary mx-auto"></div>
      </div>

    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <Trees size={28} />,
      title: "Treehouse Vibes",
      description: "3+ Acres of Privacy",
      detail: "Surrounded by trees in every direction. It’s like living in a grown-up treehouse, but with hot water and a killer deck. In winter, snow dusts the branches just so.",
      image: "https://venga.run/wp-content/uploads/home-images/TreeHouse.webp?q=80&w=2674&auto=format&fit=crop"
    },
    {
      icon: <Star size={28} />,
      title: "The Night Show",
      description: "Unmatched Stargazing",
      detail: "Forget Netflix. With no streetlights, your nightly entertainment is the Milky Way, meteor showers, and storms rolling over Sleeping Giant.",
      image: "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=2670&auto=format&fit=crop"
    },
    {
      icon: <Unlock size={28} />,
      title: "Room to Dream",
      description: "No HOA. No Limits.",
      detail: "Want to build a workshop? Park a Sprinter van? This land gives you options, not limits. No clipboard-wielding neighbors here.",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-primary mb-4">Why You'll Stay</h2>
          <p className="font-sans text-gray-500 max-w-2xl mx-auto">It's not just a house. It's a quality of life decision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </section>
  );
};

export default Features;
