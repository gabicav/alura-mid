function tocaSomPom (id Elemento Audio) {
    const elemento = document.querySelector(id Elemento Audio);
}
const listadeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
for(let contador = 0; contador<listadeTeclas.lenght; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_$(instrumento)`; //tamplate string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento){
        if(evento.code === 'Enter' || evento.code === 'space'){
        tecla.classlist.add('ativa');
        }
    }
    tecla.onkeyup = function (){
        tecla.classlist.remove('ativa')
    }
}

