// Shows the English or Turkish half of the page: ?lang=tr or ?lang=en wins,
// then the last choice, then the browser language.
(function () {
  var params = new URLSearchParams(location.search);
  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var lang = params.get('lang') || saved || ((navigator.language || 'en').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en');
  if (lang !== 'tr') lang = 'en';
  document.documentElement.lang = lang;
  window.setLang = function (next) {
    document.documentElement.lang = next;
    try { localStorage.setItem('lang', next); } catch (e) {}
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.to === next); });
  };
  document.addEventListener('DOMContentLoaded', function () { window.setLang(lang); });
})();
