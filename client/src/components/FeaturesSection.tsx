import { motion } from 'framer-motion';
import { Gauge, Cpu, Armchair, Users } from 'lucide-react';
import './FeaturesAtom.css';

const features = [
  {
    title: "ZERO LATENCY",
    desc: "Fiber-optic backbone ensuring sub-5ms ping to major servers.",
    icon: <Gauge size={20} className="text-[#ffcf9e]" />
  },
  {
    title: "ELITE HARDWARE",
    desc: "Latest generation GPUs and CPUs across all stations.",
    icon: <Cpu size={20} className="text-[#ffcf9e]" />
  },
  {
    title: "ERGONOMICS",
    desc: "Premium seating to keep you focused during long campaigns.",
    icon: <Armchair size={20} className="text-[#ffcf9e]" />
  },
  {
    title: "COMMUNITY",
    desc: "Join a clan of like-minded warriors and compete in local tourneys.",
    icon: <Users size={20} className="text-[#ffcf9e]" />
  }
];

function AtomAnimation() {
  return (
    <div className="atom-container">
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`p-${i}`}
          className="atom-particle"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* The 3D atom */}
      <div className="atom-scene">
        {/* Nucleus */}
        <div className="atom-nucleus">
          <div className="atom-nucleus-inner" />
          <div className="atom-nucleus-glow" />
        </div>

        {/* Orbit 1 */}
        <div className="atom-orbit atom-orbit-1">
          <div className="atom-electron" />
        </div>

        {/* Orbit 2 */}
        <div className="atom-orbit atom-orbit-2">
          <div className="atom-electron" />
        </div>

        {/* Orbit 3 */}
        <div className="atom-orbit atom-orbit-3">
          <div className="atom-electron" />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: CSS 3D Atom */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative flex items-center justify-center">
            <AtomAnimation />
          </div>

          {/* Right Side: Features Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-black text-[#ffc1b2] tracking-[0.3em] uppercase mb-4"
            >
              The Competitive Edge
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-sm leading-relaxed mb-12"
            >
              We don't just provide PCs; we provide an ecosystem engineered for victory. Every component, every wire, every pixel is calibrated for peak performance.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 shrink-0 bg-white/5 flex items-center justify-center border border-white/5">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-2">
                      {f.title}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
