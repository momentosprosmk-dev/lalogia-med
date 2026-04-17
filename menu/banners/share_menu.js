function initShareBanner() {
  const banner = document.getElementById("share-banner");
  const cerrar = document.getElementById("cerrar-share");
  const qrImg = document.getElementById("share-qr");

  // Asignar ruta dinámica al QR usando basePath
  if (typeof basePath !== "undefined") {
    qrImg.src = basePath + "media/share/index_qr.avif";
  } else {
    qrImg.src = "media/share/index_qr.avif";
  }

  // Abrir banner
  document.getElementById("btn-share")?.addEventListener("click", () => {
    banner.classList.add("visible");
  });

  // Cerrar banner
  cerrar?.addEventListener("click", () => {
    banner.classList.remove("visible");
  });

  // Cerrar si se hace clic fuera del cuadro
  banner.addEventListener("click", (e) => {
    if (!e.target.closest(".banner-content")) {
      banner.classList.remove("visible");
    }
  });
}

initShareBanner();
