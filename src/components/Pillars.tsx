import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Crown, Zap, Heart, Compass } from 'lucide-react';

const pillars = [
  {
    icon: Crown,
    title: 'Liderança',
    description: 'Formamos líderes capazes de inspirar equipes, tomar decisões estratégicas e gerar resultados extraordinários em qualquer contexto.',
    color: 'from-[#D4AF37] to-[#F5D06F]',
    delay: 0.1,
  },
  {
    icon: Zap,
    title: 'Alta Performance',
    description: 'Desenvolvemos hábitos, mentalidade e competências para um desempenho excepcional e consistente na vida pessoal e profissional.',
    color: 'from-[#D4AF37] to-[#F5D06F]',
    delay: 0.2,
  },
  {
    icon: Heart,
    title: 'Desenvolvimento Humano',
    description: 'Fortalecemos a mentalidade, inteligência emocional e propósito de vida para que cada pessoa alcance seu mais alto potencial.',
    color: 'from-[#D4AF37] to-[#F5D06F]',
    delay: 0.3,
  },
  {
    icon: Compass,
    title: 'Crescimento com Propósito',
    description: 'Transformamos objetivos em legado duradouro, alinhando crescimento pessoal e profissional a um propósito maior.',
    color: 'from-[#D4AF37] to-[#F5D06F]',
    delay: 0.4,
  },
];

export default function Pillars() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pilares" ref={ref} className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #0A0A0A 50%, #050505 100%)' }}
    >
      {/* Background decorative lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 60px)`,
        }}
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
            Fundamentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            NOSSOS <span className="gradient-text-gold">PILARES</span>
          </h2>
          <p className="text-[#BDBDBD] text-lg mt-4 max-w-2xl mx-auto font-body">
            A base que sustenta cada programa, metodologia e transformação que promovemos.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: pillar.delay }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-400 text-center cursor-default"
              style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
            >
              {/* Icon container */}
              <div className="relative mx-auto w-16 h-16 mb-6">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${pillar.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative w-16 h-16 rounded-xl border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 flex items-center justify-center transition-all">
                  <pillar.icon
                    size={28}
                    className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ boxShadow: '0 0 20px rgba(212,175,55,0.3)' }}
                />
              </div>

              {/* Number */}
              <div className="text-[#D4AF37]/20 font-black text-6xl absolute top-4 right-4 font-body select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              <h3 className="text-white font-black text-xl mb-3 font-display">
                {pillar.title}
              </h3>

              <p className="text-[#BDBDBD] text-sm leading-relaxed font-body">
                {pillar.description}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Bottom connecting line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 h-px gradient-gold rounded-full origin-left"
        />
      </div>
    </section>
  );
}
