import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Users } from 'lucide-react';

const FEATURES = [
  {
    icon: Target,
    title: 'Precisão',
    desc: 'Cronometragem com chips de alta captação e tecnologia de ponta.',
  },
  {
    icon: Zap,
    title: 'Inovação',
    desc: 'Resultados em tempo real, inscrições online e transmissão ao vivo.',
  },
  {
    icon: Users,
    title: 'Para Todos',
    desc: 'Do iniciante ao avançado, eventos inclusivos e acessíveis.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-body text-sm font-semibold uppercase tracking-wider">
              Quem Somos
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
              Performance é mais que cronometragem
            </h2>
            <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed">
              A <strong className="text-foreground">PACE POINT</strong> é especialista em eventos esportivos em todo o Brasil,
              oferecendo assessoria completa para corridas de rua, maratonas, triatlos, ciclismo e provas de diferentes modalidades.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              Nossa missão é garantir <strong className="text-foreground">eficiência, precisão e inovação</strong> em cada etapa —
              do planejamento até a entrega dos resultados finais.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-5">
            {FEATURES.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feat.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground font-body mt-1">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}