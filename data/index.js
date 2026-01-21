document.addEventListener("DOMContentLoaded", () => {
  const bn_arquitectura = document.getElementById("banner-arquitectura");
  const bn_arquitectura_msg = document.getElementById("mensaje-arquitectura");
  const bn_wifi = document.getElementById("banner-wifi");
  const cerrarQr = document.getElementById("cerrar-wifi");
  const contactoBanner = document.getElementById("contacto-banner");
  const cerrarContacto = document.getElementById("cerrar-contacto");
  const qrwebBanner = document.getElementById("qrweb-banner");
  const cerrarQrweb = document.getElementById("cerrar-qrweb");
  const btnBarra = document.getElementById("btn-barra");

  // Mostrar - Banner Wi-Fi
  document.getElementById("btn-wifi")?.addEventListener("click", () => {
    bn_wifi.classList.add("visible");
  });
  cerrarQr?.addEventListener("click", () => bn_wifi.classList.remove("visible"));

  // Mostrar - Banner contacto
  document.getElementById("btn-contacto")?.addEventListener("click", () => {
    contactoBanner.classList.add("visible");
  });
  cerrarContacto?.addEventListener("click", () => contactoBanner.classList.remove("visible"));

  // Mostrar - Banner QR Web
  document.getElementById("btn-qrweb")?.addEventListener("click", () => {
    qrwebBanner.classList.add("visible");
  });
  cerrarQrweb?.addEventListener("click", () => qrwebBanner.classList.remove("visible"));

  // Mostrar - Banner arquitectura
  document.getElementById("btn-arquitectura")?.addEventListener("click", () => {
    bn_arquitectura_msg.innerHTML = typeof generarBienvenida === "function"
      ? generarBienvenida()
      : "Bienvenido al templo.";
    bn_arquitectura.classList.add("visible");
  });

  // Cierre táctil fuera del contenido
  bn_arquitectura.addEventListener("click", (e) => {
    if (!e.target.closest(".bn-arq-content")) {
      bn_arquitectura.classList.remove("visible");
    }
  });

  [bn_wifi, contactoBanner, qrwebBanner].forEach(banner => {
    banner.addEventListener("click", (e) => {
      if (!e.target.closest(".qr-content")) {
        banner.classList.remove("visible");
      }
    });
  });

  // Cargar configuración de Ofertas
  const url = window.enlaces["btn-barra"];
  const clean = (v) => v.replace(/^\s*"?|"?\s*$/g, "").replace(/\r/g, "");

  let rutaFinal = null;
  const rutaFallback = "/barra/ver_carta_completa/";

  btnBarra.addEventListener("click", (e) => {
    e.preventDefault();
    if (rutaFinal) {
      window.location.href = rutaFinal;
    } else {
      console.warn("La ruta aún no está lista. Redirigiendo por defecto.");
      window.location.href = rutaFallback;
    }
  });

  fetch(url + "&t=" + Date.now(), { cache: "no-store" })
    .then(res => res.arrayBuffer())
    .then(buf => {
      const text = new TextDecoder("utf-8").decode(buf);

      const head = text.slice(0, 50).toLowerCase();
      if (head.includes("<!doctype") || head.includes("<html")) {
        console.error("La URL de 'btn-barra' no devuelve TSV, sino HTML. Usando ruta por defecto.");
        rutaFinal = rutaFallback;
        return;
      }

      const lines = text.split("\n").filter(l => l.trim().length > 0);
      const headers = lines[0].split("\t").map(h => clean(h).toLowerCase());

      const iTipo = headers.indexOf("tipo");
      const iValor = headers.indexOf("valor");

      if (iTipo === -1 || iValor === -1) {
        console.error("Encabezados inválidos. Usando ruta por defecto.");
        rutaFinal = rutaFallback;
        return;
      }

      const fila = lines.slice(1)
        .map(line => line.split("\t").map(clean))
        .find(cols => cols[iTipo] === "barra_clasif");

      if (fila && fila[iValor]) {
        rutaFinal = `barra/${clean(fila[iValor])}`;
        console.log("Ruta final lista:", rutaFinal);
      } else {
        console.warn("No se encontró ninguna fila válida con tipo = barra_clasif. Usando ruta por defecto.");
        rutaFinal = rutaFallback;
      }
    })
    .catch(err => {
      console.error("Error al cargar TSV:", err);
      rutaFinal = rutaFallback;
    });
});
