(() => {
  const logoUrl =
    "https://millenniaws.sch.id/wp-content/uploads/2021/11/Millennia-World-School-Logo-Only.svg";
  const renderHeader = () => {
    const target = document.querySelector("[data-header]");
    if (!target) return;

    target.outerHTML = `
      <header class="site-header" data-header>
        <div class="nav-inner">
        <div class="logo">
          <img src="${logoUrl}" alt="MWS Logo" />
        </div>

          <div class="nav-links">
            <nav class="navbar" aria-label="Main navigation">
              <ul class="nav-menu">
                <li><a href="#hero">Home</a></li>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#campus">Campus</a></li>
                <li><a href="#admissions">Admissions</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <a class="btn-visit" href="#admissions">Book a visit</a>
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
          <div class="footer-top">
            <div>
              <div class="footer-brand">Millennia World School</div>
              <p>Jl. Pendidikan Raya No. 12, Tangerang Selatan, Banten 15310, Indonesia</p>
            </div>

            <div class="footer-col">
              <h4>School</h4>
              <ul>
                <li><a href="#programs">Programs</a></li>
                <li><a href="#campus">Campus</a></li>
                <li><a href="#admissions">Admissions</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Admissions</h4>
              <ul>
                <li><a href="#admissions">How to apply</a></li>
                <li><a href="#">Tuition</a></li>
                <li><a href="#">Book a visit</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:admissions@millenniaworld.sch.id">admissions@millenniaworld.sch.id</a></li>
                <li><a href="tel:+622112345678">+62 21 1234 5678</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span>&copy; 2026 Millennia World School</span>
            <span>Accredited international curriculum</span>
          </div>
        </div>
      </footer>
    `;
  };

  renderHeader();
  renderFooter();

  /* ---------- hero slider ---------- */

  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScrollY = window.scrollY;

  const syncHeader = () => {
    const currentY = window.scrollY;
    const isScrolled = currentY > 24;
    const shouldHide = currentY > lastScrollY && currentY > 80;

    header.classList.toggle("is-scrolled", isScrolled);
    header.classList.toggle("is-hidden", shouldHide);

    if (currentY <= 24) {
      header.classList.remove("is-hidden");
    }

    lastScrollY = currentY;
  };

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();
})();

const heroData = [
  {
    eyebrow: "Millennia World School",
    headline: "Where curiosity finds its first language.",
    caption:
      "An international school for preschool through junior high, built around a single idea: a child\u2019s world should grow larger every day.",
  },
  {
    eyebrow: "A campus built for exploring",
    headline: "Learning that steps outside the classroom.",
    caption:
      "Gardens, courtyards, and open studios where a lesson can start indoors and finish somewhere entirely different.",
  },
  {
    eyebrow: "Sixteen hectares, one community",
    headline: "A place designed to be grown up in.",
    caption:
      "From a child\u2019s first day away from home to the threshold of adolescence, on a single campus.",
  },
];

const heroSlides = document.querySelectorAll(".hero-slide");
const heroNavBtns = document.querySelectorAll(".hero-nav button");
const heroEyebrow = document.getElementById("hero-eyebrow");
const heroHeadline = document.getElementById("hero-headline");
const heroCaption = document.getElementById("hero-caption");
const heroCountCurrent = document.getElementById("hero-count-current");
let heroIndex = 0;
let heroTimer;

function goToSlide(i) {
  heroIndex = (i + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((s, idx) =>
    s.classList.toggle("active", idx === heroIndex),
  );
  heroNavBtns.forEach((b, idx) =>
    b.classList.toggle("active", idx === heroIndex),
  );
  const d = heroData[heroIndex];
  heroEyebrow.textContent = d.eyebrow;
  heroHeadline.textContent = d.headline;
  heroCaption.textContent = d.caption;
  heroCountCurrent.textContent = String(heroIndex + 1).padStart(2, "0");
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goToSlide(heroIndex + 1), 6500);
}

heroNavBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    goToSlide(parseInt(btn.dataset.slide, 10));
    startHeroTimer();
  });
});
document.querySelector(".hero-arrow.prev").addEventListener("click", () => {
  goToSlide(heroIndex - 1);
  startHeroTimer();
});
document.querySelector(".hero-arrow.next").addEventListener("click", () => {
  goToSlide(heroIndex + 1);
  startHeroTimer();
});

startHeroTimer();

const heroEl = document.getElementById("hero");
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

document.addEventListener("DOMContentLoaded", () => {
  const slickList = document.querySelector(".slickList");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  if (slickList && prevBtn && nextBtn) {
    // Geser sejauh 260px (lebar 1 item) tiap kali tombol diklik
    const scrollAmount = 340;

    nextBtn.addEventListener("click", () => {
      slickList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slickList.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".voice-card");
  const modal = document.getElementById("voiceModal");
  const closeBtn = document.querySelector(".modal-close");
  const overlay = document.querySelector(".modal-overlay");

  const modalVideo = document.getElementById("modalVideo");
  const modalRole = document.getElementById("modalRole");
  const modalQuote = document.getElementById("modalQuote");
  const modalName = document.getElementById("modalName");
  const modalGrade = document.getElementById("modalGrade");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      const role = card.getAttribute("data-role");
      const name = card.getAttribute("data-name");
      const grade = card.getAttribute("data-grade");
      const quote = card.getAttribute("data-quote");

      // Set konten modal
      modalVideo.src = videoSrc;
      modalRole.textContent = role;
      modalName.textContent = name;
      modalGrade.textContent = grade;
      modalQuote.textContent = `"${quote}"`;

      // Buka modal & auto play video
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      modalVideo.play();
    });
  });

  function closeModal() {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    modalVideo.pause();
    modalVideo.src = ""; // Reset video
  }

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}); 

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