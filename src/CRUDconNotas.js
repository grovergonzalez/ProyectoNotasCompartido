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

function eliminarNota(titulo) {
  for (var i = 0; i < notas.length; i++) {
    var tituloAEliminar = notas[i].titulo;
    if (titulo == tituloAEliminar) {
      notas[i].removeChild();
    }
  }
  return notas;
}

function editarNota(notas, nota) {
  notas.titulo = tituloNota.value;
  notas.texto = descripcionNota.value;

  listaNotas.map((nota) => {
    if (nota.fecha === notas.fecha) {
      nota.fecha = notas.fecha;
      nota.descripcion = notas.descripcion;
      nota.titulo = notas.titulo;
    }
  });

  refrescarHTML();
  GuardarNotas();
  formulario.reset();

  formulario.querySelector('button[type="submit"]').textContent = "Agregar";
}

export {CrearNota, GuardarNotas, BuscarNotasPorTitulo, eliminarNota};