/* ═══════════════════════════════════════════════════════
   Sip Sheet — Pediatric Oral Rehydration & Anti-Emetic
   script.js
═══════════════════════════════════════════════════════ */

const TRANSLATIONS = {

/* ══════════════════════════════
   ENGLISH
══════════════════════════════ */
"en": {
  "page_title": "Sip Sheet — Pediatric Oral Rehydration & Anti-Emetic Dosing",
  "header_title": "Sip Sheet",
  "header_title_highlight": "— Pediatric Oral Rehydration & Anti-Emetic Dosing",
  "header_subtitle": "Evidence-based oral rehydration therapy and weight-based ondansetron dosing for vomiting and dehydration in children, based on SickKids AboutKidsHealth, CHEO, and CPS guidelines.",
  "print_btn": "Print Sheet",
  "lang_selector_label": "Language",

  /* Section 1 */
  "s1_heading": "What is Dehydration?",
  "defn_box_heading": "Clinical Definition",
  "dehyd_chip_mild_label": "Mild",
  "dehyd_chip_mild_desc": "<5%",
  "dehyd_chip_mod_label": "Moderate",
  "dehyd_chip_mod_desc": "5–10%",
  "dehyd_chip_sev_label": "Severe",
  "dehyd_chip_sev_desc": ">10%",
  "defn_note_html": "<strong>Dehydration</strong> is the loss of body fluids exceeding intake, most commonly from vomiting and diarrhea in children. Severity is classified by estimated percent body weight loss. Most mild-to-moderate dehydration in children can be managed safely at home with oral rehydration therapy.",
  "redflag_title": "Red Flag Symptoms — Seek Medical Attention",
  "redflag_1": "Sunken fontanelle (infants)",
  "redflag_2": "No urine output for >8 hours",
  "redflag_3": "No tears when crying",
  "redflag_4": "Dry mouth and tongue",
  "redflag_5": "Lethargic or difficult to rouse",
  "redflag_6": "Rapid or weak pulse",
  "redflag_7": "Sunken eyes",
  "redflag_8": "Poor skin turgor (skin does not spring back when pinched)",

  /* Section 2 — ORT calculator */
  "s2_heading": "ORT Dosing Calculator",
  "ort_box_heading": "About ORT",
  "ort_box_html": "Oral rehydration therapy (ORT) is appropriate for <strong>mild-to-moderate dehydration</strong> in children <strong>≥ 1 month</strong>. Use WHO/UNICEF standard oral rehydration solution (ORS) such as Pedialyte or Hydralyte. Avoid plain water, juice, or sports drinks.",
  "label_weight": "Child's Weight",
  "weight_placeholder": "—",
  "label_mode": "Mode",
  "mode_rehydration": "Rehydration",
  "mode_maintenance": "Maintenance",
  "warn_low_weight_zofran": "⚠️ Weight under 8 kg — ondansetron is not routinely recommended. Physician assessment required.",
  "warn_low_weight_ort": "⚠️ Weight under 4 kg — ORT is appropriate for infants ≥ 1 month; confirm with your physician.",

  /* ORT result labels */
  "rehydration_phase_label": "Rehydration — Oral Deficit Replacement",
  "rehyd_mild_heading": "Mild Dehydration (<5%)",
  "rehyd_mod_heading": "Moderate Dehydration (5–10%)",
  "rehyd_total_label": "Total ORS",
  "rehyd_cups_label": "Approx. Cups",
  "rehyd_rate_label": "Rate",
  "rehyd_syringe_label": "Syringe Rate",
  "unit_ml_over_4h": "mL over 4 hours",
  "unit_cups_250ml": "cups (250 mL each)",
  "unit_ml_per_hour": "mL/hour",
  "unit_ml_per_5min": "mL every 5 min",
  "unit_ml_per_day": "mL/day",
  "unit_l_per_day": "L/day",
  "rehyd_mild_note_html": "50 mL/kg of ORS over 4 hours. If vomiting, offer by syringe — <strong>5 mL every 1–2 minutes</strong>. Do not use plain water, juice, or sports drinks.",
  "rehyd_mod_note_html": "100 mL/kg of ORS over 4 hours. If vomiting, offer by syringe — <strong>5 mL every 1–2 minutes</strong>. Do not use plain water, juice, or sports drinks.",

  /* Maintenance */
  "maintenance_phase_label": "Maintenance Fluids (Holliday-Segar)",
  "maint_result_heading": "Daily Maintenance — Calculated",
  "maint_daily_label": "Daily Volume",
  "maint_daily_l_label": "Daily Volume (L)",
  "maint_hourly_label": "Hourly Rate",
  "maint_note_html": "Baseline fluid needs only. <strong>Additional ORS should be given for each episode of ongoing diarrhea or vomiting.</strong> Formula: ≤10 kg: 100 mL/kg/day; 10–20 kg: 1000 mL + 50 mL/kg above 10 kg; >20 kg: 1500 mL + 20 mL/kg above 20 kg.",

  /* ORS mix card */
  "ors_mix_heading": "What to Use for ORS",
  "ors_mix_body_html": "Use <strong>WHO/UNICEF standard ORS</strong> (e.g. Pedialyte, Hydralyte, or homemade: 1L water + 6 tsp sugar + ½ tsp salt). Serve chilled or with a straw to improve palatability. <strong>Avoid Gatorade/sports drinks</strong> — too much sugar, too little sodium.",

  /* Section 3 — Ondansetron */
  "s3_heading": "Ondansetron (Zofran) Dosing Calculator",
  "zofran_box_heading": "About Ondansetron (Zofran)",
  "zofran_box_html": "Ondansetron ODT is appropriate for children <strong>≥ 6 months</strong> with vomiting due to gastroenteritis. It is <strong>not routinely recommended</strong> for vomiting from other causes without physician assessment. <strong>Prescription required in Canada.</strong>",
  "warn_low_weight_zofran": "⚠️ Weight under 8 kg — ondansetron is not routinely used under 6 months of age. Physician assessment required.",
  "zofran_result_heading": "Ondansetron Dose — Calculated",
  "zofran_dose_label": "Single Dose",
  "zofran_formulation_label": "Formulation",
  "unit_mg": "mg",
  "unit_odt": "ODT tablet",
  "zofran_max_doses_label": "Max Doses",
  "zofran_max_doses_val": "2 in 24 hours",
  "zofran_repeat_label": "repeat once after 8 h",
  "zofran_dose_note_html": "Available as <strong>4 mg and 8 mg ODT</strong>. 2 mg dose = ½ of a 4 mg ODT. Prescription required in Canada — discuss with your physician or emergency provider.",
  "zofran_qt_warning_title": "Caution:",
  "zofran_qt_warning_body": " Do not use in children with known prolonged QTc, electrolyte abnormalities (hypokalemia, hypomagnesemia), or those taking other QT-prolonging medications. Use with caution in hepatic impairment.",
  "zofran_contraindications_heading": "When NOT to Use Ondansetron",
  "zofran_contraindications_html": "Bilious (green) vomiting, suspected surgical abdomen, head injury, ingestion or poisoning, or child appears toxic or seriously unwell — <strong>these require physician assessment first.</strong>",

  /* Zofran formulation display strings */
  "zofran_form_half_4mg": "½ of a 4 mg ODT",
  "zofran_form_one_4mg":  "1 × 4 mg ODT",
  "zofran_form_one_8mg":  "1 × 8 mg ODT",

  /* Section 4 — Strategies */
  "s4_heading": "Other Evidence-Based Strategies",
  "strat_feed_title": "Continue Feeding",
  "strat_feed_1": "Do not withhold feeds — resume age-appropriate diet as soon as tolerated",
  "strat_feed_2": "Breastfed infants: continue breastfeeding throughout rehydration",
  "strat_feed_3": "Avoid the BRAT diet (bananas, rice, applesauce, toast) — no evidence it speeds recovery",
  "strat_feed_4": "Complex carbohydrates, lean meats, fruits, and vegetables are appropriate",
  "strat_feed_5": "Avoid high-fat and high-sugar foods during acute illness",
  "strat_probiotics_title": "Probiotics",
  "strat_probiotics_1_html": "<strong>Lactobacillus rhamnosus GG</strong> (e.g., Culturelle) and <strong>Saccharomyces boulardii</strong> have the best evidence for reducing duration of diarrhea in children",
  "strat_probiotics_2": "May reduce duration of diarrhea by approximately 1 day",
  "strat_probiotics_3": "Safe for healthy children; use standard pediatric dosing on package",
  "strat_probiotics_4": "Not routinely recommended but reasonable to try",
  "strat_hygiene_title": "Hand Hygiene & Infection Control",
  "strat_hygiene_1": "Most pediatric gastroenteritis is viral (rotavirus, norovirus, adenovirus)",
  "strat_hygiene_2_html": "Rigorous handwashing with <strong>soap and water for ≥20 seconds</strong> — alcohol-based sanitizers are less effective against norovirus and rotavirus",
  "strat_hygiene_3": "Keep child home from daycare/school until 48 hours after last episode of vomiting or diarrhea",
  "strat_hygiene_4_html": "Disinfect surfaces with a <strong>dilute bleach solution (1:10)</strong>",
  "strat_monitor_title": "Monitoring at Home",
  "strat_monitor_1": "Track wet diapers / urine output: expect at least 1 wet diaper every 6–8 hours",
  "strat_monitor_2": "Weigh child if possible — weight returning toward baseline indicates successful rehydration",
  "strat_monitor_3": "Signs of improvement: improved activity, moist mouth, tears when crying, resumed urination",
  "strat_monitor_4": "Keep a simple log of fluid intake and output",

  /* Section 5 — Emergency */
  "s5_heading": "When to Seek Medical Attention",
  "emerg_title": "When to Seek Medical Attention",
  "emerg_tier_ed": "Go to the Emergency Department if:",
  "emerg_ed_1": "Bloody diarrhea or bloody vomit",
  "emerg_ed_2": "Bilious (green or yellow) vomiting",
  "emerg_ed_3": "Signs of severe dehydration (see Section 1 red flags)",
  "emerg_ed_4": "Child is lethargic, unresponsive, or very difficult to rouse",
  "emerg_ed_5": "Vomiting persists >24 hours in an infant under 6 months",
  "emerg_ed_6": "High fever in an infant under 3 months",
  "emerg_ed_7": "Suspected ingestion or poisoning",
  "emerg_ed_8": "Child appears to be in significant pain",
  "emerg_tier_doc": "See your doctor or nurse practitioner if:",
  "emerg_doc_1": "Child is not improving after 8–12 hours of home ORT",
  "emerg_doc_2": "Diarrhea persists >7 days or worsens",
  "emerg_doc_3": "Child is not tolerating any oral fluids despite ondansetron",
  "emerg_doc_4": "Frequent vomiting in an infant under 2 months (rule out pyloric stenosis)",
  "emerg_doc_5": "You are unsure or concerned for any reason",

  /* Footer */
  "footer_html": "<strong>Disclaimer:</strong> This sheet is a clinical reference aid. Doses are based on published Canadian pediatric guidelines (SickKids AboutKidsHealth, CHEO, CPS). Individual patient factors including age, organ function, concurrent medications, and clinical context must always be considered. This tool does not replace clinical judgment or individualized medical advice.",

  /* Shared display strings */
  "dash": "—",
  "enter_weight": "Enter weight above"
}

}; /* end TRANSLATIONS */

/* ═══════════════════════════════════════════════════════
   LANGUAGE CONFIGURATION
   Add more language objects here as translations are ready.
═══════════════════════════════════════════════════════ */
const LANGUAGES = [
  { code: 'en',      label: 'English',              dir: 'ltr' }
  /* Translations to be added:
  { code: 'ar',      label: 'العربية',              dir: 'rtl' },
  { code: 'es',      label: 'Español',              dir: 'ltr' },
  { code: 'fa',      label: 'فارسی',                dir: 'rtl' },
  { code: 'fr',      label: 'Français',             dir: 'ltr' },
  { code: 'hi',      label: 'हिन्दी',              dir: 'ltr' },
  { code: 'it',      label: 'Italiano',             dir: 'ltr' },
  { code: 'ko',      label: '한국어',               dir: 'ltr' },
  { code: 'pa',      label: 'ਪੰਜਾਬੀ',              dir: 'ltr' },
  { code: 'pl',      label: 'Polski',               dir: 'ltr' },
  { code: 'pt',      label: 'Português',            dir: 'ltr' },
  { code: 'ta',      label: 'தமிழ்',               dir: 'ltr' },
  { code: 'tl',      label: 'Filipino',             dir: 'ltr' },
  { code: 'uk',      label: 'Українська',           dir: 'ltr' },
  { code: 'ur',      label: 'اردو',                 dir: 'rtl' },
  { code: 'vi',      label: 'Tiếng Việt',           dir: 'ltr' },
  { code: 'zh-Hans', label: '中文（简体）',          dir: 'ltr' },
  { code: 'zh-Hant', label: '中文（繁體）',          dir: 'ltr' }
  */
];

/* ─────────────────────────────────────
   TRANSLATION STATE & LOOKUP
───────────────────────────────────── */
let currentLangData = TRANSLATIONS['en'];

function t(key) {
  return (currentLangData && currentLangData[key] !== undefined)
    ? currentLangData[key]
    : (TRANSLATIONS['en'][key] !== undefined ? TRANSLATIONS['en'][key] : key);
}

/* ─────────────────────────────────────
   POPULATE LANGUAGE <SELECT>
───────────────────────────────────── */
function populateLangSelect(activeCode) {
  const sel = document.getElementById('langSelect');
  if (!sel) return;
  sel.innerHTML = '';
  LANGUAGES.forEach(lang => {
    const opt = document.createElement('option');
    opt.value = lang.code;
    opt.textContent = lang.label;
    if (lang.code === activeCode) opt.selected = true;
    sel.appendChild(opt);
  });
  sel.onchange = () => switchLanguage(sel.value);
}

/* ─────────────────────────────────────
   SWITCH LANGUAGE
───────────────────────────────────── */
function switchLanguage(code) {
  if (!TRANSLATIONS[code]) code = 'en';
  currentLangData = TRANSLATIONS[code];

  const langConfig = LANGUAGES.find(l => l.code === code) || { dir: 'ltr' };
  document.documentElement.lang = code;
  document.documentElement.dir  = langConfig.dir;

  try { localStorage.setItem('ss_lang', code); } catch(_) {}

  applyTranslations();
  /* Re-run both calculators so result strings use new language */
  calculateOrt();
  calculateZofran();
}

/* ─────────────────────────────────────
   APPLY data-i18n / data-i18n-html
───────────────────────────────────── */
function applyTranslations() {
  /* Page title */
  document.title = t('page_title');

  /* data-i18n — plain text */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  /* data-i18n-html — innerHTML (trusted strings only) */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key);
  });

  /* data-i18n-placeholder */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

/* ═══════════════════════════════════════════════════════
   SHARED UNIT STATE — one weight input drives everything
═══════════════════════════════════════════════════════ */
let currentUnit = 'kg';

function setUnit(unit) {
  currentUnit = unit;
  document.getElementById('btnKg').classList.toggle('active',  unit === 'kg');
  document.getElementById('btnLbs').classList.toggle('active', unit === 'lbs');
  debouncedCalculate();
}

function getWeightKg() {
  const raw = parseFloat(document.getElementById('weightInput').value);
  if (isNaN(raw) || raw <= 0) return null;
  return currentUnit === 'lbs' ? raw * 0.453592 : raw;
}

/* ═══════════════════════════════════════════════════════
   DEBOUNCED INPUT HANDLER — one input, calls both calculators
═══════════════════════════════════════════════════════ */
let _calcTimer = null;

function debouncedCalculate() {
  clearTimeout(_calcTimer);
  _calcTimer = setTimeout(() => {
    calculateOrt();
    calculateZofran();
  }, 350);
}

/* ═══════════════════════════════════════════════════════
   ORT CALCULATOR — always shows both rehydration + maintenance
═══════════════════════════════════════════════════════ */
function calculateOrt() {
  const wKg     = getWeightKg();
  const isEmpty = wKg === null;

  /* ── Low-weight advisory note ── */
  const noteEl = document.getElementById('weightAgeNote');
  if (noteEl) {
    if (!isEmpty && wKg < 4) {
      noteEl.className        = 'input-age-note';
      noteEl.style.background = 'var(--red-light)';
      noteEl.style.color      = '#7a1818';
      noteEl.style.border     = '1px solid #f0c5c2';
      noteEl.textContent      = t('warn_low_weight_ort');
    } else {
      noteEl.className     = 'input-age-note hidden';
      noteEl.textContent   = '';
      noteEl.style.cssText = '';
    }
  }

  calculateOrtRehydration(wKg, isEmpty);
  calculateOrtMaintenance(wKg, isEmpty);
}

/* ── Rehydration
   Mild:     50 mL/kg over 4 h
   Moderate: 100 mL/kg over 4 h
   Rate      = total ÷ 4   (mL/hour)
   Syringe   = hourly ÷ 12 (mL per 5 min)
*/
function calculateOrtRehydration(wKg, isEmpty) {
  const mildIds = ['mildTotalMl','mildCups','mildRate','mildSyringe'];
  const modIds  = ['modTotalMl','modCups','modRate','modSyringe'];

  if (isEmpty) { setPending(mildIds); setPending(modIds); return; }
  clearPending(mildIds); clearPending(modIds);

  const mildTotal   = wKg * 50;
  const mildRate    = mildTotal / 4;
  const mildSyringe = mildRate  / 12;
  setEl('mildTotalMl', fmtMl(mildTotal));
  setEl('mildCups',    fmtCups(mildTotal));
  setEl('mildRate',    fmtMl(mildRate));
  setEl('mildSyringe', mildSyringe < 1 ? '< 1' : fmtMl(mildSyringe));

  const modTotal   = wKg * 100;
  const modRate    = modTotal / 4;
  const modSyringe = modRate  / 12;
  setEl('modTotalMl', fmtMl(modTotal));
  setEl('modCups',    fmtCups(modTotal));
  setEl('modRate',    fmtMl(modRate));
  setEl('modSyringe', modSyringe < 1 ? '< 1' : fmtMl(modSyringe));
}

/* ── Maintenance — Holliday-Segar
   ≤ 10 kg  : 100 mL/kg/day
   10–20 kg : 1000 + 50 × (kg − 10)
   > 20 kg  : 1500 + 20 × (kg − 20)
*/
function holidaySegar(wKg) {
  if (wKg <= 10) return wKg * 100;
  if (wKg <= 20) return 1000 + 50 * (wKg - 10);
  return 1500 + 20 * (wKg - 20);
}

function calculateOrtMaintenance(wKg, isEmpty) {
  const ids = ['maintDailyMl','maintDailyL','maintHourly'];
  if (isEmpty) { setPending(ids); return; }
  clearPending(ids);

  const dailyMl = holidaySegar(wKg);
  setEl('maintDailyMl', fmtMl(dailyMl));
  setEl('maintDailyL',  fmtL(dailyMl));
  setEl('maintHourly',  fmtMl(dailyMl / 24));
}

/* ═══════════════════════════════════════════════════════
   ONDANSETRON CALCULATOR — reads same shared weight input
   < 8 kg  : 2 mg
   8–15 kg : 4 mg
   ≥ 15 kg : 8 mg (max)
═══════════════════════════════════════════════════════ */
function calculateZofran() {
  const wKg = getWeightKg();
  const isEmpty = wKg === null;

  /* Zofran-specific note near the Zofran section */

  const noteEl = document.getElementById('zofranAgeNote');

  if (noteEl) {
    if (!isEmpty && wKg < 8) {
      noteEl.className = 'input-age-note';
      noteEl.style.background = 'var(--red-light)';
      noteEl.style.color = '#7a1818';
      noteEl.style.border = '1px solid #f0c5c2';
      noteEl.textContent = t('warn_low_weight_zofran');
    } else {
      noteEl.className = 'input-age-note hidden';
      noteEl.textContent = '';
      noteEl.style.cssText = '';
    }
  }

  const doseMgEl = document.getElementById('zofranDoseMg');
  const formEl = document.getElementById('zofranFormulation');

  if (isEmpty) {
    if (doseMgEl) {
      doseMgEl.textContent = t('enter_weight');
      doseMgEl.classList.add('pending');
    }

    if (formEl) {
      formEl.textContent = t('dash');
    }
    return;
  }

  if (doseMgEl) {
    doseMgEl.classList.remove('pending');
  }

  /*
     Ondansetron weight-band dosing:
     < 8 kg   : not routinely recommended
     8–15 kg  : 2 mg
     15–30 kg : 4 mg
     ≥ 30 kg  : 8 mg
  */
  let doseMg;
  let formStr;

  if (wKg < 8) {
    doseMg = null;
    formStr = 'Not routinely recommended';
  } else if (wKg < 15) {
    doseMg = 2;
    formStr = t('zofran_form_half_4mg');
  } else if (wKg < 30) {
    doseMg = 4;
    formStr = t('zofran_form_one_4mg');
  } else {
    doseMg = 8;
    formStr = t('zofran_form_one_8mg');
  }

  if (doseMgEl) {
    doseMgEl.textContent = doseMg === null ? 'Not recommended' : doseMg + ' mg';
  }
  if (formEl) {
    formEl.textContent = formStr;
  }
}

/* ═══════════════════════════════════════════════════════
   FORMATTING HELPERS
═══════════════════════════════════════════════════════ */
/** Round to nearest integer; no decimal noise */
function fmtMl(ml) {
  return Math.round(ml).toLocaleString();
}

/** Round to 1 decimal for L */
function fmtL(ml) {
  return (ml / 1000).toFixed(1);
}

/** Format cups: ml / 250, round to nearest ¼ cup */
function fmtCups(ml) {
  const raw = ml / 250;
  const q   = Math.round(raw * 4) / 4;
  if (q === Math.floor(q)) return q.toFixed(0);
  const whole = Math.floor(q);
  const frac  = q - whole;
  const fracStr = frac === 0.25 ? '¼' : frac === 0.5 ? '½' : '¾';
  return whole > 0 ? `${whole} ${fracStr}` : fracStr;
}

/* ─────────────────────────────────────
   DOM HELPERS
───────────────────────────────────── */
function setEl(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setPending(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = t('enter_weight');
    el.classList.add('pending');
  });
}

function clearPending(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('pending');
  });
}

/* ═══════════════════════════════════════════════════════
   INIT — runs after all functions/arrays are declared
═══════════════════════════════════════════════════════ */
(function init() {
  let saved = 'en';
  try { saved = localStorage.getItem('ss_lang') || 'en'; } catch(_) {}
  if (!LANGUAGES.find(l => l.code === saved)) saved = 'en';

  populateLangSelect(saved);
  switchLanguage(saved);
})();

