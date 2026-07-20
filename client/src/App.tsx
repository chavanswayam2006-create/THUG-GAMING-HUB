import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { siteConfig } from './siteConfig';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import Home from './pages/Home';
import Gallery from './pages/GamingGallery';
import Games from './pages/GamesGallery';
import Tournaments from './pages/Tournaments';
import Contact from './pages/Contact';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-thug-dark/80 backdrop-blur-md border-b border-white/5 p-4 mix-blend-difference">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-black tracking-tighter text-neon-purple uppercase drop-shadow-[0_0_10px_rgba(157,78,221,0.8)]">
          {siteConfig.name.substring(0, 4)}<span className="text-neon-cyan">HUB</span>
        </Link>
        <div className="hidden md:flex gap-8 uppercase text-xs tracking-widest font-bold">
          <Link to="/" className="hover:text-neon-cyan transition-colors">Home</Link>
          <Link to="/gallery" className="hover:text-neon-cyan transition-colors">Hub Gallery</Link>
          <Link to="/games" className="hover:text-neon-cyan transition-colors">Games</Link>
          <Link to="/tournaments" className="hover:text-neon-cyan transition-colors">Tournaments</Link>
          <Link to="/contact" className="hover:text-neon-cyan transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/games" element={<Games />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
