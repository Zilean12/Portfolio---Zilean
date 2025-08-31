'use client';

import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('scrollreveal').then(({ default: ScrollReveal }) => {
        const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true
        });

        const srLeft = ScrollReveal({
          origin: 'left',
          distance: '80px',
          duration: 2000,
          reset: true
        });

        const srRight = ScrollReveal({
          origin: 'right',
          distance: '80px',
          duration: 2000,
          reset: true
        });

        // Home section animations
        sr.reveal('.featured-text-card', {});
        sr.reveal('.featured-name', { delay: 100 });
        sr.reveal('.featured-text-info', { delay: 200 });
        sr.reveal('.featured-text-btn', { delay: 200 });
        sr.reveal('.social_icons', { delay: 200 });
        sr.reveal('.featured-image', { delay: 300 });

        // Projects animations
        sr.reveal('.project-box', { interval: 200 });

        // Left side animations
        srLeft.reveal('.about-info', { delay: 100 });
        srLeft.reveal('.contact-info', { delay: 100 });

        // Right side animations
        srRight.reveal('.skills-box', { delay: 100 });
        srRight.reveal('.form-control', { delay: 100 });

        // Top animations for headers
        sr.reveal('.top-header', {});
      });
    }
  }, []);
}