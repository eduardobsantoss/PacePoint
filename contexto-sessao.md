# Contexto — PacePoint Site (sessão anterior)

## O projeto

Site institucional da **Pace Point**, empresa de cronometragem e organização de corridas de rua em Uberaba/MG. Sendo refeito do zero em React/Vite para substituir o site em WordPress. O cliente aprovou o visual atual.

- **Repositório:** https://github.com/eduardobsantoss/PacePoint
- **Branch com as mudanças:** `claude/awesome-leavitt-366e1b` (PR aberto, aguardando merge)

---

## Stack

- React 18 + Vite
- Tailwind CSS + Framer Motion
- React Router v6
- Radix UI
- TanStack Query
- Alias `@/` → `src/`

---

## Páginas e rotas

| Rota | Arquivo |
|------|---------|
| `/Home` | `src/pages/Home.jsx` |
| `/Eventos` | `src/pages/Eventos.jsx` |
| `/Eventos/:slug` | `src/pages/EventoDetalhes.jsx` ← novo |
| `/Resultados` | `src/pages/Resultados.jsx` |

Layout compartilhado: `src/components/layout/PageLayout.jsx`

---

## O que foi feito nesta sessão

1. **`src/data/eventos.js`** — criado como fonte única de dados dos eventos (exporta `EVENTOS` e `getEventoBySlug`)
2. **`src/pages/EventoDetalhes.jsx`** — página de detalhes por evento (`/Eventos/:slug`)
3. **`src/pages/Eventos.jsx`** — migrado para usar dados centralizados
4. **`src/App.jsx`** — rota `/Eventos/:slug` adicionada
5. Dados do **Movimento Azul corrigidos** a partir do PDF oficial: horário real (17h00), valores (R$80/R$40), faixas etárias Kids, entrega de kit (02/04), avisos importantes
6. **Badge de volta adaptativa** — campo `bannerDark: true/false` no evento define se a badge "Todos os Eventos" aparece clara ou escura
7. **CTA mutuamente exclusivo** — `status: 'open'` → botão Inscreva-se; `status: 'closed'` → botão Resultados (nos cards e no sidebar de detalhes)
8. **Ordem de botões padronizada** nos cards: CTA → Detalhes → Fotos → Trajeto Strava

---

## Estrutura de um evento em `src/data/eventos.js`

```js
{
  slug: 'nome-do-evento',         // usado na URL /Eventos/:slug
  name: 'Nome do Evento',
  banner: 'url-da-imagem',
  bannerDark: true,               // true = banner escuro → badge branca; false → badge escura
  location: 'Local – Cidade/UF',
  mapsLink: 'https://maps.google.com/...',
  date: 'DD/MM/AAAA',
  status: 'open' | 'closed',     // open = Inscreva-se; closed = Resultados
  inscricao: 'url-externa',
  resultados: '/Resultados',      // rota interna ou URL
  fotos: 'url-externa',
  strava: 'url-externa',
  distances: [
    { label: 'Corrida 5km', sub: 'A partir de 14 anos' },  // sub é opcional
    { label: 'Kids 100m', sub: '4 a 6 anos' },
  ],
  sobre: 'Texto descritivo.',
  programacao: [{ hora: '17h00', desc: 'Largada' }],
  inscricoes: [{ cat: 'Corrida 5km', valor: 'R$ 80,00 + brinde' }],
  premiacao: 'Texto corrido.',
  kit: 'Itens do kit.',
  entregaKit: {                   // opcional
    data: 'DD/MM/AAAA (dia)',
    horario: 'das Xh às Yh',
    obs: 'Observações.',
  },
  avisos: [                       // opcional — regras importantes pré-inscrição
    'Chegar 30 min antes.',
  ],
}
```

---

## Convenções de estilo

- Fontes: `font-heading` (títulos), `font-body` (textos)
- Cores: `bg-primary`, `text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`
- Animações: `motion.section` com `initial={{ opacity: 0, y: 20 }}` e `transition={{ delay: 0.X }}`
- Seção "Importante": `bg-amber-500/5 border-amber-500/20`
- Componentes reutilizáveis locais em `EventoDetalhes`: `<InfoCard>` e `<SectionTitle icon={Icon}>`

---

## Próximos passos

O cliente vai passar os próximos passos. Área já existente que ainda não foi integrada aos novos dados: `src/components/home/EventsPreview.jsx` (preview de eventos na Home).
```
