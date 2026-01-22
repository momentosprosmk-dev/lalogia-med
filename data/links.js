// IIFE para evitar fugas de variables
(function () {
  // Expone el objeto de enlaces para que sea accesible globalmente
  window.enlaces = {
    "btn-barra": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRxE9e4HX11amRop4QF0FArkSShevv2sQRbpFV-va_5Uev-WJtngJBjdo8iEkqPw4AolSnj93A2L-eJ/pub?gid=468733110&single=true&output=tsv",
    "btn-eventos": "eventos/",
    "btn-momentos": "momentos/",
    "btn-opinion": "https://www.google.com/search?sca_esv=3e9255132db96e7e&biw=1389&bih=767&q=opiniones+de+la+logia&uds=AOm0WdH0Fh5jirSqMpT7r_0aV5pkDRnvi4aNH4TcH0lQ4RuR10YHMBLyvLWcz-qQs-XwSUaMjqG2JuwdmJWaROVgf4ajnzvrQJ7tnbaT-F9IEwJBd0hdv_ljztSfs9lutPMZ-bqIi_Ld3EFoMmY6pYU8yuiGPVVr3I4lw95CjhgU3TWSKpyv8SaURsr474D_hFCyybAMdd_JTE7Qnx7RdfUTzp1SglrjezhMuKZuxUsJjx2JwGz3soQENAeDzYj3PQVkvVuRKuAddlIcL_fsr8Gobahp4nnqj_78u8vSxCF81_GsJkjo4mYY8xIT9uiIbvW0O5sfeAIFtyr5JPY8Cfu0r5dkZ3X9_9dKF5RLStOEAfDFHCgYLYvgAE7opzJyOv2cNTrEprRLWRf3PokHAEapN0hZuEysog&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2iKrXtZR4_RQPvQbrtoDZRpd7DnIVt14OmUvGymkMgDQe2piggSOMe7NOsIsdrAf6dwmCsx8EjQuYwTvumpeAL_re54&sa=X&ved=2ahUKEwji2sqsuviRAxXqSTABHV-ON1YQk8gLegQIGRAB&ictx=1&stq=1&cs=1&lei=2s5daeKFE-qTwbkP35zesQU#ebo=2",
    "btn-sitioweb": "sitioweb/sitioweb.html",
    "btn-whatsapp": "https://wa.me/573202877325?text=Hola.%20Quiero%20vivir%20una%20experiencia%20en%20La%20Logia.%20%C2%BFMe%20pueden%20orientar%3F",
    "btn-instagram": "https://www.instagram.com/lalogia.med/?hl=es",
    "btn-facebook": "https://www.facebook.com/LaLogiaDiscoteca/?locale=es_LA",
    "btn-expresate": "temp/construccion.html",

    "whisky": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=1379922421&single=true&output=tsv",
    "tequila": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=2074615277&single=true&output=tsv",
    "mezcal": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=787470770&single=true&output=tsv",
    "cognac": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=360327195&single=true&output=tsv",
    "champagne": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=378106773&single=true&output=tsv",
    "ron_premium": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=1785114153&single=true&output=tsv",
    "vodka": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=1936040886&single=true&output=tsv",
    "ginebra": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=198368463&single=true&output=tsv",
    "bitter": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=738455530&single=true&output=tsv",
    "vino_espumoso": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=452624129&single=true&output=tsv",
    "hookah": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=262895161&single=true&output=tsv",
    "cocteles": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=257007736&single=true&output=tsv",
    "shots": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=1904472357&single=true&output=tsv",
    "nacional": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=1757127141&single=true&output=tsv",
    "bebidas": "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1KrtZEOenonnjeQzKLwgiCDL9XO7xNNecHtGjvh2LCatAGjwxUWzNd-z7G2adqA/pub?gid=1623498576&single=true&output=tsv",
    "vercartacompleta": "",

    "reservar_licor_data": "https://docs.google.com/spreadsheets/d/e/2PACX-1vRxE9e4HX11amRop4QF0FArkSShevv2sQRbpFV-va_5Uev-WJtngJBjdo8iEkqPw4AolSnj93A2L-eJ/pub?gid=0&single=true&output=tsv",
    "numero-local": "573202877325",
    "npersonas": 8
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