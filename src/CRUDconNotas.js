function CrearNota(titulo, descripcion){
    return{
        titulo: titulo,
        descripcion: descripcion,
        fecha: new Date()   
    };
}

function GuardarNotas(nota){
    let notas = [];
    notas.push(nota);
}

function BuscarNotasPorTitulo(titulo, notas){
    for (var i = 0; i < notas.length; i++) {
        var tituloABuscar = notas[i].titulo;
        if (titulo == tituloABuscar) {
          return notas[i];
        }
    }
}

function refrescarHTML() {
  const divMostrarNotas = document.querySelector("#MostrarNotasDiv");
  while (divMostrarNotas.firstChild) {
    divMostrarNotas.removeChild(divMostrarNotas.firstChild);
  }
}

function eliminarNota(titulo) {
  listaNotas = listaNotas.filter((nota) => nota.titulo !== titulo);
  refrescarHTML();
  GuardarNotas();
}

export {CrearNota, GuardarNotas, BuscarNotasPorTitulo, eliminarNota};