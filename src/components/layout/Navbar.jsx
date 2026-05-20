import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { openWhatsApp } from '@/components/home/ContactForm';

const NAV_LINKS = [
  { label: 'Home', path: '/Home' },
  { label: 'Eventos', path: '/Eventos' },
  { label: 'Resultados', path: '/Resultados' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl shadow-lg border-b border-border/50' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/Home" className="flex items-center gap-2">
            <img
              src={scrolled
                ? 'https://pacepoint.com.br/wp-content/uploads/2026/05/pace-point-logo-scaled.png'
                : 'https://pacepoint.com.br/wp-content/uploads/2026/05/pace-point-logo-branco-scaled.png'
              }
              alt="Pace Point"
              className="h-10 lg:h-12"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium font-body transition-all duration-300 ${location.pathname === link.path
                    ? 'bg-primary text-primary-foreground'
                    : scrolled
                      ? 'text-foreground hover:bg-muted'
                      : 'text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => openWhatsApp()}
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold font-body transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Orçamento
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-foreground' : 'text-white'
              }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium font-body transition-colors ${location.pathname === link.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => openWhatsApp()}
                className="block w-full px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold font-body text-center mt-2"
              >
                Quero um Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}