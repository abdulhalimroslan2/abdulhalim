/**
 * PORTAL PENCALONAN ANUGERAH KHAS PENDIDIKAN: PENCIPTA KANDUNGAN DIGITAL 2026
 * 3D BOOK POPUP & INTERACTIVE MODAL CONTROLLER (7 BOOKS COMPLETE)
 */

(function () {
  'use strict';

  const booksData = [
    {
      id: 1,
      title: "Booklet Cheatnote x Tasfiz Fizik Tingkatan 4",
      subtitle: "Edisi Khas SPM KSSM (Edisi 2024)",
      author: "Abdul Halim bin Roslan (Penulis & Kandungan) & Nor Farhana binti Farik (Reka Bentuk)",
      publisher: "Cikgu Halim Fizik & Inovasi Pendidikan",
      year: "2024",
      category: "Buku Rujukan Poket & Nota Padat",
      cover: "assets/books/book_cheatnote_t4.png",
      storeUrl: "https://shop.tiktok.com/my/pdp/bukuk-rujukan-fizik-spm-2025-nota-ringkas-formula-penting-grafik-warna-warni/1730571707799471726",
      storeLabel: "Dapatkan di TikTok Shop ↗",
      storeClass: "tiktok",
      synopsis: "Booklet bersaiz poket yang komprehensif mengandungi rahsia skor A+ Fizik SPM. Menghimpunkan rumusan formula, takrifan konsep, kata kunci soalan SPM serta tip menjawab dengan pantas dan tepat.",
      features: [
        "Inklusif, menyeluruh dan mudah dibawa ke mana-mana",
        "Kuasai keseluruhan konsep Fizik Tingkatan 4 dengan cepat",
        "Kompilasi lengkap Formula & Definisi standard KSSM",
        "Bonus: Rumusan Simbol & Kuantiti Fizik T4 + Ruangan Catatan Nota"
      ]
    },
    {
      id: 2,
      title: "Booklet Cheatnote x Tasfiz Fizik Tingkatan 5",
      subtitle: "Edisi Khas SPM KSSM (Edisi 2024)",
      author: "Abdul Halim bin Roslan (Penulis & Kandungan) & Nor Farhana binti Farik (Reka Bentuk)",
      publisher: "Cikgu Halim Fizik & Inovasi Pendidikan",
      year: "2024",
      category: "Buku Rujukan Poket & Nota Padat",
      cover: "assets/books/book_cheatnote_t5.png",
      storeUrl: "https://shop.tiktok.com/my/pdp/bukuk-rujukan-fizik-spm-2025-nota-ringkas-formula-penting-grafik-warna-warni/1730571707799471726",
      storeLabel: "Dapatkan di TikTok Shop ↗",
      storeClass: "tiktok",
      synopsis: "Panduan poket pantas untuk calon SPM menguasai topik-topik aras tinggi Fizik Tingkatan 5. Mengandungi visual rajah litar, gelombang, fizik kuantum dan nuklear secara mudah difahami.",
      features: [
        "Rahsia Skor A+ bagi silibus Fizik Tingkatan 5 SPM",
        "Penerangan ringkas tetapi padat bagi topik-topik sukar",
        "Visual infografik berwarna penuh untuk pemahaman pantas",
        "Bonus: Ringkasan Simbol, Kuantiti & Definisi Fizik Tingkatan 5"
      ]
    },
    {
      id: 3,
      title: "Modul Konstruk Tingkatan 4 Fizik",
      subtitle: "Dwibahasa (BM & ENG) • Siri Modul SPM",
      author: "A. H. Roslan (Guru Cemerlang Fizik)",
      publisher: "Nilam Publication Sdn. Bhd.",
      year: "2024 / 2025",
      category: "Buku Kerja & Modul Pembelajaran Kebangsaan",
      cover: "assets/books/book_modul_t4.jpg",
      storeUrl: "https://shop.tiktok.com/my/pdp/modul-konstruksi-fizikal-tingkatan-4-5-dwibahasa-latihan-tp/1733545067692787176",
      storeLabel: "Dapatkan di TikTok Shop ↗",
      storeClass: "tiktok",
      synopsis: "Modul latihan dan pengukuhan berimpak tinggi yang diterbitkan secara komersial di peringkat kebangsaan oleh Nilam Publication. Menepati format pentaksiran dan pembinaan konstruk Lembaga Peperiksaan KPM.",
      features: [
        "Tepat Mengikut Konstruk SPM Sebenar (Lembaga Peperiksaan)",
        "Kesahan Tinggi bagi Instrumen PBD Bertulis",
        "Kaedah PICK (Physics Ingat Cara Kreatif)",
        "Dilengkapi Mnemonik & Ilustrasi Kreatif untuk Mudah Ingat"
      ]
    },
    {
      id: 4,
      title: "Modul Konstruk Tingkatan 5 Fizik",
      subtitle: "Dwibahasa (BM & ENG) • Siri Modul SPM",
      author: "A. H. Roslan (Guru Cemerlang Fizik)",
      publisher: "Nilam Publication Sdn. Bhd.",
      year: "2024 / 2025",
      category: "Buku Kerja & Modul Pembelajaran Kebangsaan",
      cover: "assets/books/book_modul_t5.jpg",
      storeUrl: "https://shop.tiktok.com/my/pdp/modul-konstruksi-fizikal-tingkatan-4-5-dwibahasa-latihan-tp/1733545067692787176",
      storeLabel: "Dapatkan di TikTok Shop ↗",
      storeClass: "tiktok",
      synopsis: "Buku modul pembelajaran lanjutan bagi silibus Tingkatan 5 yang membimbing murid menguasai soalan Kemahiran Berfikir Aras Tinggi (KBAT) dan teknik menjawab kertas 1, 2 dan 3 Fizik SPM.",
      features: [
        "Tepat Mengikut Konstruk SPM Sebenar & Piawaian KPM",
        "Latihan Topikal Berperingkat daripada Asas ke Aras KBAT",
        "Kaedah PICK (Physics Ingat Cara Kreatif)",
        "Teknik Mnemonik Visual & Panduan Skema Penskoran Cemerlang"
      ]
    },
    {
      id: 5,
      title: "Modul Gravi-STEM Fizik Tingkatan 4",
      subtitle: "Penyelidikan Inkuiri & STEM (USM, 2022)",
      author: "Abdul Halim bin Roslan & Dr. Nur Jahan binti Ahmad",
      publisher: "Universiti Sains Malaysia (USM) & SMKA Kerian",
      year: "2022",
      category: "Modul Penyelidikan & Inovasi STEM",
      cover: "assets/books/book_gravi_stem.jpg",
      storeUrl: "https://journal.unisza.edu.my/apj/index.php/apj/article/view/367",
      storeLabel: "Lihat Penerbitan Jurnal ↗",
      storeClass: "rak-buku",
      synopsis: "Modul pembelajaran berimpak tinggi yang dibangunkan berasaskan Model Pembangunan Modul Sidek dan Model 5E Bybee bagi topik Kegravitian Fizik KSSM. Mengintegrasikan Kemahiran Berfikir Aras Tinggi (KBAT) dan Pembelajaran Berasaskan Inkuiri (PBI).",
      features: [
        "Penyelidikan rasmi Universiti Sains Malaysia (USM, 2022)",
        "Kesahan pakar 0.88 dan pekali kebolehpercayaan tinggi 0.95",
        "Liputan SK 3.1 Hukum Kegravitian Newton & SK 3.2 Hukum Kepler",
        "Meningkatkan skor KBAT murid secara signifikan (Saiz kesan d = 1.804)"
      ]
    },
    {
      id: 6,
      title: "Modul Amali Hibrid Fizik #MyHomePhysicsLab",
      subtitle: "18 Amali Wajib Fizik Tingkatan 4 di Rumah",
      author: "Abdul Halim bin Roslan (Ketua Panel), Titiyaka Jajuri, Maryam Jameelah, 'Izzuan Hilmi",
      publisher: "Sektor Pembelajaran, Jabatan Pendidikan Negeri Perak",
      year: "2021 / 2022",
      category: "Modul Amali Hibrid & Panduan Guru",
      cover: "assets/books/book_modul_hibrid.png",
      storeUrl: "https://youtube.com/@cikguhalimfizik",
      storeLabel: "Tonton Video Panduan Amali ↗",
      storeClass: "tiktok",
      synopsis: "Modul inovatif inisiatif Sektor Pembelajaran JPN Perak merangkumi 18 Amali Wajib Fizik Tingkatan 4 yang boleh dilaksanakan oleh murid secara kendiri di rumah menggunakan perisian simulasi PhET, GeoGebra dan panduan video YouTube.",
      features: [
        "Inisiatif Rasmi Sektor Pembelajaran JPN Perak (We Deliver)",
        "Meliputi 18 Amali Wajib Fizik Tingkatan 4 DSKP KSSM",
        "Integrasi simulasi interaktif PhET, GeoGebra & video amali YouTube",
        "Panduan amali kendiri murid secara fleksibel dan hibrid"
      ]
    },
    {
      id: 7,
      title: "Rona-Rona Pendidik: Anekdot Edufluencers",
      subtitle: "Karya Penulisan Inspirasi Guru Negeri Perak",
      author: "Abdul Halim bin Roslan (Penulis Bersama Edufluencers JPN Perak)",
      publisher: "Syahida Hassan Enterprise",
      publisherUrl: "https://rakbukushe.com/",
      year: "2026",
      category: "Buku Penulisan Ilmiah & Anekdot Pendidikan",
      cover: "assets/books/book_anekdot_perak.png",
      storeUrl: "https://rakbukushe.com/",
      storeLabel: "Laman Rasmi Penerbit ↗",
      storeClass: "rak-buku",
      synopsis: "Buku antologi anekdot rasmi anjuran komuniti Edufluencers yang diterbitkan oleh Syahida Hassan Enterprise. Menghimpunkan kisah inspirasi, perjuangan dan amalan pedagogi kreatif guru-guru terpilih di bawah komuniti Edufluencers KPM Negeri Perak.",
      features: [
        "Penerbit: Syahida Hassan Enterprise (rakbukushe.com)",
        "Inisiatif Komuniti Edufluencers KPM Negeri Perak",
        "Dokumentasi naratif inspirasi transformasi bilik darjah",
        "Perkongsian amalan terbaik pendidik digital dan inovator"
      ]
    }
  ];

  let currentBookIndex = 0;

  window.openBookModal = function (bookId) {
    const index = booksData.findIndex(b => b.id === parseInt(bookId, 10));
    if (index === -1) return;
    currentBookIndex = index;
    renderBookModal(booksData[index]);

    const modal = document.getElementById('open-book-modal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeBookModal = function () {
    const modal = document.getElementById('open-book-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  function renderBookModal(book) {
    const coverImg = document.getElementById('modal-book-cover');
    const chipPublisher = document.getElementById('modal-book-publisher-chip');
    const chipYear = document.getElementById('modal-book-year-chip');
    const chipCategory = document.getElementById('modal-book-cat-chip');
    const publisherTag = document.getElementById('modal-book-publisher-tag');
    const titleEl = document.getElementById('modal-book-title');
    const authorEl = document.getElementById('modal-book-author');
    const synopsisEl = document.getElementById('modal-book-synopsis');
    const featuresList = document.getElementById('modal-book-features');
    const btnHd = document.getElementById('modal-book-btn-hd');
    const btnShop = document.getElementById('modal-book-btn-shop');

    if (coverImg) coverImg.src = book.cover;
    if (chipPublisher) {
      chipPublisher.textContent = book.publisher;
      if (book.publisherUrl) {
        chipPublisher.innerHTML = `<a href="${book.publisherUrl}" target="_blank" style="color: inherit; text-decoration: underline;">${book.publisher} ↗</a>`;
      }
    }
    if (chipYear) chipYear.textContent = `Tahun ${book.year}`;
    if (chipCategory) chipCategory.textContent = book.category;
    if (publisherTag) {
      if (book.publisherUrl) {
        publisherTag.innerHTML = `<a href="${book.publisherUrl}" target="_blank" style="color: inherit; text-decoration: none;">${book.publisher.toUpperCase()} ↗</a> • ${book.year}`;
      } else {
        publisherTag.textContent = `${book.publisher} • ${book.year}`;
      }
    }
    if (titleEl) titleEl.textContent = book.title;
    if (authorEl) authorEl.textContent = `✍️ ${book.author}`;
    if (synopsisEl) synopsisEl.textContent = book.synopsis;

    if (featuresList) {
      featuresList.innerHTML = '';
      book.features.forEach(f => {
        const li = document.createElement('li');
        if (f.includes('rakbukushe.com') && book.publisherUrl) {
          li.innerHTML = `<span class="bullet-check">✓</span><span>Penerbit: <a href="${book.publisherUrl}" target="_blank" style="color: var(--brand-indigo); font-weight: 700; text-decoration: underline;">Syahida Hassan Enterprise (rakbukushe.com) ↗</a></span>`;
        } else {
          li.innerHTML = `<span class="bullet-check">✓</span><span>${f}</span>`;
        }
        featuresList.appendChild(li);
      });
    }

    if (btnShop) {
      if (book.storeUrl) {
        btnShop.href = book.storeUrl;
        btnShop.style.display = 'inline-flex';
        btnShop.className = `btn-open-shop ${book.storeClass || ''}`;
        btnShop.innerHTML = `<span>${book.storeLabel || 'Dapatkan Buku ↗'}</span>`;
      } else {
        btnShop.style.display = 'none';
      }
    }

    if (btnHd) {
      btnHd.onclick = function () {
        if (typeof window.openPosterLightbox === 'function') {
          window.openPosterLightbox(book.cover, `${book.title} (Kulit Resolusi Tinggi)`);
        }
      };
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('open-book-modal');
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      window.closeBookModal();
    } else if (e.key === 'ArrowRight') {
      currentBookIndex = (currentBookIndex + 1) % booksData.length;
      renderBookModal(booksData[currentBookIndex]);
    } else if (e.key === 'ArrowLeft') {
      currentBookIndex = (currentBookIndex - 1 + booksData.length) % booksData.length;
      renderBookModal(booksData[currentBookIndex]);
    }
  });

  // Close modal when clicking backdrop
  document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('open-book-modal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          window.closeBookModal();
        }
      });
    }
  });

})();
