// Shared chrome for the static mocks: icons, nav rail, top bar, and scale-to-fit.
// Mock "now" is Monday 12 October 2026, 3:20 PM.
(function () {
  var P = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    chores: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M7.5 12l3 3 6-6"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2"/><circle cx="4.5" cy="12" r="1.2"/><circle cx="4.5" cy="18" r="1.2"/>',
    meals: '<path d="M7 3v8M4 3v5a3 3 0 006 0V3M7 11v10"/><path d="M17 21V3c-2.2 0-4 2.5-4 7v3h4"/>',
    photos: '<rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>',
    moon: '<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    left: '<path d="M15 5l-7 7 7 7"/>',
    right: '<path d="M9 5l7 7-7 7"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    repeat: '<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 014-4h12M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 01-4 4H4"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" stroke="none"/>',
    play: '<path d="M7 4.5v15l13-7.5z" fill="currentColor" stroke="none"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    chevron: '<path d="M6 9l6 6 6-6"/>',
    lock: '<rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 018 0v3"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 7l9 6 9-6"/>',
    wifi: '<path d="M2 8.5a15 15 0 0120 0M5 12a10 10 0 0114 0M8.5 15.5a5 5 0 017 0"/><circle cx="12" cy="19" r="1"/>',
    note: '<path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z"/>',
    wind: '<path d="M3 8h11a3 3 0 10-3-3M3 12h16a3 3 0 11-3 3M3 16h7"/>',
    timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6M12 2v3"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
    type: '<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    share: '<path d="M12 3v12M8 7l4-4 4 4"/><path d="M5 12v7h14v-7"/>',
    minus: '<path d="M5 12h14"/>',
    cart: '<path d="M3 4h2.2l2.3 11h10.8L21 8H6.5"/><circle cx="10" cy="19.5" r="1.5"/><circle cx="17" cy="19.5" r="1.5"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z"/>',
    book: '<path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2z"/><path d="M4 19V5M9 7h6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0113 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.5a5 5 0 016 5"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
    sun: '<circle cx="12" cy="12" r="4.5" fill="#FFC23D" stroke="#F0A01A"/><path stroke="#F0A01A" d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
    partly: '<circle cx="9" cy="9" r="3.6" fill="#FFC23D" stroke="#F0A01A"/><path stroke="#F0A01A" d="M9 2.5v1.5M2.5 9H4M4.4 4.4l1 1M13.6 4.4l-1 1"/><path d="M8 20h9.5a3.5 3.5 0 00.4-7 5 5 0 00-9.6 1.2A3 3 0 008 20z" fill="#fff" stroke="#9AA3B2"/>',
    cloud: '<path d="M7 19h10.5a4 4 0 00.5-8 6 6 0 00-11.4 1.6A3.3 3.3 0 007 19z" fill="#EEF1F5" stroke="#9AA3B2"/>',
    rain: '<path d="M7 15h10.5a4 4 0 00.5-8 6 6 0 00-11.4 1.6A3.3 3.3 0 007 15z" fill="#EEF1F5" stroke="#9AA3B2"/><path stroke="#3D74F2" d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',
    night: '<path d="M19 14.5A7.5 7.5 0 019.5 5 7.5 7.5 0 1019 14.5z" fill="#E6E2FF" stroke="#7C5CFA"/>'
  };

  function svg(name, cls) {
    return '<svg class="' + (cls || 'i') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  }
  window.MockIcon = svg;

  var NAV = [
    ['home', 'Today', 'home.html'],
    ['calendar', 'Calendar', 'calendar-week.html'],
    ['chores', 'Chores', 'chores.html'],
    ['list', 'Lists', 'lists.html'],
    ['meals', 'Meals', 'meals.html'],
    ['book', 'Recipes', 'recipes.html'],
    ['photos', 'Photos', 'photos.html']
  ];

  function rail(active) {
    var h = '';
    NAV.forEach(function (n) {
      h += '<a class="nav' + (n[0] === active ? ' on' : '') + '" href="' + n[2] + '" style="text-decoration:none">' + svg(n[0]) + n[1] + '</a>';
    });
    h += '<div class="spacer"></div>';
    h += '<a class="add-btn" href="add-menu.html" aria-label="Add">' + svg('plus') + '<span>Add</span></a>';
    h += '<a class="nav" href="screensaver.html" style="text-decoration:none">' + svg('moon') + 'Sleep</a>';
    h += '<div class="sync"><span class="dot"></span>Synced<br>2 min ago</div>';
    return h;
  }

  // Phone layout: below 700 px the same page drops the rail for a bottom tab bar (Today, Calendar,
  // Add, Meals, Lists) and a header menu button. CSS does the reflow (see the @media block in mocks.css).
  var PHONE = window.matchMedia('(max-width: 700px)');
  var TAB = { home: 'today', calendar: 'calendar', meals: 'meals', book: 'meals', list: 'lists' };
  function tabbar(active) {
    var on = TAB[active] || '';
    function t(id, icon, label, href) { return '<a href="' + href + '" class="' + (on === id ? 'on' : '') + '">' + svg(icon) + label + '</a>'; }
    return t('today', 'home', 'Today', 'home.html') + t('calendar', 'calendar', 'Calendar', 'calendar-week.html') +
      '<a href="add-menu.html" class="tb-add" aria-label="Add">' + svg('plus') + '</a>' +
      t('meals', 'meals', 'Meals', 'meals.html') + t('lists', 'list', 'Lists', 'lists.html');
  }

  var PEOPLE = [['boston', 'B'], ['andrea', 'A'], ['georgia', 'G'], ['poppy', 'P']];

  function topRight(opts) {
    var h = '<div class="grow"></div>';
    if (opts.avatars !== 'off') {
      h += '<a class="avatars" href="settings.html" title="Household" style="text-decoration:none">' + PEOPLE.map(function (p) {
        var off = (opts.avatars || '').indexOf('-' + p[0]) >= 0;
        return '<div class="av p-' + p[0] + (off ? ' off' : '') + '">' + p[1] + '</div>';
      }).join('') + '</a>';
    }
    h += '<a class="wx-chip" href="weather.html" style="text-decoration:none;color:inherit">' + svg('partly') + '14°<span>H 17 · L 8</span></a>';
    h += '<div class="clock-chip">3:20<span>PM</span></div>';
    return h;
  }

  function fill() {
    document.querySelectorAll('[data-i]').forEach(function (el) {
      el.outerHTML = svg(el.getAttribute('data-i'), el.className || 'i');
    });
    var b = document.body;
    var r = document.querySelector('.rail');
    if (r) {
      r.innerHTML = rail(b.dataset.view);
      r.insertAdjacentHTML('afterend', '<nav class="tabbar">' + tabbar(b.dataset.view) + '</nav>');
    }
    var t = document.querySelector('.topbar');
    if (t && r) t.insertAdjacentHTML('afterbegin', '<a class="menu-btn" href="menu.html" aria-label="Menu">' + svg('list') + '</a>');
    if (t && !t.hasAttribute('data-custom')) {
      t.querySelector('.menu-btn') ? t.querySelector('.menu-btn').insertAdjacentHTML('afterend', '<h1>' + (b.dataset.title || '') + '</h1>')
        : t.insertAdjacentHTML('afterbegin', '<h1>' + (b.dataset.title || '') + '</h1>');
      t.insertAdjacentHTML('beforeend', topRight({ avatars: b.dataset.avatars }));
    }
  }

  function fit() {
    var f = document.querySelector('.frame');
    if (!f) return;
    if (PHONE.matches) { f.style.transform = ''; return; }
    var s = Math.min(window.innerWidth / f.offsetWidth, window.innerHeight / f.offsetHeight);
    f.style.transform = 'translate(-50%, -50%) scale(' + s + ')';
  }

  document.addEventListener('DOMContentLoaded', function () { fill(); fit(); });
  window.addEventListener('resize', fit);
  window.MockPhone = PHONE;
})();

// Fake QR code for mocks: fills every <svg class="qr"> with finder squares and a fixed pattern.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('svg.qr').forEach(function (el) {
    var q = '';
    function finder(x, y) { q += '<rect x="' + x + '" y="' + y + '" width="7" height="7" fill="#23211E"/><rect x="' + (x + 1) + '" y="' + (y + 1) + '" width="5" height="5" fill="#fff"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3" fill="#23211E"/>'; }
    finder(0, 0); finder(14, 0); finder(0, 14);
    for (var y = 0; y < 21; y++) for (var x = 0; x < 21; x++) {
      if ((x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12)) continue;
      if ((x * 7 + y * 13 + x * y) % 3 === 0) q += '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="#23211E"/>';
    }
    el.setAttribute('viewBox', '0 0 21 21');
    el.innerHTML = q;
  });
});
