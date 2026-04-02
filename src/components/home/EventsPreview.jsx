import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';

const EVENTS = [
  {
    name: 'Movimento Azul',
    location: 'Uberaba – MG – Parque Linear João Gilberto Ripposati',
    date: '04/04/2026',
    image: 'https://pacepoint.com.br/wp-content/uploads/2026/03/Capa-Movimento-Azul-1024x405.png',
    inscricao: 'https://www.ticketsports.com.br/e/corrida-movimento-azul-86308',
    detalhes: 'https://pacepoint.com.br/evento-4-movimento-azul/',
    status: 'open',
  },
  {
    name: 'VIZZA RUN',
    location: 'Uberaba – MG – Av. Guilherme Ferreira',
    date: '02/03/2026',
    image: 'https://pacepoint.com.br/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-13.36.57-2-1024x405.jpeg',
    detalhes: 'https://pacepoint.com.br/evento-3-vizza-run/',
    resultados: '/Resultados',
    fotos: 'https://gobro.fotto.com.br/vizza-run-uberaba-206-anos/e/283442',
    status: 'closed',
  },
];

export default function EventsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-wider">
            Calendário
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Cada dia, um novo <span className="text-primary">desafio</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Confira os próximos eventos e garanta sua vaga!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {EVENTS.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold font-body ${event.status === 'open'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted-foreground/80 text-white'
                  }`}>
                  {event.status === 'open' ? 'Inscrições Abertas' : 'Encerrado'}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{event.name}</h3>
                <div className="flex flex-wrap gap-4 mt-3">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-body">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-body">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {event.date}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {event.inscricao && (
                    <a
                      href={event.inscricao}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all"
                    >
                      Inscreva-se
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  )}
                  {event.resultados && (
                    <Link
                      to={event.resultados}
                      className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all"
                    >
                      Resultados
                    </Link>
                  )}
                  {event.fotos && (
                      <a
                          href={event.fotos}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                      >
                          <ExternalLink className="w-4 h-4" />
                          Fotos
                      </a>
                  )}
                  {event.detalhes && (
                      <a
                          href={event.detalhes}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                      >
                          <ExternalLink className="w-4 h-4" />
                          Detalhes
                      </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/Eventos"
            className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300"
          >
            Ver todos os eventos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}