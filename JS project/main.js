//*********** */
// Variables -- I seperated the objects from the array for readability
//************ */

const queen = {
   face: 'images/queen.png',
   name: 'the queen',
   back: 'images/back.png',
   htmlFront: "<img src='images/queen.png'>",
   htmlBack: "<img src ='images/back.png' onclick='win(), 1250'>",
}

const one = {
   face: 'images/one.png',
   name: 1,
   onclick: lose,
   back: 'images/back.png',
   htmlFront: "<img src='images/one.png'>",
   htmlBack: "<img src ='images/back.png' onclick='lose(), 1250'>",
}

const two = {
   face: 'images/two.png',
   name: 2,
   onclick: lose(),
   back: 'images/back.png',
   htmlBack: "<img src ='images/back.png' onclick='lose(), 1250'>",
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

   dealCards()
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

   //empty the cards container
   document.getElementById('cards').innerHTML =" "
   //get current date
   let now = new Date()
   //extract seconds from current date
      now=  now.getMilliseconds();

   cards.sort()
   //shuffle the cards - kind of
   if (now >=0 && now < 333 ){
      shuffler = 0
   } else if (now >=333 && now < 666){
      shuffler = 1
   }else {
      shuffler = 2
   }

      console.log(now)

   //shuffle the cards
   switch(shuffler) {
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
   document.getElementById('settingsGear').classList.toggle('hidden');
   document.getElementById('menu').classList.toggle('hidden');
}