document.addEventListener("DOMContentLoaded", () => {
  const path = typeof basePath !== "undefined" ? basePath : "";

  fetch(path + "menu/menu.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("menu-container").innerHTML = html;

      // Cargar scripts asociados al menú
      const scriptMenu = document.createElement("script");
      scriptMenu.src = path + "menu/menu.js";
      document.body.appendChild(scriptMenu);

      const scriptFooter = document.createElement("script");
      scriptFooter.src = path + "menu/footer.js";
      document.body.appendChild(scriptFooter);

      initModulesNavigation();
    })
    .catch(err => console.error("Error cargando el menú:", err));
});
