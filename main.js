function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  }
  else {
    //alert('Elemento não encontrado');
    console.log('Elemento não encontrado ou seletor inválido');
  }

}


const listaDeTeclas = document.querySelectorAll('.tecla'); // retorna uma nodeList

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1]; // Obtém o segundo classList item -> a segunda class == tecla_pom
  const idAudio = `#som_${instrumento}`; // Cria uma string de template para o ID do elemento de áudio - #som_tecla_pom
  console.log(tecla.classList[1])

  tecla.onclick = function () { // Associa um evento de clique ao elemento
    tocaSom(idAudio); // Chama a função tocaSom com o ID do elemento de áudio
  }

  tecla.onkeydown = function (evento) {
    
    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('ativa');
    }

  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }
}

//Se você tiver acesso a este elemento via JavaScript e usar element.classList, obterá uma coleção de classes que inclui "tecla" e "tecla_pom". Portanto, element.classList[1] retornará "tecla_pom".

// listaDeTeclas[contador] -> se refere a cada tag que possui a class .tecla -> itera cada uma

// tecla.classList[1] -> refere-se a segunda class de cada uma das tags que estão sendo iteradas