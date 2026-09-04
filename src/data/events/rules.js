// Regras de negócio compartilhadas entre todos os eventos.
// Cada evento (em src/data/events/<slug>.js) só descreve seus próprios dados —
// qualquer lógica que se aplica a "todo evento" mora aqui.

// Um evento com `dateISO` fecha automaticamente no dia seguinte à data informada,
// independente do campo `status` — que continua servindo para fechar manualmente
// eventos sem dateISO (ex: cancelamento) ou eventos sem data definida ainda.
export function getEffectiveStatus(event) {
  if (!event.dateISO) return event.status;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(event.dateISO);
  return eventDate < today ? 'closed' : event.status;
}

// Ordena a lista de eventos: abertos primeiro (do mais próximo ao mais distante),
// encerrados depois (do mais recente ao mais antigo).
export function sortEvents(events) {
  return [...events].sort((a, b) => {
    const statusA = getEffectiveStatus(a);
    const statusB = getEffectiveStatus(b);

    if (statusA !== statusB) {
      return statusA === 'open' ? -1 : 1;
    }

    const dateA = a.dateISO ? new Date(a.dateISO) : new Date(0);
    const dateB = b.dateISO ? new Date(b.dateISO) : new Date(0);

    return statusA === 'open' ? dateA - dateB : dateB - dateA;
  });
}
