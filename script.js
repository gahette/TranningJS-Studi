//*****************************************************************
// Nom des Joueurs
//*****************************************************************


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
// Initialisation partie
//*****************************************************************

let newGame = document.getElementById('new-game')

function clickNewGAme() {
//  todo
}

newGame.addEventListener('click', clickNewGAme)

//*****************************************************************
// Lancer le dé
//*****************************************************************

let jet = document.querySelector('#throw')
let num = 0

const lancer = () => {
  let dice = Math.floor(Math.random() * 6) + 1
  // document.querySelector('.num')["innerHTML"]
  if (dice !== 1) {
    num += dice
    console.log(dice)
    console.log(num)
    document.querySelector('#round1').textContent = num
  } else {
    num = 0
    document.querySelector('#round1').textContent = num
    // joueur suivant ()
    console.log('You lose')
  }
}

jet.addEventListener('click', lancer)


//*****************************************************************
// joueur suivant
//*****************************************************************

