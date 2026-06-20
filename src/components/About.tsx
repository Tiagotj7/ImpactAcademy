import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Target, Users, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Target, text: 'Metodologia focada em resultados reais' },
  { icon: Users, text: 'Comunidade de líderes em crescimento' },
  { icon: TrendingUp, text: 'Transformação humana e profissional' },
  { icon: CheckCircle, text: 'Programas validados e comprovados' },
];

const values = [
  'Integridade', 'Excelência', 'Disciplina', 'Liderança',
  'Responsabilidade', 'Crescimento', 'Propósito', 'Impacto',
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="sobre" ref={ref} className="relative py-20 sm:py-28 bg-[#050505] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 section-divider opacity-30" />
      <div className="absolute top-1/2 right-0 hidden lg:block w-[500px] h-[500px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase font-body">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 leading-tight">
            O QUE É A{' '}
            <span className="gradient-text-gold">IMPACT ACADEMY?</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 rounded-2xl border border-[#D4AF37]/20 z-10" />
              <img
                src="https://images.pexels.com/photos/7794035/pexels-photo-7794035.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=700"
                alt="Impact Academy Team"
                className="w-full h-[320px] sm:h-[500px] object-cover rounded-2xl"
                style={{ filter: 'brightness(0.8) contrast(1.1)' }}
              />
              <div className="absolute inset-0 rounded-2xl z-[5]"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, transparent 60%)' }}
              />
            </div>

            {/* Mission card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 hidden sm:block glass-dark rounded-2xl p-5 border border-[#D4AF37]/25 z-20 max-w-xs"
            >
              <p className="text-[#D4AF37] font-bold text-sm font-body mb-1">Nossa Missão</p>
              <p className="text-white text-sm font-body leading-relaxed">
                Transformar potencial em legado através do desenvolvimento humano.
              </p>
            </motion.div>

            {/* Values floating */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-6 -left-6 hidden sm:block glass-dark rounded-2xl p-4 border border-[#D4AF37]/25 z-20"
            >
              <p className="text-[#D4AF37] font-bold text-xs font-body mb-2 tracking-wider uppercase">Visão</p>
              <p className="text-[#BDBDBD] text-xs font-body leading-relaxed max-w-[180px]">
                Referência nacional em desenvolvimento humano e alta performance.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed mb-6 font-body">
              A <span className="text-[#D4AF37] font-semibold">Impact Academy</span> nasceu com a missão de desenvolver pessoas e organizações através de uma metodologia focada em{' '}
              <span className="text-white font-medium">liderança</span>,{' '}
              <span className="text-white font-medium">propósito</span>,{' '}
              <span className="text-white font-medium">disciplina</span> e{' '}
              <span className="text-white font-medium">alta performance</span>.
            </p>
            <p className="text-[#BDBDBD] text-base sm:text-lg leading-relaxed mb-10 font-body">
              Nossa missão é acelerar o crescimento humano e profissional para transformar potencial em legado — gerando impacto real na vida de líderes, atletas, jovens e empresários.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 glass rounded-xl p-4 border border-[#D4AF37]/10 card-hover"
                >
                  <h.icon size={20} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span className="text-[#BDBDBD] text-sm font-body">{h.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div>
              <p className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase font-body mb-4">
                Nossos Valores
              </p>
              <div className="flex flex-wrap gap-2">
                {values.map((v, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.05 }}
                    className="px-3 py-1.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium font-body hover:bg-[#D4AF37]/10 transition-colors cursor-default"
                  >
                    {v}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
