import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Programs from './components/Programs';
import Differentials from './components/Differentials';
import Numbers from './components/Numbers';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import Founders from './components/Founders';
import Process from './components/Process';
import Vision from './components/Vision';
import CTA from './components/CTA';
import Footer from './components/Footer';

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-20 h-20 rounded-2xl gradient-gold flex items-center justify-center glow-gold pulse-glow">
          <span className="text-[#050505] font-black text-2xl font-body">IA</span>
        </div>

        <div className="text-center">
          <div className="text-2xl font-black font-body tracking-widest">
            <span className="text-white">IMPACT </span>
            <span className="gradient-text-gold">ACADEMY</span>
            <span className="text-[#D4AF37] text-xs align-super">®</span>
          </div>
          <div className="text-[#D4AF37]/60 text-xs font-body tracking-[0.3em] uppercase mt-1">
            Transformando Potencial em Legado
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-[#D4AF37]/20 rounded-full overflow-hidden mt-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="h-full gradient-gold rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-6 z-40 w-12 h-12 rounded-full gradient-gold flex items-center justify-center glow-gold-sm hover:scale-110 transition-transform shadow-lg"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <div className="relative bg-[#050505] min-h-screen">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Pillars />
            <Programs />
            <Differentials />
            <Numbers />
            <Testimonials />
            <Community />
            <Founders />
            <Process />
            <Vision />
            <CTA />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}
