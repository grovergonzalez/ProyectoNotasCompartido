import { CrearNota } from "./CRUDconNotas";

let notas = [];
window.onload = function () {
  window.notas = [];
};
const tituloNota = document.querySelector("#TituloNota");
const descripcionNota = document.querySelector("#DescripcionNota");
const formCrearNota = document.querySelector("#Crear_Nota_Form");
const divCrearNota = document.querySelector("#MostrarNotasDiv");

let NotasView = document.getElementById('MostrarNotasDiv');
NotasView.innerHTML = '';


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
    <a href="index.html" onclick="eliminarNota('${nota.titulo}')" class="btn btn-danger ml-5">Delete</a>
   </div>
  </div>`;
});
