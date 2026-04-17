function initFooter() {
  const footer = document.getElementById("texto-footer");
  if (footer) {
    footer.innerHTML =
      '© 2026 MomentosPro · Discoteca La Logia <br> Powered by EDSE · ' +
      '<a href="https://sumiked.com" target="_blank" style="color:inherit; text-decoration:underline;">Sumiked</a> · ' +
      `<a href="${basePath}smk/tyc/" id="footer-tyc" style="color:inherit; text-decoration:underline;">TyC</a>`;
  }

  const footerTyc = document.getElementById("footer-tyc");
  if (footerTyc) {
    footerTyc.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = basePath + "smk/tyc/";
    });
  }
}

initFooter();

