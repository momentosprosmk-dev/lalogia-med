function initModulesNavigation() {
  const path = typeof basePath !== "undefined" ? basePath : "";

  // Recorremos todas las claves de window.enlaces
  Object.keys(window.enlaces).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = path + window.enlaces[btnId];
      });
    }
  });
}

initModulesNavigation();
