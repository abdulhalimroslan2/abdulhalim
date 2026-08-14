/**
 * PORTAL PENCALONAN ANUGERAH KHAS PENDIDIKAN: PENCIPTA KANDUNGAN DIGITAL 2026
 * APPLE INC. FLAGSHIP UI CONTROLLER
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. APPLE SCROLL OBSERVER (REVEAL ANIMATIONS)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.apple-reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('active'));
  }

  /* ==========================================================================
     2. APPLE SUBNAV SCROLL SPY & STICKY BEHAVIOR
     ========================================================================== */
  const subnav = document.querySelector('.apple-subnav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 48) {
      subnav?.classList.add('scrolled');
    } else {
      subnav?.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     3. APPLE PRODUCT TAB SWITCHER
     ========================================================================== */
  window.switchAppleProductTab = function (appId, btnEl) {
    document.querySelectorAll('.apple-tab-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.apple-product-pane').forEach((p) => p.classList.remove('active'));

    btnEl?.classList.add('active');
    const target = document.getElementById(`apple-pane-${appId}`);
    if (target) target.classList.add('active');
  };

  /* ==========================================================================
     4. APPLE TV+ VIDEO CHAPTER SEEKER
     ========================================================================== */
  window.seekCinemaChapter = function (seconds) {
    const video = document.getElementById('cinema-video');
    if (video) {
      video.currentTime = seconds;
      video.play();
      video.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

})();
