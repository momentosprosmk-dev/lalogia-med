(function () {
  // Permite definir manualmente una ruta base si es necesario
  const rutaBaseManual = "../../";  
  const rutaBase = rutaBaseManual || (window.enlaces?.reponame || "");

  // Configuración centralizada del banner TyC
  const bannerConfig = {
    cssRuta: rutaBase + "smk/css/tyc/banner.css",
    linkRuta: rutaBase + "smk/tyc/",
    rechazarRuta: rutaBase + "barra/ver_carta_completa/"
  };

  // Carga dinámica del HTML del banner TyC
  fetch(rutaBase + "smk/tyc/banner.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("tyc-container");
      if (!container) return;
      container.innerHTML = html;

      // Inyecta el CSS del banner
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = bannerConfig.cssRuta;
      document.head.appendChild(css);

      // Inyecta el JS del banner y ejecuta la función de inicialización
      const script = document.createElement("script");
      script.src = rutaBase + "smk/tyc/banner.js";
      script.onload = () => {
        if (typeof iniciarBannerTyC === "function") {
          iniciarBannerTyC();
        }
      };
      document.body.appendChild(script);

      // Configura el enlace de TyC dentro del banner
      const linkTyc = container.querySelector("#link-tyc");
      if (linkTyc) linkTyc.href = bannerConfig.linkRuta;

      // Configura el botón de rechazo para redirigir
      const btnRechazar = container.querySelector("#btn-rechazar-tyc");
      if (btnRechazar) {
        btnRechazar.addEventListener("click", () => {
          window.location.href = bannerConfig.rechazarRuta;
        });
      }
    })
    .catch(err => console.error("Error cargando banner TyC:", err));
})();
