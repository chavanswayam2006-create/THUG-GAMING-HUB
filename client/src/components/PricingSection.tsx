import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FloatingBoxes() {
  const count = 75;
  const boxes = useMemo(() => {
    return Array.from({ length: count }).map(() => ({
      position: [
        Math.random() * 30 - 15,
        Math.random() * 20 - 10,
        Math.random() * -10
      ] as [number, number, number],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      ] as [number, number, number],
      scale: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.01,
      speedY: Math.random() * 0.02 + 0.005,
      rotSpeed: Math.random() * 0.02
    }));
  }, [count]);

  const groupRef = useRef<any>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((mesh: any, i: number) => {
        mesh.rotation.x += boxes[i].rotSpeed;
        mesh.rotation.y += boxes[i].rotSpeed;
        
        mesh.position.y += boxes[i].speedY;
        mesh.position.x += boxes[i].speedX;

        // Reset if it floats too high
        if (mesh.position.y > 10) {
          mesh.position.y = -10;
          mesh.position.x = Math.random() * 30 - 15;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {boxes.map((props, i) => (
        <mesh key={i} position={props.position} rotation={props.rotation} scale={props.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#991b1b" roughness={0.3} metalness={0.8} />
        </mesh>
      ))}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ef4444" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#dc2626" />
    </group>
  );
}

// PS5 pricing rows
const ps5Rates = [
  { players: 'Single Player', price: '₹100', unit: 'PP' },
  { players: 'Double', price: '₹70', unit: 'PP' },
  { players: 'Triple', price: '₹60', unit: 'PP' },
  { players: 'Squad (4 Players)', price: '₹50', unit: 'PP' }
];

// Happy Hour pricing rows
const happyHourRates = [
  { players: 'Single Player', oldPrice: '₹100', newPrice: '₹80', unit: 'PP' },
  { players: 'Double', oldPrice: '₹70', newPrice: '₹50', unit: 'PP' },
  { players: 'Triple', oldPrice: '₹60', newPrice: '₹50', unit: 'PP' },
  { players: 'Squad (4 Players)', oldPrice: '₹50', newPrice: '₹40', unit: 'PP' }
];

export default function PricingSection() {
  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden flex flex-col justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <FloatingBoxes />
        </Canvas>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#ffc1b2] mb-2 drop-shadow-md">
            Bounties
          </h2>
          <p className="text-gray-400 text-sm">
            Choose your rank. Pay the toll.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* CARD 1: PS5 Gaming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.6 }}
            className="relative bg-[#080808]/80 backdrop-blur-sm border border-white/5 p-8 transition-all duration-300 hover:border-[#ff4040]/50 hover:shadow-[0_0_30px_rgba(255,64,64,0.15)]"
          >
            <h3 className="text-2xl font-black uppercase text-white tracking-widest mb-2">
              PS5 Gaming
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-8">Per Player · Per Hour</p>

            <table className="w-full text-sm mb-8">
              <thead>
                <tr className="border-b border-white/10 text-gray-500 text-xs uppercase tracking-wider">
                  <th className="text-left pb-3 font-normal">Players</th>
                  <th className="text-right pb-3 font-normal">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {ps5Rates.map(r => (
                  <tr key={r.players}>
                    <td className="py-3 text-gray-300">{r.players}</td>
                    <td className="py-3 text-right">
                      <span className="text-[#ffcf9e] font-black">{r.price}</span>
                      <span className="text-gray-500 text-xs ml-1">{r.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link to="/contact" className="w-full py-4 border border-white/10 hover:border-[#ff4040] hover:bg-[#ff4040]/10 text-white uppercase tracking-[0.2em] text-xs font-black transition-all duration-300 block text-center">
              Book Now
            </Link>
          </motion.div>

          {/* CARD 2: PC Gaming — Most Popular */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative bg-[#080808]/80 backdrop-blur-sm border border-[#ff4040]/30 p-8 md:-translate-y-4 transition-all duration-300 hover:border-[#ff4040]/50 hover:shadow-[0_0_30px_rgba(255,64,64,0.15)]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffc1b2] text-[#050505] text-[10px] font-black tracking-widest px-4 py-1 uppercase rounded-sm shadow-md">
              Most Popular
            </div>

            <h3 className="text-2xl font-black uppercase text-white tracking-widest mb-2">
              PC Gaming
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-8">Per Player · Per Hour</p>

            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-black text-[#ffcf9e] tracking-tighter">₹70</span>
              <span className="text-sm text-gray-500 font-bold ml-1">/hr</span>
            </div>
            <p className="text-xs text-gray-500 mb-8">Per Player</p>

            <ul className="space-y-4 mb-10 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Check size={16} className="text-[#ff4040] shrink-0 mt-0.5" />
                <span>High-performance gaming PCs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={16} className="text-[#ff4040] shrink-0 mt-0.5" />
                <span>High-refresh monitors</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={16} className="text-[#ff4040] shrink-0 mt-0.5" />
                <span>Full game catalog access</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={16} className="text-[#ff4040] shrink-0 mt-0.5" />
                <span>Bring your own gear</span>
              </li>
            </ul>

            <Link to="/contact" className="w-full py-4 border border-white/10 hover:border-[#ff4040] hover:bg-[#ff4040]/10 text-white uppercase tracking-[0.2em] text-xs font-black transition-all duration-300 block text-center">
              Book Now
            </Link>
          </motion.div>

          {/* CARD 3: Happy Hour Deals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative bg-[#080808]/80 backdrop-blur-sm border border-white/5 p-8 transition-all duration-300 hover:border-[#ff4040]/50 hover:shadow-[0_0_30px_rgba(255,64,64,0.15)]"
          >
            <h3 className="text-2xl font-black uppercase text-white tracking-widest mb-2">
              Happy Hour
            </h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Play More, Pay Less</p>

            {/* PS5 Happy Hour Table */}
            <p className="text-[10px] text-[#ffc1b2] uppercase tracking-widest font-bold mb-2">PS5 Happy Hour</p>
            <table className="w-full text-sm mb-6">
              <thead>
                <tr className="border-b border-white/10 text-gray-500 text-[10px] uppercase tracking-wider">
                  <th className="text-left pb-2 font-normal">Players</th>
                  <th className="text-center pb-2 font-normal">Was</th>
                  <th className="text-right pb-2 font-normal">Now</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {happyHourRates.map(r => (
                  <tr key={r.players}>
                    <td className="py-2 text-gray-300 text-xs">{r.players}</td>
                    <td className="py-2 text-center text-gray-600 line-through text-xs">{r.oldPrice}</td>
                    <td className="py-2 text-right">
                      <span className="text-[#ffcf9e] font-black">{r.newPrice}</span>
                      <span className="text-gray-500 text-[10px] ml-1">{r.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* PC Happy Hour */}
            <p className="text-[10px] text-[#ffc1b2] uppercase tracking-widest font-bold mb-2">PC Gaming Happy Hour</p>
            <div className="flex items-center gap-3 mb-6 bg-white/5 p-3 border border-white/5">
              <span className="text-gray-300 text-sm">Single Player</span>
              <span className="text-gray-600 line-through text-sm ml-auto">₹70</span>
              <span className="text-[#ffcf9e] font-black text-lg">₹50<span className="text-xs text-gray-500 font-normal">/hr</span></span>
            </div>

            {/* Timing */}
            <div className="text-center bg-white/5 p-4 border border-white/5">
              <p className="text-[#ffc1b2] font-black uppercase tracking-widest text-xs mb-1">Happy Hour Timings</p>
              <p className="text-gray-300 text-sm font-bold">Monday – Friday</p>
              <p className="text-[#ffcf9e] text-sm font-black">9 AM – 2 PM</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
