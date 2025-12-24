async function cargarIndicativos() {
  try {
    const response = await fetch("../data/formularios/paises.json"); 
    const paises = await response.json();

    const datalist = document.getElementById("listaPaises");
    paises.forEach(p => {
      const option = document.createElement("option");
      option.value = p.nombre; // solo nombre para buscar
      datalist.appendChild(option);
    });

    // Guardar lista en window para usarla luego
    window.listaPaises = paises;

    // Detectar selección y mostrar bandera + nombre
    const inputPais = document.getElementById("codigoPais");
    inputPais.addEventListener("change", () => {
      const pais = paises.find(p => p.nombre === inputPais.value);
      if (pais) {
        inputPais.value = `${pais.bandera} ${pais.nombre}`;
      }
    });
  } catch (error) {
    console.error("Error cargando paises:", error);
  }
}
