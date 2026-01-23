document.addEventListener("DOMContentLoaded", () => {
  const baseMedia = "../../media/arquitectura/";
  const baseCss   = "../../css/arquitectura/";

  const recursos = [
    baseMedia + "arquitectura.jpg",

    baseMedia + "bnlobby1/1.jpg",
    baseMedia + "bnlobby1/2.jpg",

    baseMedia + "bntarima1/1.jpg",
    baseMedia + "bntarima1/2.jpg",

    baseMedia + "bnbalcon1/1.jpg",
    baseMedia + "bnbalcon1/2.jpg",
    baseMedia + "bnbalcon2/1.jpg",
    baseMedia + "bnbalcon2/2.jpg",

    baseMedia + "bnbarra1/1.jpg",
    baseMedia + "bnbarra1/2.jpg",
    baseMedia + "bnbarra2/1.jpg",
    baseMedia + "bnbarra2/2.jpg",

    baseMedia + "bnbarrac1/1.jpg",
    baseMedia + "bnbarrac1/2.jpg",

    baseMedia + "bnpalco1/1.jpg",
    baseMedia + "bnpalco1/2.jpg",
    baseMedia + "bnpalco2/1.jpg",
    baseMedia + "bnpalco2/2.jpg",
    baseMedia + "bnpalco3/1.jpg",
    baseMedia + "bnpalco3/2.jpg",
    baseMedia + "bnpalco4/1.jpg",
    baseMedia + "bnpalco4/2.jpg",
    baseMedia + "bnpalco5/1.jpg",
    baseMedia + "bnpalco5/2.jpg",
    baseMedia + "bnpalco6/1.jpg",
    baseMedia + "bnpalco6/2.jpg",
    baseMedia + "bnpalco7/1.jpg",
    baseMedia + "bnpalco7/2.jpg",
    baseMedia + "bnpalco8/1.jpg",
    baseMedia + "bnpalco8/2.jpg",
    baseMedia + "bnpalco9/1.jpg",
    baseMedia + "bnpalco9/2.jpg",
    baseMedia + "bnpalco10/1.jpg",
    baseMedia + "bnpalco10/2.jpg",
    baseMedia + "bnpalco11/1.jpg",
    baseMedia + "bnpalco11/2.jpg",
    baseMedia + "bnpalco12/1.jpg",
    baseMedia + "bnpalco12/2.jpg",
    baseMedia + "bnpalco13/1.jpg",
    baseMedia + "bnpalco13/2.jpg",
    baseMedia + "bnpalco14/1.jpg",
    baseMedia + "bnpalco14/2.jpg",
    baseMedia + "bnpalco15/1.jpg",
    baseMedia + "bnpalco15/2.jpg",
    baseMedia + "bnpalco16/1.jpg",
    baseMedia + "bnpalco16/2.jpg",
    baseMedia + "bnpalco17/1.jpg",
    baseMedia + "bnpalco17/2.jpg",
    baseMedia + "bnpalco18/1.jpg",
    baseMedia + "bnpalco18/2.jpg",
    baseMedia + "bnpalco19/1.jpg",
    baseMedia + "bnpalco19/2.jpg",
    baseMedia + "bnpalco20/1.jpg",
    baseMedia + "bnpalco20/2.jpg",
    baseMedia + "bnpalco21/1.jpg",
    baseMedia + "bnpalco21/2.jpg",
    baseMedia + "bnpalco22/1.jpg",
    baseMedia + "bnpalco22/2.jpg",
    baseMedia + "bnpalco23/1.jpg",
    baseMedia + "bnpalco23/2.jpg",

    baseMedia + "bnvip1/1.jpg",
    baseMedia + "bnvip1/2.jpg",
    baseMedia + "bnvip2/1.jpg",
    baseMedia + "bnvip2/2.jpg",
    baseMedia + "bnvip3/1.jpg",
    baseMedia + "bnvip3/2.jpg",
    baseMedia + "bnvip4/1.jpg",
    baseMedia + "bnvip4/2.jpg",
    baseMedia + "bnvip5/1.jpg",
    baseMedia + "bnvip5/2.jpg",

    baseMedia + "bngeneral1/1.jpg",
    baseMedia + "bngeneral1/2.jpg",
    baseMedia + "bngeneral2/1.jpg",
    baseMedia + "bngeneral2/2.jpg",
    baseMedia + "bngeneral3/1.jpg",
    baseMedia + "bngeneral3/2.jpg",
    baseMedia + "bngeneral4/1.jpg",
    baseMedia + "bngeneral4/2.jpg",
    baseMedia + "bngeneral5/1.jpg",
    baseMedia + "bngeneral5/2.jpg",
    baseMedia + "bngeneral6/1.jpg",
    baseMedia + "bngeneral6/2.jpg",
    baseMedia + "bngeneral7/1.jpg",
    baseMedia + "bngeneral7/2.jpg",
    baseMedia + "bngeneral8/1.jpg",
    baseMedia + "bngeneral8/2.jpg",
    baseMedia + "bngeneral9/1.jpg",
    baseMedia + "bngeneral9/2.jpg",
    baseMedia + "bngeneral10/1.jpg",
    baseMedia + "bngeneral10/2.jpg",

    baseCss   + "arquitectura.css",
    baseCss   + "espacios.css"
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
