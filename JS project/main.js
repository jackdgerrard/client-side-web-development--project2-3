//*********** */
// Variables -- I seperated the objects from the array for readability
//************ */

const queen = {
   face: 'images/queen.png',
   name: 'the queen',
   back: 'images/back.png',
   html: "<img class ='card' src='images/queen.png'></img>"
}

const one = {
   face: 'images/one.png',
   name: 1,
   onclick: lose,
   back: 'images/back.png',
   html: "<img class ='card'  src='images/one.png'></img>"
}

const two = {
   face: 'images/two.png',
   name: 2,
   onclick: lose(),
   back: 'images/back.png',
   html: "<img class ='card'  src='images/two.png'></img>"
}


//cards gop into array to be sorted etc...
const cards = [queen, one, two];


//*********** */
// Functions
//************ */

//onload
window.addEventListener("load", init)

//init function
function init() {

   console.log(cards[1]);
   //add onlcick event to the settings gear
   document.getElementById("settingsGear").addEventListener("click", showMenu)

   //theme

   //remove the themese that aren't black for default to be black
   document.getElementById("body").classList.remove('themeRed')
   document.getElementById("body").classList.remove('themeBlue')

   //add  event listeners to the menu items that wuill toggle the theme
   document.getElementById("setBlackTheme").addEventListener("click", themeBlack())
   document.getElementById("setRedTheme").addEventListener("click", themeRed())
   document.getElementById("setBlueTheme").addEventListener("click", themeBlue())
}

function dealCards() {

   //shuffle the cards
   cards.sort()

      // add each card into the cards div
   for (card in cards) {
      document.getElementById('cards').innerHTML += card.html
   }
}

//themes
function themeRed() {
   document.getElementById('body').classList.toggle('redTheme')
}

function themeBlue() {
   document.getElementById('body').classList.toggle('blueTheme')
}

function themeBlack() {
   document.getElementById('body').classList.toggle('blackTheme')
}

function borders() {
   document.getElementById('body').classList.toggle('hasborders')
}


// win/lose
function win() {
   queensay('you won!')
}

function lose() {
   queensay('you lost!')
}

function queensay(phrase) {
   document.getElementById('queenSpeach').innerHTML = "<p>" + phrase + "</p>";
}

// menu
function showMenu() {
   document.getElementById('settingsGear').src == "images/gearson,png"
   document.getElementById('menu').classList.toggle('hidden');
}