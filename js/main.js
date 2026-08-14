/**
 * PORTAL PENCALONAN ANUGERAH KHAS PENDIDIKAN: PENCIPTA KANDUNGAN DIGITAL 2026
 * STRIPE.COM MAIN CONTROLLER & INTERACTIVITY
 */

(function () {
  'use strict';

  function initNavScroll() {
    const nav = document.querySelector('.stripe-nav');
    if (!nav) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Premium Video Player Integration
  window.playPremiumVideo = function() {
    const facade = document.getElementById('video-facade');
    const iframeContainer = document.getElementById('video-iframe-container');
    const iframe = document.getElementById('premium-video-iframe');
    
    if (facade && iframeContainer && iframe) {
      // Hide facade, show iframe
      facade.style.display = 'none';
      iframeContainer.style.display = 'block';
      
      // Transfer data-src to src to load the video and trigger autoplay
      if (!iframe.getAttribute('src')) {
        iframe.setAttribute('src', iframe.getAttribute('data-src'));
      }
    }
  };

  // 2. Stripe Scroll Reveal Observer
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.stripe-reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  // 3. Stripe Segmented Product Tab Switcher
  window.switchStripeProductTab = function (tabId, btn) {
    // Remove active state from all buttons
    document.querySelectorAll('.stripe-tab-trigger').forEach((b) => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    // Hide all panes
    document.querySelectorAll('.stripe-product-pane').forEach((pane) => pane.classList.remove('active'));

    // Show selected pane
    const target = document.getElementById(`stripe-pane-${tabId}`);
    if (target) {
      target.classList.add('active');
    }
  };

  // 4. Video Player Chapter Seeker
  window.seekVideoChapter = function (seconds) {
    const video = document.getElementById('cinema-video');
    if (!video) return;

    video.currentTime = seconds;
    video.play();

    // Smooth scroll to video section
    const videoSection = document.getElementById('cinema');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initialize on DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initNavScroll();
    initScrollReveal();
  });
})();
