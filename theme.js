(function () {
  var KEY = 'theme';
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');

  function apply(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
      if (meta) meta.setAttribute('content', '#171B19');
    } else {
      root.removeAttribute('data-theme');
      root.style.colorScheme = 'light';
      if (meta) meta.setAttribute('content', '#EAE9E1');
    }
  }

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function write(theme) {
    try { localStorage.setItem(KEY, theme); } catch (e) {}
  }

  // First visit: stay on the light default. Never read prefers-color-scheme.
  var initial = read();
  if (initial === 'dark' || initial === 'light') apply(initial);

  function bind() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function sync(theme) {
      var dark = theme === 'dark';
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      var label = dark ? 'Switch to light theme' : 'Switch to dark theme';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }

    sync(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      write(next);
      sync(next);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
