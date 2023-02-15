const btnFlotante = document.querySelector(".btn-flotante") ;
const footer = document.querySelector(".footer");

btnFlotante.addEventListener('click', e =>{
  footer.classList.toggle("activo");
  btnFlotante.classList.toggle("activo");
  if (btnFlotante.classList.contains("activo")) {
    btnFlotante.innerHTML = "cerrar"
  }else{
    btnFlotante.innerHTML = "Idioma y moneda"
  }
})
