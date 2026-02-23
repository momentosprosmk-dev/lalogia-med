(function () {
  // Se ejecuta automáticamente al cargar (IIFE)
  const rutaBase = "../";  

  // Cargar links.js primero
  const scriptLinks = document.createElement("script");
  scriptLinks.src = rutaBase + "smk/data/links.js";
  scriptLinks.onload = () => {
    iniciarBannerTyCLoad();
  };
  document.head.appendChild(scriptLinks);

  function iniciarBannerTyCLoad() {
    // Configuración del banner TyC (rutas centralizadas)
    window.bannerConfig = {
      cssRuta: rutaBase + "smk/css/tyc/banner.css",
      linkRuta: rutaBase + "smk/tyc/",
      rechazarRuta: rutaBase + "barra/ver_carta_completa/"
    };

    // Carga el HTML del banner y lo inserta en el contenedor
    fetch(rutaBase + "smk/tyc/banner.html")
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById("tyc-container");
        if (!container) return;
        container.innerHTML = html;

        // Agrega el CSS del banner
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = window.bannerConfig.cssRuta;
        document.head.appendChild(css);

        // Agrega el JS del banner y lo inicializa
        const script = document.createElement("script");
        script.src = rutaBase + "smk/tyc/banner.js";
        script.onload = () => {
          if (typeof iniciarBannerTyC === "function") {
            iniciarBannerTyC(window.tyc_fecha); // ahora sí existe
          }
        };
        document.body.appendChild(script);
      })
      // Muestra error en consola si falla la carga
      .catch(err => console.error("Error cargando banner TyC:", err));
  }
})();
