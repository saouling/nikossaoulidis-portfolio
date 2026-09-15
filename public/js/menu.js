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

  // Hero shapes + custom cursor: both gated on the same conditions (a real
  // hover-capable pointer, motion allowed) since neither means anything on
  // touch and reduced-motion users get the plain static hero either way.
  var heroShapes = document.querySelector('.hero-shapes');
  var hero = document.querySelector('.hero.hero-home');
  if (hero && !reduceMotion && window.matchMedia('(hover: hover)').matches) {
    if (heroShapes) {
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

    // Custom cursor: a ring that tracks the pointer while over the hero,
    // filling solid red over a link. The real cursor is never removed
    // globally -- only `.hero` gets `cursor:none`, and only once this dot
    // exists to replace it.
    var dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    hero.addEventListener('mouseenter', function () {
      hero.classList.add('custom-cursor');
    });
    hero.addEventListener('mouseleave', function () {
      hero.classList.remove('custom-cursor');
      dot.style.transform = 'translate(-100px, -100px)';
    });
    hero.addEventListener('mousemove', function (e) {
      dot.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
      var over = e.target.closest('a');
      dot.classList.toggle('is-link', !!over);
    });
  }

  // Hero video: starts muted+looping (autoplay-with-sound is blocked by
  // browsers anyway); the button unmutes on request. Plain <video controls>
  // without this file works identically, just without the custom button.
  document.querySelectorAll('.hero-video').forEach(function (wrap) {
    var video = wrap.querySelector('video');
    var button = wrap.querySelector('button');
    if (!video || !button) return;
    button.addEventListener('click', function () {
      video.muted = !video.muted;
      button.textContent = video.muted ? 'Sound on' : 'Sound off';
      button.setAttribute('aria-pressed', String(!video.muted));
    });
  });

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
