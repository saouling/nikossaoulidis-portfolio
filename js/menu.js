// Mobile nav toggle + smooth-scroll for in-page anchors.
// Progressive enhancement only: the nav is a plain, working link list without this file.
document.body.classList.remove('no-js');

(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion) {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href').slice(1);
        var target = id && document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  // Hero shapes: drift a few pixels toward the cursor. Skipped entirely for
  // reduced motion or a non-hover (touch) pointer, in which case the shapes
  // just sit still -- their static position is already the fallback.
  var heroShapes = document.querySelector('.hero-shapes');
  var hero = document.querySelector('.hero');
  if (heroShapes && hero && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
    var shapes = Array.prototype.slice.call(heroShapes.querySelectorAll('.shape'));
    hero.addEventListener('mousemove', function (e) {
      var rect = hero.getBoundingClientRect();
      var nx = (e.clientX - rect.left) / rect.width - 0.5;
      var ny = (e.clientY - rect.top) / rect.height - 0.5;
      shapes.forEach(function (el) {
        var depth = parseFloat(el.getAttribute('data-depth')) || 20;
        el.style.transform = 'translate(' + (nx * depth) + 'px,' + (ny * depth) + 'px)';
      });
    });
    hero.addEventListener('mouseleave', function () {
      shapes.forEach(function (el) { el.style.transform = 'translate(0,0)'; });
    });
  }

  // Scroll reveal: .reveal blocks fade/lift in as they enter the viewport
  // and fade back out as they leave it, in either scroll direction — kept
  // observing indefinitely rather than a one-time reveal. Content is
  // already visible without this, so a missing observer is safe.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
