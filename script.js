/* ─────────────────────────────────────────────
   MOTION PREFERENCE
───────────────────────────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

/* ─────────────────────────────────────────────
   FEATURED WORKS — rendered from ARTWORKS
───────────────────────────────────────────── */
function renderFeatured() {
  const grid = document.querySelector('.featured-grid');
  if (!grid) return;

  const featured = ARTWORKS.filter((a) => a.featured);
  const [main, ...rest] = featured;
  if (!main) return;

  const mainEl = document.createElement('div');
  mainEl.className = 'featured-main reveal';
  mainEl.innerHTML = `
    <div class="artwork-wrap" data-artwork-id="${main.id}" role="button" tabindex="0" aria-label="${escapeHtml(main.title)} ansehen">
      <img src="${main.image}" alt="${escapeHtml(main.alt)}" class="artwork-img" loading="lazy" decoding="async" />
      <div class="artwork-hover"><span class="artwork-hover-label">Ansehen</span></div>
    </div>
    <div class="artwork-meta">
      <h3>${escapeHtml(main.title)}</h3>
      <p>${escapeHtml(main.technique)} &middot; ${escapeHtml(main.year)}</p>
    </div>
  `;

  const sideEl = document.createElement('div');
  sideEl.className = 'featured-side';
  sideEl.innerHTML = rest
    .map(
      (art) => `
    <div class="featured-item reveal">
      <div class="artwork-wrap" data-artwork-id="${art.id}" role="button" tabindex="0" aria-label="${escapeHtml(art.title)} ansehen">
        <img src="${art.image}" alt="${escapeHtml(art.alt)}" class="artwork-img" loading="lazy" decoding="async" />
        <div class="artwork-hover"><span class="artwork-hover-label">Ansehen</span></div>
      </div>
      <div class="artwork-meta">
        <h3>${escapeHtml(art.title)}</h3>
        <p>${escapeHtml(art.technique)} &middot; ${escapeHtml(art.year)}</p>
      </div>
    </div>`
    )
    .join('');

  grid.append(mainEl, sideEl);
  wireArtworkTriggers(grid);
}

/* ─────────────────────────────────────────────
   PORTFOLIO GALLERY — rendered from ARTWORKS
───────────────────────────────────────────── */
function renderGallery() {
  const masonry = document.querySelector('.gallery-masonry');
  if (!masonry) return;

  masonry.innerHTML = ARTWORKS.map(
    (art) => `
      <div class="gallery-item">
        <div class="gallery-img-wrap reveal" data-artwork-id="${art.id}" role="button" tabindex="0" aria-label="${escapeHtml(art.title)} ansehen">
          <img src="${art.image}" alt="${escapeHtml(art.alt)}" class="gallery-img" loading="lazy" decoding="async" />
          <div class="gallery-overlay">
            <p class="gallery-name">${escapeHtml(art.title)}</p>
            <p class="gallery-year">${escapeHtml(art.year)}</p>
          </div>
        </div>
      </div>`
  ).join('');

  observeReveals(masonry.querySelectorAll('.reveal'));
  wireArtworkTriggers(masonry);
  layoutMasonry(masonry);
}

/* ─────────────────────────────────────────────
   MASONRY LAYOUT — size each grid item by its
   real image aspect ratio so the grid packs
   tightly with no ragged gaps
───────────────────────────────────────────── */
const MASONRY_ROW = 8;
const MASONRY_GAP = 16;

function spanGalleryItem(item) {
  const img = item.querySelector('.gallery-img');
  if (!img) return;

  const apply = () => {
    const ratio = img.naturalWidth ? img.naturalHeight / img.naturalWidth : 1.2;
    const columnWidth = item.getBoundingClientRect().width;
    const height = columnWidth * ratio;
    const span = Math.ceil((height + MASONRY_GAP) / (MASONRY_ROW + MASONRY_GAP));
    item.style.gridRowEnd = `span ${span}`;
  };

  if (img.complete && img.naturalWidth) {
    apply();
  } else {
    img.addEventListener('load', apply, { once: true });
  }
}

function layoutMasonry(masonry) {
  const items = masonry.querySelectorAll('.gallery-item');
  items.forEach(spanGalleryItem);

  if (masonry.dataset.resizeWired) return;
  masonry.dataset.resizeWired = 'true';

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => items.forEach(spanGalleryItem), 150);
  });
}

/* ─────────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const galleryParent = entry.target.closest(
        '.gallery-masonry, .featured-grid, .about-inner, .featured-side'
      );
      if (galleryParent) {
        const allItems = [...galleryParent.querySelectorAll('.reveal, .reveal-right')];
        const idx = allItems.indexOf(entry.target);
        entry.target.style.transitionDelay = prefersReducedMotion ? '0ms' : `${idx * 60}ms`;
      }

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

function observeReveals(nodeList) {
  nodeList.forEach((el) => revealObserver.observe(el));
}

/* ─────────────────────────────────────────────
   LIGHTBOX — enlarged image view
───────────────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
let lastFocusedTrigger = null;

function openLightbox(id, trigger) {
  const art = ARTWORKS.find((a) => a.id === id);
  if (!art || !lightbox) return;

  lastFocusedTrigger = trigger || null;

  lightboxImg.src = art.image;
  lightboxImg.alt = art.alt;

  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocusedTrigger) lastFocusedTrigger.focus();
}

function wireArtworkTriggers(scope) {
  scope.querySelectorAll('[data-artwork-id]').forEach((el) => {
    el.addEventListener('click', () => openLightbox(el.dataset.artworkId, el));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(el.dataset.artworkId, el);
      }
    });
  });
}

if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
    closeLightbox();
  }
});

/* ─────────────────────────────────────────────
   NAVIGATION — scroll state & mobile toggle
───────────────────────────────────────────── */
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener(
  'scroll',
  () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  },
  { passive: true }
);

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-label', 'Menü öffnen');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ─────────────────────────────────────────────
   SMOOTH SCROLL for anchor links
───────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const id = anchor.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const navH = nav ? nav.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

/* ─────────────────────────────────────────────
   PARALLAX — subtle hero image drift on scroll
───────────────────────────────────────────── */
const heroFrame = document.querySelector('.hero-img-frame img');

if (heroFrame && !prefersReducedMotion) {
  const onScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight * 1.2) {
      heroFrame.style.transform = `translateY(${scrolled * 0.08}px)`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ─────────────────────────────────────────────
   ACTIVE NAV LINK — highlight on section entry
───────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach((a) => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((s) => sectionObserver.observe(s));

/* ─────────────────────────────────────────────
   BIBLE VERSE CAROUSEL
───────────────────────────────────────────── */
const TC_DATA = [
  { verse: 'Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort.', reference: 'Johannes 1,1' },
  { verse: 'Gott ist unsre Zuversicht und Stärke, eine Hilfe in den großen Nöten, die uns getroffen haben.', reference: 'Psalm 46,2' },
  { verse: 'Denn also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit alle, die an ihn glauben, nicht verloren werden, sondern das ewige Leben haben.', reference: 'Johannes 3,16' },
  { verse: 'Der HERR ist mein Hirte, mir wird nichts mangeln.', reference: 'Psalm 23,1' },
  { verse: 'Fürchte dich nicht, denn ich bin mit dir; weiche nicht, denn ich bin dein Gott. Ich stärke dich, ich helfe dir auch, ich erhalte dich durch die rechte Hand meiner Gerechtigkeit.', reference: 'Jesaja 41,10' },
  { verse: 'Hab ich dir nicht geboten: Sei stark und mutig? Erschrick nicht und entsetze dich nicht; denn der HERR, dein Gott, ist mit dir in allem, was du tun wirst.', reference: 'Josua 1,9' },
  { verse: 'Ich vermag alles durch den, der mich mächtig macht, Christus.', reference: 'Philipper 4,13' },
  { verse: 'Denn ich weiß wohl, was ich für Gedanken über euch habe, spricht der HERR: Gedanken des Friedens und nicht des Leides, dass ich euch gebe Zukunft und Hoffnung.', reference: 'Jeremia 29,11' },
  { verse: 'Befiehl dem HERRN deine Wege und hoffe auf ihn, er wird’s wohl machen.', reference: 'Psalm 37,5' },
];

let tcIndex = 0;
let tcCardSize = window.innerWidth >= 640 ? 365 : 290;

function tcGetPos(i) {
  const total = TC_DATA.length;
  let pos = i - tcIndex;
  if (pos > total / 2) pos -= total;
  if (pos < -total / 2) pos += total;
  return pos;
}

function tcRender() {
  document.querySelectorAll('.testimonial-card').forEach((card, i) => {
    const pos = tcGetPos(i);
    const isCenter = pos === 0;
    const isVisible = Math.abs(pos) <= 3;

    card.style.opacity = isVisible ? '1' : '0';
    card.style.pointerEvents = isVisible ? 'auto' : 'none';
    card.style.zIndex = isCenter ? '10' : String(4 - Math.abs(pos));
    card.style.width = tcCardSize + 'px';
    card.style.transform = [
      'translate(-50%, -50%)',
      `translateX(${(tcCardSize / 1.5) * pos}px)`,
      `translateY(${isCenter ? -65 : pos % 2 ? 15 : -15}px)`,
      `rotate(${prefersReducedMotion ? 0 : isCenter ? 0 : pos % 2 ? 2.5 : -2.5}deg)`,
    ].join(' ');

    card.classList.toggle('tc-center', isCenter);
  });
}

function tcMove(steps) {
  tcIndex = (tcIndex + steps + TC_DATA.length) % TC_DATA.length;
  tcRender();
}

function tcInit() {
  const stage = document.getElementById('tcStage');
  if (!stage) return;

  TC_DATA.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <span class="tc-cut-line"></span>
      <span class="tc-deco-quote">&ldquo;</span>
      <p class="tc-quote">${escapeHtml(t.verse)}</p>
      <p class="tc-author">${escapeHtml(t.reference)}</p>
    `;
    card.addEventListener('click', () => {
      const pos = tcGetPos(i);
      if (pos !== 0) tcMove(pos);
    });
    stage.insertBefore(card, stage.querySelector('.tc-nav'));
  });

  document.getElementById('tcPrev').addEventListener('click', () => tcMove(-1));
  document.getElementById('tcNext').addEventListener('click', () => tcMove(1));

  tcRender();

  window.addEventListener(
    'resize',
    () => {
      tcCardSize = window.innerWidth >= 640 ? 365 : 290;
      tcRender();
    },
    { passive: true }
  );
}

/* ─────────────────────────────────────────────
   CONTACT FORM
   Sendet über Formspree (kein Mailprogramm nötig),
   sobald FORM_ENDPOINT gesetzt ist. Bis dahin öffnet
   das Formular als Fallback eine vorausgefüllte E-Mail.

   So aktivierst du den direkten Versand:
   1. Kostenloses Konto auf https://formspree.io anlegen
   2. Neues Formular erstellen → liefert einen Endpoint
      wie "https://formspree.io/f/abcd1234"
   3. Den Endpoint unten bei FORM_ENDPOINT eintragen
───────────────────────────────────────────── */
const FORM_ENDPOINT = '';
const CONTACT_EMAIL = 'patricialeonard.design@gmail.com';

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('formStatus');
  const submitBtn = form.querySelector('.contact-submit');
  const fields = {
    name: { input: document.getElementById('cf-name'), error: document.getElementById('cf-name-error') },
    email: { input: document.getElementById('cf-email'), error: document.getElementById('cf-email-error') },
    message: { input: document.getElementById('cf-message'), error: document.getElementById('cf-message-error') },
  };

  function validateField(key) {
    const { input, error } = fields[key];
    input.setAttribute('data-touched', 'true');

    if (input.validity.valueMissing) {
      error.textContent =
        key === 'name' ? 'Bitte geben Sie Ihren Namen an.'
        : key === 'email' ? 'Bitte geben Sie Ihre E-Mail-Adresse an.'
        : 'Bitte geben Sie eine Nachricht ein.';
      return false;
    }
    if (input.validity.typeMismatch) {
      error.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
      return false;
    }
    error.textContent = '';
    return true;
  }

  Object.keys(fields).forEach((key) => {
    fields[key].input.addEventListener('blur', () => validateField(key));
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const results = Object.keys(fields).map(validateField);
    if (results.includes(false)) {
      status.textContent = 'Bitte überprüfen Sie die markierten Felder.';
      status.setAttribute('data-state', 'error');
      return;
    }

    // Honeypot: bots füllen unsichtbare Felder aus, Menschen nicht
    if (form._gotcha.value) return;

    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const subject = document.getElementById('cf-subject').value;
    const message = fields.message.input.value.trim();

    if (!FORM_ENDPOINT) {
      const mailBody = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      const mailSubject = encodeURIComponent(`${subject} — Anfrage über die Website`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`;

      status.textContent = 'Ihr E-Mail-Programm wird geöffnet, um die Nachricht zu senden.';
      status.setAttribute('data-state', 'success');
      form.reset();
      Object.values(fields).forEach(({ input }) => input.removeAttribute('data-touched'));
      return;
    }

    submitBtn.disabled = true;
    status.textContent = 'Nachricht wird gesendet …';
    status.removeAttribute('data-state');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        status.textContent = 'Danke! Ihre Nachricht wurde gesendet.';
        status.setAttribute('data-state', 'success');
        form.reset();
        Object.values(fields).forEach(({ input }) => input.removeAttribute('data-touched'));
      } else {
        throw new Error('Formspree request failed');
      }
    } catch {
      status.textContent = 'Leider ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt eine E-Mail.';
      status.setAttribute('data-state', 'error');
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
renderFeatured();
renderGallery();
tcInit();
initContactForm();

observeReveals(document.querySelectorAll('.reveal, .reveal-right'));
