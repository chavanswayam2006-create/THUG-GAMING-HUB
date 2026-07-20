import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, IndianRupee } from 'lucide-react';

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch here would be: fetch('/api/tournaments') but we mock it or fetch it honestly
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL || ''}/api/tournaments`)
      .then(res => res.json())
      .then(data => {
        setTournaments(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-thug-dark pt-32 pb-20 text-white px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-4 drop-shadow-lg">
            Upcoming Battles
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Compete for glory and cash. Prove you belong in the hub.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-neon-cyan animate-pulse py-20 font-bold uppercase tracking-widest">
            Loading...
          </div>
        ) : tournaments.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center p-12 border border-white/5 rounded-sm bg-thug-black relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-cyan" />
            <Trophy size={64} className="mx-auto mb-6 text-gray-500 opacity-50" />
            <h3 className="text-2xl font-black uppercase tracking-wider mb-2 text-white">No Tournaments Scheduled</h3>
            <p className="text-gray-400">Keep grinding. The next tournament will be announced soon. Check back often or follow us on Instagram.</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((t: any, i) => (
              <motion.div 
                key={t.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-thug-black border border-white/5 rounded-sm overflow-hidden hover:border-neon-purple/50 transition-colors group"
              >
                <div className="h-48 bg-gray-800 relative">
                  {t.bannerUrl ? (
                    <img src={t.bannerUrl} alt={t.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600 bg-thug-dark">No Image</div>
                  )}
                  <div className="absolute top-4 right-4 bg-neon-purple text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
                    {t.game}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase mb-4 text-white group-hover:text-neon-cyan transition-colors">{t.name}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-neon-purple" /> {t.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-neon-purple" /> {t.maxSlots} Slots
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee size={16} className="text-green-500" /> Entry: ₹{t.entryFee}
                    </div>
                    <div className="flex items-center gap-2 text-neon-cyan font-bold">
                      <Trophy size={16} /> Prize: ₹{t.prizePool}
                    </div>
                  </div>
                  <a 
                    href={t.registrationUrl || "https://docs.google.com/forms/d/e/1FAIpQLScP_I8j38r5rZ-wF3dE0E9yN-f1J3_zI_6z4K-j4-TEST/viewform"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white/5 hover:bg-neon-purple text-white font-bold uppercase tracking-widest text-sm transition-colors rounded-sm block text-center"
                  >
                    Register Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
