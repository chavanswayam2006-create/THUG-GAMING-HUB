import { siteConfig } from '../siteConfig';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';
import PricingSection from '../components/PricingSection';
import FeaturesSection from '../components/FeaturesSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] w-full relative overflow-hidden flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Background Video Theme */}
        <div className="absolute inset-0 z-0 h-full w-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="object-cover w-full h-full opacity-60"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter mb-2 text-[#ff9e80] drop-shadow-[0_4px_2px_rgba(0,0,0,0.8)]"
            style={{ WebkitTextStroke: '2px #5a1811' }}
          >
            {siteConfig.name}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-4xl font-black uppercase tracking-wider text-[#ffcf9e] mb-12 drop-shadow-lg"
          >
            Where Legends Are Forged.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/contact" className="px-6 py-3 bg-transparent border-2 border-[#ffcf9e] text-[#ffcf9e] font-black uppercase tracking-widest text-sm transition-all duration-300 rounded-none hover:bg-[#ffcf9e] hover:text-[#050505] flex items-center justify-center gap-2 group">
              <Gamepad2 size={18} className="group-hover:animate-pulse" />
              Book Your Session
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-6 w-full text-center z-20 px-4">
           <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#ffc1b2] drop-shadow-lg"
           >
             Forged In Fire, Born For Glory
           </motion.h2>
        </div>
      </section>

      {/* Pricing Section (Bounties) */}
      <PricingSection />

      {/* Features Section (Competitive Edge) */}
      <FeaturesSection />
    </div>
  );
}
