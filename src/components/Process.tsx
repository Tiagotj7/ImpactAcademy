import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Users, ClipboardList, BookOpen, Trophy } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Conheça a Impact Academy',
    description: 'Descubra nossa missão, programas e metodologia. Entenda como podemos acelerar sua jornada.',
    delay: 0.1,
  },
  {
    icon: Users,
    number: '02',
    title: 'Participe da Comunidade',
    description: 'Entre para a nossa comunidade e conecte-se com pessoas que compartilham o mesmo propósito.',
    delay: 0.2,
  },
  {
    icon: ClipboardList,
    number: '03',
    title: 'Realize sua Aplicação',
    description: 'Candidate-se ao programa que mais se alinha com seus objetivos e momento de vida.',
    delay: 0.3,
  },
  {
    icon: BookOpen,
    number: '04',
    title: 'Entre para um Programa',
    description: 'Inicie sua formação com nossa metodologia exclusiva e mentores de alto nível.',
    delay: 0.4,
  },
  {
    icon: Trophy,
    number: '05',
    title: 'Transforme seu Potencial em Legado',
    description: 'Alcance resultados extraordinários e construa um legado duradouro.',
    delay: 0.5,
  },
];

export default function Process() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="processo" ref={ref} className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #0A0A0A 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 section-divider opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-[#D4AF37] text-sm font-semibold tracking-[0.3em] uppercase font-body">
            Passo a Passo
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            COMO <span className="gradient-text-gold">FUNCIONA</span>
          </h2>
          <p className="text-[#BDBDBD] text-lg mt-4 max-w-2xl mx-auto font-body">
            Um processo claro e estruturado para guiar sua jornada de transformação.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-px bg-[#D4AF37]/15 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-full gradient-gold origin-left"
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: step.delay }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circle */}
                <div className="relative w-24 h-24 mb-6">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-all" />
                  {/* Inner */}
                  <div className="absolute inset-2 rounded-full border border-[#D4AF37]/40 group-hover:border-[#D4AF37]/70 flex items-center justify-center transition-all"
                    style={{ background: 'rgba(212,175,55,0.06)' }}
                  >
                    <step.icon size={28} className="text-[#D4AF37]" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full gradient-gold flex items-center justify-center">
                    <span className="text-[#050505] font-black text-xs font-body">{i + 1}</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-base mb-2 leading-tight font-body px-2">{step.title}</h3>
                <p className="text-[#BDBDBD] text-xs leading-relaxed font-body px-1">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-[#D4AF37]/15" />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-[27px] top-0 bottom-0 w-px gradient-gold origin-top"
          />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: step.delay }}
                className="flex gap-6 items-start"
              >
                {/* Circle */}
                <div className="relative flex-shrink-0 w-14 h-14 rounded-full border border-[#D4AF37]/40 flex items-center justify-center z-10"
                  style={{ background: 'rgba(212,175,55,0.08)' }}
                >
                  <step.icon size={22} className="text-[#D4AF37]" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-gold flex items-center justify-center">
                    <span className="text-[#050505] font-black text-[10px] font-body">{i + 1}</span>
                  </div>
                </div>

                <div className="flex-1 pt-1">
                  <h3 className="text-white font-bold text-base mb-1 font-body">{step.title}</h3>
                  <p className="text-[#BDBDBD] text-sm leading-relaxed font-body">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
