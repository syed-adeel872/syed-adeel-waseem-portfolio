(function () {
  var btn = document.getElementById('menu-toggle');
  var menu = document.getElementById('primary-menu');
  if (!btn || !menu) return;

  function open() {
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    var first = menu.querySelector('a');
    if (first) first.focus();
  }

  function close() {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  }

  btn.addEventListener('click', function () {
    if (menu.classList.contains('open')) close(); else open();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      close();
      btn.focus();
    }
  });

  menu.addEventListener('click', function (e) {
    if (e.target && e.target.tagName === 'A') close();
  });

  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
      close();
    }
  });
})();
