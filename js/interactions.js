// INTERACTIONS
// ═══════════════════════════════
function toggleModule(e, el) {
    if (e.target.closest('.level2-item')) return; // don't toggle when clicking inner
    el.classList.toggle('expanded');
    scheduleArrowRedraw();
}

function toggleLevel2(e, el) {
    e.stopPropagation();
    el.classList.toggle('open');
    scheduleArrowRedraw();
}

function zoomOut() {
    zoomedModule = null;
    document.getElementById('zoomIndicator').classList.remove('visible');
    render();
}

// Semester tabs
document.querySelectorAll('.sem-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sem-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSem = btn.dataset.sem;
        render();
    });
});

// Abstraction level buttons
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLevel = parseInt(btn.dataset.level);
        render();
    });
});

// Arrow toggle
document.getElementById('arrowToggle').addEventListener('click', function () {
    showArrows = !showArrows;
    this.classList.toggle('active', showArrows);
    drawArrows();
});

// ═══════════════════════════════
// PAN / ZOOM ENGINE
// ═══════════════════════════════
let panX = 0, panY = 0, scale = 1;
let isPanning = false, panStartX = 0, panStartY = 0;
let didPanMove = false;
const PAN_THRESHOLD = 5;

function applyTransform() {
    document.getElementById('canvas').style.transform =
        'translate(' + panX + 'px,' + panY + 'px) scale(' + scale + ')';
    document.getElementById('zoomLevelDisplay').textContent = Math.round(scale * 100) + '%';
}

function zoomAt(vx, vy, factor) {
    const newScale = Math.min(Math.max(scale * factor, 0.12), 2.5);
    const r = newScale / scale;
    panX = vx - r * (vx - panX);
    panY = vy - r * (vy - panY);
    scale = newScale;
    applyTransform();
    scheduleArrowRedraw();
}

const viewport = document.getElementById('viewport');

// Wheel to zoom
viewport.addEventListener('wheel', function (e) {
    e.preventDefault();
    const rect = viewport.getBoundingClientRect();
    zoomAt(e.clientX - rect.left, e.clientY - rect.top, e.deltaY > 0 ? 0.9 : 1.1);
}, { passive: false });

// Mouse pan
viewport.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    isPanning = true;
    didPanMove = false;
    panStartX = e.clientX - panX;
    panStartY = e.clientY - panY;
    viewport.classList.add('grabbing');
});

window.addEventListener('mousemove', function (e) {
    if (!isPanning) return;
    const nx = e.clientX - panStartX;
    const ny = e.clientY - panStartY;
    if (Math.abs(nx - panX) > PAN_THRESHOLD || Math.abs(ny - panY) > PAN_THRESHOLD) didPanMove = true;
    panX = nx;
    panY = ny;
    applyTransform();
    scheduleArrowRedraw();
});

window.addEventListener('mouseup', function () {
    if (isPanning) { isPanning = false; viewport.classList.remove('grabbing'); }
});

// Suppress card clicks that were actually pan gestures
viewport.addEventListener('click', function (e) {
    if (didPanMove) { e.stopPropagation(); didPanMove = false; }
}, true);

// Touch: single-finger pan + two-finger pinch zoom
let lastPinchDist = 0;
viewport.addEventListener('touchstart', function (e) {
    if (e.touches.length === 1) {
        isPanning = true;
        didPanMove = false;
        panStartX = e.touches[0].clientX - panX;
        panStartY = e.touches[0].clientY - panY;
        lastPinchDist = 0;
    } else {
        isPanning = false;
        lastPinchDist = 0;
    }
    e.preventDefault();
}, { passive: false });

viewport.addEventListener('touchmove', function (e) {
    e.preventDefault();
    if (e.touches.length === 1 && isPanning) {
        const nx = e.touches[0].clientX - panStartX;
        const ny = e.touches[0].clientY - panStartY;
        if (Math.abs(nx - panX) > PAN_THRESHOLD || Math.abs(ny - panY) > PAN_THRESHOLD) didPanMove = true;
        panX = nx; panY = ny;
        applyTransform(); scheduleArrowRedraw();
    } else if (e.touches.length === 2) {
        const t1 = e.touches[0], t2 = e.touches[1];
        const dist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        if (lastPinchDist > 0) {
            const rect = viewport.getBoundingClientRect();
            zoomAt(
                (t1.clientX + t2.clientX) / 2 - rect.left,
                (t1.clientY + t2.clientY) / 2 - rect.top,
                dist / lastPinchDist
            );
        }
        lastPinchDist = dist;
    }
}, { passive: false });

viewport.addEventListener('touchend', function () { isPanning = false; lastPinchDist = 0; });

// Zoom buttons
document.getElementById('zoomInBtn').addEventListener('click', function () {
    const r = viewport.getBoundingClientRect();
    zoomAt(r.width / 2, r.height / 2, 1.25);
});
document.getElementById('zoomOutBtn').addEventListener('click', function () {
    const r = viewport.getBoundingClientRect();
    zoomAt(r.width / 2, r.height / 2, 0.8);
});
document.getElementById('zoomResetBtn').addEventListener('click', function () {
    scale = 1; panX = 0; panY = 0;
    applyTransform(); scheduleArrowRedraw();
    setTimeout(panToStudium, 50);
});

function panToStudium() {
    const el = document.getElementById('studium-start');
    if (!el) return;
    const content = document.getElementById('content');
    const topFromCanvas = el.offsetTop + content.offsetTop;
    panY = -(topFromCanvas * scale) + 20;
    applyTransform();
    scheduleArrowRedraw();
}

// Redraw arrows on resize
window.addEventListener('resize', function () { scheduleArrowRedraw(); });

// Initial render
render();
applyTransform();

// Pan to Studium on initial load
setTimeout(panToStudium, 100);

// Fade out the hint overlay
setTimeout(function () {
    const h = document.getElementById('map-hint');
    if (h) h.style.opacity = '0';
}, 3500);
