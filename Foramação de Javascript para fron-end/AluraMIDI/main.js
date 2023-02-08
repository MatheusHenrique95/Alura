function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio);
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else {
        console.log("Elemento não encontrado ou seletor inválido");
    }
   
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for(let count = 0;count < listaDeTeclas.length;count++){

    const tecla = listaDeTeclas[count];
    const instrumento = tecla.classList[1];   
    const idAudio = `#som_${instrumento}` 

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
