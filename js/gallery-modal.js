/**
 * PORTAL PENCALONAN ANUGERAH KHAS PENDIDIKAN: PENCIPTA KANDUNGAN DIGITAL 2026
 * APPLE PHOTOS MEDIA GRID & DARKROOM LIGHTBOX (96 PAGES & OFFICIAL POSTERS)
 */

(function () {
  'use strict';

  const documents = [
    { page: 1, category: 'borang', title: 'M/S 1: Muka Depan Rasmi Pencalonan' },
    { page: 2, category: 'borang', title: 'M/S 2: Borang Pencalonan & Biodata Calon' },
    { page: 3, category: 'borang', title: 'M/S 3: Maklumat Perkhidmatan & Kelayakan Akademik' },
    { page: 4, category: 'borang', title: 'M/S 4: Senarai Sumbangan & Pengiktirafan Profesional' },
    { page: 5, category: 'borang', title: 'M/S 5: Ringkasan Inovasi Digital Calon' },
    { page: 6, category: 'borang', title: 'M/S 6: Ekosistem Aplikasi Pengajaran & Pembelajaran' },
    { page: 7, category: 'borang', title: 'M/S 7: Senarai Penerbitan Modul, Buku & Kajian Tindakan' },
    { page: 8, category: 'borang', title: 'M/S 8: Butiran MyPhysicsTutor, PhysPlot & HeadcountPro' },
    { page: 9, category: 'borang', title: 'M/S 9: Butiran Inovasi Amali Sains & Makmal Maya' },
    { page: 10, category: 'borang', title: 'M/S 10: Impak CIDS Suites Pro & Pelaksanaan Sekolah' },
    { page: 11, category: 'borang', title: 'M/S 11: Analisis Keberkesanan & Pencapaian Murid' },
    { page: 12, category: 'borang', title: 'M/S 12: Penglibatan Komuniti & Bimbingan Guru' },
    { page: 13, category: 'borang', title: 'M/S 13: Senarai Lampiran & Bahan Sokongan' },
    { page: 14, category: 'borang', title: 'M/S 14: Perakuan Keaslian Calon (Tandatangan Calon)' },
    { page: 15, category: 'borang', title: 'M/S 15: Perakuan & Sokongan Pengetua SMKA Kerian' },
    { page: 16, category: 'borang', title: 'M/S 16: Pengesahan & Perakuan JPN Perak' },
    { page: 17, category: 'kebangsaan', title: 'M/S 17: Salinan Kad Pengenalan & Surat Pelantikan' },
    { page: 18, category: 'kebangsaan', title: 'M/S 18: Ijazah Sarjana Muda (BSc) The Univ of Manchester' },
    { page: 19, category: 'kebangsaan', title: 'M/S 19: Sijil Anugerah Perkhidmatan Cemerlang (APC 2016)' },
    { page: 20, category: 'kebangsaan', title: 'M/S 20: Sijil Anugerah Perkhidmatan Cemerlang (APC 2026)' },
    { page: 21, category: 'antarabangsa', title: 'M/S 21: Sijil Penghargaan Antarabangsa 2024' },
    { page: 22, category: 'antarabangsa', title: 'M/S 22: Sijil Inovasi Antarabangsa IIEF 2024' },
    { page: 23, category: 'antarabangsa', title: 'M/S 23: Sijil Anugerah Emas (Gold Award) IIEF 2025' },
    { page: 24, category: 'antarabangsa', title: 'M/S 24: Sijil Anugerah Perak InnoZilla USM 2024' },
    { page: 25, category: 'antarabangsa', title: 'M/S 25: Sijil Anugerah Perak InnoZilla USM 2025' },
    { page: 26, category: 'panel', title: 'M/S 26: Surat Lantikan Panel Dron Kebangsaan UKM' },
    { page: 27, category: 'panel', title: 'M/S 27: Surat Lantikan Panel Fizik Menengah UKM' },
    { page: 28, category: 'panel', title: 'M/S 28: Sijil Penghargaan Penyelidikan Dron UKM' },
    { page: 29, category: 'panel', title: 'M/S 29: Surat Penghargaan Panel MOBIM Sains BPK KPM' },
    { page: 30, category: 'panel', title: 'M/S 30: Surat Penghargaan Panel SDG 4IR BPK KPM' },
    { page: 60, category: 'antarabangsa', title: 'M/S 60: Sijil Apple Learning Coach (ALC) Global' },
    { page: 63, category: 'modul', title: 'M/S 63: Modul Hibrid MyHomePhysicsLab Tingkatan 4' },
    { page: 67, category: 'modul', title: 'M/S 67: Modul Hibrid MyHomePhysicsLab Tingkatan 5' },
    { page: 75, category: 'negeri', title: 'M/S 75: Sijil Penulis Buku Anekdot Edufluencers JPN Perak' },
    { page: 96, category: 'kebangsaan', title: 'M/S 96: Dokumen Penutup & Rumusan Sijil Pencalonan' }
  ];

  // Auto populate other pages up to 96
  for (let i = 1; i <= 96; i++) {
    if (!documents.find(d => d.page === i)) {
      let cat = 'kebangsaan';
      if (i <= 16) cat = 'borang';
      else if (i >= 21 && i <= 25) cat = 'antarabangsa';
      else if (i >= 26 && i <= 35) cat = 'panel';
      else if (i >= 63 && i <= 70) cat = 'modul';
      else if (i >= 71 && i <= 85) cat = 'negeri';

      documents.push({
        page: i,
        category: cat,
        title: `M/S ${i}: Dokumen Sokongan & Sijil Lampiran #${i}`
      });
    }
  }

  documents.sort((a, b) => a.page - b.page);

  let currentCategory = 'all';
  let searchQuery = '';
  let activeIndex = 0;
  let isCustomImage = false;
  let customSrc = '';

  function renderGrid() {
    const grid = document.getElementById('vault-photos-grid');
    if (!grid) return;

    const filtered = documents.filter(doc => {
      const matchCat = currentCategory === 'all' || doc.category === currentCategory;
      const matchQuery = !searchQuery || 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        `m/s ${doc.page}`.includes(searchQuery.toLowerCase()) ||
        `page ${doc.page}`.includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });

    grid.innerHTML = filtered.map((doc) => {
      const pageStr = String(doc.page).padStart(2, '0');
      return `
        <div class="photo-doc-card apple-reveal" onclick="window.openDarkroomLightbox(${doc.page}, '${doc.title.replace(/'/g, "\\'")}')">
          <div class="photo-thumb-box">
            <span class="photo-page-pill">M/S ${doc.page}</span>
            <img src="assets/certs/page_${pageStr}.jpg" alt="${doc.title}" class="photo-thumb-img" loading="lazy" onerror="this.src='assets/images/cover_full.jpg'">
          </div>
          <div class="photo-card-info">
            <h5 class="photo-card-title">${doc.title}</h5>
          </div>
        </div>
      `;
    }).join('');
  }

  window.filterAppleVault = function (cat, btn) {
    currentCategory = cat;
    document.querySelectorAll('.vault-segment-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderGrid();
  };

  window.searchAppleVault = function (input) {
    searchQuery = input.value.trim();
    renderGrid();
  };

  window.openDarkroomLightbox = function (pageNumber, title) {
    isCustomImage = false;
    const modal = document.getElementById('darkroom-modal');
    const img = document.getElementById('darkroom-img');
    const titleEl = document.getElementById('darkroom-title');
    const pageEl = document.getElementById('darkroom-page-num');

    activeIndex = documents.findIndex(d => d.page === pageNumber);
    if (activeIndex === -1) activeIndex = 0;

    const doc = documents[activeIndex];
    const pageStr = String(doc.page).padStart(2, '0');

    if (img) img.src = `assets/certs/page_${pageStr}.jpg`;
    if (titleEl) titleEl.textContent = title || doc.title;
    if (pageEl) pageEl.textContent = `Muka Surat ${doc.page} / 96`;

    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.openPosterLightbox = function (src, title) {
    isCustomImage = true;
    customSrc = src;
    const modal = document.getElementById('darkroom-modal');
    const img = document.getElementById('darkroom-img');
    const titleEl = document.getElementById('darkroom-title');
    const pageEl = document.getElementById('darkroom-page-num');

    if (img) img.src = src;
    if (titleEl) titleEl.textContent = title || 'Poster Rasmi Inovasi';
    if (pageEl) pageEl.textContent = 'Poster Rasmi Resolusi Tinggi (HD)';

    if (modal) modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.navigateDarkroom = function (direction) {
    if (isCustomImage) return;
    activeIndex += direction;
    if (activeIndex < 0) activeIndex = documents.length - 1;
    if (activeIndex >= documents.length) activeIndex = 0;

    const doc = documents[activeIndex];
    window.openDarkroomLightbox(doc.page, doc.title);
  };

  window.closeDarkroom = function () {
    const modal = document.getElementById('darkroom-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('darkroom-modal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') window.closeDarkroom();
    if (e.key === 'ArrowLeft') window.navigateDarkroom(-1);
    if (e.key === 'ArrowRight') window.navigateDarkroom(1);
  });

  document.addEventListener('DOMContentLoaded', renderGrid);
})();
