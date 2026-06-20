import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Check } from 'lucide-react';

const programs = [
  {
    id: 'next-gen',
    tag: 'Jovens',
    title: 'Impact Next Gen',
    subtitle: 'Formação para Jovens',
    description: 'Programa desenvolvido para jovens que querem construir uma base sólida de liderança, propósito e alta performance desde cedo.',
    benefits: [
      'Desenvolvimento de liderança jovem',
      'Mentalidade de alta performance',
      'Propósito e direção de vida',
      'Comunidade exclusiva de jovens',
    ],
    image: 'https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
  },
  {
    id: 'athlete',
    tag: 'Atletas',
    title: 'Impact Athlete',
    subtitle: 'Desenvolvimento de Atletas',
    description: 'Formação especializada para atletas que buscam elevar seu desempenho com mentalidade, disciplina e performance de elite.',
    benefits: [
      'Mentalidade de campeão',
      'Gestão de pressão e resultados',
      'Desenvolvimento além do esporte',
      'Preparação para alta competição',
    ],
    image: 'https://images.pexels.com/photos/5961824/pexels-photo-5961824.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
  },
  {
    id: 'leaders',
    tag: 'Líderes',
    title: 'Impact Leaders',
    subtitle: 'Formação de Líderes',
    description: 'Programa completo para formação de líderes que desejam impactar equipes, organizações e comunidades com excelência e propósito.',
    benefits: [
      'Liderança transformacional',
      'Comunicação e influência',
      'Tomada de decisão estratégica',
      'Construção de times de alta performance',
    ],
    image: 'https://images.pexels.com/photos/7693114/pexels-photo-7693114.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: true,
  },
  {
    id: 'executive',
    tag: 'Empresários',
    title: 'Impact Executive',
    subtitle: 'Mentoria para Empresários',
    description: 'Mentoria de alta intensidade para empresários que buscam escalar seus negócios, desenvolver liderança e construir legados empresariais.',
    benefits: [
      'Mentoria individualizada',
      'Estratégia e escala de negócios',
      'Liderança executiva avançada',
      'Rede de empreendedores',
    ],
    image: 'https://images.pexels.com/photos/30692588/pexels-photo-30692588.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
  },
  {
    id: 'elite',
    tag: 'Premium',
    title: 'Impact Elite',
    subtitle: 'Programa Premium Exclusivo',
    description: 'Nossa experiência mais exclusiva e transformadora. Um programa de elite para quem quer chegar ao mais alto nível de performance e liderança.',
    benefits: [
      'Acesso total a todos os programas',
      'Mentoria 1:1 com os fundadores',
      'Eventos e retiros exclusivos',
      'Comunidade elite e network premium',
    ],
    image: 'https://images.pexels.com/photos/7433840/pexels-photo-7433840.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600',
    featured: false,
  },
];

function ProgramCard({ program, index, inView }: { program: typeof programs[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 card-hover ${
        program.featured
          ? 'border-[#D4AF37]/60 glow-gold-sm'
          : 'border-[#D4AF37]/15 hover:border-[#D4AF37]/40'
      }`}
      style={{ background: 'rgba(255,255,255,0.02)' }}
    >
      {/* Featured badge */}
      {program.featured && (
        <div className="absolute top-4 right-4 z-20 gradient-gold rounded-full px-3 py-1 text-[#050505] text-[10px] sm:text-xs font-black font-body tracking-wider">
          MAIS POPULAR
        </div>
      )}

      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(5,5,5,0.9) 100%)' }}
        />

        {/* Tag */}
        <div className="absolute top-4 left-4 glass-dark rounded-full px-3 py-1 border border-[#D4AF37]/30">
          <span className="text-[#D4AF37] text-xs font-semibold font-body">{program.tag}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <p className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase font-body mb-2">
          {program.subtitle}
        </p>
        <h3 className="text-white font-black text-xl sm:text-2xl mb-3 font-display">{program.title}</h3>
        <p className="text-[#BDBDBD] text-sm leading-relaxed font-body mb-5">
          {program.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-2 mb-6">
          {program.benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check size={15} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
              <span className="text-[#BDBDBD] text-sm font-body">{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => {
            const el = document.querySelector('#cta');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm font-body transition-all duration-300 group/btn ${
            program.featured
              ? 'btn-primary overflow-hidden'
              : 'btn-outline'
          }`}
        >
          <span className="relative z-10">Saiba Mais</span>
          <ArrowRight size={16} className="relative z-10 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Bottom glow on featured */}
      {program.featured && (
        <div className="absolute bottom-0 left-0 right-0 h-px gradient-gold" />
      )}
    </motion.div>
  );
}

export default function Programs() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="programas" ref={ref} className="relative py-20 sm:py-28 bg-[#050505] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider opacity-20" />
      <div className="absolute left-1/4 top-1/2 hidden lg:block w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }}
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
            Nossos Programas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3">
            PROGRAMAS{' '}
            <span className="gradient-text-gold">IMPACT ACADEMY</span>
          </h2>
          <p className="text-[#BDBDBD] text-base sm:text-lg mt-4 max-w-2xl mx-auto font-body">
            Escolha o programa que mais se alinha ao seu momento e objetivos. Cada um foi criado para gerar transformação real.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} inView={inView} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {programs.slice(3).map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i + 3} inView={inView} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
