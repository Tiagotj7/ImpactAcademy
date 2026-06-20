import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MapPin, Map, CalendarDays, Award, GraduationCap, Scale, Globe, Medal,
} from 'lucide-react';

const visions = [
  { icon: MapPin, title: 'Impact Academy Bahia', description: 'Expandindo nossa presença no coração da Bahia com programas presenciais de alto impacto.' },
  { icon: Map, title: 'Impact Academy Brasil', description: 'Escalando nossa missão para todo o território nacional, impactando comunidades em todo o Brasil.' },
  { icon: CalendarDays, title: 'Eventos Próprios', description: 'Criando eventos de desenvolvimento humano e liderança com presença e autoridade nacionais.' },
  { icon: Award, title: 'Certificações', description: 'Desenvolvendo certificações reconhecidas no mercado de desenvolvimento humano e liderança.' },
  { icon: GraduationCap, title: 'Formação de Mentores', description: 'Preparando a próxima geração de mentores para multiplicar nossa metodologia.' },
  { icon: Scale, title: 'Licenciamento do Método', description: 'Licenciando nossa metodologia para organizações que desejam transformar suas equipes.' },
  { icon: Globe, title: 'Comunidade Nacional', description: 'Construindo a maior comunidade de desenvolvimento humano e liderança do Brasil.' },
  { icon: Medal, title: 'Referência em Desenvolvimento', description: 'Ser reconhecida como a principal referência nacional em desenvolvimento humano e alta performance.' },
];

export default function Vision() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="visao" ref={ref} className="relative py-28 overflow-hidden bg-[#050505]">
      <div className="absolute top-0 left-0 right-0 section-divider opacity-20" />

      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-[0.04]"
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
            Expansão
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3">
            NOSSO <span className="gradient-text-gold">FUTURO</span>
          </h2>
          <p className="text-[#BDBDBD] text-lg mt-4 max-w-2xl mx-auto font-body">
            Temos uma visão clara de onde estamos indo. Cada meta é parte de um legado maior que estamos construindo.
          </p>
          <div className="mt-6 mx-auto w-24 h-0.5 gradient-gold rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visions.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.07 }}
              whileHover={{ y: -6, borderColor: 'rgba(212,175,55,0.5)' }}
              className="group glass rounded-2xl p-6 border border-[#D4AF37]/10 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 flex items-center justify-center mb-4 transition-all"
                style={{ background: 'rgba(212,175,55,0.06)' }}
              >
                <v.icon size={20} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-white font-bold text-base mb-2 font-body leading-snug">{v.title}</h3>
              <p className="text-[#BDBDBD] text-xs leading-relaxed font-body">{v.description}</p>

              {/* Accent line */}
              <div className="mt-4 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#D4AF37]/50 to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-20" />
    </section>
  );
}
