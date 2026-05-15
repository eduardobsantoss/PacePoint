import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EVENTOS } from '@/data/eventos';

export default function Eventos() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-foreground" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-primary font-body text-sm font-semibold uppercase tracking-wider">
                            Calendário 2025/2026
                        </span>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3">
                            Eventos
                        </h1>
                        <p className="mt-4 text-white/60 font-body text-lg max-w-lg">
                            Confira todos os eventos da Pace Point e garanta sua vaga.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events List */}
            <section className="py-16 lg:py-24 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {EVENTOS.map((event, i) => (
                            <motion.div
                                key={event.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group grid md:grid-cols-5 gap-0 rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                            >
                                {/* Image */}
                                <div className="md:col-span-2 relative h-72 md:h-auto overflow-hidden">
                                    <img
                                        src={event.banner}
                                        alt={event.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 md:bg-gradient-to-l" />
                                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold font-body ${
                                        event.status === 'open'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted-foreground/80 text-white'
                                    }`}>
                                        {event.status === 'open' ? 'Inscrições Abertas' : 'Encerrado'}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-heading text-2xl font-bold text-foreground">{event.name}</h3>
                                        <div className="flex flex-wrap gap-4 mt-3">
                                            <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-body">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                {event.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-sm text-muted-foreground font-body">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                {event.date}
                                            </span>
                                        </div>
                                        {event.distances && (
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {event.distances.map((d, j) => (
                                                    <span key={j} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-body">
                                                        {d.label ?? d}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-6">
                                        {/* CTA principal: inscrição ou resultados */}
                                        {event.status === 'open' && event.inscricao ? (
                                            <a
                                                href={event.inscricao}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all"
                                            >
                                                Inscreva-se <ChevronRight className="w-4 h-4" />
                                            </a>
                                        ) : event.resultados ? (
                                            <Link
                                                to={event.resultados}
                                                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all"
                                            >
                                                Resultados
                                            </Link>
                                        ) : null}

                                        {/* Detalhes */}
                                        <Link
                                            to={`/Eventos/${event.slug}`}
                                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                                        >
                                            <ChevronRight className="w-4 h-4" /> Detalhes
                                        </Link>

                                        {/* Fotos */}
                                        {event.fotos && (
                                            <a
                                                href={event.fotos}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" /> Fotos
                                            </a>
                                        )}

                                        {/* Trajeto Strava */}
                                        {event.strava && (
                                            <a
                                                href={event.strava}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm font-body transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" /> Trajeto Strava
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
