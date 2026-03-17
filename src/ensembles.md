---
layout: base.njk
title: Ensembles
description: Musical groups Tim Bailey Jones plays with in Tampa Bay, FL — ska, dixieland, brass quintet, concert band, symphony
---

# Ensembles

Groups I play with around Tampa Bay. Hover or tap to pause, then click a link.

<div class="ensemble-carousel" id="ensemble-carousel">
  <div class="ensemble-track">

    <!-- 1. Foolish Relics -->
    <div class="ensemble-slide" id="foolishrelics">
      <div class="slide-inner">
        <div class="slide-photo ph-foolishrelics" style="background-image: url('/images/foolishrelics.jpg')">
          <span class="slide-photo-initials">FR</span>
        </div>
        <div class="slide-content">
          <div class="slide-tags">
            <span class="slide-genre">Ska / Punk</span>
            <span class="slide-role">Trumpet</span>
          </div>
          <h2 class="slide-title">Foolish Relics</h2>
          <p class="slide-desc">
            Tampa-area ska band I joined in 2025 as their trumpet player. High-energy horns-up ska punk —
            if you've never seen a brass section lose its mind at a club show, come find us.
            Our debut album <em>Somebody Please Just Wake Me Up</em> dropped in 2025.
          </p>
          <ul class="slide-shows">
            <li><strong>Apr 18</strong> &mdash; Inner Compass, Lakewood Ranch FL</li>
            <li><strong>May 16</strong> &mdash; Grand Central Brewhouse, St. Pete FL</li>
            <li><strong>Jun 1</strong> &mdash; Bottom of the Hill, San Francisco CA</li>
            <li><strong>Jun 6</strong> &mdash; The Holding Company, San Diego CA</li>
          </ul>
          <div class="slide-links">
            <a class="slide-link primary" href="https://foolishrelics.com" target="_blank" rel="noopener">Band Site</a>
            <a class="slide-link secondary" href="http://www.foolishrelics.com/shows.html" target="_blank" rel="noopener">All Shows</a>
            <a class="slide-link secondary" href="https://open.spotify.com/album/5blJvI5zF7KZaydjXx35lm" target="_blank" rel="noopener">Spotify</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Cypress Creek Dixieland -->
    <div class="ensemble-slide" id="cypress">
      <div class="slide-inner">
        <div class="slide-photo ph-cypress" style="background-image: url('/images/cypress-creek.jpg')">
          <span class="slide-photo-initials">CC</span>
        </div>
        <div class="slide-content">
          <div class="slide-tags">
            <span class="slide-genre">Dixieland Jazz</span>
            <span class="slide-role">Tuba</span>
          </div>
          <h2 class="slide-title">Cypress Creek Dixieland</h2>
          <p class="slide-desc">
            Traditional dixieland band out of the Wesley Chapel / Pasco County area, going strong for 12+ years.
            I'm their tuba player — the bottom of the rhythm section. We play festivals, private events,
            breweries, and anywhere that needs some New Orleans flavor in central Florida.
          </p>
          <div class="slide-links">
            <a class="slide-link primary" href="/albums#cypress">Albums</a>
            <a class="slide-link secondary" href="/performances">Videos</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Gaspar Brass Quintet -->
    <div class="ensemble-slide" id="gaspar">
      <div class="slide-inner">
        <div class="slide-photo ph-gaspar" style="background-image: url('/images/gaspar-brass.jpg')">
          <span class="slide-photo-initials">GB</span>
        </div>
        <div class="slide-content">
          <div class="slide-tags">
            <span class="slide-genre">Classical Brass</span>
            <span class="slide-role">Tuba</span>
          </div>
          <h2 class="slide-title">Gaspar Brass Quintet</h2>
          <p class="slide-desc">
            Named for José Gaspar — Tampa Bay's legendary pirate — this is a classical brass quintet:
            two trumpets, French horn, trombone, and tuba. We play transcriptions, brass quintet
            literature, and the occasional arrangement that nobody in the audience expected.
          </p>
          <div class="slide-links">
            <a class="slide-link primary" href="/performances">Performances</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Wesley Chapel Wind Ensemble -->
    <div class="ensemble-slide" id="wesleychapel">
      <div class="slide-inner">
        <div class="slide-photo ph-wesleychapel" style="background-image: url('/images/wesley-chapel-winds.jpg')">
          <span class="slide-photo-initials">WC</span>
        </div>
        <div class="slide-content">
          <div class="slide-tags">
            <span class="slide-genre">Concert Band</span>
            <span class="slide-role">Tuba</span>
          </div>
          <h2 class="slide-title">Wesley Chapel Wind Ensemble</h2>
          <p class="slide-desc">
            Community wind ensemble serving Wesley Chapel and New Tampa. This is where I get to play
            serious wind band literature — Holst, Grainger, Chance, Persichetti. A full concert band
            experience without anyone having to be in 9th grade.
          </p>
          <div class="slide-links">
            <a class="slide-link primary" href="/performances">Performances</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. Dade City Symphony -->
    <div class="ensemble-slide" id="dadecity">
      <div class="slide-inner">
        <div class="slide-photo ph-dadecity" style="background-image: url('/images/dade-city-symphony.jpg')">
          <span class="slide-photo-initials">DC</span>
        </div>
        <div class="slide-content">
          <div class="slide-tags">
            <span class="slide-genre">Symphony Orchestra</span>
            <span class="slide-role">Principal Tuba</span>
          </div>
          <h2 class="slide-title">Dade City Symphony</h2>
          <p class="slide-desc">
            Community symphony serving Pasco County. I hold the principal tuba chair — meaning
            when there's a tuba part, it's mine. Standard orchestral repertoire from the Classical
            through Romantic periods, performed for the communities of Dade City and Zephyrhills.
          </p>
          <div class="slide-links">
            <a class="slide-link primary" href="/performances">Performances</a>
          </div>
        </div>
      </div>
    </div>

  </div><!-- /.ensemble-track -->

  <div class="carousel-controls">
    <button class="ensemble-nav-btn" onclick="ensembleMove(-1)" aria-label="Previous ensemble">&#8249;</button>
    <div class="ensemble-dots"></div>
    <button class="ensemble-nav-btn" onclick="ensembleMove(1)" aria-label="Next ensemble">&#8250;</button>
  </div>
</div><!-- /.ensemble-carousel -->
