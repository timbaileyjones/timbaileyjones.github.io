(function () {
  var slides = document.querySelectorAll('.ensemble-slide');
  var total = slides.length;
  if (!total) return;

  var track = document.querySelector('.ensemble-track');
  var dotsContainer = document.querySelector('.ensemble-dots');
  var current = 0;
  var timer;

  // Generate dots
  if (dotsContainer) {
    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'ensemble-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Show ensemble ' + (i + 1));
      dot.onclick = function () { goTo(i); };
      dotsContainer.appendChild(dot);
    });
  }

  function startPan(slideEl) {
    var photo = slideEl.querySelector('.slide-photo');
    if (!photo) return;
    // Remove class, force reflow to restart animation, then re-add
    photo.classList.remove('panning');
    void photo.offsetWidth;
    photo.classList.add('panning');
  }

  function update() {
    if (track) track.style.transform = 'translateX(-' + (current * 100) + '%)';
    document.querySelectorAll('.ensemble-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
    startPan(slides[current]);
  }

  function goTo(i) {
    current = i;
    update();
  }

  function advance() {
    current = (current + 1) % total;
    update();
  }

  function startTimer() {
    timer = setInterval(advance, 10000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  window.ensembleMove = function (dir) {
    current = (current + dir + total) % total;
    update();
  };

  // Pause auto-advance while mouse is over carousel so users can click links
  var carousel = document.querySelector('.ensemble-carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', stopTimer);
    carousel.addEventListener('mouseleave', startTimer);
  }

  startTimer();
  update();

  // Hide initials placeholder once the background photo successfully loads
  document.querySelectorAll('.slide-photo').forEach(function (photo) {
    var style = photo.getAttribute('style') || '';
    var match = style.match(/url\(['"]?([^'")\s]+)['"]?\)/);
    if (!match) return;
    var img = new Image();
    img.onload = function () {
      var initials = photo.querySelector('.slide-photo-initials');
      if (initials) initials.style.display = 'none';
    };
    img.src = match[1];
  });
})();
