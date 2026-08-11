(() => {
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const page = document.body.dataset.page || fileName.replace(".html", "");
  const isHome = fileName === "index.html" || page === "home";
  const homeHref = (hash = "") => (isHome ? hash || "#home" : `index.html${hash}`);
  const active = (...names) => (names.includes(page) ? "active" : "");

  const renderHeader = () => {
    const target = document.querySelector("[data-header]");
    if (!target) return;

    target.outerHTML = `
      <header class="site-header" data-header>
        <div class="header-inner">
          <div class="header-left">
            <a class="brand" href="${homeHref("#home")}" aria-label="Millennia World School home">
              <img src="../../Assets/image.svg" alt="Millennia World School" />
            </a>

            <button
              class="nav-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="primary-navigation"
              aria-label="Open navigation"
              data-nav-toggle
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav class="primary-nav" id="primary-navigation" data-nav>
              <ul>
                <li><a class="${active("home")}" href="${homeHref("#home")}">Home</a></li>
                <li class="nav-dropdown">
                  <a class="${active("kindergarten", "elementary", "juniorHigh", "kurikulum")}" href="kurikulum.html">Academics</a>
                  <button
                    class="dropdown-toggle"
                    type="button"
                    aria-label="Open academics menu"
                    aria-expanded="false"
                    data-dropdown-toggle
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="${active("kindergarten")}" href="kindergarten.html">Kindergarten</a></li>
                    <li><a class="${active("elementary")}" href="elementary.html">Elementary</a></li>
                    <li><a class="${active("juniorHigh")}" href="juniorHigh.html">Junior High</a></li>
                    <li><a class="${active("kurikulum")}" href="kurikulum.html">Curriculum</a></li>
                  </ul>
                </li>
                <li><a class="${active("aboutUs")}" href="aboutUs.html">About us</a></li>
                <li><a class="${active("schoolCalendar")}" href="schoolCalendar.html">School calendar</a></li>
                <li><a class="${active("news", "newsDetail")}" href="news.html">News</a></li>
                <li><a class="${active("contact")}" href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>

          <a class="header-cta motion-hover-lift" href="contact.html">Book a Tour</a>
        </div>
      </header>
    `;
  };

  const renderFooter = () => {
    const target = document.querySelector("[data-footer]");
    if (!target) return;

    target.outerHTML = `
      <footer class="site-footer" data-footer>
        <div class="section-shell footer-grid">
          <div class="footer-brand">
            <a class="footer-logo" href="${homeHref("#home")}" aria-label="Millennia World School home">
              <img src="../../Assets/image.svg" alt="Millennia World School" />
            </a>
            <p>
              Millennia World School supports curious learners through caring
              guidance, meaningful academics, and a warm international-minded
              community.
            </p>
          </div>

          <div class="footer-links">
            <h2>Explore</h2>
            <a href="aboutUs.html">About us</a>
            <a href="${homeHref("#academics")}">Academics</a>
            <a href="${homeHref("#environment")}">Campus environment</a>
            <a href="${homeHref("#community")}">Community stories</a>
          </div>

          <div class="footer-links">
            <h2>Programs</h2>
            <a href="kindergarten.html">Kindergarten</a>
            <a href="elementary.html">Elementary</a>
            <a href="juniorHigh.html">Junior High</a>
            <a href="kurikulum.html">Curriculum</a>
          </div>

          <div class="footer-contact">
            <h2>Contact</h2>
            <p>
              Jl. Merpati Raya No. 103<br />
              Sawah Lama, Ciputat, Tangerang Selatan, Banten 15413
            </p>
            <a href="mailto:info@millennia21.id">info@millennia21.id</a>
            <a href="contact.html" class="footer-cta">Book a Tour</a>
          </div>
        </div>

        <div class="section-shell footer-bottom">
          <p>© 2026 Millennia World School. All rights reserved.</p>
          <div>
            <a href="${homeHref("#home")}">Back to top</a>
          </div>
        </div>
      </footer>
    `;
  };

  renderHeader();
  renderFooter();

  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const dropdownToggle = document.querySelector("[data-dropdown-toggle]");
  const dropdown = dropdownToggle?.closest(".nav-dropdown");
  const modal = document.querySelector("[data-modal]");
  const openModalButtons = document.querySelectorAll("[data-open-modal]");
  const closeModalButtons = document.querySelectorAll("[data-close-modal]");
  const faqButtons = document.querySelectorAll("[data-faq-index]");
  const communityCards = document.querySelectorAll(".community-card");

  const communitySets = [
    [
      ["Parent support", "Families feel seen because teachers communicate clearly."],
      ["Open classroom", "Parents understand what students are practicing each week."],
      ["Shared routines", "School and home work together through steady habits."],
      ["Welcoming culture", "The school community makes new families feel at home."],
    ],
    [
      ["Student confidence", "Students are encouraged to speak, try, revise, and grow."],
      ["Creative courage", "Projects help learners explore ideas beyond worksheets."],
      ["Academic rhythm", "Clear routines help each child understand the next step."],
      ["Peer connection", "Group learning builds communication and responsibility."],
    ],
    [
      ["Wellbeing check-ins", "Teachers notice progress, energy, and emotional readiness."],
      ["Learning guidance", "Support is adjusted when students need more structure."],
      ["Character growth", "Students practice respect, independence, and self-reflection."],
      ["Safe belonging", "Each child is guided to feel known inside the community."],
    ],
  ];

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  const closeNav = () => {
    if (!header || !navToggle) return;
    header.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  const toggleNav = () => {
    if (!header || !navToggle) return;
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  };

  const closeDropdown = () => {
    if (!dropdown || !dropdownToggle) return;
    dropdown.classList.remove("is-open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  };

  const toggleDropdown = () => {
    if (!dropdown || !dropdownToggle) return;
    const isOpen = dropdown.classList.toggle("is-open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  };

  const openModal = () => {
    if (!modal) return;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  const setCommunityContent = (index) => {
    const selectedSet = communitySets[index] || communitySets[0];

    communityCards.forEach((card, cardIndex) => {
      const title = card.querySelector("[data-community-title]");
      const text = card.querySelector("[data-community-text]");
      const content = selectedSet[cardIndex];

      card.classList.add("is-swapping");
      window.setTimeout(() => {
        if (title && content) title.textContent = content[0];
        if (text && content) text.textContent = content[1];
        card.classList.remove("is-swapping");
      }, 130);
    });

    faqButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.faqIndex === String(index));
    });
  };

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();

  navToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleNav();
  });
  dropdownToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleDropdown();
  });
  openModalButtons.forEach((button) => button.addEventListener("click", openModal));
  closeModalButtons.forEach((button) => button.addEventListener("click", closeModal));
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setCommunityContent(Number(button.dataset.faqIndex || 0));
    });
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (header && !header.contains(target)) {
      closeNav();
      closeDropdown();
    }

    if (target.matches(".primary-nav a")) {
      closeNav();
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeModal();
    closeNav();
    closeDropdown();
  });
})();


