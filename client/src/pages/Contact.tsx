import { motion } from 'framer-motion';
import { siteConfig } from '../siteConfig';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-thug-dark pt-32 pb-20 text-white px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan mb-4 drop-shadow-lg">
            Connect
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
            Reach out for bookings, collabs, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-thug-black border border-white/5 p-8 rounded-sm hover:border-neon-purple/50 transition-colors">
              <h3 className="text-2xl font-black uppercase mb-6 text-neon-purple">Hub Details</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-300">
                  <MapPin className="text-neon-cyan shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white uppercase tracking-wider mb-1">Location</strong>
                    {siteConfig.address}
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Clock className="text-neon-cyan shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white uppercase tracking-wider mb-1">Hours</strong>
                    {siteConfig.hours}
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <Phone className="text-neon-cyan shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white uppercase tracking-wider mb-1">Call Us</strong>
                    <a href={`tel:${siteConfig.contact}`} className="hover:text-neon-cyan transition-colors">{siteConfig.contact}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <div className="w-5 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-white uppercase tracking-wider mb-1">Social</strong>
                    <a href={`https://instagram.com/${siteConfig.instagram.substring(1)}`} target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors">{siteConfig.instagram}</a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="h-64 bg-gray-800 rounded-sm border border-white/5 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.455086055!2d73.13159981156893!3d19.218991848805908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7945d8b6883cd%3A0xc66bdbe6211be8eb!2sTisai%20Shopping%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(80%)' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-thug-black border border-white/5 p-8 rounded-sm hover:border-neon-cyan/50 transition-colors"
          >
            <h3 className="text-2xl font-black uppercase mb-6 text-neon-cyan">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                <input type="text" required className="w-full bg-thug-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                <input type="tel" required className="w-full bg-thug-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors" placeholder="Your Number" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Subject</label>
                <select className="w-full bg-thug-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors">
                  <option>Booking Inquiry</option>
                  <option>Tournament Inquiry</option>
                  <option>General Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea required rows={4} className="w-full bg-thug-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-neon-cyan hover:bg-neon-purple text-thug-dark hover:text-white font-black uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
