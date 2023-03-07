import { CrearNota, GuardarNotas } from "./CRUDconNotas";

let notas = [];
window.onload = function () {
  window.notas = [];
};

function refrescarHTML() {
  const divMostrarNotas = document.querySelector("#MostrarNotasDiv");
  while (divMostrarNotas.firstChild) {
    divMostrarNotas.removeChild(divMostrarNotas.firstChild);
  }
}


const tituloNota = document.querySelector("#TituloNota");
const descripcionNota = document.querySelector("#DescripcionNota");
const formCrearNota = document.querySelector("#Crear_Nota_Form");
const divCrearNota = document.querySelector("#MostrarNotasDiv");

let NotasView = document.getElementById('MostrarNotasDiv');
NotasView.innerHTML = '';

function eliminarNota(titulo) {
  for (var i = 0; i < notas.length; i++) {
    var tituloAEliminar = notas[i].titulo;
    if (titulo == tituloAEliminar) {
      notas[i].removeChild();
    }
  }
  return notas;
}


formCrearNota.addEventListener("submit", (event) => {
  event.preventDefault();
  const nota = CrearNota(tituloNota.value, descripcionNota.value);
  event.preventDefault();
  notas.push(nota);

  divCrearNota.innerHTML += `<div class="card">
  <div class="card-body">
    <p>${nota.titulo}  </p>
    <p>${nota.descripcion} </p>
    <p>${nota.fecha.getDate()}  / ${nota.fecha.getMonth()} / ${nota.fecha.getFullYear()}  </p>
    <a href="index.html/#" onclick="eliminarNota('${nota.titulo}')" class="btn btn-danger">Delete</a>
   </div>

  </div>`;
});
