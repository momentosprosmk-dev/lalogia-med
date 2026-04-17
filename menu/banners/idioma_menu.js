function initIdiomaBanner() {

  const banner = document.getElementById("idioma-banner");
  const btnEs = document.getElementById("idioma-es");
  const btnEn = document.getElementById("idioma-en");
  const cerrar = document.getElementById("cerrar-idioma");

  // Si los elementos aún no existen, reintentar
  if (!banner || !btnEs || !btnEn || !cerrar) {
    setTimeout(initIdiomaBanner, 50);
    return;
  }

  console.log("Banner de idioma inicializado correctamente.");

  // Asignar rutas dinámicas a las banderas
  document.getElementById("flag-es").src = basePath + "media/menu/co.avif";
  document.getElementById("flag-en").src = basePath + "media/menu/usa.avif";

  // Mostrar banner
  document.getElementById("btn-idioma")?.addEventListener("click", () => {
    banner.classList.add("visible");
  });

  // Cerrar banner
  cerrar.addEventListener("click", () => {
    banner.classList.remove("visible");
  });

  // Cerrar tocando fuera
  banner.addEventListener("click", (e) => {
    if (!e.target.closest(".banner-content")) {
      banner.classList.remove("visible");
    }
  });

  // Botones de idioma
  btnEs.addEventListener("click", () => cambiarIdioma("es"));
  btnEn.addEventListener("click", () => cambiarIdioma("en"));

  // Aplicar idioma guardado
  const idiomaGuardado = localStorage.getItem("idioma") || "es";
  aplicarIdioma(idiomaGuardado);
}

function cambiarIdioma(idioma) {
  localStorage.setItem("idioma", idioma);
  aplicarIdioma(idioma);
}

function aplicarIdioma(idioma) {
  document.documentElement.setAttribute("lang", idioma);

  if (idioma === "en") {
    document.documentElement.setAttribute("translate", "no");
  } else {
    document.documentElement.removeAttribute("translate");
  }
}

// Iniciar después de que el script cargue
initIdiomaBanner();
