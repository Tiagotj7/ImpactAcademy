import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="cta" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #0A0800 30%, #0D0A00 50%, #0A0800 70%, #050505 100%)',
        }}
      />

      {/* Gold vignette */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-gold opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-gold opacity-60" />

      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            top: `${15 + i * 13}%`,
            left: i % 2 === 0 ? `${5 + i * 3}%` : `${75 + i * 2}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border border-[#D4AF37]/30 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] pulse-glow" />
          <span className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase font-body">
            Comece Agora
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-6"
        >
          <span className="text-white">VOCÊ ESTÁ PRONTO</span>
          <br />
          <span className="gradient-text-gold text-shadow-gold shimmer-text">PARA EVOLUIR?</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#BDBDBD] text-xl leading-relaxed mb-12 font-body"
        >
          Seu próximo nível começa agora.{' '}
          <span className="text-white font-semibold">
            Junte-se à Impact Academy® e transforme seu potencial em legado.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="btn-primary relative z-10 flex items-center gap-3 px-10 py-5 rounded-xl text-lg font-body overflow-hidden group w-full sm:w-auto justify-center">
            <span className="relative z-10">Quero Fazer Parte</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="https://wa.me/5571999999999?text=Olá!%20Tenho%20interesse%20nos%20programas%20da%20Impact%20Academy®"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-3 px-10 py-5 rounded-xl text-lg font-body w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-[#BDBDBD]/50 text-sm font-body"
        >
          +100 pessoas já transformaram suas vidas com a Impact Academy®
        </motion.p>
      </div>
    </section>
  );
}
