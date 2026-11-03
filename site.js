// Update testimonials.json to add or reorder cards; avoid editing HTML/CSS.
const cards = document.getElementById('cards');
document.getElementById('year').textContent = new Date().getFullYear();
function elt(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function render(item) {
  const pictures = Array.isArray(item.images) ? item.images : [];
  const card = elt('article', 'card' + (pictures.length ? '' : ' text-only'));
  card.dataset.id = item.id || '';
  if (pictures.length) {
    const visual = elt('div', 'visual');
    const photos = elt('div', 'photos' + (pictures.length === 1 ? ' single' : ''));
    pictures.forEach((src, i) => {
      const fig = document.createElement('figure');
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = src;
      img.alt = item.name + (item.kind === 'transformation' ? ' — ' + (['Before', 'After', 'Training'][i] || 'Training') : ' — training photograph');
      img.onerror = () => { fig.replaceChildren(elt('div', 'missing', 'Image unavailable — check filename')); };
      fig.append(img);
      if (item.kind === 'transformation') {
        fig.append(elt('figcaption', '', ['Before · June 2026 · 85 kg', 'After · September 2026 · 78 kg', 'Training'][i] || ''));
      }
      photos.append(fig);
    });
    visual.append(photos);
    card.append(visual);
  }
  const body = elt('div', 'body');
  body.append(elt('div', 'mark', '“'));
  const quote = elt('blockquote', 'quote');
  (item.paragraphs || []).forEach(paragraph => quote.append(elt('p', '', paragraph)));
  body.append(quote);
  const person = elt('div', 'person');
  person.append(elt('strong', '', item.name));
  person.append(elt('span', '', item.subtitle || ''));
  body.append(person);
  card.append(body);
  return card;
}
fetch('testimonials.json', {cache: 'no-store'})
  .then(response => {
    if (!response.ok) throw new Error('Could not load testimonials.json');
    return response.json();
  })
  .then(items => {
    if (!Array.isArray(items)) throw new Error('Expected a JSON list');
    cards.replaceChildren(...items.map(render));
  })
  .catch(error => {
    cards.replaceChildren();
    const message = document.getElementById('error');
    message.hidden = false;
    message.textContent = 'Testimonials could not be displayed: ' + error.message;
  });
