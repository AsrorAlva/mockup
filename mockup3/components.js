(() => {
  const logoUrl =
    "https://millenniaws.sch.id/wp-content/uploads/2021/11/Millennia-World-School-Logo-Only.svg";

  // Determine if we are on the home page to set correct link paths
  const isHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") || window.location.pathname === "" || (!window.location.pathname.includes(".html"));
  const homePrefix = isHomePage ? "" : "index.html";
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const page = fileName.replace(".html", "") || "index";
  const pageGroups = {
    home: ["index"],
    pages: ["our-school", "admission"],
    academics: ["academic", "kindergarten", "elementary", "high-school", "junior-high", "kurikulum"],
    calendar: ["school-calendar"],
    news: ["school-news", "news-detail"],
    contact: ["contact"],
  };
  const isActive = (...names) => names.includes(page);
  const groupActive = (group) => pageGroups[group]?.includes(page);
  const activeClass = (active) => (active ? "active" : "in-active");

  const renderHeader = () => {
    const target = document.querySelector("[data-header]");
    if (!target) return;

    target.outerHTML = `
      <header class="site-header" data-header>
        <div class="nav-inner">
          <div class="logo">
            <a href="${homePrefix}#hero" style="display: flex; align-items: center;">
              <img src="${logoUrl}" alt="MWS Logo" />
            </a>
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

          <div class="nav-links">
            <nav class="navbar" id="primary-navigation" aria-label="Main navigation">
              <ul class="nav-menu">
                <li class="dropdown ${activeClass(groupActive("home"))}">
                  <a class="${activeClass(groupActive("home"))}" href="${homePrefix}#hero" aria-haspopup="true">Home</a>
                  <button class="dropdown-trigger" type="button" aria-label="Open home menu" aria-expanded="false" data-menu-toggle>
                    <span></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="${homePrefix}#campus-spotlight">Facilities</a></li>
                    <li><a href="${homePrefix}#philosophy">About MWS</a></li>
                    <li><a href="school-news.html">School News</a></li>
                    <li><a href="${homePrefix}#community-voices">School Video</a></li>
                    <li><a href="${homePrefix}#info-section">Upcoming Events</a></li>
                    <li><a href="${homePrefix}#info-section">FAQ</a></li>
                    <li><a href="${homePrefix}#affiliations">Affiliations</a></li>
                    <li><a href="${homePrefix}#philosophy">Mission Statement</a></li>
                  </ul>
                </li>
                <li class="dropdown ${activeClass(groupActive("pages"))}">
                  <a class="${activeClass(groupActive("pages"))}" href="our-school.html" aria-haspopup="true">Pages</a>
                  <button class="dropdown-trigger" type="button" aria-label="Open pages menu" aria-expanded="false" data-menu-toggle>
                    <span></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="${activeClass(isActive("our-school"))}" href="our-school.html">Our School</a></li>
                    <li><a class="${activeClass(isActive("admission"))}" href="admission.html">Admission</a></li>
                    <li><a class="${activeClass(isActive("school-calendar"))}" href="school-calendar.html">School Calendar</a></li>
                    <li><a class="${activeClass(isActive("school-news"))}" href="school-news.html">School News</a></li>
                    <li><a class="${activeClass(isActive("contact"))}" href="contact.html">Contact</a></li>
                  </ul>
                </li>
                <li class="dropdown ${activeClass(groupActive("academics"))}">
                  <a class="${activeClass(groupActive("academics"))}" href="academic.html" aria-haspopup="true">Academics</a>
                  <button class="dropdown-trigger" type="button" aria-label="Open academics menu" aria-expanded="false" data-menu-toggle>
                    <span></span>
                  </button>
                  <ul class="dropdown-menu academic-menu">

                    <li><a class="${activeClass(isActive("kindergarten"))}" href="kindergarten.html">Kindergarten <span>Early years learning</span></a></li>
                    <li><a class="${activeClass(isActive("elementary"))}" href="elementary.html">Elementary <span>Primary inquiry and foundations</span></a></li>
                    <li><a class="${activeClass(isActive("high-school", "junior-high"))}" href="high-school.html">High School <span>Secondary readiness and leadership</span></a></li>
                  </ul>
                </li>
                <li><a class="${activeClass(groupActive("calendar"))}" href="school-calendar.html">School Calendar</a></li>
                <li><a class="${activeClass(groupActive("news"))}" href="school-news.html">News</a></li>
                <li><a class="${activeClass(groupActive("contact"))}" href="contact.html">Contact</a></li>
              </ul>
            </nav>
            <a class="btn-visit" href="admission.html">Book a Tour</a>
          </div>
        </div>
      </header>
    `;
  };

  const renderFooter = () => {
    const target = document.querySelector("[data-footer]");
    if (!target) return;

    target.outerHTML = `
      <footer class="site-footer" id="contact" data-footer>
        <div class="wrap">
          <div class="footer-top footer-grid">
            <div class="footer-brand">
              <a class="footer-logo" href="${homePrefix}#hero" aria-label="Millennia World School home">
                <img src="${logoUrl}" alt="Millennia World School" />
              </a>
              <p>
                Adipiscing sed voluptate, praesent posuere sunt primis reprehenderit ex consectetur est quis. Anim faucibus nulla veniam.
              </p>
            </div>

            <div class="footer-links">
              <h2>Explore</h2>
              <a href="our-school.html">About us</a>
              <a href="academic.html">Academics</a>
              <a href="${homePrefix}#campus-spotlight">Campus environment</a>
              <a href="community-stories.html">Community stories</a>
            </div>

            <div class="footer-links">
              <h2>Programs</h2>
              <a href="kindergarten.html">Kindergarten</a>
              <a href="elementary.html">Elementary</a>
              <a href="high-school.html">High School</a>
              <a href="kurikulum.html">Curriculum</a>
            </div>

            <div class="footer-contact">
              <h2>Contact</h2>
              <p>
                Jl. Merpati Raya No. 103<br />
                Sawah Lama, Ciputat, Tangerang Selatan, Banten 15413
              </p>
              <a href="mailto:info@millennia21.id">info@millennia21.id</a>
              <a href="admission.html" class="footer-cta">Book a Tour</a>
            </div>
          </div>

          <div class="footer-bottom">
            <p>&copy; 2026 Millennia World School. All rights reserved.</p>
            <div>
              <a href="${homePrefix}#hero">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  };

  const renderChatbot = () => {
    // Check if chatbot HTML is already on the page (like in index.html)
    let chatbotEl = document.querySelector(".chatbot");

    // If not, render it dynamically
    if (!chatbotEl) {
      chatbotEl = document.createElement("div");
      chatbotEl.className = "chatbot";
      chatbotEl.innerHTML = `
        <button class="chatbot-toggle" type="button" aria-label="Open chatbot">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3a9 9 0 0 0-9 9 8.9 8.9 0 0 0 2.2 5.9L4 21l3.3-1.2A9 9 0 1 0 12 3z" />
          </svg>
          <span>Ask MWS AI</span>
        </button>
        <div class="chatbot-panel">
          <div class="chatbot-header">
            <h3>MWS AI</h3>
          </div>
          <div class="chatbot-body">
            <div class="chat-messages" style="max-height: 180px; overflow-y: auto; margin-bottom: 12px; display: flex; flex-direction: column; gap: 8px;">
              <p style="margin: 0; background: var(--warm-white); padding: 8px 12px; font-size: 14px; border-radius: 0; align-self: flex-start; color: var(--charcoal);">
                Ultrices 👋 exercitation augue in duis enim curae luctus.!
              </p>
            </div>
            <div style="display: flex; gap: 8px;">
              <input type="text" class="chat-input" placeholder="Type a message..." style="flex: 1; padding: 10px; border: 1px solid var(--border); border-radius: 0; font-family: var(--f-body); font-size: 14px;" />
              <button class="chat-send" style="background: var(--burgundy); color: var(--white); border: none; padding: 0 16px; cursor: pointer; border-radius: 0; font-family: var(--f-head); font-weight: 600; font-size: 13px;">Send</button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(chatbotEl);
    }

    const toggle = chatbotEl.querySelector(".chatbot-toggle");
    const panel = chatbotEl.querySelector(".chatbot-panel");
    const input = chatbotEl.querySelector(".chat-input");
    const sendBtn = chatbotEl.querySelector(".chat-send");
    const messagesContainer = chatbotEl.querySelector(".chat-messages");

    if (toggle && panel) {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = panel.style.display === "block" || getComputedStyle(panel).display === "block";
        panel.style.display = isOpen ? "none" : "block";
      });

      // Close on clicking outside
      document.addEventListener("click", (e) => {
        if (!chatbotEl.contains(e.target)) {
          panel.style.display = "none";
        }
      });
    }

    // Chat functionality
    if (input && sendBtn && messagesContainer) {
      const handleSend = () => {
        const text = input.value.trim();
        if (!text) return;

        // User message
        const userMsg = document.createElement("p");
        userMsg.style.cssText = "margin: 0; background: var(--burgundy); color: white; padding: 8px 12px; font-size: 14px; border-radius: 0; align-self: flex-end;";
        userMsg.textContent = text;
        messagesContainer.appendChild(userMsg);
        input.value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Bot reply (simulated)
        setTimeout(() => {
          const botMsg = document.createElement("p");
          botMsg.style.cssText = "margin: 0; background: var(--warm-white); color: var(--charcoal); padding: 8px 12px; font-size: 14px; border-radius: 0; align-self: flex-start;";

          let response = "Thank you for asking. Our admissions team is happy to guide you! Please check our Admissions page or email info@millennia21.id for direct support.";
          const lowText = text.toLowerCase();
          if (lowText.includes("admission") || lowText.includes("daftar") || lowText.includes("apply")) {
            response = "You can view detailed steps, timelines, and tuition fees on our Admissions page. Booking a school tour is also available there!";
          } else if (lowText.includes("kindergarten") || lowText.includes("tk")) {
            response = "Our Kindergarten program accepts children ages 2 to 6. We focus on play-based learning and inquiry!";
          } else if (lowText.includes("fee") || lowText.includes("biaya") || lowText.includes("tuition")) {
            response = "Tuition and enrollment fees vary by level (Kindergarten, Elementary, High School). Full details are listed on the Admissions page table.";
          } else if (lowText.includes("contact") || lowText.includes("lokasi") || lowText.includes("map")) {
            response = "We are located at Jl. Merpati Raya No. 103, Sawah Lama, Ciputat. Visit our Contact page to find our interactive map and phone details!";
          } else if (lowText.includes("curriculum") || lowText.includes("kurikulum")) {
            response = "We combine the Cambridge International Curriculum with the Indonesian National Curriculum, taught using an inquiry-based model.";
          }

          botMsg.textContent = response;
          messagesContainer.appendChild(botMsg);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1000);
      };

      sendBtn.addEventListener("click", handleSend);
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSend();
      });
    }
  };

  renderHeader();
  renderFooter();
  renderChatbot();

  /* ---------- header scroll sync ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const navToggle = header.querySelector("[data-nav-toggle]");
    const navLinks = header.querySelector(".nav-links");
    const menuToggles = header.querySelectorAll("[data-menu-toggle]");
    const closeDropdowns = () => {
      menuToggles.forEach((button) => {
        const dropdown = button.closest(".dropdown");
        dropdown?.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
      });
    };
    const closeNav = () => {
      header.classList.remove("nav-open");
      navToggle?.setAttribute("aria-expanded", "false");
      closeDropdowns();
    };

    let lastScrollY = window.scrollY;

    const syncHeader = () => {
      const currentY = window.scrollY;
      const isScrolled = currentY > 24;
      const shouldHide =
        currentY > lastScrollY && currentY > 80 && !header.classList.contains("nav-open");

      header.classList.toggle("is-scrolled", isScrolled);
      header.classList.toggle("is-hidden", shouldHide);

      if (currentY <= 24) {
        header.classList.remove("is-hidden");
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", syncHeader, { passive: true });
    syncHeader();

    navToggle?.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      header.classList.remove("is-hidden");
      if (!isOpen) closeDropdowns();
    });

    menuToggles.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const dropdown = button.closest(".dropdown");
        menuToggles.forEach((otherButton) => {
          if (otherButton === button) return;
          otherButton.closest(".dropdown")?.classList.remove("is-open");
          otherButton.setAttribute("aria-expanded", "false");
        });
        const isOpen = dropdown?.classList.toggle("is-open") || false;
        button.setAttribute("aria-expanded", String(isOpen));
      });
    });

    navLinks?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!header.contains(target)) closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNav();
    });
  }
})();

/* ---------- hero slider ---------- */
const heroSlides = document.querySelectorAll(".hero-slide");
if (heroSlides.length > 0) {
  const heroNavBtns = document.querySelectorAll(".hero-nav button");
  const heroHeadline = document.getElementById("hero-headline");
  const heroCaption = document.getElementById("hero-caption");
  const heroSlideTag = document.getElementById("current-slide-tag");
  const heroCountCurrent = document.getElementById("hero-count-current");
  let heroIndex = 0;
  let heroTimer;

  const heroData = [
    {
      headline: "Where curiosity finds its first language.",
      caption:
        "An international school for preschool through junior high, built around a single idea: a child\u2019s world should grow larger every day.",
    },
    {
      headline: "Learning that steps outside the classroom.",
      caption:
        "Gardens, courtyards, and open studios where a lesson can start indoors and finish somewhere entirely different.",
    },
    {
      headline: "A place designed to be grown up in.",
      caption:
        "From a child\u2019s first day away from home to the threshold of adolescence, on a single campus.",
    },
  ];

  function goToSlide(i) {
    heroIndex = (i + heroSlides.length) % heroSlides.length;
    heroSlides.forEach((s, idx) =>
      s.classList.toggle("active", idx === heroIndex),
    );
    heroNavBtns.forEach((b, idx) =>
      b.classList.toggle("active", idx === heroIndex),
    );
    const d = heroData[heroIndex];
    if (heroHeadline && d) heroHeadline.textContent = d.headline;
    if (heroCaption && d) heroCaption.textContent = d.caption;
    if (heroSlideTag && heroSlides[heroIndex]) {
      heroSlideTag.textContent = heroSlides[heroIndex].dataset.caption || "";
    }
    if (heroCountCurrent) {
      heroCountCurrent.textContent = String(heroIndex + 1).padStart(2, "0");
    }
  }

  function startHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => goToSlide(heroIndex + 1), 2600);
  }

  heroNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      goToSlide(parseInt(btn.dataset.slide, 10));
      startHeroTimer();
    });
  });
  document.querySelector(".hero-arrow.prev")?.addEventListener("click", () => {
    goToSlide(heroIndex - 1);
    startHeroTimer();
  });
  document.querySelector(".hero-arrow.next")?.addEventListener("click", () => {
    goToSlide(heroIndex + 1);
    startHeroTimer();
  });

  startHeroTimer();
}

/* ---------- reveal scroll animation ---------- */
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
if (!reduceMotion && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

/* ---------- taxonomy & slick sliders ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".info-section").forEach((section) => {
    const slickList = section.querySelector(".slickList");
    const prevBtn = section.querySelector(".prev-btn");
    const nextBtn = section.querySelector(".next-btn");

    if (slickList && prevBtn && nextBtn) {
      const scrollAmount = 340;

      nextBtn.addEventListener("click", () => {
        slickList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });

      prevBtn.addEventListener("click", () => {
        slickList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
  });

  document.querySelectorAll(".filter-nav").forEach((nav) => {
    const buttons = nav.querySelectorAll(".filter-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => {
          item.classList.toggle("active", item === button);
          item.setAttribute("aria-selected", String(item === button));
        });
      });
    });
  });
});

/* ---------- voice modals (testimonials) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".voice-card");
  const modal = document.getElementById("voiceModal");
  const closeBtn = document.querySelector(".modal-close");
  const overlay = document.querySelector(".modal-overlay");

  if (modal && closeBtn && overlay && cards.length > 0) {
    if (modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }

    const modalVideo = document.getElementById("modalVideo");
    const modalRole = document.getElementById("modalRole");
    const modalQuote = document.getElementById("modalQuote");
    const modalName = document.getElementById("modalName");
    const modalGrade = document.getElementById("modalGrade");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const videoSrc = card.getAttribute("data-video");
        const posterSrc = card.getAttribute("data-poster");
        const role = card.getAttribute("data-role");
        const name = card.getAttribute("data-name");
        const grade = card.getAttribute("data-grade");
        const quote = card.getAttribute("data-quote");

        if (modalVideo) {
          modalVideo.src = videoSrc || "";
          modalVideo.poster = posterSrc || "";
        }
        if (modalRole) modalRole.textContent = role || "";
        if (modalName) modalName.textContent = name || "";
        if (modalGrade) modalGrade.textContent = grade || "";
        if (modalQuote) modalQuote.textContent = quote ? `"${quote}"` : "";

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        if (modalVideo && videoSrc) {
          modalVideo.play().catch(e => console.log("Video auto play prevented", e));
        }
      });
    });

    function closeModal() {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      if (modalVideo) {
        modalVideo.pause();
        modalVideo.src = "";
        modalVideo.poster = "";
      }
    }

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
  }
});

/* ---------- spotlight campus slider ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".spotlight-slide");
  const prevBtn = document.querySelector(".spotlight-arrow.prev");
  const nextBtn = document.querySelector(".spotlight-arrow.next");

  if (slides.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  }
});

/* ---------- FAQ accordion toggler ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const parent = trigger.parentElement;
      const isActive = parent.classList.contains("active");

      // Close other active FAQs
      document.querySelectorAll(".faq-item.active").forEach(item => {
        if (item !== parent) {
          item.classList.remove("active");
        }
      });

      parent.classList.toggle("active", !isActive);
    });
  });
});
