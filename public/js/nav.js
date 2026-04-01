(function () {
  var btn  = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  var nav  = document.getElementById('site-nav');

  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target)) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
