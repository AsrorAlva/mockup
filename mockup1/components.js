(() => {
  const logoUrl =
    "https://millenniaws.sch.id/wp-content/uploads/2021/11/Millennia-World-School-Logo-Only.svg";

  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const page = document.body.dataset.page || fileName.replace(".html", "");
  const isHome = page === "home" || fileName === "index.html";

  const homeHref = (hash) => (isHome ? hash : `index.html${hash}`);
  const sectionLinkAttr = isHome ? " data-section-link" : "";

  const isActive = (target) => (page === target ? "active" : "");
  const pagesActive = page === "admission" ? "active" : "";


  const header = `
    <div class="header-container">
      <header class="header">
        <div class="logo">
          <img src="${logoUrl}" alt="MWS Logo" />
        </div>

        <button
          class="nav-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="primary-navigation"
          data-nav-toggle
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="navbar" id="primary-navigation" data-nav>
          <ul class="nav-menu">
            <li>
              <a class="${isHome ? "active" : ""}" href="${homeHref("#hero")}"${sectionLinkAttr}>HOME</a>

            </li>

            <li class="dropdown">
              <a class="${pagesActive}" href="academic.html">PAGES</a>
              <button class="dropdown-trigger" type="button" aria-label="Open pages menu" aria-expanded="false" data-menu-toggle>
                <span></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="academic.html">Our School</a></li>
                <li><a href="admission.html">Admission</a></li>
                <li><a href="school-calendar.html">School Calendar</a></li>
                <li><a href="news.html">School News</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a class="${isActive("academic")}" href="academic.html">ACADEMICS</a>
              <button class="dropdown-trigger" type="button" aria-label="Open academics menu" aria-expanded="false" data-menu-toggle>
                <span></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="kindergarten.html#kindergarten">Kindergarten</a></li>
                <li><a href="elementary.html#elementary">Elementary</a></li>
                <li><a href="junior-high.html#junior-high">Junior High School</a></li>
                <li><a href="curriculum.html#curriculum">Kurikulum</a></li>
              </ul>
            </li>

            <li><a class="${isActive("school-calendar")}" href="school-calendar.html">SCHOOL CALENDAR</a></li>
            <li><a class="${isActive("news")}" href="news.html">NEWS</a></li>
            <li><a class="${isActive("contact")}" href="contact.html">CONTACT</a></li>
          </ul>
        </nav>
      </header>
    </div>
  `;

  const footer = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-column">
            <h2>About Us</h2>
            <p>
              Millennia World School provides a supportive environment where
              children grow into confident, caring, and independent learners.
            </p>
          </div>

          <div class="footer-column">
            <h2>Contacts</h2>
            <address>
              Jl. Merpati Raya No. 103<br />
              Sawah Lama, Ciputat, Tangerang Selatan, Banten 15413
            </address>
            <p>
              WhatsApp: 0821 1150 7100<br />
              <a href="mailto:info@millennia21.id">info@millennia21.id</a>
            </p>
          </div>

          <div class="footer-column">
            <h2>Extra Links</h2>
            <ul>
              <li><a href="${homeHref("#section-2")}"${sectionLinkAttr}>About Us</a></li>
              <li><a href="academic.html">Academics</a></li>
              <li><a href="news.html">School News</a></li>
              <li><a href="${homeHref("#section-7")}"${sectionLinkAttr}>Affiliations</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-column footer-newsletter">
            <h2>School Newsletter</h2>
            <form>
              <label for="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Enter your email *" />
              <button type="submit">SUBSCRIBE NOW!</button>
            </form>
          </div>
        </div>

        <div class="footer-brand">
          <img src="${logoUrl}" alt="Millennia World School Logo" />
          <h2>Millennia World School</h2>
          <p>Primary School.</p>
        </div>

        <div class="footer-bottom">
          <p>
            <a href="${homeHref("#hero")}"${sectionLinkAttr}>Privacy Policy</a> /
            Millennia World School © 2026 / All Rights Reserved
          </p>

          <div class="footer-social" aria-label="Social media links">
            <a href="${homeHref("#hero")}"${sectionLinkAttr} aria-label="Facebook">f</a>
            <a href="${homeHref("#hero")}"${sectionLinkAttr} aria-label="Twitter">t</a>
            <a href="${homeHref("#hero")}"${sectionLinkAttr} aria-label="Instagram">ig</a>
            <a href="${homeHref("#hero")}"${sectionLinkAttr} aria-label="Pinterest">p</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  document.querySelectorAll("[data-header]").forEach((target) => {
    target.outerHTML = header;
  });

  document.querySelectorAll("[data-footer]").forEach((target) => {
    target.outerHTML = footer;
  });

  const headerEl = document.querySelector(".header-container");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelectorAll(".navbar a");
  const menuToggles = document.querySelectorAll("[data-menu-toggle]");

  const closeDropdowns = () => {
    menuToggles.forEach((button) => {
      const dropdown = button.closest(".dropdown");
      dropdown?.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  };

  const closeNav = () => {
    if (!headerEl || !navToggle) return;
    headerEl.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    closeDropdowns();
  };

  navToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = headerEl?.classList.toggle("nav-open") || false;
    navToggle.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) closeDropdowns();
  });

  menuToggles.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const dropdown = button.closest(".dropdown");
      const isOpen = dropdown?.classList.toggle("is-open") || false;
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  navLinks.forEach((link) => link.addEventListener("click", closeNav));

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (headerEl && !headerEl.contains(target)) closeNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
})();
