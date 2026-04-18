function initMenu() {
  const btnOpciones = document.getElementById("btn-opciones");
  const menuOpciones = document.getElementById("menu-opciones");
  const overlay = document.getElementById("overlay");

  if (btnOpciones && menuOpciones && overlay) {
    btnOpciones.addEventListener("click", () => {
      menuOpciones.classList.toggle("visible");
      overlay.classList.toggle("visible");
    });

    overlay.addEventListener("click", () => {
      menuOpciones.classList.remove("visible");
      overlay.classList.remove("visible");
    });
  }
}

initMenu();
