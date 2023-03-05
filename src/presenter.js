import { CrearNota } from "./CRUDconNotas";

let notas = [];
window.onload = function () {
  window.notas = [];
};
const tituloNota = document.querySelector("#TituloNota");
const descripcionNota = document.querySelector("#DescripcionNota");
const formCrearNota = document.querySelector("#Crear_Nota_Form");
const divCrearNota = document.querySelector("#MostrarNotasDiv");

formCrearNota.addEventListener("submit", (event) => {
  event.preventDefault();
  const fechaActual = new Date();
  const nota = CrearNota(tituloNota.value, descripcionNota.value);
  event.preventDefault();
  notas.push(nota);
  var NotasCompletas = notas.map(function (nota) {
    return (
      "<p> Titulo: " +
      nota.titulo +
      "</p>" +
      "<p> Texto: " +
      nota.descripcion +
      "</p>" +
      "<p> Fecha: " +
      nota.fecha.getDay() +
      "/" +
      nota.fecha.getMonth() +
      "/" +
      nota.fecha.getFullYear() +
      "</p>" +
      "<br>"
    );
  });
  divCrearNota.innerHTML = NotasCompletas ;
});