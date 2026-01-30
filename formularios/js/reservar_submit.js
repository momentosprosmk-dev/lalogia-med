// submit.js
document.addEventListener("DOMContentLoaded", () => {
  const numeroLocal = window.enlaces["numero-local"];

  document.getElementById("reservaForm").addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const paisSeleccionado = document.getElementById("codigoPais").value;
    const contacto = document.getElementById("contacto").value;
    const personas = document.getElementById("personas").value;
    const licor = document.getElementById("reservar-licor").value;
    const cumple = document.getElementById("cumple").value;
    const fecha = document.getElementById("fecha").value;

    const zona = localStorage.getItem("zonaSeleccionada");
    const zonaFinal = zona && zona !== "Zona no especificada" 
      ? zona 
      : document.getElementById("zonaSeleccionada").value;

    const pais = window.listaPaises.find(p => paisSeleccionado.includes(p.nombre));
    const codigoPais = pais ? pais.codigo : "";
    const telefonoMostrar = `%2B${codigoPais} ${contacto}`;

    const mensaje = `*Fecha:* ${fecha}%0A%0A *Zona:* _${zonaFinal}_%0A *Nombre:* _${nombre}_%0A *Contacto:* _${telefonoMostrar}_%0A *N° Personas:* _${personas} personas_%0A *Licor:* _${licor}_%0A *Cumpleaños:* _${cumple}_`;

    window.open(`https://wa.me/${numeroLocal}?text=${mensaje}`, "_blank");
    localStorage.removeItem("zonaSeleccionada");
    window.close();
  });
});
