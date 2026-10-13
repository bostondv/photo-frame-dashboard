// Sample recipe shared by the frame recipe sheet, cook mode and the phone app mocks.
// Ingredients keep the raw line plus optional parsed parts (qty, unit, item) so servings can scale
// and the grocery list can merge duplicates. Step text marks ingredients with [[...]] and times
// with {{...}} so the UI can highlight them and offer timers.
window.RECIPE = {
  title: 'Sheet-pan chicken fajitas',
  emoji: '🌮',
  art: 'radial-gradient(circle at 30% 30%, #FFE7C2, #FFD0A8 60%, #FBB98F)',
  source: 'familykitchen.example',
  servings: 4,
  prep: 10,
  cook: 25,
  tags: ['Weeknight', 'Mexican', 'One pan'],
  cooked: 'Last cooked Sep 21 · 4×',
  ingredients: [
    { q: '1½', u: 'lb', item: 'chicken thighs', note: 'boneless, sliced' },
    { q: '3', u: '', item: 'bell peppers', note: 'mixed colours, sliced' },
    { q: '1', u: '', item: 'red onion', note: 'sliced' },
    { q: '2', u: 'tbsp', item: 'olive oil' },
    { q: '2', u: 'tsp', item: 'chili powder' },
    { q: '1', u: 'tsp', item: 'ground cumin' },
    { q: '1', u: 'tsp', item: 'smoked paprika' },
    { q: '1', u: 'tsp', item: 'salt' },
    { q: '1', u: '', item: 'lime' },
    { q: '8', u: '', item: 'small flour tortillas' },
    { head: 'To serve' },
    { q: '', u: '', item: 'sour cream, salsa, avocado, cilantro' }
  ],
  steps: [
    'Heat the oven to {{425°F (220°C)}} and line a large sheet pan with parchment.',
    'Toss the [[chicken]], [[peppers]] and [[onion]] with the [[olive oil]], [[chili powder]], [[cumin]], [[paprika]] and [[salt]].',
    'Spread everything in a single layer. Roast for {{20 minutes}}, stirring halfway.',
    'Switch to broil for {{3 minutes}} to char the edges. Wrap the [[tortillas]] in foil and warm them on the bottom rack.',
    'Squeeze the [[lime]] over the pan and toss.',
    'Serve with [[sour cream, salsa, avocado and cilantro]].'
  ]
};

// Render helpers
window.stepHTML = function (s) {
  return s.replace(/\[\[(.+?)\]\]/g, '<mark class="ing">$1</mark>')
          .replace(/\{\{(.+?)\}\}/g, function (m, t) {
            var isTime = /min|hour|sec/.test(t);
            return '<mark class="' + (isTime ? 'tm' : 'tmp') + '">' + (isTime ? window.MockIcon('timer') : '') + t + '</mark>';
          });
};
window.ingHTML = function (g, cls) {
  if (g.head) return '<div class="ing-head">' + g.head + '</div>';
  return '<div class="' + (cls || 'ing-row') + '"><span class="qty">' + [g.q, g.u].join(' ').trim() + '</span><span><b>' + g.item + '</b>' +
    (g.note ? '<small>' + g.note + '</small>' : '') + '</span></div>';
};
