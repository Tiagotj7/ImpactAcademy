import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Lightbulb, Target, Network, Users, HeartHandshake } from 'lucide-react';

const differentials = [
  {
    icon: ShieldCheck,
    title: 'Metodologia Validada',
    description: 'Nossa metodologia foi desenvolvida e testada com resultados comprovados em desenvolvimento humano e liderança.',
  },
  {
    icon: Lightbulb,
    title: 'Mentoria Prática',
    description: 'Mentores experientes que guiam cada participante com aplicações reais, não apenas teoria.',
  },
  {
    icon: Target,
    title: 'Foco em Resultado',
    description: 'Cada programa é desenhado para gerar transformação mensurável na vida e carreira dos participantes.',
  },
  {
    icon: Network,
    title: 'Rede de Networking',
    description: 'Acesso a uma rede exclusiva de líderes, empresários e profissionais de alto nível.',
  },
  {
    icon: Users,
    title: 'Comunidade Exclusiva',
    description: 'Faça parte de uma comunidade vibrante de pessoas que compartilham o mesmo propósito de crescimento.',
  },
  {
    icon: HeartHandshake,
    title: 'Suporte Contínuo',
    description: 'Acompanhamento constante antes, durante e após os programas para garantir sua transformação.',
  },
];

export default function Differentials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="diferenciais" ref={ref} className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #080808 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 section-divider opacity-20" />

      {/* Decorative */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
      />
      <div className="absolute left-0 bottom-0 w-60 h-60 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase font-body">
              Por que escolher
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 leading-tight">
              POR QUE ESCOLHER A{' '}
              <span className="gradient-text-gold">IMPACT ACADEMY?</span>
            </h2>
            <div className="mt-4 w-24 h-0.5 gradient-gold rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-[#BDBDBD] text-lg leading-relaxed font-body">
              Somos mais do que uma escola de desenvolvimento. Somos um ecossistema completo de transformação — com metodologia, comunidade, mentoria e suporte para você alcançar seu máximo potencial.
            </p>
          </motion.div>
        </div>

        {/* Differentials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-7 border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 transition-all duration-400"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl border border-[#D4AF37]/25 group-hover:border-[#D4AF37]/50 flex items-center justify-center mb-5 transition-all"
                style={{ background: 'rgba(212,175,55,0.06)' }}
              >
                <diff.icon size={24} className="text-[#D4AF37]" />
              </div>

              <h3 className="text-white font-bold text-lg mb-3 font-display">{diff.title}</h3>
              <p className="text-[#BDBDBD] text-sm leading-relaxed font-body">{diff.description}</p>

              {/* Hover line */}
              <div className="mt-5 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
