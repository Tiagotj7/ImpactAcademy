import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rafael Mendonça',
    role: 'CEO & Empreendedor',
    avatar: 'RM',
    rating: 5,
    text: 'A Impact Academy mudou completamente minha visão de liderança. Os programas são intensos, práticos e transformadores. Em poucos meses, minha equipe cresceu e meus resultados dobraram.',
    program: 'Impact Executive',
  },
  {
    name: 'Isabela Carvalho',
    role: 'Atleta Profissional',
    avatar: 'IC',
    rating: 5,
    text: 'O Impact Athlete me deu as ferramentas mentais que faltavam na minha carreira esportiva. A mentalidade de alta performance que aprendi aqui é o que me diferencia em competição.',
    program: 'Impact Athlete',
  },
  {
    name: 'Lucas Ferreira',
    role: 'Jovem Empreendedor',
    avatar: 'LF',
    rating: 5,
    text: 'Entrei no Next Gen sem saber para onde estava indo. Saí com propósito, clareza e uma rede incrível de pessoas. Foi o investimento mais importante que já fiz na minha vida.',
    program: 'Impact Next Gen',
  },
  {
    name: 'Mariana Santos',
    role: 'Diretora de Operações',
    avatar: 'MS',
    rating: 5,
    text: 'O programa Impact Leaders foi revolucionário. Aprendi a liderar com propósito, a construir times fortes e a tomar decisões difíceis com confiança. Recomendo sem hesitar.',
    program: 'Impact Leaders',
  },
  {
    name: 'Diego Almeida',
    role: 'Empresário e Mentor',
    avatar: 'DA',
    rating: 5,
    text: 'O Impact Elite é para quem quer o melhor. Acesso direto aos fundadores, conteúdo exclusivo e uma comunidade de alto nível. Transformou minha mentalidade e meu negócio.',
    program: 'Impact Elite',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
      <span className="text-[#050505] font-black text-sm font-body">{initials}</span>
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisibleIndices = () => {
    const total = testimonials.length;
    return [
      (current - 1 + total) % total,
      current,
      (current + 1) % total,
    ];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section ref={ref} className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #0A0A0A 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 section-divider opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.04]"
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
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            O QUE DIZEM NOSSOS{' '}
            <span className="gradient-text-gold">ALUNOS</span>
          </h2>
          <div className="mt-6 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
            {visibleIndices.map((idx, pos) => {
              const t = testimonials[idx];
              const isCenter = pos === 1;
              return (
                <motion.div
                  key={idx}
                  layout
                  className={`glass rounded-2xl p-7 border transition-all duration-500 ${
                    isCenter
                      ? 'border-[#D4AF37]/40 scale-[1.02] glow-gold-sm'
                      : 'border-[#D4AF37]/10 opacity-70'
                  }`}
                >
                  <Quote size={32} className="text-[#D4AF37]/20 mb-4" />
                  <p className="text-[#BDBDBD] text-sm leading-relaxed font-body mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar initials={t.avatar} />
                    <div>
                      <p className="text-white font-bold text-sm font-body">{t.name}</p>
                      <p className="text-[#D4AF37] text-xs font-body">{t.role}</p>
                      <p className="text-[#BDBDBD] text-xs font-body mt-0.5">{t.program}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <StarRating count={t.rating} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden mb-8">
            <div className="glass rounded-2xl p-6 border border-[#D4AF37]/30">
              <Quote size={28} className="text-[#D4AF37]/25 mb-4" />
              <p className="text-[#BDBDBD] text-sm leading-relaxed font-body mb-6 italic">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center gap-3 mb-4">
                <Avatar initials={testimonials[current].avatar} />
                <div>
                  <p className="text-white font-bold text-sm font-body">{testimonials[current].name}</p>
                  <p className="text-[#D4AF37] text-xs font-body">{testimonials[current].role}</p>
                  <p className="text-[#BDBDBD] text-xs font-body">{testimonials[current].program}</p>
                </div>
              </div>
              <StarRating count={testimonials[current].rating} />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass border border-[#D4AF37]/25 hover:border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2 bg-[#D4AF37]'
                      : 'w-2 h-2 bg-[#D4AF37]/30 hover:bg-[#D4AF37]/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass border border-[#D4AF37]/25 hover:border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
