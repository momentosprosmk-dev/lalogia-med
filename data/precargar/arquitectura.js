document.addEventListener("DOMContentLoaded", () => {
  const basecss   = "../../css/arquitectura/";
  const basemedia = "../../media/arquitectura/";

  const recursos = [
    basecss   + "arquitectura.css",
    basecss   + "espacios.css",

    basemedia + "arquitectura.jpg",

    basemedia + "bnlobby1/1.jpg",
    basemedia + "bnlobby1/2.jpg",

    basemedia + "bntarima1/1.jpg",
    basemedia + "bntarima1/2.jpg",

    basemedia + "bnbalcon1/1.jpg",
    basemedia + "bnbalcon1/2.jpg",
    basemedia + "bnbalcon2/1.jpg",
    basemedia + "bnbalcon2/2.jpg",

    basemedia + "bnbarra1/1.jpg",
    basemedia + "bnbarra1/2.jpg",
    basemedia + "bnbarra2/1.jpg",
    basemedia + "bnbarra2/2.jpg",

    basemedia + "bnbarrac1/1.jpg",
    basemedia + "bnbarrac1/2.jpg",

    basemedia + "bnpalco1/1.jpg",
    basemedia + "bnpalco1/2.jpg",
    basemedia + "bnpalco2/1.jpg",
    basemedia + "bnpalco2/2.jpg",
    basemedia + "bnpalco3/1.jpg",
    basemedia + "bnpalco3/2.jpg",
    basemedia + "bnpalco4/1.jpg",
    basemedia + "bnpalco4/2.jpg",
    basemedia + "bnpalco5/1.jpg",
    basemedia + "bnpalco5/2.jpg",
    basemedia + "bnpalco6/1.jpg",
    basemedia + "bnpalco6/2.jpg",
    basemedia + "bnpalco7/1.jpg",
    basemedia + "bnpalco7/2.jpg",
    basemedia + "bnpalco8/1.jpg",
    basemedia + "bnpalco8/2.jpg",
    basemedia + "bnpalco9/1.jpg",
    basemedia + "bnpalco9/2.jpg",
    basemedia + "bnpalco10/1.jpg",
    basemedia + "bnpalco10/2.jpg",
    basemedia + "bnpalco11/1.jpg",
    basemedia + "bnpalco11/2.jpg",
    basemedia + "bnpalco12/1.jpg",
    basemedia + "bnpalco12/2.jpg",
    basemedia + "bnpalco13/1.jpg",
    basemedia + "bnpalco13/2.jpg",
    basemedia + "bnpalco14/1.jpg",
    basemedia + "bnpalco14/2.jpg",
    basemedia + "bnpalco15/1.jpg",
    basemedia + "bnpalco15/2.jpg",
    basemedia + "bnpalco16/1.jpg",
    basemedia + "bnpalco16/2.jpg",
    basemedia + "bnpalco17/1.jpg",
    basemedia + "bnpalco17/2.jpg",
    basemedia + "bnpalco18/1.jpg",
    basemedia + "bnpalco18/2.jpg",
    basemedia + "bnpalco19/1.jpg",
    basemedia + "bnpalco19/2.jpg",
    basemedia + "bnpalco20/1.jpg",
    basemedia + "bnpalco20/2.jpg",
    basemedia + "bnpalco21/1.jpg",
    basemedia + "bnpalco21/2.jpg",
    basemedia + "bnpalco22/1.jpg",
    basemedia + "bnpalco22/2.jpg",
    basemedia + "bnpalco23/1.jpg",
    basemedia + "bnpalco23/2.jpg",

    basemedia + "bnvip1/1.jpg",
    basemedia + "bnvip1/2.jpg",
    basemedia + "bnvip2/1.jpg",
    basemedia + "bnvip2/2.jpg",
    basemedia + "bnvip3/1.jpg",
    basemedia + "bnvip3/2.jpg",
    basemedia + "bnvip4/1.jpg",
    basemedia + "bnvip4/2.jpg",
    basemedia + "bnvip5/1.jpg",
    basemedia + "bnvip5/2.jpg",

    basemedia + "bngeneral1/1.jpg",
    basemedia + "bngeneral1/2.jpg",
    basemedia + "bngeneral2/1.jpg",
    basemedia + "bngeneral2/2.jpg",
    basemedia + "bngeneral3/1.jpg",
    basemedia + "bngeneral3/2.jpg",
    basemedia + "bngeneral4/1.jpg",
    basemedia + "bngeneral4/2.jpg",
    basemedia + "bngeneral5/1.jpg",
    basemedia + "bngeneral5/2.jpg",
    basemedia + "bngeneral6/1.jpg",
    basemedia + "bngeneral6/2.jpg",
    basemedia + "bngeneral7/1.jpg",
    basemedia + "bngeneral7/2.jpg",
    basemedia + "bngeneral8/1.jpg",
    basemedia + "bngeneral8/2.jpg",
    basemedia + "bngeneral9/1.jpg",
    basemedia + "bngeneral9/2.jpg",
    basemedia + "bngeneral10/1.jpg",
    basemedia + "bngeneral10/2.jpg"
  ];

  recursos.forEach(ruta => {
    const ext = ruta.split(".").pop();

    if (["jpg","jpeg","png","gif","webp"].includes(ext)) {
      const img = new Image();
      img.src = ruta;
    } else if (ext === "css") {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "style";
      link.href = ruta;
      document.head.appendChild(link);
    } else if (ext === "js") {
      const script = document.createElement("link");
      script.rel = "preload";
      script.as = "script";
      script.href = ruta;
      document.head.appendChild(script);
    }
  });
});
