const headerContainer = document.querySelector(".header-container");
const sectionLinks = document.querySelectorAll("[data-section-link]");
const sections = [...sectionLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setHeaderState = () => {
  if (!headerContainer) return;
  headerContainer.classList.toggle("is-scrolled", window.scrollY > 20);
};

const setActiveLink = () => {
  if (!sections.length) return;

  const headerHeight = headerContainer?.offsetHeight || 0;
  const current = sections.reduce((active, section) => {
    const sectionTop = section.offsetTop - headerHeight - 40;
    return window.scrollY >= sectionTop ? section : active;
  }, sections[0]);

  sectionLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current.id}`,
    );
  });
};

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    const headerHeight = headerContainer?.offsetHeight || 0;
    const top = target.offsetTop - headerHeight + 1;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    history.pushState(null, "", link.getAttribute("href"));
  });
});

document.querySelectorAll(".activity-carousel").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  if (!track) return;

  const originalCards = [...track.children];
  originalCards.forEach((card) => card.setAttribute("data-original-card", ""));

  const createClone = (card) => {
    const clone = card.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.removeAttribute("data-original-card");
    return clone;
  };

  const prependClones = originalCards.map(createClone);
  const appendClones = originalCards.map(createClone);
  track.prepend(...prependClones);
  track.append(...appendClones);

  let setWidth = 0;
  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;
  let resumeAt = 0;
  const autoSpeed = 0.45;

  const measure = () => {
    setWidth = track.scrollWidth / 3;
    track.scrollLeft = setWidth;
  };

  const keepInLoop = () => {
    if (!setWidth) return;

    while (track.scrollLeft >= setWidth * 2) {
      track.scrollLeft -= setWidth;
    }

    while (track.scrollLeft <= 0) {
      track.scrollLeft += setWidth;
    }
  };

  const autoplay = () => {
    if (!isDragging && performance.now() > resumeAt) {
      track.scrollLeft += autoSpeed;
      keepInLoop();
    }

    requestAnimationFrame(autoplay);
  };

  track.addEventListener("scroll", keepInLoop);

  track.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaX) > 0) {
      resumeAt = performance.now() + 900;
    }
  });

  track.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    startScrollLeft = track.scrollLeft;
    track.classList.add("is-dragging");
    track.setPointerCapture(event.pointerId);
  });

  track.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    track.scrollLeft = startScrollLeft - (event.clientX - startX);
    keepInLoop();
  });

  const stopDragging = (event) => {
    if (!isDragging) return;
    isDragging = false;
    resumeAt = performance.now() + 1200;
    track.classList.remove("is-dragging");

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  };

  track.addEventListener("pointerup", stopDragging);
  track.addEventListener("pointercancel", stopDragging);
  track.addEventListener("pointerleave", stopDragging);

  window.addEventListener("resize", measure);
  requestAnimationFrame(() => {
    measure();
    autoplay();
  });
});

const faqToggles = document.querySelectorAll("[data-faq-toggle]");

faqToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const item = toggle.closest(".faq-item");
    if (!item) return;

    const isOpen = item.classList.toggle("is-open");
    const icon = toggle.querySelector("span");

    toggle.setAttribute("aria-expanded", String(isOpen));
    if (icon) icon.textContent = isOpen ? "−" : "+";
  });
});

setHeaderState();
setActiveLink();
window.addEventListener("scroll", () => {
  setHeaderState();
  setActiveLink();
});
window.addEventListener("resize", setActiveLink);
