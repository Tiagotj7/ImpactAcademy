import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Programas', href: '#programas' },
  { label: 'Comunidade', href: '#comunidade' },
  { label: 'Contato', href: '#cta' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-dark border-b border-[#D4AF37]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              onClick={() => handleNav('#inicio')}
              whileHover={{ scale: 1.02 }}
            >

              <div>
                <span className="text-white font-black text-base sm:text-lg tracking-wider font-body">IMPACT</span>
                <span className="text-[#D4AF37] font-black text-base sm:text-lg tracking-wider font-body"> ACADEMY</span>
                <span className="text-[#D4AF37] text-xs align-super">®</span>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-[#BDBDBD] hover:text-[#D4AF37] text-sm font-medium tracking-wide transition-colors duration-300 relative group font-body"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNav('#cta')}
                className="btn-primary relative z-10 px-6 py-2.5 rounded-lg text-sm font-body overflow-hidden"
              >
                <span className="relative z-10">Quero Evoluir</span>
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[#D4AF37] p-2"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-6 px-6 py-24 overflow-y-auto text-center"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => handleNav(link.href)}
                className="text-white hover:text-[#D4AF37] text-xl sm:text-2xl font-semibold tracking-wide transition-colors font-body"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              onClick={() => handleNav('#cta')}
              className="btn-primary relative z-10 px-8 py-3 rounded-lg text-base font-body overflow-hidden mt-4"
            >
              <span className="relative z-10">Quero Evoluir</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
