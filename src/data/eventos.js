export const EVENTOS = [
  {
    slug: 'movimento-azul',
    name: 'Movimento Azul',
    banner: 'https://pacepoint.com.br/wp-content/uploads/2026/03/Capa-Movimento-Azul-1024x405.png',
    bannerDark: true,
    location: 'Parque Linear João Gilberto Ripposati – Uberaba/MG',
    mapsLink: 'https://maps.google.com/?q=Parque+Linear+João+Gilberto+Ripposati+Uberaba',
    date: '04/04/2026',
    status: 'closed',
    resultados: '/Resultados',
    fotos: 'https://gobro.fotto.com.br/corrida-movimento-azul-uberaba/e/309013',
    strava: 'https://strava.app.link/0FeCGhBvy1b',
    distances: [
      { label: 'Kids 100m', sub: '4 a 6 anos' },
      { label: 'Kids 200m', sub: '7 a 9 anos' },
      { label: 'Kids 300m', sub: '10 a 13 anos' },
      { label: 'Caminhada 3km', sub: 'A partir de 14 anos' },
      { label: 'Corrida 5km', sub: 'A partir de 14 anos' },
    ],
    sobre:
      'O Movimento Azul é um evento esportivo dedicado à conscientização do autismo, reunindo atletas de todas as idades em um percurso especial pelo Parque Linear de Uberaba. Com provas para todos os perfis, do iniciante ao avançado, o evento celebra a inclusão e o esporte como ferramentas de transformação social.',
    programacao: [
      { hora: '16h30', desc: 'Chegada dos atletas e aquecimento' },
      { hora: '17h00', desc: 'Largada — todas as modalidades' },
      { hora: 'Após', desc: 'Cerimônia de premiação' },
    ],
    inscricoes: [
      { cat: 'Corrida 5km', valor: 'R$ 80,00 + 1 barra de chocolate' },
      { cat: 'Caminhada 3km', valor: 'R$ 40,00 + 1 barra de chocolate' },
      { cat: 'Kids (100m / 200m / 300m)', valor: 'R$ 40,00 + 1 barra de chocolate' },
      { cat: 'Desconto — 60 anos ou mais', valor: '50% de desconto' },
    ],
    premiacao:
      'Medalha finisher para todos os atletas. Troféus para os 5 primeiros gerais Masculino e Feminino (5km), premiação por faixa etária (Masc./Fem.) e premiação geral PCD (Masc./Fem.). Classificação geral por ordem de chegada; demais categorias por tempo líquido. Não haverá premiação em dinheiro nem dupla premiação.',
    kit: 'Número de peito, chip e medalha finisher.',
    entregaKit: {
      data: '02/04/2026 (quinta-feira)',
      horario: 'das 12h às 18h30',
      obs: 'Apresente comprovante de inscrição e documento de identidade. Retirada por terceiros apenas com autorização do atleta inscrito.',
    },
    avisos: [
      'Chegue ao local de largada com pelo menos 30 minutos de antecedência.',
      'O uso do número de peito é obrigatório durante toda a prova.',
      'É proibido o uso de fones de ouvido, celulares ou qualquer dispositivo de áudio no percurso.',
      'A prova é individual — proibido auxílio de terceiros ou pacing com bicicletas e outros meios.',
      'Troca de inscrição pode ser solicitada por e-mail até 01/04/2026, com taxa de R$ 50,00.',
    ],
  },
  {
    slug: 'vizza-run',
    name: 'VIZZA RUN',
    banner:
      'https://pacepoint.com.br/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-13.36.57-2-1024x405.jpeg',
    bannerDark: true,
    location: 'Av. Guilherme Ferreira – Uberaba/MG',
    mapsLink: 'https://maps.google.com/?q=Av+Guilherme+Ferreira+Uberaba+MG',
    date: '02/03/2026',
    status: 'closed',
    resultados: '/Resultados',
    fotos: 'https://gobro.fotto.com.br/vizza-run-uberaba-206-anos/e/283442',
    distances: [
      { label: 'Kids 100m', sub: '4 a 6 anos' },
      { label: 'Kids 200m', sub: '7 a 9 anos' },
      { label: 'Kids 300m', sub: '10 a 13 anos' },
      { label: 'Corrida 5km', sub: 'A partir de 14 anos' },
    ],
    sobre:
      'A VIZZA RUN celebrou os 206 anos de Uberaba com um percurso único de 5km pela Av. Guilherme Ferreira, reunindo atletas de todas as idades em um evento aberto a iniciantes e experientes. Cronometragem oficial Pace Point com resultados em tempo real.',
    programacao: [
      { hora: '06h00', desc: 'Chegada dos atletas e aquecimento' },
      { hora: '06h30', desc: 'Largada — todas as modalidades' },
      { hora: 'Após', desc: 'Cerimônia de premiação' },
    ],
    inscricoes: [
      { cat: 'Corrida 5km', valor: 'R$ 60,00' },
      { cat: 'Kids (100m / 200m / 300m)', valor: 'R$ 40,00' },
      { cat: 'Desconto — 60 anos ou mais', valor: 'R$ 30,00 (50% de desconto)' },
    ],
    premiacao:
      'Medalha finisher para todos os atletas. Troféus para os 5 primeiros gerais Masculino e Feminino (5km) e premiação por faixa etária (Masc./Fem.). Não haverá premiação em dinheiro nem dupla premiação.',
    kit: 'Número de peito, chip e medalha finisher.',
    entregaKit: {
      data: '27/02/2026 (sexta-feira)',
      horario: 'das 13h às 18h30',
      obs: 'Local: Vizza Motors — Av. Guilherme Ferreira, 2477. Apresente comprovante de inscrição e documento de identidade. Retirada por terceiros apenas com autorização por escrito.',
    },
    avisos: [
      'Chegue ao local de largada com pelo menos 30 minutos de antecedência.',
      'O uso do número de peito é obrigatório durante toda a prova.',
      'É proibido o uso de fones de ouvido, celulares ou qualquer dispositivo de áudio no percurso.',
      'A prova é individual — proibido auxílio de terceiros ou pacing.',
      'Troca de número de peito disponível até 26/02/2026, com taxa de R$ 50,00.',
    ],
  },
];

export function getEventoBySlug(slug) {
  return EVENTOS.find((e) => e.slug === slug) ?? null;
}
