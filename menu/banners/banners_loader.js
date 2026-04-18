document.addEventListener("DOMContentLoaded", () => {
  const path = typeof basePath !== "undefined" ? basePath : "";

  fetch(path + "menu/banners/banners.html")
    .then(res => res.text())
    .then(html => {
      // Contenedor principal de banners
      const container = document.createElement("div");
      container.id = "banners-container";
      container.innerHTML = html;
      document.body.appendChild(container);

      // Lista de scripts de banners a cargar
      const bannerScripts = [
        "idioma_menu.js",
        "contacto_menu.js",
        "wifi_menu.js",
        "share_menu.js"
      ];

      // Cargar cada script dinámicamente
      bannerScripts.forEach(file => {
        const script = document.createElement("script");
        script.src = path + "menu/banners/" + file;
        document.body.appendChild(script);
      });
    })
    .catch(err => console.error("Error cargando banners:", err));
});
