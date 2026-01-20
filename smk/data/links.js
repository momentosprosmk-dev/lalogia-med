(function () {
  window.enlaces = {
    wasmk: "https://wa.me/573233105765",
    urlsmk: "https://www.sumiked.com"
  };

  document.addEventListener("DOMContentLoaded", function () {
    for (const id in window.enlaces) {
      const elemento = document.getElementById(id);
      if (!elemento) continue;

      if (elemento.tagName.toLowerCase() === "a") {
        elemento.setAttribute("href", window.enlaces[id]);
        elemento.setAttribute("target", "_blank");
      } else {

        elemento.addEventListener("click", function () {
          window.location.href = window.enlaces[id];
        });
      }
    }
  });
})();
