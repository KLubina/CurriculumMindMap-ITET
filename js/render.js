// STATE
// ═══════════════════════════════
let currentSem = "all";
let currentLevel = 1;
let zoomedModule = null;
let showArrows = true;
let focusModuleId = null;

// Prerequisite map for Semester 1 modules
const sem1Prerequisites = {
  "1--analysis-i": [
    "vg-math--zahlenbereiche-arithmetik",
    "vg-math--terme-potenzen-algebra",
    "vg-math--gleichungen-proportionalitaet",
    "vg-math--funktionen-koordinatensystem",
    "gy-math--algebra",
    "gy-math--analysis",
    "gy-math--trigonometrie",
  ],
  "1--digitaltechnik": [
    "vg-math--zahlenbereiche-arithmetik",
    "vg-math--terme-potenzen-algebra",
    "vg-math--gleichungen-proportionalitaet",
    "gy-math--algebra",
  ],
  "1--lineare-algebra": [
    "vg-math--zahlenbereiche-arithmetik",
    "vg-math--terme-potenzen-algebra",
    "vg-math--gleichungen-proportionalitaet",
    "vg-math--funktionen-koordinatensystem",
    "gy-math--algebra",
    "gy-math--analysis",
    "gy-math--vektorielle-analytische-geometrie",
    "gy-math--lineare-algebra",
  ],
  "1--netzwerk-und-schaltungen-i": [
    "vg-math--zahlenbereiche-arithmetik",
    "vg-math--terme-potenzen-algebra",
    "vg-math--gleichungen-proportionalitaet",
    "vg-math--geometrie",
    "gy-math--analysis",
    "gy-math--vektorielle-analytische-geometrie",
    "gy-phys--elektrizitaetslehre",
  ],
  "1--technische-mechanik": [
    "vg-math--zahlenbereiche-arithmetik",
    "vg-math--terme-potenzen-algebra",
    "vg-math--gleichungen-proportionalitaet",
    "vg-math--funktionen-koordinatensystem",
    "vg-math--geometrie",
    "gy-math--algebra",
    "gy-math--analysis",
    "gy-math--trigonometrie",
    "gy-math--vektorielle-analytische-geometrie",
    "gy-phys--mechanik",
  ],
};

// ═══════════════════════════════
// RENDER
// ═══════════════════════════════
function renderSubtopics(subtopics) {
  if (!subtopics || subtopics.length === 0) return "";
  return subtopics
    .map((st) => {
      // Recursively handle deeper subtopics
      let deeperHtml = "";
      if (st.subtopics && st.subtopics.length > 0) {
        deeperHtml = `<div class="level4-group" style="margin-top:6px;">
${st.subtopics
  .map(
    (dst) => `
  <div class="level4-group">
    <div class="level4-label">${dst.name}</div>
    <div class="level4-tags">${dst.items.map((i) => `<span class="level4-tag">${i}</span>`).join("")}</div>
  </div>
`,
  )
  .join("")}
      </div>`;
      }
      return `<div class="level4-group">
      <div class="level4-label">${st.name}</div>
      <div class="level4-tags">${st.items.map((i) => `<span class="level4-tag">${i}</span>`).join("")}</div>
      ${deeperHtml}
    </div>`;
    })
    .join("");
}

function renderTopic(topic) {
  const hasItems =
    (topic.items && topic.items.length > 0) ||
    (topic.subtopics && topic.subtopics.length > 0);
  const levelOpenClass = currentLevel >= 3 ? " level-open" : "";
  return `
    <div class="level2-item${levelOpenClass}" onclick="toggleLevel2(event, this)">
      <div class="level2-header">
<span>${topic.name}</span>
${hasItems ? '<span class="level2-toggle">▼</span>' : ""}
      </div>
      ${
        hasItems
          ? `
<div class="level3-container">
  <div class="level3-list">
    ${(topic.items || []).map((item) => `<span class="level3-tag">${item}</span>`).join("")}
    ${renderSubtopics(topic.subtopics)}
  </div>
</div>
      `
          : ""
      }
    </div>
  `;
}

function renderModule(mod, semNum) {
  const levelOpenClass = currentLevel >= 2 ? " level-open" : "";
  const modId =
    String(semNum) +
    "--" +
    mod.name
      .toLowerCase()
      .replace(
        /[äöüÄÖÜ]/g,
        (c) =>
          ({ ä: "ae", ö: "oe", ü: "ue", Ä: "ae", Ö: "oe", Ü: "ue" })[c] || c,
      )
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  const isSem1 = semNum === 1;
  const focusBtnHtml = isSem1
    ? `<button class="focus-btn${focusModuleId === modId ? " active" : ""}" onclick="toggleFocusModule(event, '${modId}')" title="Fokus: Vorwissen-Pfad zeigen">🎯</button>`
    : "";
  return `
    <div class="module-card${levelOpenClass}" data-mod-id="${modId}" onclick="toggleModule(event, this)">
      <div class="module-header">
<span class="module-name">${mod.name}</span>
<div style="display:flex;align-items:center;gap:6px;">
  ${focusBtnHtml}
  <span class="module-toggle">▼</span>
</div>
      </div>
      <div class="level2-container">
${mod.topics.map((t) => renderTopic(t)).join("")}
      </div>
    </div>
  `;
}

function render() {
  const container = document.getElementById("content");
  const isVorGymi = currentSem === "all" || currentSem === "vor-gymi";
  const isGymi = currentSem === "all" || currentSem === "gymi";
  const isStudium =
    currentSem === "all" || ["1", "2", "3", "4"].includes(currentSem);

  // Vor-Gymi sections
  const vorGymiHtml = vorGymiData
    .map((vg) => {
      return `
      <div class="semester-section${!isVorGymi ? " hidden" : ""}" data-sem="${vg.subject}">
<h2 class="semester-header">${vg.label}</h2>
<div class="module-grid">
  ${vg.modules.map((m) => renderModule(m, vg.subject)).join("")}
</div>
      </div>`;
    })
    .join("");

  // Divider Vor-Gymi → Gymi
  const divider1Html = `
      <div class="section-divider${!isGymi && !isVorGymi ? " hidden" : ""}${currentSem === "vor-gymi" ? " hidden" : ""}${!isGymi ? " hidden" : ""}">
<span>Gymnasium</span>
      </div>`;

  // Gymi sections
  const gymiHtml = gymiData
    .map((gy) => {
      return `
      <div class="semester-section${!isGymi ? " hidden" : ""}" data-sem="${gy.subject}">
<h2 class="semester-header">${gy.label}</h2>
<div class="module-grid">
  ${gy.modules.map((m) => renderModule(m, gy.subject)).join("")}
</div>
      </div>`;
    })
    .join("");

  // Divider Gymi → Studium
  const divider2Html = `
      <div id="studium-start" class="section-divider${!isStudium ? " hidden" : ""}">
<span>Studium – BSc ITET</span>
      </div>`;

  // Studium sections
  const studiumHtml = data
    .map((sem) => {
      const hidden =
        !isStudium ||
        (currentSem !== "all" && String(sem.semester) !== currentSem);
      return `
      <div class="semester-section${hidden ? " hidden" : ""}" data-sem="${sem.semester}">
<h2 class="semester-header">${sem.label}</h2>
<div class="module-grid">
  ${sem.modules.map((m) => renderModule(m, sem.semester)).join("")}
</div>
      </div>
    `;
    })
    .join("");

  container.innerHTML =
    vorGymiHtml + divider1Html + gymiHtml + divider2Html + studiumHtml;
  applyFocusStyles();
  requestAnimationFrame(drawArrows);
}

// ═══════════════════════════════
// FOCUS MODE
// ═══════════════════════════════
function applyFocusStyles() {
  const container = document.getElementById("content");
  if (!container) return;

  container.querySelectorAll(".module-card").forEach((el) => {
    el.classList.remove("focus-highlight", "focus-prereq", "focus-dimmed");
  });

  const indicator = document.getElementById("focusIndicator");
  const pathSpan = document.getElementById("focusPath");

  if (!focusModuleId) {
    if (indicator) indicator.classList.remove("visible");
    return;
  }

  const prereqs = sem1Prerequisites[focusModuleId] || [];

  container.querySelectorAll(".module-card").forEach((el) => {
    const id = el.dataset.modId;
    if (id === focusModuleId) {
      el.classList.add("focus-highlight");
    } else if (prereqs.includes(id)) {
      el.classList.add("focus-prereq");
    } else {
      el.classList.add("focus-dimmed");
    }
  });

  if (indicator && pathSpan) {
    const card = container.querySelector(`[data-mod-id="${focusModuleId}"]`);
    const modName = card
      ? card.querySelector(".module-name")?.textContent || focusModuleId
      : focusModuleId;
    pathSpan.textContent = "🎯 Fokus: " + modName;
    indicator.classList.add("visible");
  }
}
