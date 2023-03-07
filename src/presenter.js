document.getElementById('formulario').addEventListener('submit', guardarNota);

function guardarNota(e) {
  let titulo = document.getElementById('titulo').value;
  let descripcion = document.getElementById('descripcion').value;
  console.log(descripcion)

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

getNotas();