// IIFE para evitar fugas de variables
(function () {
  // Expone el objeto de enlaces para que sea accesible globalmente
  window.enlaces = {
    "btn-barra": "barra/ver-carta-completa.html",
    "btn-eventos": "eventos/eventos.html",
    "btn-momentos": "momentos/momentos.html",
    "btn-opinion": "https://www.google.com/maps/place/La+Logia/@6.2513021,-75.5873938,18z/data=!4m6!3m5!1s0x8e44293f52386fc1:0x64563794833ae5d0!8m2!3d6.2497539!4d-75.5885553!16s%2Fg%2F11scks2g5b?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
    "btn-sitioweb": "sitioweb/sitioweb.html",
    "btn-whatsapp": "https://wa.me/573202877325?text=Hola.%20Quiero%20vivir%20una%20experiencia%20en%20La%20Logia.%20%C2%BFMe%20pueden%20orientar%3F",
    "btn-instagram": "https://www.instagram.com/lalogia.med/?hl=es",
    "btn-facebook": "https://www.facebook.com/LaLogiaDiscoteca/?locale=es_LA",
    "btn-expresate": "temp/construccion.html",

    "whisky": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=338956909&single=true&output=tsv",
    "tequila": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=0&single=true&output=tsv",
    "mezcal": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=552236932&single=true&output=tsv",
    "cognac": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=931486940&single=true&output=tsv",
    "champagne": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=254484507&single=true&output=tsv",
    "ron-premium": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=2086847889&single=true&output=tsv",
    "vodka": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=348267747&single=true&output=tsv",
    "ginebra": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=973484302&single=true&output=tsv",
    "bitter": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=1508962543&single=true&output=tsv",
    "vino-espumoso": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=160035376&single=true&output=tsv",
    "hookah": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=678541547&single=true&output=tsv",
    "cocteles": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=149858567&single=true&output=tsv",
    "shots": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=221881388&single=true&output=tsv",
    "nacional": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=12887629&single=true&output=tsv",
    "bebidas": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=955103174&single=true&output=tsv",
    "vercartacompleta": "",


    "reservar-licor-data": "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9mUmmAUrk8dCWBVdGG-DQ1qrMNZFwmfnKh6aLun_t5ArvOeuJrdTGpJKG7an--iAdXCdOtlh4tEft/pub?gid=653292468&single=true&output=tsv",
    "numero-local": "573202877325"
  };

  // Al cargar, asigna los href o listeners a los elementos que existan
  document.addEventListener("DOMContentLoaded", function () {
    for (const id in window.enlaces) {
      const elemento = document.getElementById(id);
      if (!elemento) continue;
      if (elemento.tagName === "A") {
        elemento.setAttribute("href", window.enlaces[id]);
      } else {
        elemento.addEventListener("click", function () {
          window.location.href = window.enlaces[id];
        });
      }
    }
  });
})();