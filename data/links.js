document.addEventListener("DOMContentLoaded", function () {
  const enlaces = {
    "btn-barra": "temp/construccion.html",
    "btn-eventos": "eventos/eventos.html",
    "btn-momentos": "momentos/momentos.html",
    "btn-opinion": "https://www.google.com/maps/place/La+Logia/@6.2513021,-75.5873938,18z/data=!4m6!3m5!1s0x8e44293f52386fc1:0x64563794833ae5d0!8m2!3d6.2497539!4d-75.5885553!16s%2Fg%2F11scks2g5b?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
    "btn-sitioweb": "sitioweb/sitioweb.html",
    "btn-whatsapp": "https://wa.me/573202877325?text=Hola.%20Quiero%20vivir%20una%20experiencia%20en%20La%20Logia.%20%C2%BFMe%20pueden%20orientar%3F",
    "btn-instagram": "https://www.instagram.com/lalogia.med/?hl=es",
    "btn-facebook": "https://www.facebook.com/LaLogiaDiscoteca/?locale=es_LA",
    "btn-expresate": "temp/construccion.html",
    "btn-reservar-bnlobby1": "",
    "btn-reservar-bntarima1": "",
    "btn-reservar-bnbalcon1": "",
    "btn-reservar-bnbalcon2": "",
    "btn-reservar-bnbarra1": "",
    "btn-reservar-bnbarra2": "",
    "btn-reservar-bnbarrac1": "",
    "btn-reservar-bnpalco1": "https://sumiked.com",
    "btn-reservar-bnpalco2": "https://sumiked.com",
    "btn-reservar-bnpalco3": "https://sumiked.com",
    "btn-reservar-bnpalco4": "https://sumiked.com",
    "btn-reservar-bnpalco5": "https://sumiked.com",
    "btn-reservar-bnpalco6": "https://sumiked.com",
    "btn-reservar-bnpalco7": "https://sumiked.com",
    "btn-reservar-bnpalco8": "https://sumiked.com",
    "btn-reservar-bnpalco9": "https://sumiked.com",
    "btn-reservar-bnpalco10": "https://sumiked.com",
    "btn-reservar-bnpalco11": "https://sumiked.com",
    "btn-reservar-bnpalco12": "https://sumiked.com",
    "btn-reservar-bnpalco13": "https://sumiked.com",
    "btn-reservar-bnpalco14": "https://sumiked.com",
    "btn-reservar-bnpalco15": "https://sumiked.com",
    "btn-reservar-bnpalco16": "https://sumiked.com",
    "btn-reservar-bnpalco17": "https://sumiked.com",
    "btn-reservar-bnpalco18": "https://sumiked.com",
    "btn-reservar-bnpalco19": "https://sumiked.com",
    "btn-reservar-bnpalco20": "https://sumiked.com",
    "btn-reservar-bnpalco21": "https://sumiked.com",
    "btn-reservar-bnpalco22": "https://sumiked.com",
    "btn-reservar-bnpalco23": "https://sumiked.com",
    "btn-reservar-bnvip1": "https://sumiked.com",
    "btn-reservar-bnvip2": "https://sumiked.com",
    "btn-reservar-bnvip3": "https://sumiked.com",
    "btn-reservar-bnvip4": "https://sumiked.com",
    "btn-reservar-bnvip5": "https://sumiked.com",
    "btn-reservar-bngeneral1": "https://sumiked.com",
    "btn-reservar-bngeneral2": "https://sumiked.com",
    "btn-reservar-bngeneral3": "https://sumiked.com",
    "btn-reservar-bngeneral4": "https://sumiked.com",
    "btn-reservar-bngeneral5": "https://sumiked.com",
    "btn-reservar-bngeneral6": "https://sumiked.com",
    "btn-reservar-bngeneral7": "https://sumiked.com",
    "btn-reservar-bngeneral8": "https://sumiked.com",
    "btn-reservar-bngeneral9": "https://sumiked.com",
    "btn-reservar-bngeneral10": "https://sumiked.com",
  };

  for (const id in enlaces) {
    const elemento = document.getElementById(id);
    if (elemento) {
      if (elemento.tagName === "A") {
        elemento.setAttribute("href", enlaces[id]);
      } else {
        elemento.addEventListener("click", function () {
          window.location.href = enlaces[id];
        });
      }
    }
  }
});

