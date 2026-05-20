import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { openWhatsApp } from '@/components/home/ContactForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?auto=format&fit=crop&q=80"
          alt="Corredores em ação"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold font-body uppercase tracking-wider backdrop-blur-sm mb-6">
              <Play className="w-3 h-3 fill-current" />
              Eventos Esportivos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Cada passo é um{' '}
            <span className="text-primary">avanço</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/70 font-body leading-relaxed max-w-lg"
          >
            Especialistas em cronometragem e organização de corridas em Uberaba e região,
            com inscrições online e resultados em tempo real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/Eventos"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold font-body transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Próximos Eventos
              <ChevronRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => openWhatsApp()}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 rounded-full text-sm font-semibold font-body backdrop-blur-sm border border-white/20 transition-all duration-300"
            >
              Quero meu Evento
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-20 grid grid-cols-3 gap-6 relative z-20 pb-28"
        >
          {[
            { number: '50+', label: 'Eventos' },
            { number: '10k+', label: 'Atletas' },
            { number: '100%', label: 'Precisão' },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tracking-tighter">{stat.number}</p>
              <p className="text-sm sm:text-base text-white/70 font-body mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}