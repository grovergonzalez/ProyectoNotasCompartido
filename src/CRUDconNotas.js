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

function BuscarNotasPorTitulo(titulo){

}

export {CrearNota, GuardarNotas};