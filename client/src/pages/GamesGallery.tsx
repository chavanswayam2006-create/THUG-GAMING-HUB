import { motion } from 'framer-motion';

const games = [
  { id: 1, title: 'GTA V', img: '/games/GTA V.png' },
  { id: 2, title: 'Ghost of Tsushima', img: '/games/GHOST OF TSUSHIMA.png' },
  { id: 3, title: 'God of War', img: '/games/GOD OF WAR.png' },
  { id: 4, title: 'Days Gone', img: '/games/DAYS GONE.png' },
  { id: 5, title: 'Mortal Kombat 1', img: '/games/MORTAL KOMBAT.png' },
  { id: 6, title: 'EA FC 26', img: '/games/FC26.png' },
  { id: 7, title: 'Spider-Man 2', img: '/games/SPIDERMAN 2.jpg' },
  { id: 8, title: 'The Last of Us', img: '/games/THE LAST OF US.jpg' },
  { id: 9, title: 'Forza Horizon 6', img: '/games/FORZA HORIZON 6.jpg' },
  { id: 10, title: 'Uncharted', img: '/games/UNCHARTED.webp' },
  { id: 11, title: 'A Way Out', img: '/games/A WAY OUT.webp' },
  { id: 12, title: 'WWE 2K26', img: '/games/WWE2K26.jpg' }
];

export default function GamesGallery() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 text-white overflow-hidden relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0505] to-transparent z-0 pointer-events-none" />
      
      <div className="container mx-auto relative z-10 px-4 mb-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#ffcf9e] mb-4 drop-shadow-lg scale-y-110">
          The Arsenal
        </h1>
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-4">Choose Your Battlefield.</p>
        <div className="inline-block bg-red-900/30 border border-red-500/30 px-6 py-2 rounded-sm backdrop-blur-sm">
          <p className="text-[#ff9e80] text-xs md:text-sm uppercase tracking-widest font-bold text-center">
             Notice: Please make an inquiry in advance for PS5 game availability.
          </p>
        </div>
      </div>

      <div className="relative z-20 w-full overflow-x-hidden flex items-center py-8">
        <motion.div
           animate={{
            x: ["0%", "-50%"]
           }}
           transition={{ ease: "linear", duration: 40, repeat: Infinity }}
           className="flex gap-8 whitespace-nowrap pl-8"
        >
          {/* Duplicate array for infinite scroll illusion */}
          {[...games, ...games].map((game, i) => (
            <div
              key={`${game.id}-${i}`}
              className="relative w-[280px] sm:w-[320px] md:w-[400px] shrink-0 rounded-lg overflow-hidden bg-black shadow-[0_0_50px_rgba(255,207,158,0.1)] border-2 border-[#ff9e80]/20 group flex flex-col"
            >
              {/* Image container with fixed aspect ratio */}
              <div className="relative w-full aspect-video overflow-hidden">
                {/* 3D Sheen Layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-[#ffcf9e]/10 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={game.img} 
                  alt={game.title} 
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              
              {/* Name section - always visible below image */}
              <div className="w-full z-20 px-6 py-5 bg-gradient-to-t from-[#0a0a0a] via-[#111] to-[#0d0d0d] text-center border-t border-white/5">
                <h3 className="text-lg md:text-xl font-black uppercase text-[#ffcf9e] drop-shadow-md tracking-wider">{game.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
