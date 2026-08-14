/**
 * Premium 3D Flipbook Initializer
 * Replaces the heavy gallery grid with a performant StPageFlip instance.
 */

document.addEventListener('DOMContentLoaded', () => {
  const flipbookContainer = document.getElementById('premium-flipbook');
  if (!flipbookContainer) return;

  // 1. Generate 96 pages dynamically
  let html = '';
  for (let i = 1; i <= 96; i++) {
    const pageStr = String(i).padStart(2, '0');
    
    // We use a CSS class to style the page.
    // loading="lazy" ensures the browser only downloads the image when the page is near.
    // The first page (cover) might be loaded immediately.
    const isLazy = i > 3 ? 'loading="lazy"' : '';
    
    html += `
      <div class="flip-page" data-density="${i === 1 || i === 96 ? 'hard' : 'soft'}">
        <div class="flip-page-inner">
          <img src="assets/certs/page_${pageStr}.jpg" alt="Muka Surat ${i}" ${isLazy} class="flip-page-img" onerror="this.src='assets/images/cover_full.jpg'">
          <div class="flip-page-number">${i}</div>
        </div>
      </div>
    `;
  }
  flipbookContainer.innerHTML = html;

  // 2. Initialize StPageFlip
  const pageFlip = new St.PageFlip(flipbookContainer, {
    width: 595, // A4 width proportion
    height: 842, // A4 height proportion
    size: 'stretch',
    minWidth: 315,
    maxWidth: 1000,
    minHeight: 445,
    maxHeight: 1414,
    showCover: true, // First and last pages are hard covers
    maxShadowOpacity: 0.5,
    drawShadow: true,
    flippingTime: 1000,
    usePortrait: true,
    startZIndex: 0
  });

  pageFlip.loadFromHTML(document.querySelectorAll('.flip-page'));

  // 3. Connect UI Controls
  const prevBtn = document.getElementById('flip-prev');
  const nextBtn = document.getElementById('flip-next');
  const pageNum = document.getElementById('flip-page-num');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      pageFlip.flipPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      pageFlip.flipNext();
    });
  }

  pageFlip.on('flip', (e) => {
    if (pageNum) {
      pageNum.textContent = `Muka Surat ${e.data + 1} / 96`;
    }
  });
});
