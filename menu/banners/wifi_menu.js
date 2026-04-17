function initWifiBanner() {
  const banner = document.getElementById("wifi-banner");
  const cerrar = document.getElementById("cerrar-wifi");
  const qrImg = document.getElementById("wifi-qr");

  // Asignar ruta dinámica al QR usando basePath
  if (typeof basePath !== "undefined") {
    qrImg.src = basePath + "media/wifi/wifi.avif";
  } else {
    qrImg.src = "media/wifi/wifi.avif";
  }

  // Abrir banner
  document.getElementById("btn-wifi")?.addEventListener("click", () => {
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

initWifiBanner();
