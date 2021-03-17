// Buttone per fare partire  tutto
var btn = document.getElementById('gameBegin');
btn.addEventListener('click', randomNumber);

// Funzione di random
var rndArray;

function randomNumber (min, max){

  rndArray = [];
  var rndMin = 1;
  var rndMax = 100 - 1 + 1;

  while (rndArray.length < 5) {

    var rnd = Math.floor(Math.random() * rndMax) + rndMin;
    if (rndArray.includes(rnd)) {

    }
    else {
      rndArray.push(rnd)
    }

  }

  console.log(rndArray);
  alert('Ricordati questi numeri:' + rndArray);

  timer();

}

// funzione di timer 30 secondi
function timer (){

  var sec;
  var clock;

  function tick() {

    document.getElementById('title').innerHTML = sec--;
    if (sec < 0) {

      clearInterval(clock);
      game();
    }
  }

  function init() {

    sec = 1;
    clock = setInterval(tick, 1000);

  }

  init();

}

// Funzione per inserire 5 numeri random da ricordare

function game (){

  var arrUser = [];
  var numbersnone = [];

  while (arrUser.length + numbersnone.length < 5) {

    var numberUser = parseInt(prompt('Inserisci numeri che dovevi ricordare:'))

    if (rndArray.includes(numberUser)) {
      // arrUser.push(numberUser);

      if (arrUser.includes(numberUser)) {
        alert("Avete gia inserito questo numero")
      }
      else {
        arrUser.push(numberUser);
      }

    }
    else {

      if (numbersnone.includes(numberUser)) {
        alert("Avete gia inserito questo numero")
      }
      else {
        numbersnone.push(numberUser);
      }

    }

    console.log("Numeri Giusti",  arrUser, "Numeri Sbagliati",  numbersnone);


  }


  if (arrUser.length == 5 ) {
    var winer = document.getElementById('winer').innerHTML =
    ('You Win');
    console.log("You Win");
  }
  else {
    var loser = document.getElementById('loser').innerHTML =
    ('You Lose');
    console.log('You Lose');
  }

  var numbersPc = document.getElementById('numbersPc').innerHTML = 'Numeri che dovevi ricordare: ' + rndArray;
  var numbersCorrect = document.getElementById('numbersCorrect').innerHTML = 'Numeri Giusti che avete inseriti: ' + arrUser.length + ' (che sono)= ' + arrUser;
  var numbersWrong = document.getElementById('numbersWrong').innerHTML = 'Numeri Sbagliati che avete inseriti: ' + numbersnone.length + ' (che sono)= ' + numbersnone;
}

// randomNumber(1, 100);
// timer();
// game();
