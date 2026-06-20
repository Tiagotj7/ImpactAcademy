import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Network, BookOpen, Calendar, MessageCircle, LifeBuoy, ArrowRight } from 'lucide-react';

const benefits = [
  { icon: Network, title: 'Networking', description: 'Conecte-se com líderes e profissionais de alto nível' },
  { icon: BookOpen, title: 'Conteúdos Exclusivos', description: 'Acesse materiais e insights disponíveis apenas para membros' },
  { icon: Calendar, title: 'Eventos', description: 'Participe de eventos, workshops e imersões presenciais e online' },
  { icon: MessageCircle, title: 'Mentorias', description: 'Sesssões de mentoria em grupo com especialistas da área' },
  { icon: LifeBuoy, title: 'Suporte', description: 'Suporte contínuo para sua jornada de desenvolvimento' },
];

export default function Community() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="comunidade" ref={ref} className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #050505 0%, #0A0800 40%, #080600 60%, #050505 100%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 section-divider opacity-20" />

      {/* Gold center glow */}
      <div className="absolute top-1/2 left-1/2 hidden lg:block -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase font-body">
              Comunidade
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
              FAÇA PARTE DA{' '}
              <span className="gradient-text-gold">COMUNIDADE</span>{' '}
              IMPACT
            </h2>
            <div className="mt-4 w-24 h-0.5 gradient-gold rounded-full mb-6" />

            <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed mb-10 font-body">
              Conecte-se com pessoas que compartilham o mesmo propósito de crescimento. Nossa comunidade é o ambiente perfeito para você evoluir, fazer networking e encontrar parceiros para a sua jornada.
            </p>

            <button
              onClick={() => {
                const el = document.querySelector('#cta');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary relative z-10 flex w-full sm:w-fit items-center justify-center gap-2 px-6 sm:px-8 py-4 rounded-xl text-base font-body overflow-hidden group"
            >
              <span className="relative z-10">Entrar na Comunidade</span>
              <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-4"
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 8 }}
                className="group flex items-start gap-4 sm:gap-5 glass rounded-xl p-4 sm:p-5 border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/25 group-hover:border-[#D4AF37]/50 flex items-center justify-center flex-shrink-0 transition-all"
                  style={{ background: 'rgba(212,175,55,0.07)' }}
                >
                  <b.icon size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1 font-body">{b.title}</h3>
                  <p className="text-[#BDBDBD] text-sm font-body">{b.description}</p>
                </div>
                <ArrowRight size={16} className="text-[#D4AF37]/0 group-hover:text-[#D4AF37]/60 ml-auto flex-shrink-0 mt-1 transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
