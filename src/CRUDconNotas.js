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
function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].title == title) {
        tasks.splice(i, 1);
      }
    }
}
export {CrearNota, GuardarNotas, BuscarNotasPorTitulo, eliminarNota};