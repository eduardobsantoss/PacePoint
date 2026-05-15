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
    // fotos: '', // adicionar URL da galeria quando disponível
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
      { label: '5km' },
      { label: '10km' },
    ],
    sobre:
      'A VIZZA RUN reuniu centenas de atletas na Av. Guilherme Ferreira em uma prova vibrante com percursos de 5km e 10km. Cronometragem oficial Pace Point com resultados em tempo real e entrega de resultados no site.',
    programacao: [
      { hora: '07h00', desc: 'Abertura dos portões' },
      { hora: '07h30', desc: 'Aquecimento' },
      { hora: '08h00', desc: 'Largada 10km' },
      { hora: '08h05', desc: 'Largada 5km' },
      { hora: '09h30', desc: 'Premiação' },
    ],
    premiacao: 'Medalha finisher para todos. Troféus para os 5 primeiros gerais e 3 primeiros por faixa etária.',
    kit: 'Número de peito, chip, camiseta e medalha.',
  },
];

export function getEventoBySlug(slug) {
  return EVENTOS.find((e) => e.slug === slug) ?? null;
}
