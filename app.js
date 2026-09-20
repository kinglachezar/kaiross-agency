document.getElementById('year').textContent = new Date().getFullYear();

(function () {
  var form = document.getElementById('application');
  if (!form) return;
  var steps = Array.prototype.slice.call(form.querySelectorAll('.step[data-step]'));
  var bar = document.getElementById('progress-bar');
  var current = 1;
  var total = 3;

  function show(n) {
    steps.forEach(function (s) { s.classList.toggle('active', s.dataset.step === String(n)); });
    bar.style.width = (n === 'done' ? 100 : ((n - 1) / total) * 100 + 33) + '%';
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validate(stepEl) {
    var ok = true;
    stepEl.querySelectorAll('[required]').forEach(function (el) {
      if (el.name === 'website') {
        var v = el.value.trim().replace(/^https?:\/\//i, '');
        el.value = v;
      }
      var valid = el.checkValidity() && el.value.trim() !== '';
      el.classList.toggle('invalid', !valid);
      if (!valid) ok = false;
    });
    var err = stepEl.querySelector('.form-error');
    if (err) err.hidden = ok;
    if (!ok) {
      var first = stepEl.querySelector('.invalid');
      if (first) first.focus();
    }
    return ok;
  }

  form.addEventListener('click', function (e) {
    if (e.target.classList.contains('next')) {
      var stepEl = steps[current - 1];
      if (!validate(stepEl)) return;
      current++;
      show(current);
    } else if (e.target.classList.contains('prev')) {
      current--;
      show(current);
    }
  });

  form.addEventListener('input', function (e) {
    if (e.target.classList.contains('invalid') && e.target.checkValidity()) e.target.classList.remove('invalid');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validate(steps[current - 1])) return;
    var data = new FormData(form);
    var payload = {};
    data.forEach(function (v, k) {
      if (payload[k]) payload[k] = [].concat(payload[k], v); else payload[k] = v;
    });
    try { localStorage.setItem('kaiross_application', JSON.stringify(payload)); } catch (err) {}
    show('done');
  });

  show(1);
})();
