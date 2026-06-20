import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Users, Star, Layers, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '+100', label: 'Pessoas Impactadas' },
  { icon: Layers, value: '+5', label: 'Programas Exclusivos' },
  { icon: Zap, value: '100%', label: 'Foco em Transformação' },
  { icon: Star, value: '1', label: 'Metodologia Própria' },
];

const particles = [
  { size: 4, top: '15%', left: '10%', delay: 0 },
  { size: 6, top: '25%', left: '85%', delay: 1 },
  { size: 3, top: '70%', left: '5%', delay: 2 },
  { size: 5, top: '80%', left: '90%', delay: 0.5 },
  { size: 4, top: '50%', left: '95%', delay: 1.5 },
  { size: 3, top: '40%', left: '2%', delay: 2.5 },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen hero-bg flex items-center overflow-hidden"
    >
      {/* Animated particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size * 4,
            height: p.size * 4,
            top: p.top,
            left: p.left,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 glass border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-glow" />
              <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase font-body">
                Impact Academy®
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
            >
              <span className="text-white">TRANSFORMAMOS</span>
              <br />
              <span className="gradient-text-gold text-shadow-gold">POTENCIAL</span>
              <br />
              <span className="text-white">EM <span className="gradient-text-gold">LEGADO</span></span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[#BDBDBD] text-lg leading-relaxed mb-10 max-w-xl font-body"
            >
              Desenvolvemos líderes, atletas, jovens e empresários para alcançarem resultados extraordinários através da{' '}
              <span className="text-[#D4AF37] font-semibold">liderança</span>,{' '}
              <span className="text-[#D4AF37] font-semibold">disciplina</span> e{' '}
              <span className="text-[#D4AF37] font-semibold">alta performance</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <button
                onClick={() => handleScroll('#cta')}
                className="btn-primary relative z-10 flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-body overflow-hidden group"
              >
                <span className="relative z-10">Quero Evoluir</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => handleScroll('#sobre')}
                className="btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-body"
              >
                <MessageCircle size={18} />
                Agendar Conversa
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 text-center border border-[#D4AF37]/10 card-hover"
                >
                  <stat.icon size={20} className="text-[#D4AF37] mx-auto mb-2" />
                  <div className="text-[#D4AF37] font-black text-xl font-body">{stat.value}</div>
                  <div className="text-[#BDBDBD] text-xs leading-tight font-body mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gold border glow */}
              <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/30 z-10" />
              <div className="absolute -inset-1 rounded-2xl opacity-40 z-0"
                style={{ background: 'linear-gradient(135deg, #D4AF37, transparent, #D4AF37)' }}
              />

              <img
                src="https://images.pexels.com/photos/7433929/pexels-photo-7433929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=600"
                alt="Líder Impact Academy"
                className="relative z-[5] w-full h-[620px] object-cover rounded-2xl"
                style={{ filter: 'brightness(0.85) contrast(1.1)' }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 z-[6] rounded-2xl"
                style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 50%)' }}
              />

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-6 right-6 z-10 glass-dark rounded-xl p-4 border border-[#D4AF37]/20"
              >
                <p className="text-[#D4AF37] font-semibold text-sm font-body mb-1">
                  "Comunidade em Crescimento"
                </p>
                <p className="text-[#BDBDBD] text-xs font-body">
                  Junte-se a líderes que estão transformando suas vidas através da Impact Academy®
                </p>
              </motion.div>

              {/* Badge top right */}
              <div className="absolute top-6 right-6 z-10 glass-dark rounded-xl p-3 border border-[#D4AF37]/30 text-center">
                <div className="text-[#D4AF37] font-black text-xl font-body">+100</div>
                <div className="text-[#BDBDBD] text-xs font-body">Impactados</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
            />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-15"
              style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #050505)' }}
      />

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[#BDBDBD] text-xs tracking-widest uppercase font-body">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
}
