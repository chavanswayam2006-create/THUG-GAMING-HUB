import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { siteConfig } from './siteConfig';
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { Menu, X } from 'lucide-react';

import Home from './pages/Home';
import Gallery from './pages/GamingGallery';
import Games from './pages/GamesGallery';
import Tournaments from './pages/Tournaments';
import Contact from './pages/Contact';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Hub Gallery' },
    { to: '/games', label: 'Games' },
    { to: '/tournaments', label: 'Tournaments' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-black tracking-tighter text-neon-purple uppercase drop-shadow-[0_0_10px_rgba(157,78,221,0.8)]" onClick={closeMenu}>
          {siteConfig.name.substring(0, 4)}<span className="text-neon-cyan">HUB</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 uppercase text-xs tracking-widest font-bold">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="hover:text-neon-cyan transition-colors">{link.label}</Link>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 z-[60]" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full bg-[#050505]/98 backdrop-blur-xl z-[55] flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="text-2xl font-black uppercase tracking-widest text-white hover:text-neon-cyan transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
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
