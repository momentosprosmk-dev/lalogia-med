// formulario.js
document.addEventListener("DOMContentLoaded", () => {
  const contactoInput = document.getElementById("contacto");
  const submitBtn = document.getElementById("submitBtn");

  // Formatear teléfono
  contactoInput.addEventListener("input", function(e) {
    let valor = e.target.value.replace(/\D/g, "");
    if (valor.length > 0) {
      valor = valor.replace(/^(\d{3})(\d{3})(\d{0,4}).*/, "($1) $2-$3");
    }
    e.target.value = valor;
    validarFormulario();
  });

  // Validar formulario
  function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const paisSeleccionado = document.getElementById("codigoPais").value.trim();
    const contacto = document.getElementById("contacto").value.trim();
    const personas = document.getElementById("personas").value.trim();
    const licor = document.getElementById("reservar-licor").value.trim();
    const cumple = document.getElementById("cumple").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const zona = localStorage.getItem("zonaSeleccionada");
    const zonaFinal = zona && zona !== "Zona no especificada" 
      ? zona 
      : document.getElementById("zonaSeleccionada").value.trim();

    if (nombre && paisSeleccionado && contacto && personas && licor && cumple && fecha && zonaFinal) {
      submitBtn.disabled = false;
      submitBtn.classList.remove("disabled");
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.add("disabled");
    }
  }

  // Escuchar cambios en inputs
  document.querySelectorAll("#reservaForm input, #reservaForm select").forEach(el => {
    el.addEventListener("input", validarFormulario);
    el.addEventListener("change", validarFormulario);
  });

  // Mostrar/ocultar cumpleaños según número de personas
  const personasInput = document.getElementById("personas");
  const cumpleField = document.getElementById("cumpleField");
  const cumpleSelect = document.getElementById("cumple");

  cumpleField.style.display = "none";
  cumpleSelect.removeAttribute("required");

  personasInput.addEventListener("input", function() {
    const numPersonas = parseInt(personasInput.value, 10);

    if (numPersonas > window.enlaces["npersonas"]) {
      cumpleField.style.display = "block";
      cumpleSelect.setAttribute("required", "true");
    } else {
      cumpleField.style.display = "none";
      cumpleSelect.removeAttribute("required");
      cumpleSelect.value = "";
    }

    validarFormulario();
  });
});
