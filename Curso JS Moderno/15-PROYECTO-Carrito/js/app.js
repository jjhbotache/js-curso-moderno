const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const listadoCursos = document.querySelector("#lista-cursos");

let articulos = [];




cargarEventListeners();
function cargarEventListeners() {
  listadoCursos.addEventListener("click",agregarCurso);
  vaciarCarrito.addEventListener("click",()=>{
    vaciarCarritoF();
    articulos = [];
  });
  carrito.addEventListener("click",gestionaClikCarrito);
}


function agregarCurso(e) {
  e.preventDefault();
  if(e.target.classList.contains("agregar-carrito")){ //si es el boton de agregar lo que fue apretado...
    const infoNuevoCurso = leerDatosCurso(e.target.parentElement.parentElement);
    if (articulos.some(curso=>curso.id===infoNuevoCurso.id)){ //si ya existe en el carrito
      articulos.find(curso => curso.id===infoNuevoCurso.id).cantidad ++; //sumarle a la cantidad
    }else{
      articulos=[...articulos,infoNuevoCurso];                              //sumarlo a los articulos
    }
    renderizarCarritoHtml()
  }

}
function leerDatosCurso(div) {
  return {
    id:div.querySelector("a").getAttribute("data-id"),
    nombre:div.querySelector("h4").textContent,
    autor:div.querySelector("p").textContent,
    precio:div.querySelector("span").textContent,
    imagen:div.querySelector("img").getAttribute("src"),
    cantidad:1
  }
}
function renderizarCarritoHtml(){
  vaciarCarritoF(); 

  articulos.forEach(articulo=>{
    const objArticulo = document.createElement("tr");
    const {imagen,nombre,precio,cantidad,id} = articulo
    objArticulo.innerHTML=`
    <td>
      <img src="${imagen}" width="100">
    </td>
    <td>
      ${nombre}
    </td>
    <td>
      ${precio}
    </td>
    <td>
      ${cantidad}
    </td> 
    <td>
      <a href="#" class="borrar-curso" data-id="${id}">x</a>
    </td> 

    `
    
    contenedorCarrito.appendChild(objArticulo);
  })
}
function vaciarCarritoF() {
  while(contenedorCarrito.firstChild){contenedorCarrito.removeChild(contenedorCarrito.firstChild);} 
}

function gestionaClikCarrito (e){
  if (e.target.classList.contains("borrar-curso")) {
     const idABorrar = e.target.getAttribute("data-id");
     articulos=articulos.filter(articulo => articulo.id!=idABorrar)
     renderizarCarritoHtml();
  }
}