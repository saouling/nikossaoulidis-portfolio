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

  // Hero video: starts muted+looping (autoplay-with-sound is blocked by
  // browsers anyway); the button unmutes on request and is labelled with
  // the action it performs, so screen readers never hear a state that reads
  // like a command. Reduced-motion pauses the loop.
  document.querySelectorAll('.hero-video').forEach(function (wrap) {
    var video = wrap.querySelector('video');
    var button = wrap.querySelector('button');
    if (!video) return;
    if (reduceMotion) video.pause();
    if (!button) return;
    button.addEventListener('click', function () {
      video.muted = !video.muted;
      button.textContent = video.muted ? 'Turn sound on' : 'Turn sound off';
    });
  });

})();
