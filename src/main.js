import './styles.css';

const staticMode = new URLSearchParams(window.location.search).has('static');
if (staticMode) {
  document.documentElement.classList.add('no-motion');
}

/* --------------------------------------------------------------------------
   Icons
   -------------------------------------------------------------------------- */
const icons = {
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15"/><path d="m13 6 6 6-6 6"/></svg>`,
  arrowLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12H5"/><path d="m11 6-6 6 6 6"/></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>`,
};

/* --------------------------------------------------------------------------
   Shared header / footer
   -------------------------------------------------------------------------- */
const page = document.body.dataset.page || 'home';
const navKey = document.body.dataset.nav || '';
const headerType = document.body.dataset.header || 'main';
const showBack = document.body.dataset.back === 'true';

const mainNav = () => `
  <nav class="main-nav" aria-label="Primary">
    <a href="experience.html" class="${navKey === 'experience' ? 'is-active' : ''}"${navKey === 'experience' ? ' aria-current="page"' : ''}>Experience</a>
    <a href="projects.html" class="${navKey === 'projects' ? 'is-active' : ''}"${navKey === 'projects' ? ' aria-current="page"' : ''}>Projects</a>
    <a href="certificates.html" class="${navKey === 'certificates' ? 'is-active' : ''}"${navKey === 'certificates' ? ' aria-current="page"' : ''}>Certificates</a>
  </nav>`;

const toolNav = () => `
  <nav class="tool-nav" aria-label="Project categories">
    <a href="projects.html" class="tool-link ${navKey === 'canva' ? 'is-active' : ''}"${navKey === 'canva' ? ' aria-current="page"' : ''}>
      <img src="/assets/tool-canva.webp" alt="" />
      <span>Canva</span>
    </a>
    <a href="project-data-management.html" class="tool-link ${navKey === 'data' ? 'is-active' : ''}"${navKey === 'data' ? ' aria-current="page"' : ''}>
      <img src="/assets/tool-sheets.webp" alt="" />
      <span>Data</span>
    </a>
    <a href="project-slide-decks.html" class="tool-link ${navKey === 'slides' ? 'is-active' : ''}"${navKey === 'slides' ? ' aria-current="page"' : ''}>
      <img src="/assets/tool-ppt.webp" alt="" />
      <span>Slide decks</span>
    </a>
  </nav>`;

const header = document.querySelector('[data-site-header]');
if (header) {
  header.className = 'site-header';
  header.innerHTML = `
    <div class="shell header-top">
      <a class="brand" href="index.html">Devy A Utami</a>
      <div class="header-actions">
        ${showBack ? `<button class="back-link" type="button" data-back>${icons.arrowLeft}<span>Back</span></button>` : ''}
        <a class="home-pill" href="index.html"${page === 'home' ? ' aria-current="page"' : ''}>${icons.home}<span>Home</span></a>
      </div>
    </div>
    ${headerType === 'tools' ? toolNav() : mainNav()}
  `;
}

const footer = document.querySelector('[data-site-footer]');
if (footer) {
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="shell footer-main">
      <div class="footer-brand">
        <span class="footer-mark">Devy A Utami</span>
        <p>Graphic designer and data-driven creative, crafting brand visuals, marketing materials, and clear information systems.</p>
      </div>
      <nav class="footer-nav" aria-label="Footer">
        <a href="index.html">Home</a>
        <a href="experience.html">Experience</a>
        <a href="projects.html">Projects</a>
        <a href="certificates.html">Certificates</a>
      </nav>
      <div class="footer-meta">
        <strong>2026 @Dev</strong>
        <span>&copy; 2026 Devy A Utami</span>
      </div>
    </div>
    <div class="footer-line"></div>
    <div class="shell footer-bottom">
      <span>Graphic design &middot; Data &middot; Presentation</span>
      <a href="#main">Back to top &uarr;</a>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   Back button
   -------------------------------------------------------------------------- */
document.addEventListener('click', (event) => {
  const back = event.target.closest('button[data-back]');
  if (!back) return;
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html';
  }
});

/* --------------------------------------------------------------------------
   Lightbox
   -------------------------------------------------------------------------- */
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.setAttribute('role', 'dialog');
lightbox.setAttribute('aria-modal', 'true');
lightbox.setAttribute('aria-label', 'Image preview');
lightbox.innerHTML = `
  <figure class="lightbox-figure">
    <button class="lightbox-close" type="button" aria-label="Close preview">${icons.close}</button>
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" />
    <figcaption></figcaption>
  </figure>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('figcaption');
const lightboxClose = lightbox.querySelector('.lightbox-close');
let lastFocused = null;

function openLightbox(src, caption = '', alt = '') {
  lastFocused = document.activeElement;
  lightboxImage.src = src;
  lightboxImage.alt = alt || caption;
  lightboxCaption.textContent = caption;
  lightbox.classList.add('is-open');
  document.body.classList.add('no-scroll');
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  if (lastFocused && typeof lastFocused.focus === 'function') {
    lastFocused.focus();
  }
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
    closeLightbox();
  }
});

/* --------------------------------------------------------------------------
   Carousel
   -------------------------------------------------------------------------- */
const reduceMotion =
  staticMode || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

class Carousel {
  constructor(root) {
    this.root = root;
    this.slides = Array.from(root.querySelectorAll('.carousel-slide'));
    this.dotsWrap = root.querySelector('.carousel-dots');
    this.stage = root.querySelector('.carousel-stage');
    this.prevButton = root.querySelector('[data-prev]');
    this.nextButton = root.querySelector('[data-next]');
    this.autoplayMs = Number(root.dataset.autoplay || 0);
    this.index = 0;
    this.timer = null;
    this.suppressClick = false;

    if (!this.slides.length) return;

    this.buildDots();
    this.bind();
    this.render();
    this.startAutoplay();
  }

  get count() {
    return this.slides.length;
  }

  buildDots() {
    if (!this.dotsWrap) return;
    this.dotsWrap.innerHTML = '';
    this.dots = this.slides.map((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
      dot.addEventListener('click', () => this.goTo(index, true));
      this.dotsWrap.appendChild(dot);
      return dot;
    });
  }

  bind() {
    this.prevButton?.addEventListener('click', () => this.goTo(this.index - 1, true));
    this.nextButton?.addEventListener('click', () => this.goTo(this.index + 1, true));

    this.stage?.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.goTo(this.index - 1, true);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.goTo(this.index + 1, true);
      }
      if (event.key === 'Enter' || event.key === ' ') {
        const slide = document.activeElement?.closest?.('.carousel-slide');
        if (slide) {
          event.preventDefault();
          this.activate(slide);
        }
      }
    });

    let startX = 0;
    let startY = 0;
    let tracking = false;

    this.stage?.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      startX = event.clientX;
      startY = event.clientY;
      tracking = true;
    });

    const endDrag = (event) => {
      if (!tracking) return;
      tracking = false;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) {
        this.suppressClick = true;
        this.goTo(this.index + (dx < 0 ? 1 : -1), true);
        window.setTimeout(() => {
          this.suppressClick = false;
        }, 60);
      }
    };

    this.stage?.addEventListener('pointerup', endDrag);
    this.stage?.addEventListener('pointercancel', () => {
      tracking = false;
    });

    this.root.addEventListener('click', (event) => {
      const slide = event.target.closest('.carousel-slide');
      if (!slide) return;
      if (this.suppressClick) {
        this.suppressClick = false;
        return;
      }
      this.activate(slide);
    });

    this.root.addEventListener('mouseenter', () => this.stopAutoplay());
    this.root.addEventListener('mouseleave', () => this.startAutoplay());
    this.root.addEventListener('focusin', () => this.stopAutoplay());

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.stopAutoplay();
      else this.startAutoplay();
    });
  }

  activate(slide) {
    const slideIndex = this.slides.indexOf(slide);
    if (slideIndex === -1) return;

    if (slide.dataset.href) {
      window.location.href = slide.dataset.href;
      return;
    }

    if (slide.dataset.lightbox) {
      const img = slide.querySelector('img');
      openLightbox(
        slide.dataset.lightbox,
        slide.dataset.caption || '',
        img?.alt || ''
      );
      return;
    }

    this.goTo(slideIndex, true);
  }

  goTo(index, userInitiated = false) {
    this.index = (index + this.count) % this.count;
    this.render();
    if (userInitiated) this.restartAutoplay();
  }

  render() {
    this.slides.forEach((slide, index) => {
      let offset = index - this.index;
      if (offset > this.count / 2) offset -= this.count;
      if (offset < -this.count / 2) offset += this.count;

      slide.style.setProperty('--offset', offset);
      slide.classList.toggle('is-active', offset === 0);
      slide.classList.toggle('is-hidden', Math.abs(offset) > 1);
      slide.tabIndex = offset === 0 ? 0 : -1;
      slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
    });

    this.dots?.forEach((dot, index) => {
      const active = index === this.index;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-current', active ? 'true' : 'false');
    });
  }

  startAutoplay() {
    if (!this.autoplayMs || reduceMotion || this.timer) return;
    this.timer = window.setInterval(() => {
      this.index = (this.index + 1) % this.count;
      this.render();
    }, this.autoplayMs);
  }

  stopAutoplay() {
    if (!this.timer) return;
    window.clearInterval(this.timer);
    this.timer = null;
  }

  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}

document.querySelectorAll('[data-carousel]').forEach((root) => new Carousel(root));

/* --------------------------------------------------------------------------
   Rotating hero roles
   -------------------------------------------------------------------------- */
const roleCycler = document.querySelector('[data-role-cycler]');

if (roleCycler) {
  const roles = Array.from(roleCycler.querySelectorAll('.hero-role'));

  if (roles.length > 1 && !reduceMotion) {
    let index = Math.max(0, roles.findIndex((role) => role.classList.contains('is-active')));
    let timer = null;

    const advance = () => {
      const current = roles[index];
      index = (index + 1) % roles.length;
      const next = roles[index];

      current.classList.remove('is-active');
      current.classList.add('is-past');
      next.classList.remove('is-past');
      next.classList.add('is-active');

      window.setTimeout(() => current.classList.remove('is-past'), 700);
    };

    const start = () => {
      if (timer) return;
      timer = window.setInterval(advance, 2600);
    };

    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = null;
    };

    start();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });
  }
}

/* --------------------------------------------------------------------------
   Lightbox triggers
   -------------------------------------------------------------------------- */
document.querySelectorAll('[data-lightbox]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const img = trigger.querySelector('img');
    openLightbox(
      trigger.dataset.lightbox,
      trigger.dataset.caption || '',
      img?.alt || ''
    );
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      trigger.click();
    }
  });
});

/* --------------------------------------------------------------------------
   Reveal on scroll
   -------------------------------------------------------------------------- */
const revealElements = Array.from(document.querySelectorAll('[data-reveal]'));

if (revealElements.length) {
  if ('IntersectionObserver' in window && !reduceMotion) {
    document.documentElement.classList.add('js');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-in'));
  }
}

/* --------------------------------------------------------------------------
   Pointer spotlight
   -------------------------------------------------------------------------- */
const spotlight = document.querySelector('[data-spotlight]');

if (spotlight && window.matchMedia('(pointer: fine)').matches && !reduceMotion) {
  spotlight.addEventListener('pointermove', (event) => {
    const rect = spotlight.getBoundingClientRect();
    spotlight.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    spotlight.style.setProperty('--my', `${event.clientY - rect.top}px`);
  });
}

/* --------------------------------------------------------------------------
   Small delight: keep the footer year tidy if the user updates it
   -------------------------------------------------------------------------- */
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
