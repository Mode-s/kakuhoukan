import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initHero() {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from('.hero__frame', {
    autoAlpha: 0,
    y: 48,
    duration: 1.2,
  })
    .from(
      '.hero__catch p',
      {
        autoAlpha: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.18,
      },
      '-=0.7',
    )
    .from(
      '.hero__scroll',
      {
        autoAlpha: 0,
        y: 12,
        duration: 0.6,
      },
      '-=0.4',
    );

  gsap.to('.hero__scroll-line', {
    scaleY: 0,
    transformOrigin: 'top center',
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  });
}

function initHeader() {
  gsap.from('.header', {
    autoAlpha: 0,
    y: -24,
    duration: 0.9,
    ease: 'power2.out',
    delay: 0.15,
  });

  gsap.from('.header .logo-link', {
    autoAlpha: 0,
    x: -16,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.3,
  });

  const isMobile = window.matchMedia(`(max-width: ${800}px)`).matches;
  if (!isMobile) {
    gsap.from('.header .navigation .item', {
      autoAlpha: 0,
      x: 16,
      duration: 0.7,
      stagger: 0.08,
      ease: 'power2.out',
      delay: 0.45,
    });
  }
}

function initScrollAnimations() {
  gsap.utils.toArray<HTMLElement>('[data-animate="title"]').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      autoAlpha: 0,
      y: 32,
      duration: 0.9,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      autoAlpha: 0,
      y: 40,
      duration: 0.9,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((container) => {
    gsap.from(container.children, {
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      autoAlpha: 0,
      y: 36,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power2.out',
    });
  });

  gsap.utils.toArray<HTMLElement>('[data-animate="scale-in"]').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      autoAlpha: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out',
    });
  });
}

function initFooter() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  gsap.from('.footer .logo-wrapper', {
    scrollTrigger: {
      trigger: footer,
      start: 'top 90%',
      toggleActions: 'play none none none',
    },
    autoAlpha: 0,
    y: 24,
    duration: 0.8,
    ease: 'power2.out',
  });

  gsap.from('.footer .info', {
    scrollTrigger: {
      trigger: footer,
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
    autoAlpha: 0,
    y: 32,
    duration: 0.9,
    ease: 'power2.out',
    delay: 0.1,
  });

  gsap.from('.footer .copyright', {
    scrollTrigger: {
      trigger: footer,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    autoAlpha: 0,
    duration: 0.8,
    ease: 'power2.out',
    delay: 0.2,
  });
}

function init() {
  if (prefersReducedMotion) return;

  initHero();
  initHeader();
  initScrollAnimations();
  initFooter();

  window.addEventListener('load', () => ScrollTrigger.refresh());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
