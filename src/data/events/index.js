// Ponto único de entrada dos dados de eventos.
// Para adicionar um evento novo: crie um arquivo <slug>.js nesta pasta
// exportando o objeto do evento, e registre-o na lista ALL_EVENTS abaixo.
// A ordem de exibição (abertos primeiro, encerrados depois) é calculada
// automaticamente por sortEvents — não precisa reordenar manualmente.

import { getEffectiveStatus, sortEvents } from './rules';

import circuitoTonin from './circuito-tonin';
import dcRun from './dc-run';
import outubroRosa from './outubro-rosa';
import cdlRun from './cdl-run';
import odisseia from './odisseia';
import maioLaranja from './maio-laranja';
import uberabaSport from './uberaba-sport';
import movimentoAzul from './movimento-azul';
import vizzaRun from './vizza-run';
import wrRun2026 from './wr-run-2026';
import corraTransforme from './corra-transforme';

const ALL_EVENTS = [
  circuitoTonin,
  dcRun,
  outubroRosa,
  cdlRun,
  odisseia,
  maioLaranja,
  uberabaSport,
  movimentoAzul,
  vizzaRun,
  wrRun2026,
  corraTransforme,
];

export const EVENTOS = sortEvents(ALL_EVENTS);

export { getEffectiveStatus };

export function getEventoBySlug(slug) {
  return EVENTOS.find((e) => e.slug === slug) ?? null;
}
