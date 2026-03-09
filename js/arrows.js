// ROADMAP – DEPENDENCY ARROWS
// ═══════════════════════════════
const dependencies = [
    // Vor-Gymi → Gymi
    ['vg-math--terme-potenzen-algebra', 'gy-math--algebra'],
    ['vg-math--funktionen-koordinatensystem', 'gy-math--analysis'],
    ['vg-math--geometrie', 'gy-math--trigonometrie'],
    ['vg-math--geometrie', 'gy-math--vektorielle-analytische-geometrie'],
    ['vg-math--statistik-wahrscheinlichkeit', 'gy-math--stochastik'],
    // Gymi Mathematik → Studium
    ['gy-math--analysis', '1--analysis-i'],
    ['gy-math--algebra', '1--analysis-i'],
    ['gy-math--trigonometrie', '1--analysis-i'],
    ['gy-math--lineare-algebra', '1--lineare-algebra'],
    ['gy-math--vektorielle-analytische-geometrie', '1--lineare-algebra'],
    ['gy-math--stochastik', '4--wahrscheinlichkeitstheorie-und-statistik'],
    ['gy-math--algebra', '3--diskrete-mathematik'],
    // Gymi Physik → Studium
    ['gy-phys--mechanik', '1--technische-mechanik'],
    ['gy-phys--elektrizitaetslehre', '1--netzwerk-und-schaltungen-i'],
    ['gy-phys--optik-wellen', '2--physik-i'],
    ['gy-phys--thermische-phaenomene', '2--physik-i'],
    ['gy-phys--atomphysik', '3--physik-ii'],
    ['gy-phys--elektrizitaetslehre', '4--elektromagnetische-wellen-und-felder'],
    // Studium – Semester-übergreifend
    ['1--analysis-i', '2--analysis-ii'],
    ['2--analysis-ii', '3--analysis-iii'],
    ['1--analysis-i', '2--mathematische-methoden'],
    ['1--netzwerk-und-schaltungen-i', '2--netzwerk-und-schaltungen-ii'],
    ['2--informatik-i', '3--informatik-ii'],
    ['3--informatik-ii', '4--technische-informatik'],
    ['1--digitaltechnik', '4--technische-informatik'],
    ['2--physik-i', '3--physik-ii'],
    ['3--signal-und-systemtheorie-i', '4--signal-und-systemtheorie-ii'],
    ['2--mathematische-methoden', '3--signal-und-systemtheorie-i'],
    ['2--netzwerk-und-schaltungen-ii', '3--signal-und-systemtheorie-i'],
    ['2--netzwerk-und-schaltungen-ii', '3--halbleiterschaltungstechnik'],
    ['3--physik-ii', '4--halbleiterelemente'],
    ['3--halbleiterschaltungstechnik', '4--halbleiterelemente'],
    ['2--analysis-ii', '4--elektromagnetische-wellen-und-felder'],
    ['1--lineare-algebra', '4--numerik'],
    ['1--analysis-i', '4--numerik'],
];

function drawArrows() {
    const container = document.getElementById('content');
    if (!container) return;

    let svg = document.getElementById('arrow-svg');
    if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.id = 'arrow-svg';
        container.appendChild(svg);
    }

    if (!showArrows) { svg.innerHTML = ''; return; }

    const w = container.scrollWidth;
    const h = container.scrollHeight;
    svg.setAttribute('width', w);
    svg.setAttribute('height', h);
    svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);

    const cR = container.getBoundingClientRect();
    let paths = '';

    dependencies.forEach(([fromId, toId]) => {
        const fromEl = container.querySelector('[data-mod-id="' + fromId + '"]');
        const toEl = container.querySelector('[data-mod-id="' + toId + '"]');
        if (!fromEl || !toEl) return;
        if (fromEl.closest('.semester-section.hidden') || toEl.closest('.semester-section.hidden')) return;
        if (fromEl.offsetParent === null || toEl.offsetParent === null) return;

        const fR = fromEl.getBoundingClientRect();
        const tR = toEl.getBoundingClientRect();
        const x1 = (fR.left + fR.width / 2 - cR.left) / scale;
        const y1 = (fR.bottom - cR.top) / scale;
        const x2 = (tR.left + tR.width / 2 - cR.left) / scale;
        const y2 = (tR.top - cR.top) / scale;

        let stroke, marker;
        if (fromId.startsWith('vg-')) { stroke = 'rgba(249,168,212,0.35)'; marker = 'url(#arr-vg)'; }
        else if (fromId.startsWith('gy-')) { stroke = 'rgba(134,239,172,0.3)'; marker = 'url(#arr-gy)'; }
        else { stroke = 'rgba(108,138,255,0.25)'; marker = 'url(#arr-st)'; }

        const cpY = Math.max(Math.abs(y2 - y1) * 0.3, 30);
        const d = 'M' + x1 + ',' + y1 + ' C' + x1 + ',' + (y1 + cpY) + ' ' + x2 + ',' + (y2 - cpY) + ' ' + x2 + ',' + y2;
        paths += '<path d="' + d + '" fill="none" stroke="' + stroke + '" stroke-width="1.5" marker-end="' + marker + '"/>';
    });

    svg.innerHTML = '<defs>'
        + '<marker id="arr-vg" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="rgba(249,168,212,0.55)"/></marker>'
        + '<marker id="arr-gy" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="rgba(134,239,172,0.5)"/></marker>'
        + '<marker id="arr-st" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="rgba(108,138,255,0.45)"/></marker>'
        + '</defs>' + paths;
}

function scheduleArrowRedraw() {
    requestAnimationFrame(drawArrows);
    setTimeout(drawArrows, 200);
    setTimeout(drawArrows, 400);
}

// ═══════════════════════════════
