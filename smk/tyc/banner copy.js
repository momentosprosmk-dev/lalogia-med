function iniciarBannerTyC() {
  const bannerTyc   = document.getElementById("banner-tyc");
  const btnAceptar  = document.getElementById("btn-aceptar-tyc");
  const btnRechazar = document.getElementById("btn-rechazar-tyc");
  const linkTyc     = document.querySelector(".link-tyc");

  const tyc = localStorage.getItem("tyc");
  if (tyc !== "1") {
    bannerTyc.classList.add("visible");
    document.body.classList.add("no-scroll");
  }

  btnAceptar.addEventListener("click", () => {
    localStorage.setItem("tyc", "1");
    bannerTyc.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  });

  btnRechazar.addEventListener("click", () => {
    localStorage.setItem("tyc", "0");
    window.location.href = "/barra/ver_carta_completa/";
  });

  linkTyc.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/smk/tyc/";
  });
}
