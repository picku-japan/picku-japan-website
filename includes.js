async function loadIncludes() {

  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  /* -------------------------
     Load Header
  ------------------------- */

  if (headerTarget) {

    const headerRes = await fetch("header.html");
    headerTarget.innerHTML = await headerRes.text();

    initMobileMenu(); // header加载后初始化菜单

  }

  /* -------------------------
     Load Footer
  ------------------------- */

  if (footerTarget) {

    const footerRes = await fetch("footer.html");
    footerTarget.innerHTML = await footerRes.text();

  }

}

/* -------------------------
   Mobile menu logic
------------------------- */

function initMobileMenu() {

  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

  });

}

loadIncludes();
