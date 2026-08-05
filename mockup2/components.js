(() => {
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
