/**
 * PORTAL ANUGERAH KHAS PENDIDIKAN: PENCIPTA KANDUNGAN DIGITAL 2026
 * JURI EVALUATION RUBRIC MATRIX & SCORE CALCULATOR
 */

(function () {
  'use strict';

  const rubricData = {
    A: {
      title: 'A. Profil & Kemahiran Calon',
      weight: 10,
      maxRaw: 20,
      items: [
        {
          id: 'A1',
          name: '1. Pengetahuan & Kemahiran Digital',
          desc: 'Penguasaan pelbagai bahasa pengaturcaraan, seni bina web/app (HTML, CSS, JS, Desktop dmg/exe), integrasi AI Gemini/NotebookLM & pensijilan Apple Learning Coach.',
          score: 5,
          proofPage: 60,
          proofTitle: 'Sijil Apple Learning Coach & Bukti Ekosistem Web App'
        },
        {
          id: 'A2',
          name: '2. Kreativiti & Inovasi Pengajaran',
          desc: 'Membangunkan 6 aplikasi terbitan sendiri (MyPhysicsTutor, PhysPlot, HeadcountPro, CIDS Suites Pro, PhysFlix, CikguScan).',
          score: 5,
          proofPage: 8,
          proofTitle: 'Senarai 6 Produk Inovasi Digital (Borang Muka Surat 8)'
        },
        {
          id: 'A3',
          name: '3. Penglibatan & Komitmen',
          desc: '16 tahun perkhidmatan aktif, Panel Pakar UKM 2025, Panel BPK KPM (MOBIM & SDG 4IR), Panel Modul JPN Perak.',
          score: 5,
          proofPage: 28,
          proofTitle: 'Surat Pelantikan Panel Pakar UKM & BPK'
        },
        {
          id: 'A4',
          name: '4. Etika & Profesionalisme Digital',
          desc: 'Penerbitan artikel & buku rasmi (Rona-Rona Pendidik Edufluencers Perak), integriti kod & hak cipta terpelihara.',
          score: 5,
          proofPage: 75,
          proofTitle: 'Sijil Penulis Anekdot Edufluencers JPN Perak'
        }
      ]
    },
    B: {
      title: 'B. Kualiti Kandungan Digital',
      weight: 50,
      maxRaw: 20,
      items: [
        {
          id: 'B1',
          name: '1. Ketepatan & Relevansi Ilmu',
          desc: 'Meliputi 100% Standard Pembelajaran DSKP Fizik KSSM Tingkatan 4 & 5 serta rubrik penskoran Kertas 3 Amali Fizik SPM.',
          score: 5,
          proofPage: 10,
          proofTitle: 'WOW Factor & Liputan Menyeluruh DSKP Fizik'
        },
        {
          id: 'B2',
          name: '2. Reka Bentuk Visual & Audio',
          desc: 'Antara muka bertaraf antarabangsa (Apple/Vercel level design), responsif, mesra peranti murid & grafik beranimasi tinggi.',
          score: 5,
          proofPage: 11,
          proofTitle: 'Infografik Seni Bina UI/UX & Paparan Sistem'
        },
        {
          id: 'B3',
          name: '3. Interaktiviti & Penglibatan Murid',
          desc: 'Simulasi makmal maya interaktif, pemplotan graf masa nyata PhysPlot, kuiz diagnostik kendiri & maklum balas automatik.',
          score: 5,
          proofPage: 63,
          proofTitle: 'Modul Hibrid Makmal Maya Fizik MyHomePhysicsLab'
        },
        {
          id: 'B4',
          name: '4. Nilai Pendidikan & Keberkesanan',
          desc: 'Meningkatkan kefahaman konsep abstrak Fizik, amali kendiri di rumah, dan intervensi berfokus murid SPM.',
          score: 5,
          proofPage: 38,
          proofTitle: 'Anugerah Inovasi PdP & Keberkesanan Murid'
        }
      ]
    },
    C: {
      title: 'C. Sumbangan & Impak',
      weight: 25,
      maxRaw: 15,
      items: [
        {
          id: 'C1',
          name: '1. Sumbangan kepada Komuniti Pendidikan',
          desc: 'Penceramah Inovasi & AI di peringkat PPD Kerian, PPD LMS, JPN Perak serta sebaran terbuka kepada ribuan guru.',
          score: 5,
          proofPage: 9,
          proofTitle: 'Senarai Bengkel & Perkongsian Digital (Borang Muka Surat 9)'
        },
        {
          id: 'C2',
          name: '2. Impak kepada Guru & Murid',
          desc: 'Pengurangan masa merancang RPH melalui CIDS Suites Pro, pemantauan ETR melalui HeadcountPro, peningkatan gred SPM.',
          score: 5,
          proofPage: 10,
          proofTitle: 'Data Impak & Penggunaan Platform'
        },
        {
          id: 'C3',
          name: '3. Keberlanjutan (Sustainability)',
          desc: 'Platform sentiasa dikemas kini, dihoskan pada pelayan web & aplikasi desktop berterusan jangka panjang.',
          score: 5,
          proofPage: 8,
          proofTitle: 'Platform Sebaran Web App, DMG, EXE & YouTube'
        }
      ]
    },
    D: {
      title: 'D. Etika & Profesionalisme',
      weight: 5,
      maxRaw: 5,
      items: [
        {
          id: 'D1',
          name: 'Pemeliharaan Hak Cipta & Integriti Akademik',
          desc: 'Perakuan calon rasmi (Borang Perkara 8), semua kod & modul dibina secara asli tanpa plagiarisme.',
          score: 5,
          proofPage: 13,
          proofTitle: 'Perakuan Calon & Integriti Karya (Borang Muka Surat 13)'
        }
      ]
    },
    E: {
      title: 'E. Video Persembahan',
      weight: 10,
      maxRaw: 15,
      items: [
        {
          id: 'E1',
          name: '1. Keyakinan & Gaya Penyampaian',
          desc: 'Penyampaian profesional, berwibawa, teratur dan jelas dalam video ABDUL HALIM_ARA 3001.mp4.',
          score: 5,
          proofPage: 1,
          proofTitle: 'Video Persembahan Calon (Durasi < 15 Minit)'
        },
        {
          id: 'E2',
          name: '2. Kejelasan Pertuturan & Bahasa',
          desc: 'Penggunaan Bahasa Melayu standard yang fasih, artikulasi terang dan intonasi meyakinkan panel juri.',
          score: 5,
          proofPage: 1,
          proofTitle: 'Audio & Skrip Rakaman Video'
        },
        {
          id: 'E3',
          name: '3. Penggunaan Visual & Media Sokongan',
          desc: 'Gabungan 40% rakaman PdP sebenar, 40% rakaman skrin demo sistem & 20% visual sinematik berdefinisi tinggi.',
          score: 5,
          proofPage: 12,
          proofTitle: 'Visual Demo & Media Sokongan Video'
        }
      ]
    }
  };

  function calculateTotalScore() {
    let totalScore = 0;

    for (const key in rubricData) {
      const section = rubricData[key];
      let sectionRaw = 0;
      section.items.forEach((item) => {
        sectionRaw += item.score;
      });
      const sectionWeighted = (sectionRaw / section.maxRaw) * section.weight;
      totalScore += sectionWeighted;
    }

    return Math.round(totalScore * 10) / 10;
  }

  function renderRubricAccordion() {
    const container = document.getElementById('rubric-accordion-container');
    if (!container) return;

    let html = '';

    for (const key in rubricData) {
      const section = rubricData[key];
      const isActive = key === 'A' ? 'active' : '';

      html += `
        <div class="rubric-accordion-item ${isActive}" data-section="${key}">
          <div class="accordion-header" onclick="window.toggleRubricSection('${key}')">
            <div class="accordion-title-group">
              <div class="section-letter-badge">${key}</div>
              <div>
                <h4 class="accordion-title">${section.title}</h4>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
              <span class="accordion-weight-pill">Wajaran: ${section.weight}% (${section.maxRaw}m)</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--neon-cyan); transition: 0.3s transform;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          <div class="accordion-content">
            <table class="criteria-table">
              <thead>
                <tr>
                  <th style="width: 25%;">Kriteria Penilaian</th>
                  <th style="width: 45%;">Huraian & Justifikasi Kelayakan Calon</th>
                  <th style="width: 15%; text-align: center;">Skor Juri (1-5)</th>
                  <th style="width: 15%; text-align: right;">Bukti Sijil</th>
                </tr>
              </thead>
              <tbody>
                ${section.items
                  .map(
                    (item) => `
                  <tr>
                    <td style="font-weight: 600; color: var(--text-pure);">${item.name}</td>
                    <td style="color: var(--text-secondary); line-height: 1.6;">${item.desc}</td>
                    <td style="text-align: center;">
                      <div class="score-badge-5" title="Skor Tertinggi">
                        <span>★</span> <span>${item.score} / 5</span>
                      </div>
                    </td>
                    <td style="text-align: right;">
                      <button class="btn-view-proof" onclick="window.openDocumentLightbox(${item.proofPage}, '${item.proofTitle}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        <span>M/S ${item.proofPage}</span>
                      </button>
                    </td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  }

  window.toggleRubricSection = function (key) {
    const items = document.querySelectorAll('.rubric-accordion-item');
    items.forEach((item) => {
      if (item.getAttribute('data-section') === key) {
        item.classList.toggle('active');
      }
    });
    if (window.playUiSound) window.playUiSound('click');
  };

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    renderRubricAccordion();
    const scoreVal = document.getElementById('live-rubric-score');
    if (scoreVal) scoreVal.textContent = calculateTotalScore();
  });
})();
