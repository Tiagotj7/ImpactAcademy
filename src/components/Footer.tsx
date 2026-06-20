import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Programas', href: '#programas' },
  { label: 'Comunidade', href: '#comunidade' },
  { label: 'Contato', href: '#cta' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: '📸' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  { label: 'YouTube', href: 'https://youtube.com', icon: '▶️' },
  { label: 'TikTok', href: 'https://tiktok.com', icon: '🎵' },
];

const programs = [
  'Impact Next Gen',
  'Impact Athlete',
  'Impact Leaders',
  'Impact Executive',
  'Impact Elite',
];

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative bg-[#030303] pt-20 pb-8 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-gold opacity-40" />

      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-48 opacity-[0.04]"
        style={{ background: 'linear-gradient(180deg, #D4AF37, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center glow-gold-sm">
                <span className="text-[#050505] font-black text-sm font-body">IA</span>
              </div>
              <div>
                <span className="text-white font-black text-lg tracking-wider font-body">IMPACT</span>
                <span className="text-[#D4AF37] font-black text-lg tracking-wider font-body"> ACADEMY</span>
                <span className="text-[#D4AF37] text-xs align-super">®</span>
              </div>
            </div>

            <p className="text-[#BDBDBD] text-sm leading-relaxed mb-6 font-body">
              Aceleramos pessoas e negócios através da liderança, desenvolvimento humano e alta performance.
            </p>

            <p className="text-[#D4AF37] text-xs font-semibold italic font-body">
              "Transformando Potencial em Legado"
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 font-body">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[#BDBDBD] hover:text-[#D4AF37] text-sm transition-colors font-body flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 font-body">
              Programas
            </h4>
            <ul className="space-y-3">
              {programs.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => handleNav('#programas')}
                    className="text-[#BDBDBD] hover:text-[#D4AF37] text-sm transition-colors font-body flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/30 group-hover:bg-[#D4AF37] transition-colors" />
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5 font-body">
              Redes Sociais
            </h4>
            <div className="space-y-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#BDBDBD] hover:text-[#D4AF37] text-sm transition-colors font-body group"
                >
                  <span className="text-base">{s.icon}</span>
                  <span>{s.label}</span>
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity ml-auto" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/5571999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary relative z-10 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-body overflow-hidden group w-full"
              >
                <span className="relative z-10">💬 Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="section-divider opacity-20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#BDBDBD]/50 text-sm font-body text-center sm:text-left">
            © 2026 Impact Academy®. Todos os direitos reservados.
          </p>
          <p className="text-[#BDBDBD]/30 text-xs font-body">
            Desenvolvido com 💛 para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
}
