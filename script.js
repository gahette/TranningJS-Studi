let num = 0
let points
let gamerFlow
let images = ['dice-1.png', 'dice-2.png', 'dice-3.png', 'dice-4.png', 'dice-5.png', 'dice-6.png']
let pic = document.querySelectorAll('img')

initialize()


//*****************************************************************
// Nom des Joueurs
//*****************************************************************

let player1 = document.querySelector('.player-1')
let player2 = document.querySelector('.player-2')
const fillName = () => {
  player1.contentEditable = true
  player2.contentEditable = true
}
player1.addEventListener('click', fillName)
player2.addEventListener('click', fillName)

//*****************************************************************
// Lancer le dé
//*****************************************************************

let jet = document.querySelector('#throw')


const lancer = () => {

  document.querySelector('#die').style.display = 'block'

  // shake les dés
  pic.forEach((die) => {
    die.classList.add('shake')
  })
  setTimeout(() => {
    pic.forEach((die) => {
      die.classList.remove('shake')
    })
    document.querySelector('#die').setAttribute('src', images[dice - 1])
  }, 100)
  let dice = Math.floor(Math.random() * 6) + 1

  if (dice !== 1) {
    num += dice
    console.log(dice)
    console.log(num)
    document.querySelector('#round-' + gamerFlow).textContent = num

  } else {
    // joueur suivant ()
    changePlayer()
  }
}


jet.addEventListener('click', lancer)

//*****************************************************************
// nombre retenu + victoire
//*****************************************************************

let take = document.querySelector('#send')

const keep = () => {

  points[gamerFlow - 1] += num

  document.querySelector('#total-' + gamerFlow).textContent = points[gamerFlow - 1]

  if (points[gamerFlow - 1] >= 20) {
    document.querySelector('#die').style.display = 'none'
    document.querySelector('h1').innerHTML = 'The winner is ' + document.querySelector('.player-' + gamerFlow).textContent
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
  document.querySelector('.gamer-1').classList.toggle('active')
  document.querySelector('.gamer-2').classList.toggle('active')

}


let newGame = document.querySelector('.new-game')


//*****************************************************************
// Initialisation partie
//*****************************************************************

function initialize() {

  num = 0
  points = [0, 0]
  gamerFlow = 1
  document.querySelector('.player-1').textContent = 'PLAYER 1'
  document.querySelector('.player-2').textContent = 'PLAYER 2'
  document.querySelector('#round-1').textContent = '0'
  document.querySelector('#round-2').textContent = '0'
  document.querySelector('#total-1').textContent = '0'
  document.querySelector('#total-2').textContent = '0'

  document.querySelector('h1').textContent = ''
  document.querySelector('#die').style.display = 'none'
  document.querySelector('.gamer-1').classList.remove('active')
  document.querySelector('.gamer-2').classList.remove('active')


  document.querySelector('.gamer-1').classList.add('active')

}


newGame.addEventListener('click', initialize)
