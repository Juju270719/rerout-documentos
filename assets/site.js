(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');

  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 16);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (menuButton && menu) {
    const closeMenu = () => {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    };

    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
    });
  }

  const reveals = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((element) => element.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    reveals.forEach((element) => observer.observe(element));
  }

  const productStage = document.querySelector('[data-product-stage]');
  if (productStage && !reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    const depthElements = productStage.querySelectorAll('[data-depth]');
    productStage.addEventListener('pointermove', (event) => {
      const rect = productStage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      depthElements.forEach((element) => {
        const depth = Number(element.dataset.depth || 1);
        element.style.setProperty('--parallax-x', `${x * depth * 8}px`);
        element.style.setProperty('--parallax-y', `${y * depth * 7}px`);
      });
    });
    productStage.addEventListener('pointerleave', () => {
      depthElements.forEach((element) => {
        element.style.removeProperty('--parallax-x');
        element.style.removeProperty('--parallax-y');
      });
    });
  }

  const demoCopy = document.querySelector('[data-demo-copy]');
  const demoIndex = document.querySelector('.demo-index');
  const demoSteps = ['Importando endereços', 'Validando localizações', 'Comparando sequências', 'Melhor rota encontrada'];
  let demoStep = 0;
  if (demoCopy && demoIndex && !reducedMotion) {
    window.setInterval(() => {
      demoStep = (demoStep + 1) % demoSteps.length;
      demoCopy.textContent = demoSteps[demoStep];
      demoIndex.textContent = String(demoStep + 1).padStart(2, '0');
    }, 2800);
  }

  const process = document.querySelector('[data-route-process]');
  if (process && !reducedMotion) {
    const steps = [...process.querySelectorAll('.process-steps li')];
    let activeStep = 0;
    window.setInterval(() => {
      activeStep = (activeStep + 1) % steps.length;
      steps.forEach((step, index) => step.classList.toggle('active', index === activeStep));
    }, 1500);
  }

  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const slides = [...gallery.querySelectorAll('.gallery-slide')];
    const dots = [...document.querySelectorAll('[data-gallery-dot]')];
    const previous = document.querySelector('[data-gallery-prev]');
    const next = document.querySelector('[data-gallery-next]');
    let activeIndex = 0;

    const setActive = (index, shouldScroll = true) => {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === activeIndex));
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === activeIndex;
        dot.classList.toggle('active', active);
        dot.setAttribute('aria-pressed', String(active));
      });
      if (shouldScroll) slides[activeIndex].scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
    };

    previous?.addEventListener('click', () => setActive(activeIndex - 1));
    next?.addEventListener('click', () => setActive(activeIndex + 1));
    dots.forEach((dot) => dot.addEventListener('click', () => setActive(Number(dot.dataset.galleryDot))));
    gallery.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') setActive(activeIndex + 1);
      if (event.key === 'ArrowLeft') setActive(activeIndex - 1);
    });

    let scrollTimer;
    gallery.addEventListener('scroll', () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const center = gallery.scrollLeft + gallery.clientWidth / 2;
        let closest = 0;
        let distance = Number.POSITIVE_INFINITY;
        slides.forEach((slide, index) => {
          const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
          const candidate = Math.abs(center - slideCenter);
          if (candidate < distance) {
            distance = candidate;
            closest = index;
          }
        });
        setActive(closest, false);
      }, 80);
    }, { passive: true });
    setActive(0, false);
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();

