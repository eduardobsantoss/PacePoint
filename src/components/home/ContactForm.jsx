import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WA_NUMBER = '5534999860869';

export const WA_TEMPLATE_MSG = `Olá! Gostaria de solicitar um orçamento para cronometragem:

*Nome:*
*Email:*
*Telefone:*
*Cidade do evento:*
*Nome do evento:*
*Data do evento:*
*Modalidade/Distância:*
*Quantidade de atletas:*
*Itens desejados:*`;

export function openWhatsApp(msg = WA_TEMPLATE_MSG) {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

const CHECKBOX_ITEMS = [
  { name: 'pontoControle', label: 'Ponto de Controle' },
  { name: 'kitChip', label: 'Kit Chip' },
  { name: 'nenhum', label: 'Nenhum' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    nomeEvento: '',
    dataEvento: '',
    modalidade: '',
    quantidadeAtletas: '',
    itens: { pontoControle: false, kitChip: false, nenhum: false },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        itens: {
          ...prev.itens,
          [name]: checked,
          ...(name === 'nenhum' && checked ? { pontoControle: false, kitChip: false } : {}),
          ...(name !== 'nenhum' && checked ? { nenhum: false } : {}),
        },
      }));
      return;
    }

    if (name === 'telefone') {
      const onlyNums = value.replace(/\D/g, '').slice(0, 16);
      setFormData((prev) => ({ ...prev, telefone: onlyNums }));
      return;
    }

    if (name === 'quantidadeAtletas') {
      const onlyNums = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, quantidadeAtletas: onlyNums }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDateBR = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return `${d}/${m}/${y}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const itens = Object.entries(formData.itens)
      .filter(([, v]) => v)
      .map(([k]) => ({ pontoControle: 'Ponto de Controle', kitChip: 'Kit Chip', nenhum: 'Nenhum' }[k]))
      .join(', ') || 'Nenhum';

    const msg = `Olá! Gostaria de solicitar um orçamento para cronometragem:

*Nome:* ${formData.nome}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone}
*Cidade do evento:* ${formData.cidade}
*Nome do evento:* ${formData.nomeEvento}
*Data do evento:* ${formatDateBR(formData.dataEvento)}
*Modalidade/Distância:* ${formData.modalidade}
*Quantidade de atletas:* ${formData.quantidadeAtletas}
*Itens desejados:* ${itens}`;

    openWhatsApp(msg);
  };

  const inputClass = "w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition";

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="mt-16 bg-card border border-border p-8 rounded-2xl max-w-4xl mx-auto shadow-sm"
    >
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl font-bold text-foreground">Solicite um Orçamento</h3>
        <p className="text-muted-foreground mt-2">Preencha o formulário abaixo para receber um orçamento detalhado para o seu evento.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2 sm:col-span-2">
          <label className="text-sm font-semibold text-foreground">Nome completo do responsável pelo evento *</label>
          <input required type="text" name="nome" value={formData.nome} onChange={handleChange} className={inputClass} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Endereço de Email *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Telefone/WhatsApp *</label>
          <input required type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Ex: 34999990000" maxLength={16} inputMode="numeric" className={inputClass} />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className="text-sm font-semibold text-foreground">Cidade *</label>
          <p className="text-xs text-muted-foreground -mt-1 mb-2">Cidade onde o evento irá acontecer</p>
          <input required type="text" name="cidade" value={formData.cidade} onChange={handleChange} className={inputClass} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Nome do Evento *</label>
          <input required type="text" name="nomeEvento" value={formData.nomeEvento} onChange={handleChange} className={inputClass} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Data do Evento *</label>
          <input required type="date" name="dataEvento" value={formData.dataEvento} onChange={handleChange} className={inputClass} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Modalidades/Distância *</label>
          <input required type="text" placeholder="Ex: Corrida 5km e 10km" name="modalidade" value={formData.modalidade} onChange={handleChange} className={inputClass} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Quantidade de Atletas *</label>
          <input required type="text" inputMode="numeric" placeholder="Ex: 500" name="quantidadeAtletas" value={formData.quantidadeAtletas} onChange={handleChange} className={inputClass} />
        </div>

        {/* Checkboxes customizados */}
        <div className="space-y-3 sm:col-span-2 pt-4 border-t border-border mt-2">
          <label className="text-sm font-semibold text-foreground block">Itens que você gostaria de ter no seu evento *</label>
          <div className="flex flex-col gap-3">
            {CHECKBOX_ITEMS.map(({ name, label }) => (
              <label key={name} className="flex items-center gap-3 cursor-pointer w-fit group">
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shadow-sm transition-all duration-200 flex-shrink-0
                  ${formData.itens[name]
                    ? 'bg-primary border-primary'
                    : 'bg-white border-input group-hover:border-primary/50'
                  }`}
                >
                  {formData.itens[name] && (
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  name={name}
                  checked={formData.itens[name]}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span className="text-sm text-foreground">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2 mt-4">
          <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg">
            Enviar Formulário
          </button>
        </div>
      </div>
    </motion.form>
  );
}
