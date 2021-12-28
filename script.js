let num = 0
let points
let gamerFlow
initialize()


//*****************************************************************
// Nom des Joueurs
//*****************************************************************

let player1
let player2

function players() {
  player1 = prompt(`Nom joueur 1 ?`)
  player2 = prompt(`Nom joueur 2 ?`)
  document.querySelector('.player-1').innerHTML = player1
  document.querySelector('.player-2').innerHTML = player2
}

players()


//*****************************************************************
// Lancer le dé
//*****************************************************************

let jet = document.querySelector('#throw')


const lancer = () => {
  // if (isplaying) {

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
// }

jet.addEventListener('click', lancer)

//*****************************************************************
// nombre retenu + victoire
//*****************************************************************

let take = document.querySelector('#send')

const keep = () => {

  points[gamerFlow-1] += num

  document.querySelector('#total-' + gamerFlow).textContent = points[gamerFlow-1]

  if (points[gamerFlow-1] >= 20) {
    // todo annoncer le vainqueur

    console.log('winner')

  } else {
    changePlayer()
  }

}
take.addEventListener('click', keep)


//*****************************************************************
// joueur suivant
//*****************************************************************


function changePlayer() {
  gamerFlow === 1 ? gamerFlow = 2 : gamerFlow = 1
  num = 0
  document.querySelector('#round-1').textContent = '0'
  document.querySelector('#round-2').textContent = '0'

}


let newGame = document.querySelector('.new-game')

//*****************************************************************
// Initialisation partie
//*****************************************************************

function initialize() {

  num = 0
  points = [0, 0]
  gamerFlow = 1
  // isplaying = true

  document.querySelector('.gamer-1').classList.add('active')

}



