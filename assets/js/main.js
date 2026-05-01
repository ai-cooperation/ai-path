// AI Path — minimal JS
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============================================================
// Decision Helper — 三題定位測驗
// ============================================================
(function initDecisionHelper() {
  const app = document.getElementById('decision-app');
  if (!app) return;

  const levelsData = JSON.parse(document.getElementById('levels-data').textContent);
  const levelsById = Object.fromEntries(levelsData.map(l => [l.id, l]));

  const questions = app.querySelectorAll('.decision-q');
  const result = document.getElementById('decision-result');
  const answers = {};
  let step = 0;

  // Weighted recommendation logic（從 React DecisionHelper 移植）
  function compute(a) {
    const score = { L1: 0, L2: 0, L3: 0, L4: 0 };
    if (a.role === 'user') score.L1 += 2;
    if (a.role === 'lead') { score.L2 += 1; score.L4 += 1; }
    if (a.role === 'dev') { score.L2 += 1; score.L3 += 2; }
    if (a.role === 'exec') score.L4 += 3;
    if (a.exp === 'none') score.L1 += 2;
    if (a.exp === 'regular') score.L2 += 2;
    if (a.exp === 'deep') score.L3 += 2;
    if (a.exp === 'team') score.L4 += 2;
    if (a.goal === 'personal') score.L1 += 2;
    if (a.goal === 'choose') score.L2 += 2;
    if (a.goal === 'build') score.L3 += 2;
    if (a.goal === 'transform') score.L4 += 2;
    let best = 'L1', max = -1;
    for (const k of ['L1', 'L2', 'L3', 'L4']) {
      if (score[k] > max) { max = score[k]; best = k; }
    }
    return best;
  }

  function showResult(levelId) {
    const lv = levelsById[levelId];
    if (!lv) return;

    const badge = document.getElementById('dr-badge');
    badge.className = 'dr-badge level-' + levelId.toLowerCase() + '-bg';
    badge.innerHTML =
      '<div class="dr-badge-label">LEVEL</div>' +
      '<div class="dr-badge-num">' + levelId.replace('L', '') + '</div>';

    const title = document.getElementById('dr-title');
    title.className = 'dr-title level-' + levelId.toLowerCase() + '-color';
    title.textContent = levelId + ' ' + lv.name + '：你成為' + lv.identity;

    document.getElementById('dr-promise').textContent = lv.promise;
    document.getElementById('dr-shift').textContent = '關鍵轉變：' + lv.key_shift;
    document.getElementById('dr-id').textContent = levelId;

    questions.forEach(q => q.hidden = true);
    result.hidden = false;
  }

  function reset() {
    Object.keys(answers).forEach(k => delete answers[k]);
    step = 0;
    questions.forEach((q, i) => q.hidden = i !== 0);
    result.hidden = true;
  }

  app.addEventListener('click', e => {
    const opt = e.target.closest('.dq-opt');
    if (opt) {
      const q = opt.dataset.q;
      const v = opt.dataset.v;
      answers[q] = v;
      step += 1;
      if (step >= questions.length) {
        showResult(compute(answers));
      } else {
        questions[step - 1].hidden = true;
        questions[step].hidden = false;
      }
      return;
    }
    if (e.target.id === 'dr-reset') {
      reset();
    }
  });
})();
