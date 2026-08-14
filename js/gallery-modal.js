/**
 * PORTAL PENCALONAN ANUGERAH KHAS PENDIDIKAN: PENCIPTA KANDUNGAN DIGITAL 2026
 * LIGHTBOX MODAL CONTROLLER
 * Used for displaying high-resolution posters and opening specific pages from the flipbook.
 */

(function () {
  'use strict';

  let isCustomImage = false;
  let activeIndex = 0;
  
  // Note: For Darkroom navigation (keyboard arrows), we limit it to 96 pages.
  const totalPages = 96;

  window.openDarkroomLightbox = function (pageNumber, title) {
    isCustomImage = false;
    const modal = document.getElementById('stripe-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const pageEl = document.getElementById('lightbox-page-num');

    activeIndex = parseInt(pageNumber, 10);
    if (isNaN(activeIndex) || activeIndex < 1) activeIndex = 1;
    if (activeIndex > totalPages) activeIndex = totalPages;

    const pageStr = String(activeIndex).padStart(2, '0');

    if (img) img.src = `assets/certs/page_${pageStr}.jpg`;
    if (titleEl) titleEl.textContent = title || `Muka Surat ${activeIndex}`;
    if (pageEl) pageEl.textContent = `Muka Surat ${activeIndex} / ${totalPages}`;

    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.openPosterLightbox = function (src, title) {
    isCustomImage = true;
    const modal = document.getElementById('stripe-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    const pageEl = document.getElementById('lightbox-page-num');

    if (img) img.src = src;
    if (titleEl) titleEl.textContent = title || 'Poster Rasmi Inovasi';
    if (pageEl) pageEl.textContent = 'Poster Rasmi Resolusi Tinggi (HD)';

    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.navigateDarkroom = function (direction) {
    if (isCustomImage) return; // Disable arrows for posters (only 1 poster open at a time)
    
    activeIndex += direction;
    if (activeIndex < 1) activeIndex = totalPages;
    if (activeIndex > totalPages) activeIndex = 1;

    window.openDarkroomLightbox(activeIndex, `Muka Surat ${activeIndex}`);
  };

  window.closeDarkroom = function () {
    const modal = document.getElementById('stripe-lightbox-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('stripe-lightbox-modal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') window.closeDarkroom();
    if (e.key === 'ArrowLeft') window.navigateDarkroom(-1);
    if (e.key === 'ArrowRight') window.navigateDarkroom(1);
  });

})();
