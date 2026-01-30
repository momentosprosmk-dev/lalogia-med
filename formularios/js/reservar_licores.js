// licores.js
document.addEventListener("DOMContentLoaded", () => {
  async function cargarLicores() {
    try {
      const response = await fetch(window.enlaces["reservar_licor_data"] + "&t=" + Date.now());
      const text = await response.text();
      const lineas = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);
      const selectLicor = document.getElementById("reservar-licor");

      const encabezados = lineas[0].split("\t");
      const idxTipo = encabezados.indexOf("tipo");
      const idxReservar = encabezados.indexOf("reservar");

      lineas.slice(1).forEach(linea => {
        const columnas = linea.split("\t");
        const tipo = columnas[idxTipo];
        const reservar = columnas[idxReservar];

        if (tipo && reservar.toLowerCase() === "d") {
          const option = document.createElement("option");
          option.value = tipo;
          option.textContent = tipo;
          selectLicor.appendChild(option);
        }
      });
    } catch (error) {
      console.error("Error cargando licores:", error);
    }
  }
  cargarLicores();
});
