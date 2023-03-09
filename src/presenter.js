document.getElementById('formulario').addEventListener('submit', guardarNota);
const buscarForm = document.querySelector("#BuscarForm");

function guardarNota(e) {
  let titulo = document.getElementById('titulo').value;
  let descripcion = document.getElementById('descripcion').value;
  //agregar fecha

  let nota = {
    titulo,
    descripcion
  };

  if(localStorage.getItem('notas') === null) {
    let notas = [];
    notas.push(nota);
    localStorage.setItem('notas', JSON.stringify(notas));
  } else {
    let notas = JSON.parse(localStorage.getItem('notas'));
    notas.push(nota);
    localStorage.setItem('notas', JSON.stringify(notas));
  }

  getNotas();
  document.getElementById('formulario').reset();
  e.preventDefault();
}

function deleteNota(titulo) {
  console.log(titulo)
  let notas = JSON.parse(localStorage.getItem('notas'));
  for(let i = 0; i < notas.length; i++) {
    if(notas[i].titulo == titulo) {
      notas.splice(i, 1);
    }
  }
  
  localStorage.setItem('notas', JSON.stringify(notas));
  getNotas();
}

function searchNota(titulo){
  console.log(titulo)
  event.preventDefault();
  let notas = JSON.parse(localStorage.getItem('notas'));
  for(let i = 0; i < notas.length; i++) {
    if(notas[i].titulo == titulo) {
      return notas[i];
    }
  }
  localStorage.setItem('notas', JSON.stringify(notas));
  getNotaEncontrada();
}

function getNotas() {
  let notas = JSON.parse(localStorage.getItem('notas'));
  let notasView = document.getElementById('notas');
  notasView.innerHTML = '';
  for(let i = 0; i < notas.length; i++) {
    let titulo = notas[i].titulo;
    let descripcion = notas[i].descripcion;

    notasView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
        <p>${titulo}  </p>
        <p>${descripcion} </p>
          <a href="#" onclick="deleteNota('${titulo}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
}


function getNotaEncontrada() {
  let notas = JSON.parse(localStorage.getItem('notas'));
  let notasView = document.getElementById('notas');
  notasView.innerHTML = '';
  for(let i = 0; i < notas.length; i++) {
    let titulo = notas[i].titulo;
    let descripcion = notas[i].descripcion;

    notasView.innerHTML += `
      <nav class="navbar navbar-light bg-light">
          <a href="#" onclick="deleteNota('${titulo}')" class="btn btn-secondary my-2 my-sm-0">Delete</a> 
          <p>${titulo}</p>
          <p>${descripcion} </p>
      </nav>`;
  }
  getNota();
}

getNotas();
getNotaEncontrada();