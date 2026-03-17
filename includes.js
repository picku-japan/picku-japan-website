async function loadIncludes() {

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if (headerTarget) {
    const headerRes = await fetch("header.html");
    headerTarget.innerHTML = await headerRes.text();
  }

  if (footerTarget) {
    const footerRes = await fetch("footer.html");
    footerTarget.innerHTML = await footerRes.text();
  }

  /* =========================
     Mobile menu toggle
  ========================= */

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-right");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("active");
      });
    });
  }

}

loadIncludes();
