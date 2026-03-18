(function () {
  document.querySelectorAll('.album-carousel').forEach(function (carousel) {
    var track = carousel.querySelector('.album-track');
    var slides = carousel.querySelectorAll('.album-slide');
    var dotsContainer = carousel.querySelector('.album-dots');
    var total = slides.length;
    if (!total || !track) return;

    var current = 0;
    var timer;

    if (dotsContainer) {
      slides.forEach(function (_, i) {
        var dot = document.createElement('button');
        dot.className = 'album-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', 'Image ' + (i + 1));
        dot.onclick = function () { goTo(i); };
        dotsContainer.appendChild(dot);
      });
    }

    function update() {
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      carousel.querySelectorAll('.album-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === current);
      });
    }

    function goTo(i) { current = i; update(); }
    function advance() { current = (current + 1) % total; update(); }
    function startTimer() { timer = setInterval(advance, 6000); }
    function stopTimer() { clearInterval(timer); }

    // Expose move for nav buttons via carousel ID
    carousel._albumMove = function (dir) {
      current = (current + dir + total) % total;
      update();
    };

    // Pause while hovered so liner notes can be read
    carousel.addEventListener('mouseenter', stopTimer);
    carousel.addEventListener('mouseleave', startTimer);

    startTimer();
    update();
  });

  window.albumMove = function (id, dir) {
    var el = document.getElementById(id);
    if (el && el._albumMove) el._albumMove(dir);
  };
})();
