import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://pacepoint.com.br/wp-content/uploads/2025/11/Arte3-e1763160008159.png"
              alt="Pace Point"
              className="h-16 mb-4"
            />
            <p className="text-sm opacity-70 font-body leading-relaxed">
              Esporte, saúde e bem-estar em movimento no Triângulo Mineiro. Promovemos corridas, caminhadas e conteúdos sobre performance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/Home' },
                { label: 'Eventos', path: '/Eventos' },
                { label: 'Resultados', path: '/Resultados' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-sm opacity-70 font-body">
                  R. Me. Maria José, 554 - Nossa Sra. da Abadia, Uberaba-MG
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm opacity-70 font-body">(34) 99257-6978</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm opacity-70 font-body">pacepointura@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pacepointcrono/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/fpxclusive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/5534992576978"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Faça seu Orçamento
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs opacity-50 font-body">
            PacePoint © {new Date().getFullYear()} — Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
}