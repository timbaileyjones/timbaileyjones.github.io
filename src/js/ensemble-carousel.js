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

  function update() {
    if (track) track.style.transform = 'translateX(-' + (current * 100) + '%)';
    document.querySelectorAll('.ensemble-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
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
    timer = setInterval(advance, 6000);
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
})();
