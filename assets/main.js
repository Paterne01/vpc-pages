// opencode auto post vpc — site scripts
(function () {
  // Année courante dans les footers
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  // Menu mobile : fermer à la navigation
  document.querySelectorAll('.nav-menu a').forEach(function (a) {
    a.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
    });
  });
})();
