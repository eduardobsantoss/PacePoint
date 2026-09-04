// Ponto único de entrada dos dados de eventos.
// Para adicionar um evento novo: crie um arquivo <slug>.js em src/data/events/
// exportando o objeto do evento, e registre-o na lista ALL_EVENTS abaixo.
// A ordem de exibição (abertos primeiro, encerrados depois) é calculada
// automaticamente por sortEvents — não precisa reordenar manualmente.

import { getEffectiveStatus, sortEvents } from './rules';

import circuitoTonin from './events/circuito-tonin';
import dcRun from './events/dc-run';
import outubroRosa from './events/outubro-rosa';
import cdlRun from './events/cdl-run';
import odisseia from './events/odisseia';
import maioLaranja from './events/maio-laranja';
import uberabaSport from './events/uberaba-sport';
import movimentoAzul from './events/movimento-azul';
import vizzaRun from './events/vizza-run';
import wrRun2026 from './events/wr-run-2026';
import corraTransforme from './events/corra-transforme';

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
