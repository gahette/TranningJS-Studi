clickNewGAme()


//*****************************************************************
// Nom des Joueurs
//*****************************************************************

let gamePlaying
let player1
let player2

function players() {
  player1 = prompt(`Nom joueur 1 ?`)
  player2 = prompt(`Nom joueur 2 ?`)
  document.getElementById('player1').innerHTML = player1
  document.getElementById('player2').innerHTML = player2
}

players()


//*****************************************************************
// Lancer le dé
//*****************************************************************
let gamerFlow
let jet = document.querySelector('#throw')
let num = 0


const lancer = () => {
  let dice = Math.floor(Math.random() * 6) + 1
  // document.querySelector('.num')["innerHTML"]
  if (dice !== 1) {
    num += dice
    console.log(dice)
    console.log(num)
    document.querySelector('#round-' + gamerFlow).textContent = num
  } else {
    changePlayer()
    // joueur suivant ()
    console.log('You lose')
  }
}

jet.addEventListener('click', lancer)


//*****************************************************************
// joueur suivant
//*****************************************************************

// const lancer2 = () => {
//   let dice2 = Math.floor(Math.random() * 6) + 1
//   document.querySelector('.num')["innerHTML"]
// if (dice2 !== 1) {
//   num2 += dice2
//   console.log(dice2)
//   console.log(num2)
//   document.querySelector('#round2').textContent = num2
//   jet.disabled = true
// } else {
//   num2 = 0
//   document.querySelector('#round2').textContent = num2
//   jet2.disabled = true
//   lancer()
//   joueur suivant ()
// console.log('You lose')
// }
// }
//
// jet2.addEventListener('click', lancer2)

function changePlayer() {
  gamerFlow === 1 ? gamerFlow = 2 : gamerFlow = 1
  num = 0
  document.querySelector('#round-1').textContent = '0'
  document.querySelector('#round-2').textContent = '0'

}

//*****************************************************************
// Initialisation partie
//*****************************************************************

let newGame = document.querySelector('.new-game')

function clickNewGAme() {
  gamePlaying = true
  num = 0
  gamerFlow = 0
}

newGame.addEventListener('click', clickNewGAme)

