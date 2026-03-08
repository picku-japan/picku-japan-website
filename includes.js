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
}

loadIncludes();
