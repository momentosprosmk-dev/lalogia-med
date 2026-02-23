// banners.js
document.addEventListener("DOMContentLoaded", () => {
  const bn_arquitectura = document.getElementById("banner-arquitectura");
  const bn_arquitectura_msg = document.getElementById("mensaje-arquitectura");
  const bn_wifi = document.getElementById("banner-wifi");
  const cerrarQr = document.getElementById("cerrar-wifi");
  const contactoBanner = document.getElementById("contacto-banner");
  const cerrarContacto = document.getElementById("cerrar-contacto");
  const qrwebBanner = document.getElementById("qrweb-banner");
  const cerrarQrweb = document.getElementById("cerrar-qrweb");

  // Mostrar - Banner Wi-Fi
  document.getElementById("btn-wifi")?.addEventListener("click", () => {
    bn_wifi.classList.add("visible");
  });
  cerrarQr?.addEventListener("click", () => bn_wifi.classList.remove("visible"));

  // Mostrar - Banner contacto
  document.getElementById("btn-contacto")?.addEventListener("click", () => {
    contactoBanner.classList.add("visible");
  });
  cerrarContacto?.addEventListener("click", () => contactoBanner.classList.remove("visible"));

  // Mostrar - Banner QR Web
  document.getElementById("btn-qrweb")?.addEventListener("click", () => {
    qrwebBanner.classList.add("visible");
  });
  cerrarQrweb?.addEventListener("click", () => qrwebBanner.classList.remove("visible"));

  // Mostrar - Banner arquitectura
  document.getElementById("btn-arquitectura")?.addEventListener("click", () => {
    bn_arquitectura_msg.innerHTML = typeof generarBienvenida === "function"
      ? generarBienvenida()
      : "Bienvenido al templo.";
    bn_arquitectura.classList.add("visible");
  });

  // Cierre táctil fuera del contenido
  bn_arquitectura.addEventListener("click", (e) => {
    if (!e.target.closest(".bn-arq-content")) {
      bn_arquitectura.classList.remove("visible");
    }
  });

  [bn_wifi, contactoBanner, qrwebBanner].forEach(banner => {
    banner.addEventListener("click", (e) => {
      if (!e.target.closest(".qr-content")) {
        banner.classList.remove("visible");
      }
    });
  });
});
