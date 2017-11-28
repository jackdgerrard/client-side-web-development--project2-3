//************************************************************************/
// Variables -- I seperated the objects from the array for readability
//*************************************************************************/

const queen = {
  face: 'images/queen.png',
  name: 'the queen',
  htmlFront: "<img src='images/queen.png'>",
  htmlBack: "<img src ='images/back.png' onclick='win()'>",
}

const one = {
  face: 'images/one.png',
  name: 1,
  htmlFront: "<img src='images/one.png'>",
  htmlBack: "<img src ='images/back.png' onclick='lose()'>",
}

const two = {
  face: 'images/two.png',
  name: 2,
  htmlFront: "<img src='images/two.png'>",
  htmlBack: "<img src ='images/back.png' onclick='lose()'>",
}

//cards gop into array to be sorted etc...
const cards = [queen, one, two]
let shuffler = 0

//************/
// Functions
//*************/

//onload
window.addEventListener("load", init)

//init function
function init() {
  //add  event listeners to the menu items that will toggle the theme
  document.getElementById("setBlackTheme").addEventListener("click", themeBlack())
  document.getElementById("setRedTheme").addEventListener("click", themeRed())
  document.getElementById("setBlueTheme").addEventListener("click", themeBlue())

  dealCards()
}

function dealCards() {

  //empty the cards container
  document.getElementById('cards').innerHTML = " "
  //get current date
  let now = new Date()
  //extract seconds from current date
  now = now.getMilliseconds();

  cards.sort()
  //shuffle the cards - kind of
  if (now >= 0 && now < 333) {
    shuffler = 0
  } else if (now >= 333 && now < 666) {
    shuffler = 1
  } else {
    shuffler = 2
  }

  console.log(now + ' -  ' + shuffler)

  //shuffle the cards
  switch (shuffler) {
    case 0:
      document.getElementById('cards').innerHTML += cards[0].htmlBack
      document.getElementById('cards').innerHTML += cards[1].htmlBack
      document.getElementById('cards').innerHTML += cards[2].htmlBack
      break;
    case 1:
      document.getElementById('cards').innerHTML += cards[1].htmlBack
      document.getElementById('cards').innerHTML += cards[0].htmlBack
      document.getElementById('cards').innerHTML += cards[2].htmlBack
      break;
    default:
      document.getElementById('cards').innerHTML += cards[2].htmlBack
      document.getElementById('cards').innerHTML += cards[1].htmlBack
      document.getElementById('cards').innerHTML += cards[0].htmlBack
      break;
  }
}


// win/lose
function win() {
  console.log("WINNER")
  queensay('you won!')
  reveal()
}

function lose() {
  console.log("LOSER")
  queensay('you lost!')
  reveal()
}

// find the right span element by id and make the contents the phrase passed in as argument
function queensay(phrase) {
  setTimeout(function sayThings() {
    document.getElementById('queenSpeach').innerHTML = "<p>" + phrase + "</p>"
  }, 3000)
  setTimeout(function hideButton() {
    document.getElementById('shuffle').classList.add('hidden')
  }, 3000)
}

//this reveals the cards by clearing the container and then replacing the card backs with card fronts
function reveal() {

  document.getElementById('cards').innerHTML = " "
  //display cards in same way shuffler worked
  switch (shuffler) {
    case 0:
      document.getElementById('cards').innerHTML += cards[0].htmlFront
      document.getElementById('cards').innerHTML += cards[1].htmlFront
      document.getElementById('cards').innerHTML += cards[2].htmlFront
      break;
    case 1:
      document.getElementById('cards').innerHTML += cards[1].htmlFront
      document.getElementById('cards').innerHTML += cards[0].htmlFront
      document.getElementById('cards').innerHTML += cards[2].htmlFront
      break;
    default:
      document.getElementById('cards').innerHTML += cards[2].htmlFront
      document.getElementById('cards').innerHTML += cards[1].htmlFront
      document.getElementById('cards').innerHTML += cards[0].htmlFront
      break;
  }
}

//************************************************************************/
// Settings and themes
//*************************************************************************/

//settings gear
function gearClick() {
  //toggle both classes on/off
  document.getElementById('settingsGear').classList.toggle('gearson')
  document.getElementById('settingsGear').classList.toggle('gearsoff')

  //call show menu function
  document.getElementById('menu').classList.toggle('hidden')
}

//menu items

function toggleBorders() {
  document.getElementById('cards').classList.toggle('hasborders')
}

function themeBlack() {
  document.getElementById('body').classList.remove('themeRed')
  document.getElementById('body').classList.remove('themeBlue')
  document.getElementById('body').classList.add('themeBlack')
}

function themeBlue() {
document.getElementById('body').classList.remove('themeRed')
document.getElementById('body').classList.add('themeBlue')
document.getElementById('body').classList.remove('themeBlack')
}

function themeRed() {
document.getElementById('body').classList.add('themeRed')
document.getElementById('body').classList.remove('themeBlue')
document.getElementById('body').classList.remove('themeBlack')
}