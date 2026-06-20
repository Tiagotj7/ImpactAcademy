import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Share2, AtSign } from 'lucide-react';

const founders = [
  {
    name: 'Crislan Silva',
    role: 'CEO & Diretor de Desenvolvimento',
    initials: 'CS',
    description:
      'Especialista em liderança, desenvolvimento humano e formação de pessoas. Com anos de experiência transformando vidas através de metodologias inovadoras e mentorias de alta performance.',
    expertise: ['Liderança', 'Desenvolvimento Humano', 'Mentoria', 'Formação de Times'],
    color: 'from-[#D4AF37] to-[#F5D06F]',
    delay: 0.1,
  },
  {
    name: 'Tiago Carvalho',
    role: 'COO & Diretor de Tecnologia',
    initials: 'TC',
    description:
      'Responsável por tecnologia, automação, CRM, segurança digital e escalabilidade da operação. Arquiteto da infraestrutura que sustenta o crescimento da Impact Academy.',
    expertise: ['Tecnologia', 'Automação', 'CRM', 'Segurança Digital'],
    color: 'from-[#D4AF37] to-[#F5D06F]',
    delay: 0.25,
  },
];

export default function Founders() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="fundadores" ref={ref} className="relative py-28 overflow-hidden bg-[#050505]">
      <div className="absolute top-0 left-0 right-0 section-divider opacity-20" />

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
      />
      <div className="absolute right-0 top-1/4 w-48 h-48 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
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
            Liderança
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            NOSSOS <span className="gradient-text-gold">FUNDADORES</span>
          </h2>
          <p className="text-[#BDBDBD] text-lg mt-4 max-w-2xl mx-auto font-body">
            Pessoas comprometidas com a missão de transformar potencial em legado.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: founder.delay }}
              className="group glass rounded-2xl overflow-hidden border border-[#D4AF37]/15 hover:border-[#D4AF37]/40 transition-all duration-400 card-hover"
            >
              {/* Top section with avatar */}
              <div className="relative p-8 pb-6 text-center"
                style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, transparent 60%)' }}
              >
                {/* Avatar */}
                <div className="relative mx-auto w-28 h-28 mb-5">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${founder.color} opacity-15`} />
                  <div className="w-28 h-28 rounded-full border-2 border-[#D4AF37]/40 flex items-center justify-center mx-auto"
                    style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))' }}
                  >
                    <span className="gradient-text-gold font-black text-4xl font-body">{founder.initials}</span>
                  </div>

                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ boxShadow: '0 0 25px rgba(212,175,55,0.4)' }}
                  />
                </div>

                <h3 className="text-white font-black text-2xl mb-1 font-display">{founder.name}</h3>
                <p className="text-[#D4AF37] text-sm font-semibold font-body tracking-wide">{founder.role}</p>
              </div>

              {/* Content */}
              <div className="px-8 pb-8">
                <p className="text-[#BDBDBD] text-sm leading-relaxed font-body mb-6">
                  {founder.description}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {founder.expertise.map((e, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-medium font-body"
                      style={{ background: 'rgba(212,175,55,0.05)' }}
                    >
                      {e}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex gap-3">
                  {[Globe, Share2, AtSign].map((Icon, j) => (
                    <button
                      key={j}
                      className="w-9 h-9 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10"
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom gold line */}
              <div className="h-0.5 gradient-gold opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
