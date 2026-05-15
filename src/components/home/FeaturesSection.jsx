import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Wifi, Cpu, Trophy, Route, Shield } from 'lucide-react';

const FEATURES = [
  { icon: Timer, title: 'Cronometragem Profissional', desc: 'Chips de alta precisão com leitura rápida e confiável.' },
  { icon: Wifi, title: 'Resultados em Tempo Real', desc: 'Resultados disponíveis assim que cruza a linha de chegada.' },
  { icon: Cpu, title: 'Inscrições Online', desc: 'Plataforma moderna, rápida e segura para inscrições.' },
  { icon: Trophy, title: 'Rankings e Categorias', desc: 'Relatórios completos de performance por categorias.' },
  { icon: Route, title: 'Pontos de Controle', desc: 'Monitoramento ao longo do percurso para mais segurança.' },
  { icon: Shield, title: 'Planejamento Completo', desc: 'Suporte do planejamento até a entrega dos resultados.' },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video"
          >
            <img
              src="https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?auto=format&fit=crop&q=80"
              alt="Tecnologia de cronometragem"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </motion.div>

          {/* Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-body text-sm font-semibold uppercase tracking-wider">
                Tecnologia
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-3">
                Tecnologia + atendimento = <span className="text-primary">evento perfeito</span>
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">
              {FEATURES.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl hover:bg-muted/50 transition-colors duration-300"
                >
                  <feat.icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="font-heading font-bold text-sm text-foreground">{feat.title}</h3>
                  <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}