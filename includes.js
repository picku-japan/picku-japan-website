async function loadIncludes() {
  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    const headerRes = await fetch("header.html");
    headerTarget.innerHTML = await headerRes.text();
    initHeaderUI();
  }

  if (footerTarget) {
    const footerRes = await fetch("footer.html");
    footerTarget.innerHTML = await footerRes.text();
  }
}

function initHeaderUI() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const topbar = document.getElementById("siteTopbar");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (topbar) {
    const updateTopbar = () => {
      if (window.scrollY > 12) {
        topbar.classList.add("is-scrolled");
      } else {
        topbar.classList.remove("is-scrolled");
      }
    };

    updateTopbar();
    window.addEventListener("scroll", updateTopbar, { passive: true });
  }
}

loadIncludes();
