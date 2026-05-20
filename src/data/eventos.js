export const EVENTOS = [
  // ─── Próximos ────────────────────────────────────────────────────────────────
  {
    slug: 'odisseia',
    name: '3ª Corrida Odisseia',
    banner: 'https://pacepoint.com.br/wp-content/uploads/2026/04/capa-odisseia.png',
    bannerDark: false,
    location: 'Rua João Batista Ribeiro – Distrito Industrial II, Uberaba/MG',
    mapsLink: 'https://maps.app.goo.gl/73dmsSQ5ecn4G3bi7',
    date: '13/06/2026',
    status: 'open',
    inscricao: 'https://www.ticketsports.com.br/e/3%C2%AA%20CORRIDA%20ODISSEIA%202026%20-%20IFTM-86462',
    distances: [
      { label: 'Kids 100m', sub: '4 a 6 anos' },
      { label: 'Kids 200m', sub: '7 a 9 anos' },
      { label: 'Kids 400m', sub: '10 a 13 anos' },
      { label: 'Caminhada 3km', sub: 'A partir de 14 anos' },
      { label: 'Corrida 5km', sub: 'A partir de 14 anos' },
    ],
    sobre:
      'A 3ª Corrida Odisseia 2026 – IFTM traz um percurso desafiador em asfalto e terra, com cronometragem oficial Pace Point e resultados publicados em tempo real. Um evento para todos os níveis, do iniciante ao experiente.',
    programacao: [
      { hora: '16h00', desc: 'Abertura dos portões' },
      { hora: '16h30', desc: 'Aquecimento' },
      { hora: '17h00', desc: 'Largada da Corrida 5km' },
      { hora: '17h05', desc: 'Largada da Caminhada 3km' },
      { hora: '18h00', desc: 'Provas Kids' },
      { hora: '18h30', desc: 'Cerimônia de premiação' },
      { hora: '19h00', desc: 'Encerramento' },
    ],
    inscricoes: [
      { cat: 'Corrida 5km', valor: 'R$ 45,00 + 1kg alimento' },
      { cat: 'Caminhada 3km', valor: 'R$ 35,00 + 1kg alimento' },
      { cat: 'Kids (100m / 200m / 400m)', valor: 'R$ 35,00 + 1kg alimento' },
      { cat: '60 anos ou mais / PCD', valor: '50% de desconto' },
      { cat: 'Alunos e servidores IFTM', valor: '30% de desconto (corrida)' },
    ],
    premiacao:
      'Medalha finisher para todos os atletas. Troféus para os 5 primeiros gerais Masculino e Feminino (5km), top 3 PCD (Masc./Fem.), top 3 por faixa etária e categoria IFTM. Não haverá premiação em dinheiro.',
    kit: 'Número de peito, chip, camiseta, alfinetes e medalha finisher.',
    entregaKit: {
      data: 'A definir',
      horario: 'A definir',
      obs: 'Apresente comprovante de inscrição e documento de identidade. Retirada por terceiros apenas com autorização. Não haverá entrega de kits no dia do evento.',
    },
    avisos: [
      'Chegue ao local de largada com pelo menos 30 minutos de antecedência.',
      'O uso do número de peito é obrigatório durante toda a prova.',
      'O chip deve estar corretamente posicionado para a cronometragem.',
      'A prova é individual — proibido auxílio de terceiros ou pacing.',
      'Infrações ao regulamento resultam em desclassificação.',
    ],
  },
  {
    slug: 'maio-laranja',
    name: '2ª Corrida Maio Laranja',
    banner: 'https://pacepoint.com.br/wp-content/uploads/2026/05/capa.png',
    bannerDark: true,
    location: 'Av. Nenê Sabino, 1666 – Olinda, Uberaba/MG',
    mapsLink: 'https://maps.google.com/?q=Av+Nenê+Sabino+1666+Olinda+Uberaba+MG',
    date: '17/05/2026',
    status: 'closed',
    resultados: '/Resultados',
    fotos: 'https://gobro.fotto.com.br/2-corrida-faca-bonito-maio-laranja-uberaba/e/341506',
    distances: [
      { label: 'Kids 100m', sub: '4 a 6 anos' },
      { label: 'Kids 200m', sub: '7 a 9 anos' },
      { label: 'Kids 400m', sub: '10 a 13 anos' },
      { label: 'Caminhada 3km', sub: 'A partir de 14 anos' },
      { label: 'Corrida 5km', sub: 'A partir de 14 anos' },
    ],
    sobre:
      'A 2ª Corrida Maio Laranja é um evento beneficente que une esporte e solidariedade em um percurso de asfalto com cronometragem oficial Pace Point. Aberta a corredores de todos os níveis e idades.',
    programacao: [
      { hora: '06h00', desc: 'Abertura dos portões' },
      { hora: '06h30', desc: 'Aquecimento' },
      { hora: '07h00', desc: 'Largada da Corrida 5km' },
      { hora: '07h05', desc: 'Largada da Caminhada 3km' },
      { hora: '08h00', desc: 'Provas Kids' },
      { hora: '08h30', desc: 'Cerimônia de premiação' },
      { hora: '09h00', desc: 'Encerramento' },
    ],
    inscricoes: [
      { cat: 'Todas as categorias', valor: 'R$ 50,00 + 1kg alimento' },
    ],
    premiacao:
      'Medalha finisher para todos os atletas. Troféus para os 5 primeiros gerais Masculino e Feminino, top 3 PCD (Masc./Fem.) e top 3 por faixa etária. Não haverá premiação em dinheiro.',
    kit: 'Número de peito, chip, camiseta, alfinetes e medalha finisher.',
    entregaKit: {
      data: 'A definir',
      horario: 'A definir',
      obs: 'Apresente comprovante de inscrição e documento de identidade. Não haverá entrega de kits no dia do evento.',
    },
    avisos: [
      'Chegue ao local de largada com pelo menos 30 minutos de antecedência.',
      'O uso do número de peito e chip é obrigatório durante toda a prova.',
      'É proibido o uso de fones de ouvido ou dispositivos de áudio no percurso.',
      'A prova é individual — proibido auxílio de terceiros ou pacing.',
      'Infrações ao regulamento resultam em desclassificação.',
    ],
  },

  // ─── Encerrados ──────────────────────────────────────────────────────────────
  {
    slug: 'uberaba-sport',
    name: '1ª Corrida Uberaba Sport',
    banner: 'https://pacepoint.com.br/wp-content/uploads/2026/04/capa-uberaba-sport.jpeg',
    bannerDark: true,
    location: 'Rua Aluísio de Melo Teixeira – Vila Olímpica, Uberaba/MG',
    mapsLink: 'https://maps.google.com/?q=Rua+Aluísio+de+Melo+Teixeira+Vila+Olímpica+Uberaba+MG',
    date: '01/05/2026',
    status: 'closed',
    resultados: '/Resultados',
    distances: [
      { label: 'Kids 100m', sub: '4 a 6 anos' },
      { label: 'Kids 200m', sub: '7 a 9 anos' },
      { label: 'Kids 400m', sub: '10 a 13 anos' },
      { label: 'Caminhada 3km', sub: 'A partir de 14 anos' },
      { label: 'Corrida 5km', sub: 'A partir de 14 anos' },
    ],
    sobre:
      'A 1ª Corrida Uberaba Sport 2026 – Base Run reuniu atletas de todas as idades em um percurso de asfalto com cronometragem oficial Pace Point. Um evento marcante para a comunidade esportiva de Uberaba.',
    programacao: [
      { hora: '06h00', desc: 'Abertura dos portões' },
      { hora: '06h30', desc: 'Aquecimento' },
      { hora: '07h00', desc: 'Largada da Corrida 5km' },
      { hora: '07h05', desc: 'Largada da Caminhada 3km' },
      { hora: '08h00', desc: 'Provas Kids' },
      { hora: '08h30', desc: 'Cerimônia de premiação' },
      { hora: '09h00', desc: 'Atrações' },
      { hora: '11h00', desc: 'Encerramento' },
    ],
    inscricoes: [
      { cat: 'Corrida 5km', valor: 'R$ 90,00' },
      { cat: 'Caminhada 3km', valor: 'R$ 50,00' },
      { cat: 'Kids (100m / 200m / 400m)', valor: 'R$ 50,00' },
      { cat: '60 anos ou mais / PCD', valor: '50% de desconto' },
    ],
    premiacao:
      'Medalha finisher para todos os atletas. Troféus para os 5 primeiros gerais (5km), top 3 por faixa etária e top 3 PCD. Não haverá premiação em dinheiro.',
    kit: 'Número de peito, chip, camiseta e medalha finisher.',
    entregaKit: {
      data: 'A definir',
      horario: 'A definir',
      obs: 'Apresente comprovante de inscrição e documento de identidade. Retirada por terceiros apenas com autorização.',
    },
    avisos: [
      'Chegue ao local de largada com pelo menos 30 minutos de antecedência.',
      'O uso do número de peito é obrigatório durante toda a prova.',
      'O chip deve estar corretamente posicionado para a cronometragem.',
      'A prova é individual — proibido auxílio de terceiros ou pacing.',
    ],
  },
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
  {
    slug: 'wr-run-2026',
    name: 'WR RUN 2026',
    banner: 'https://pacepoint.com.br/wp-content/uploads/2025/11/896fcd5a-8d51-4021-a224-005c549eec10.jpeg',
    bannerDark: true,
    location: 'Av. Fernando Costa, 400 – São Benedito, Uberaba/MG',
    mapsLink: 'https://maps.google.com/?q=Av+Fernando+Costa+400+São+Benedito+Uberaba+MG',
    date: '11/01/2026',
    status: 'closed',
    resultados: '/Resultados',
    distances: [
      { label: 'Kids 100m', sub: '4 a 6 anos' },
      { label: 'Kids 200m', sub: '7 a 9 anos' },
      { label: 'Kids 400m', sub: '10 a 13 anos' },
      { label: 'Corrida 5km', sub: 'A partir de 14 anos' },
      { label: 'Corrida 10km', sub: 'A partir de 16 anos' },
    ],
    sobre:
      'A WR RUN 2026 abriu o ano com energia total, reunindo atletas de todos os níveis em percursos de 5km e 10km e provas Kids. Uma corrida para começar o ano correndo em Uberaba, com cronometragem oficial Pace Point.',
    programacao: [
      { hora: '16h00', desc: 'Chegada dos atletas' },
      { hora: '16h30', desc: 'Largada — todas as modalidades' },
      { hora: 'Após', desc: 'Cerimônia de premiação' },
    ],
    inscricoes: [
      { cat: 'Corrida 5km / 10km', valor: 'R$ 99,00 + 1L de leite' },
      { cat: 'Kids (100m / 200m / 400m)', valor: 'R$ 49,00' },
      { cat: 'Desconto — 60 anos ou mais', valor: '50% de desconto' },
    ],
    premiacao:
      'Medalha finisher para todos os atletas. Troféus para os 5 primeiros gerais Masculino e Feminino (5km e 10km), premiação em 12 faixas etárias por gênero e top 3 PCD. Kids recebem medalha (sem colocação). Não haverá premiação em dinheiro.',
    kit: 'Número de peito, chip, camiseta e medalha finisher.',
    entregaKit: {
      data: '10/01/2026 (sábado)',
      horario: 'das 10h às 16h',
      obs: 'Local: DISTRIVE — Av. Fernando Costa, 400. Apresente comprovante de inscrição e documento de identidade.',
    },
    avisos: [
      'Chegue ao local de largada com pelo menos 30 minutos de antecedência.',
      'O uso do número de peito é obrigatório durante toda a prova.',
      'É proibido o uso de fones de ouvido ou dispositivos de áudio no percurso.',
      'A prova é individual — proibido pacing com bicicletas ou terceiros.',
      'Troca de inscrição disponível até 09/01/2026, com taxa de R$ 50,00.',
    ],
  },
  {
    slug: 'corra-transforme',
    name: 'Corra & Transforme',
    banner: 'https://pacepoint.com.br/wp-content/uploads/2025/11/TESTEIRA-1.png',
    bannerDark: true,
    location: 'Rua João Batista Ribeiro, 4000 – Distrito Industrial II, Uberaba/MG',
    mapsLink: 'https://maps.google.com/?q=Rua+João+Batista+Ribeiro+4000+Distrito+Industrial+Uberaba+MG',
    date: '06/12/2025',
    status: 'closed',
    distances: [
      { label: 'Corrida 5km', sub: 'A partir de 14 anos' },
    ],
    sobre:
      'A Corra & Transforme – Natal em Movimento foi uma corrida solidária beneficente que uniu esporte e solidariedade. Um evento inclusivo para iniciantes e atletas experientes, com cronometragem oficial Pace Point.',
    programacao: [
      { hora: '16h00', desc: 'Chegada dos atletas' },
      { hora: '16h30', desc: 'Largada da Corrida 5km' },
      { hora: 'Após', desc: 'Cerimônia de premiação' },
    ],
    inscricoes: [
      { cat: 'Inscrição solidária', valor: '1 pacote de arroz (5kg) + 1 brinquedo' },
    ],
    premiacao:
      'Medalha finisher para todos os atletas. Troféus para os 3 primeiros Masculino, Feminino e PCD. Sem premiação por faixa etária nem em dinheiro.',
    kit: 'Número de peito, chip e medalha finisher.',
    avisos: [
      'Chegue ao local de largada com pelo menos 30 minutos de antecedência.',
      'O uso do número de peito é obrigatório durante toda a prova.',
      'É proibido o uso de fones de ouvido ou dispositivos de áudio no percurso.',
      'A prova é individual — proibido auxílio de terceiros ou pacing.',
    ],
  },
];

export function getEventoBySlug(slug) {
  return EVENTOS.find((e) => e.slug === slug) ?? null;
}
