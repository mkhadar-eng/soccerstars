/* =============================================
   SOCCER STARS - Nav & Footer Templates
   ============================================= */

(function() {
  /* ---- SVG Logo (inline, no external image needed) ---- */
  const LOGO_SVG = `<svg width="56" height="56" viewBox="0 0 56 56" xmlns="logo.png">
    <circle cx="28" cy="28" r="27" fill="#003087" stroke="#FFD600" stroke-width="2"/>
    <polygon points="28,8 34,20 47,20 37,29 41,42 28,34 15,42 19,29 9,20 22,20" fill="#FFD600" stroke="#E31937" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="28" cy="28" r="6" fill="#003087"/>
    <circle cx="28" cy="28" r="4" fill="#FFD600"/>
    <path d="M28 28 L40 16" stroke="#E31937" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M28 28 L16 16" stroke="#E31937" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M28 28 L44 30" stroke="#E31937" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M28 28 L12 30" stroke="#E31937" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
    <path d="M28 28 L28 46" stroke="#E31937" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
  </svg>`;

  const LOGO_SMALL = `<svg width="52" height="52" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="27" fill="#003087" stroke="#FFD600" stroke-width="2"/>
    <polygon points="28,8 34,20 47,20 37,29 41,42 28,34 15,42 19,29 9,20 22,20" fill="#FFD600" stroke="#E31937" stroke-width="1.5" stroke-linejoin="round"/>
    <circle cx="28" cy="28" r="6" fill="#003087"/>
    <circle cx="28" cy="28" r="4" fill="#FFD600"/>
  </svg>`;

  /* ---- Navigation ---- */
  const navHTML = `
    <nav class="navbar" id="navbar">
      <a href="index.html" class="nav-brand">
        <div class="nav-logo"> <img src="logo.png" alt="Soccer Stars Logo"> </div>
        <div class="nav-name">SOCCER<br><span>STARS</span></div>
      </a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="programmes.html">Programmes</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a href="contact.html" class="btn btn-primary">Join Now</a>
      </div>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      <a href="index.html">Home</a>
      <a href="about.html">About</a>
      <a href="programmes.html">Programmes</a>
      <a href="gallery.html">Gallery</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html" class="btn btn-primary">Join Academy ⚡</a>
    </div>
  `;

  /* ---- Footer ---- */
  const footerHTML = `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo-wrap">
            <div class="footer-logo"> <img src="logo.png" alt="Soccer Stars Logo"> </div>
            <div>
              <div class="footer-name">SOCCER <span>STARS</span><br>FOOTBALL ACADEMY</div>
            </div>
          </div>
          <p class="footer-tagline">"The Sky is the Limit"</p>
          <p class="footer-desc">Developing the next generation of football champions through world-class coaching, discipline, and passion for the beautiful game.</p>
          <div class="footer-socials">
            <div class="social-icon">f</div>
            <div class="social-icon">𝕏</div>
            <div class="social-icon">in</div>
            <div class="social-icon">▶</div>
            <div class="social-icon">📷</div>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="programmes.html">Programmes</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Programmes</h4>
          <ul>
            <li><a href="programmes.html">Beginner Training</a></li>
            <li><a href="programmes.html">Intermediate Training</a></li>
            <li><a href="programmes.html">Elite Training</a></li>
            <li><a href="programmes.html">Goalkeeper Training</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <div class="footer-contact-item">
            <span class="icon">📍</span>
            <p>Plot 45, Lugogo Stadium Road,<br>Kampala, Uganda</p>
          </div>
          <div class="footer-contact-item">
            <span class="icon">📞</span>
            <p>+256 700 123 456<br>+256 772 987 654</p>
          </div>
          <div class="footer-contact-item">
            <span class="icon">✉️</span>
            <p>info@soccerstars.ug<br>coach@soccerstars.ug</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Soccer Stars Football Academy. Made with <span>♥</span> in Uganda.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
    <button class="scroll-top" aria-label="Scroll to top">↑</button>
  `;

  /* ---- Inject ---- */
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = navHTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
})();
