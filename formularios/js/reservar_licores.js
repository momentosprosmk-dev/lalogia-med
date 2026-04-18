// licores.js
document.addEventListener("DOMContentLoaded", () => {
  // Función principal para cargar los licores disponibles
  async function cargarLicores() {
    try {
      // Se obtiene el archivo de datos de licores con un parámetro de tiempo para evitar caché
      const response = await fetch(window.enlaces["reservar_licor_data"] + "&t=" + Date.now());
      const text = await response.text();

      // Se separan las líneas, eliminando espacios y descartando vacías
      const lineas = text.split("\n").map(l => l.trim()).filter(l => l.length > 0);

      // Select donde se mostrarán las opciones de licores
      const selectLicor = document.getElementById("reservar-licor");

      // Se identifican las columnas relevantes en el encabezado
      const encabezados = lineas[0].split("\t");
      const idxTipo = encabezados.indexOf("tipo");
      const idxReservar = encabezados.indexOf("reservar");

      // Se recorren las filas de datos
      lineas.slice(1).forEach(linea => {
        const columnas = linea.split("\t");
        const tipo = columnas[idxTipo];
        const reservar = columnas[idxReservar];

        // Solo se agregan al select los licores marcados con "d" (disponibles)
        if (tipo && reservar.toLowerCase() === "d") {
          const option = document.createElement("option");
          option.value = tipo;
          option.textContent = tipo;
          selectLicor.appendChild(option);
        }
      });
    } catch (error) {
      // Si ocurre un error en la carga, se muestra en consola
      console.error("Error cargando licores:", error);
    }
  }

  // Se ejecuta la función al cargar la página
  cargarLicores();
});
