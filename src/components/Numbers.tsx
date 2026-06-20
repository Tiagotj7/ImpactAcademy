import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, FolderKanban, Layers, Star } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 100,
    suffix: '+',
    label: 'Pessoas Impactadas',
    description: 'Vidas transformadas pelos nossos programas',
  },
  {
    icon: FolderKanban,
    value: 10,
    suffix: '+',
    label: 'Projetos Desenvolvidos',
    description: 'Iniciativas de alto impacto realizadas',
  },
  {
    icon: Layers,
    value: 5,
    suffix: '+',
    label: 'Programas Exclusivos',
    description: 'Formações para cada perfil e objetivo',
  },
  {
    icon: Star,
    value: 100,
    suffix: '%',
    label: 'Foco em Transformação',
    description: 'Comprometimento total com seus resultados',
  },
];

export default function Numbers() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #080808 0%, #0D0D0D 50%, #080808 100%)',
      }}
    >
      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-gold opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-px gradient-gold opacity-60" />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase font-body">
            Nosso Impacto
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            NÚMEROS QUE{' '}
            <span className="gradient-text-gold">TRANSFORMAM</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative glass rounded-2xl p-8 border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 text-center transition-all duration-400"
              style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl border border-[#D4AF37]/25 flex items-center justify-center mx-auto mb-5 transition-all group-hover:border-[#D4AF37]/50"
                style={{ background: 'rgba(212,175,55,0.07)' }}
              >
                <stat.icon size={24} className="text-[#D4AF37]" />
              </div>

              {/* Counter */}
              <div className="text-5xl font-black text-[#D4AF37] mb-2 font-body text-shadow-gold">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    delay={i * 0.15}
                    suffix={stat.suffix}
                  />
                )}
              </div>

              <h3 className="text-white font-bold text-base mb-2 font-body">{stat.label}</h3>
              <p className="text-[#BDBDBD] text-xs leading-relaxed font-body">{stat.description}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: 'inset 0 0 30px rgba(212,175,55,0.05)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
