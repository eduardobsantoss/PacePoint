import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
    itens: {
      pontoControle: false,
      kitChip: false,
      nenhum: false,
    },
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
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const itens = Object.entries(formData.itens)
      .filter(([, v]) => v)
      .map(([k]) => ({
        pontoControle: 'Ponto de Controle',
        kitChip: 'Kit Chip',
        nenhum: 'Nenhum',
      }[k]))
      .join(', ') || 'Nenhum';

    const msg = `Olá! Gostaria de solicitar um orçamento para cronometragem:

*Nome:* ${formData.nome}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone}
*Cidade do evento:* ${formData.cidade}
*Nome do evento:* ${formData.nomeEvento}
*Data do evento:* ${formData.dataEvento}
*Modalidade/Distância:* ${formData.modalidade}
*Quantidade de atletas:* ${formData.quantidadeAtletas}
*Itens desejados:* ${itens}`;

    window.open(`https://wa.me/5534999860869?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="mt-16 bg-card border border-border p-8 rounded-2xl max-w-4xl mx-auto shadow-sm"
    >
      <div className="text-center mb-8">
         <h3 className="font-heading text-2xl font-bold text-foreground">
            Solicite um Orçamento
         </h3>
         <p className="text-muted-foreground mt-2">Preencha o formulário abaixo para receber um orçamento detalhado para o seu evento.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2 sm:col-span-2">
          <label className="text-sm font-semibold text-foreground">Nome completo do responsável pelo evento *</label>
          <input required type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Endereço de Email *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Telefone/WhatsApp *</label>
          <input required type="tel" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label className="text-sm font-semibold text-foreground">Cidade *</label>
          <p className="text-xs text-muted-foreground -mt-1 mb-2">Cidade onde o evento irá acontecer</p>
          <input required type="text" name="cidade" value={formData.cidade} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Nome do Evento *</label>
          <input required type="text" name="nomeEvento" value={formData.nomeEvento} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Data do Evento *</label>
          <input required type="date" name="dataEvento" value={formData.dataEvento} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Modalidades/Distância *</label>
          <input required type="text" placeholder="Ex: Corrida 5km e 10km" name="modalidade" value={formData.modalidade} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Quantidade de Atletas *</label>
          <input required type="text" placeholder="Ex: 500" name="quantidadeAtletas" value={formData.quantidadeAtletas} onChange={handleChange} className="w-full p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" />
        </div>

        <div className="space-y-3 sm:col-span-2 pt-4 border-t border-border mt-2">
          <label className="text-sm font-semibold text-foreground block">Itens que você gostaria de ter no seu evento *</label>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 cursor-pointer w-fit">
              <input type="checkbox" name="pontoControle" checked={formData.itens.pontoControle} onChange={handleChange} className="w-5 h-5 rounded border-input" />
              <span className="text-sm text-foreground">Ponto de Controle</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer w-fit">
              <input type="checkbox" name="kitChip" checked={formData.itens.kitChip} onChange={handleChange} className="w-5 h-5 rounded border-input" />
              <span className="text-sm text-foreground">Kit Chip</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer w-fit">
              <input type="checkbox" name="nenhum" checked={formData.itens.nenhum} onChange={handleChange} className="w-5 h-5 rounded border-input" />
              <span className="text-sm text-foreground">Nenhum</span>
            </label>
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
