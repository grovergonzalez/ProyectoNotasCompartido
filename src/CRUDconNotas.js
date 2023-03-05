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
export {CrearNota, GuardarNotas};