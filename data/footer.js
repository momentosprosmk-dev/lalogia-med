// Footer dinámico
document.getElementById("texto-footer").innerHTML = 
  '© 2025 MomentosPro · La Logia <br> Powered by EDSE · ' +
  '<a href="https://sumiked.com" target="_blank" style="color:inherit; text-decoration:underline;">Sumiked</a> · ' +
  '<a href="../smk/tyc/index.html" id="footer-tyc" style="color:inherit; text-decoration:underline;">TyC</a>';
  
const footerTyc = document.getElementById("footer-tyc");
footerTyc.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "smk/tyc/index.html";
});
