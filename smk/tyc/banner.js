function iniciarBannerTyC(tycFechaActual) {
  // Referencias a los elementos del banner
  const bannerTyc   = document.getElementById("banner-tyc");
  const btnAceptar  = document.getElementById("btn-aceptar-tyc");
  const btnRechazar = document.getElementById("btn-rechazar-tyc");
  const linkTyc     = document.getElementById("link-tyc");

  // Obtiene de localStorage el estado de TyC
  const tycEstado = localStorage.getItem("tyc");

  // Muestra el banner si nunca aceptó o si la fecha cambió
  if (tycEstado !== tycFechaActual) {
    bannerTyc.classList.add("visible");
    document.body.classList.add("no-scroll");
  }

  // Acción al aceptar: guarda la fecha actual en localStorage y oculta el banner
  btnAceptar.addEventListener("click", () => {
    localStorage.setItem("tyc", tycFechaActual);
    bannerTyc.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  });

  // Acción al rechazar: guarda "0" en localStorage y redirige
  btnRechazar.addEventListener("click", () => {
    localStorage.setItem("tyc", "0");
    window.location.href = window.bannerConfig.rechazarRuta;
  });

  // Acción al hacer clic en el enlace TyC: redirige a la ruta configurada
  linkTyc.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = window.bannerConfig.linkRuta;
  });
}
