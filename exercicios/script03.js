const listaDeCanditados = document.querySelectorAll('.canditado')
const listaDebotoes = document.querySelectorAll('.btn-votar')
const div = document.querySelectorAll('.canditado')
let contadores = [0, 0, 0, 0, 0]
let maisVoto

for (let i = 0; i < listaDebotoes.length; i++) {
  contadores[i] = 0
  const candidato = listaDeCanditados[i]

  let candidatoUnico = candidato.classList[1]
  let divCanditadoUnico = document.querySelector(`.${candidatoUnico}`)
  
  let idBotao = document.querySelector(`#votar-${candidatoUnico}`)

  idBotao.addEventListener('click', () => {
    contadores[i]++
    console.log(contadores)
    divCanditadoUnico.innerHTML = `<p>${contadores[i]}</p>`
  })
}

document.getElementById('btn-fim').addEventListener('click', () => {
  const maxVotos = Math.max(...contadores);
  let indiceVencedor = contadores.indexOf(maxVotos) + 1;  
  let empate = [] // 0

  for(let contador of contadores){
    if(maxVotos === contador){
      empate.push(contador)
    }
  }

  let admin = prompt('Deseja encerrar simulação?').toLocaleLowerCase()

  if (admin == 'sim') {
    alert('Votação encerrada')
    let ganhadorFinal = empate.length !== 1 ? 'Houve um empate' : `O ganhador foi o canditado ${indiceVencedor} com ${maxVotos} votos`
    alert(ganhadorFinal)

    for (let i = 0; i < div.length; i++) {
      div[i].textContent = '-'
      contadores[i] = 0
    }
  } else {
    alert('A votação continua')
  }
})