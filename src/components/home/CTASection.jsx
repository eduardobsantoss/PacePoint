import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
          alt="Corredores em maratona"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Quer um evento esportivo de{' '}
            <span className="text-primary">alto padrão?</span>
          </h2>
          <p className="mt-6 text-white/70 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Organizar seu evento pode ser mais fácil do que você imagina.
            Entre em contato e conheça nossos serviços de inscrições online, resultados em tempo real e atendimento especializado.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5534992576978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold font-body transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Fale pelo WhatsApp
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:pacepointura@gmail.com"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm font-semibold font-body backdrop-blur-sm border border-white/20 transition-all duration-300"
            >
              Enviar Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}