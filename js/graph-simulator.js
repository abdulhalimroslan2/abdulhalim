/**
 * PORTAL PENCALONAN ANUGERAH KHAS PENDIDIKAN: PENCIPTA KANDUNGAN DIGITAL 2026
 * PHYSPLOT PRO STUDIO - APPLE LAB ENGINE
 */

(function () {
  'use strict';

  let dataset = [
    { I: 0.10, V: 0.48 },
    { I: 0.20, V: 1.02 },
    { I: 0.30, V: 1.49 },
    { I: 0.40, V: 2.01 },
    { I: 0.50, V: 2.52 }
  ];

  let canvas, ctx;

  function initStudio() {
    canvas = document.getElementById('physplot-canvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');

    function resize() {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawStudioGraph();
    }

    window.addEventListener('resize', resize);
    resize();
    updateStudioStats();
  }

  function linearRegression(data) {
    const n = data.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;

    data.forEach((p) => {
      sumX += p.I;
      sumY += p.V;
      sumXY += p.I * p.V;
      sumXX += p.I * p.I;
    });

    const m = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const c = (sumY - m * sumX) / n;

    return { m, c };
  }

  function drawStudioGraph() {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    const padLeft = 60;
    const padBottom = 50;
    const padTop = 24;
    const padRight = 24;

    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    const maxX = 0.60;
    const maxY = 3.00;

    function mapX(x) { return padLeft + (x / maxX) * plotW; }
    function mapY(y) { return padTop + plotH - (y / maxY) * plotH; }

    // Apple Clean Dark Grid
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;

    for (let x = 0; x <= maxX; x += 0.05) {
      const px = mapX(x);
      ctx.beginPath();
      ctx.moveTo(px, padTop);
      ctx.lineTo(px, padTop + plotH);
      ctx.stroke();
    }

    for (let y = 0; y <= maxY; y += 0.25) {
      const py = mapY(y);
      ctx.beginPath();
      ctx.moveTo(padLeft, py);
      ctx.lineTo(padLeft + plotW, py);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padLeft, padTop);
    ctx.lineTo(padLeft, padTop + plotH);
    ctx.lineTo(padLeft + plotW, padTop + plotH);
    ctx.stroke();

    // Axis Labels
    ctx.fillStyle = '#86868b';
    ctx.font = '11px -apple-system, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    for (let y = 0; y <= maxY; y += 0.5) {
      const py = mapY(y);
      ctx.fillText(y.toFixed(1), padLeft - 8, py);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let x = 0; x <= maxX; x += 0.1) {
      const px = mapX(x);
      ctx.fillText(x.toFixed(2), px, padTop + plotH + 8);
    }

    // Axis Titles
    ctx.fillStyle = '#f5f5f7';
    ctx.font = '500 12px -apple-system, sans-serif';
    ctx.fillText('Arus, I / A', padLeft + plotW / 2, padTop + plotH + 28);

    ctx.save();
    ctx.translate(18, padTop + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Beza Keupayaan, V / V', 0, 0);
    ctx.restore();

    // Best Fit Line
    const reg = linearRegression(dataset);
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(mapX(0), mapY(reg.c));
    ctx.lineTo(mapX(maxX), mapY(reg.m * maxX + reg.c));
    ctx.stroke();

    // Gradient Triangle
    const p1 = { x: 0.15, y: reg.m * 0.15 + reg.c };
    const p2 = { x: 0.45, y: reg.m * 0.45 + reg.c };

    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(41, 151, 255, 0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(mapX(p1.x), mapY(p1.y));
    ctx.lineTo(mapX(p2.x), mapY(p1.y));
    ctx.lineTo(mapX(p2.x), mapY(p2.y));
    ctx.stroke();
    ctx.setLineDash([]);

    // Data Points
    dataset.forEach((p) => {
      const px = mapX(p.I);
      const py = mapY(p.V);

      ctx.strokeStyle = '#2997ff';
      ctx.lineWidth = 2.5;
      const size = 5;

      ctx.beginPath();
      ctx.moveTo(px - size, py - size);
      ctx.lineTo(px + size, py + size);
      ctx.moveTo(px + size, py - size);
      ctx.lineTo(px - size, py + size);
      ctx.stroke();
    });
  }

  function updateStudioStats() {
    const reg = linearRegression(dataset);
    const mEl = document.getElementById('apple-calc-m');
    const cEl = document.getElementById('apple-calc-c');
    const rEl = document.getElementById('apple-calc-r');

    if (mEl) mEl.textContent = `${reg.m.toFixed(2)} V A⁻¹`;
    if (cEl) cEl.textContent = `${reg.c.toFixed(2)} V`;
    if (rEl) rEl.textContent = `${reg.m.toFixed(2)} Ω`;
  }

  window.addStudioPoint = function () {
    const lastI = dataset[dataset.length - 1].I;
    if (lastI < 0.55) {
      const nextI = Math.round((lastI + 0.05) * 100) / 100;
      const nextV = Math.round((5.0 * nextI + (Math.random() - 0.5) * 0.08) * 100) / 100;
      dataset.push({ I: nextI, V: nextV });
      drawStudioGraph();
      updateStudioStats();
    }
  };

  window.resetStudioPoints = function () {
    dataset = [
      { I: 0.10, V: 0.48 },
      { I: 0.20, V: 1.02 },
      { I: 0.30, V: 1.49 },
      { I: 0.40, V: 2.01 },
      { I: 0.50, V: 2.52 }
    ];
    drawStudioGraph();
    updateStudioStats();
  };

  document.addEventListener('DOMContentLoaded', initStudio);
})();
