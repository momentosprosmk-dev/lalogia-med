// zona.js
document.addEventListener("DOMContentLoaded", () => {
  // Cargar indicativos
  cargarIndicativos();

  const zona = localStorage.getItem("zonaSeleccionada");
  const zonaContainer = document.getElementById("zonaContainer");

  if (zona && zona !== "Zona no especificada") {
    zonaContainer.innerHTML = `<div class="field"><p id="zonaSeleccionada">Zona seleccionada: ${zona}</p></div>`;
  } else {
    zonaContainer.innerHTML = `
      <div class="field">
        <label for="zonaSeleccionada">Seleccione zona:</label>
        <select id="zonaSeleccionada" required>
          <option value="">--Seleccione--</option>
          <option value="Palco">Palco - Primer piso</option>
          <option value="Palco">Palco - Segundo piso</option>
          <option value="VIP">VIP</option>
          <option value="Mesa general">Mesa general</option>
        </select>
      </div>
    `;
  }
});
