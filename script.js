//*****************************************************************
// Loader...
//*****************************************************************

const loader = document.querySelector('.loader')
addEventListener('load',()=> {
  loader.classList.add('fondu-out')
})
//*****************************************************************
// Règles du jeu
//*****************************************************************
let play = document.querySelector('#rules')

const rules = ()=>{
  alert('Le jeu comprend 2 joueurs sur un seul et même écran.\n' +
    'Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).\n' +
    'À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu\'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.\n' +
    'Lors de son tour, le joueur peut décider à tout moment de:\n' +
    '- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur.\n' +
    '- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.\n' +
    'Le premier joueur qui atteint les 100 points sur global gagne le jeu.')
}
play.addEventListener('click',rules)
play.addEventListener('mouseenter', ()=>{
  document.querySelector('#rules').style.fontWeight='900'
})
play.addEventListener('mouseleave', ()=>{
  document.querySelector('#rules').style.fontWeight='300'
})
//*****************************************************************
// Place au jeu
//*****************************************************************



let num = 0
let points
let gamerFlow
let images = ['images/dice-1.png', 'images/dice-2.png', 'images/dice-3.png', 'images/dice-4.png', 'images/dice-5.png', 'images/dice-6.png']
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
jet.addEventListener('mouseenter', ()=>{
  document.querySelector('#throw').style.fontWeight='900'
})
jet.addEventListener('mouseleave',()=>{
  document.querySelector('#throw').style.fontWeight='300'
})

//*****************************************************************
// nombre retenu + victoire
//*****************************************************************

let take = document.querySelector('#send')

const keep = () => {

  points[gamerFlow - 1] += num

  document.querySelector('#total-' + gamerFlow).textContent = points[gamerFlow - 1]

  if (points[gamerFlow - 1] >= 100) {
    document.querySelector('#die').style.display = 'none'
    document.querySelector('h1').innerHTML = 'The winner is ' + document.querySelector('.player-' + gamerFlow).textContent
  } else {
    changePlayer()
  }

}
take.addEventListener('click', keep)
take.addEventListener('mouseenter', ()=>{
  document.querySelector('#send').style.fontWeight='900'
})
take.addEventListener('mouseleave',()=>{
  document.querySelector('#send').style.fontWeight='300'
})

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
newGame.addEventListener('mouseenter', ()=>{
  document.querySelector('.new-game').style.fontWeight='900'
})
newGame.addEventListener('mouseleave',()=>{
  document.querySelector('.new-game').style.fontWeight='300'
})
