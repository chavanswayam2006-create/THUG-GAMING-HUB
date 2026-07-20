import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80",
];

export default function GamingGallery() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-thug-dark pt-32 pb-20 text-white px-4">
      <div className="container mx-auto" ref={containerRef}>
        <div className="text-center mb-16 gallery-item">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-4 drop-shadow-lg">
            Hub Gallery
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Glimpses of the battlefield.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="gallery-item break-inside-avoid relative group overflow-hidden border border-white/5 rounded-sm">
              <div className="absolute inset-0 bg-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <img 
                src={img} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                alt="Gaming Setup" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
