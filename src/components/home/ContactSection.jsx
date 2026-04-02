import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const CONTACTS = [
  { icon: MapPin, label: 'Endereço', value: 'R. Me. Maria José, 554 - Nossa Sra. da Abadia, Uberaba-MG', href: 'https://g.co/kgs/yRH7Gnr' },
  { icon: Phone, label: 'Telefone', value: '(34) 99257-6978', href: 'tel:+5534992576978' },
  { icon: Mail, label: 'Email', value: 'pacepointura@gmail.com', href: 'mailto:pacepointura@gmail.com' },
  { icon: Clock, label: 'Horário', value: 'Seg - Sex, 8h às 18h', href: null },
];

export default function ContactSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-primary font-body text-sm font-semibold uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Fale com a gente
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTACTS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center h-full"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading font-bold text-sm text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground font-body mt-1">{item.value}</p>
                </a>
              ) : (
                <div className="block p-6 rounded-2xl bg-card border border-border text-center h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading font-bold text-sm text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground font-body mt-1">{item.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}