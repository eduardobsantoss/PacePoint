import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar, MapPin, ChevronRight, ExternalLink, ArrowLeft,
  Clock, Users, Award, FileText, Package, AlertTriangle,
} from 'lucide-react';
import { getEventoBySlug } from '@/data/eventos';

function InfoCard({ children }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 text-muted-foreground font-body leading-relaxed">
      {children}
    </div>
  );
}

function SectionTitle({ icon: Icon, children }) {
  return (
    <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
      {Icon && <Icon className="w-5 h-5 text-primary" />}
      {children}
    </h2>
  );
}

export default function EventoDetalhes() {
  const { slug } = useParams();
  const evento = getEventoBySlug(slug);

  if (!evento) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="font-heading text-2xl font-bold text-foreground">Evento não encontrado</h1>
        <Link to="/Eventos" className="text-primary font-body hover:underline flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Voltar para Eventos
        </Link>
      </div>
    );
  }

  const backBadgeClass = evento.bannerDark
    ? 'bg-white/90 text-gray-900 hover:bg-white'
    : 'bg-gray-900/80 text-white hover:bg-gray-900';

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <img src={evento.banner} alt={evento.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <Link
            to="/Eventos"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-body mb-4 transition-colors ${backBadgeClass}`}
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Todos os Eventos
          </Link>

          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">{evento.name}</h1>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold font-body ${
                evento.status === 'open' ? 'bg-primary text-primary-foreground' : 'bg-white/20 text-white'
              }`}
            >
              {evento.status === 'open' ? 'Inscrições Abertas' : 'Encerrado'}
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mt-3">
            <a
              href={evento.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-body transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" /> {evento.location}
            </a>
            <span className="flex items-center gap-1.5 text-white/70 text-sm font-body">
              <Calendar className="w-4 h-4 text-primary" /> {evento.date}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Main */}
          <div className="lg:col-span-2 space-y-10">

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <SectionTitle>Sobre o Evento</SectionTitle>
              <p className="text-muted-foreground font-body leading-relaxed">{evento.sobre}</p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <SectionTitle>Categorias / Percursos</SectionTitle>
              <div className="flex flex-wrap gap-3">
                {evento.distances.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                  >
                    <span className="text-primary text-sm font-semibold font-body leading-tight">
                      {d.label ?? d}
                    </span>
                    {d.sub && (
                      <span className="text-primary/60 text-[11px] font-body leading-tight">{d.sub}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.section>

            {evento.programacao && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <SectionTitle icon={Clock}>Programação</SectionTitle>
                <div className="space-y-3">
                  {evento.programacao.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                      <span className="font-heading font-bold text-primary text-sm w-16 flex-shrink-0">{item.hora}</span>
                      <span className="text-sm text-foreground font-body">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {evento.inscricoes && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <SectionTitle icon={Users}>Valores de Inscrição</SectionTitle>
                <div className="space-y-3">
                  {evento.inscricoes.map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-card border border-border">
                      <span className="text-sm font-heading font-semibold text-foreground">{item.cat}</span>
                      <span className="text-sm text-primary font-body font-semibold">{item.valor}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {evento.entregaKit && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <SectionTitle icon={Package}>Entrega de Kits</SectionTitle>
                <div className="bg-card border border-border rounded-xl p-5 space-y-2 font-body text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">{evento.entregaKit.data}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">{evento.entregaKit.horario}</span>
                  </div>
                  <p className="text-muted-foreground pt-1 leading-relaxed">{evento.entregaKit.obs}</p>
                </div>
              </motion.section>
            )}

            {evento.premiacao && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <SectionTitle icon={Award}>Premiação</SectionTitle>
                <InfoCard>{evento.premiacao}</InfoCard>
              </motion.section>
            )}

            {evento.kit && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                <SectionTitle icon={FileText}>Kit do Atleta</SectionTitle>
                <InfoCard>{evento.kit}</InfoCard>
              </motion.section>
            )}

            {evento.avisos && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <SectionTitle icon={AlertTriangle}>Importante</SectionTitle>
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-5 space-y-3">
                  {evento.avisos.map((aviso, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-2" />
                      <p className="text-sm font-body text-foreground leading-relaxed">{aviso}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 sticky top-24 self-start"
          >
            <h3 className="font-heading font-bold text-foreground text-lg mb-5">Participar</h3>

            <div className="space-y-3">
              {evento.status === 'open' && evento.inscricao ? (
                <a
                  href={evento.inscricao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3.5 rounded-full text-sm font-semibold font-body transition-all hover:shadow-lg hover:shadow-primary/30"
                >
                  Inscreva-se Agora <ChevronRight className="w-4 h-4" />
                </a>
              ) : evento.resultados ? (
                <Link
                  to={evento.resultados}
                  className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3.5 rounded-full text-sm font-semibold font-body transition-all"
                >
                  Ver Resultados
                </Link>
              ) : null}
              {evento.fotos && (
                <a
                  href={evento.fotos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-border hover:border-primary/30 text-foreground px-6 py-3 rounded-full text-sm font-semibold font-body transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Ver Fotos
                </a>
              )}
              {evento.strava && (
                <a
                  href={evento.strava}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 border border-border hover:border-primary/30 text-foreground px-6 py-3 rounded-full text-sm font-semibold font-body transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> Trajeto no Strava
                </a>
              )}
            </div>

            <div className="border-t border-border mt-6 pt-5 space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-body">Data</p>
                  <p className="text-sm font-semibold font-body text-foreground">{evento.date}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground font-body">Local</p>
                  <p className="text-sm font-semibold font-body text-foreground">{evento.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
