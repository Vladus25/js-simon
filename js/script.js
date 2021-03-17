// Buttone per fare partire  tutto
var btn = document.getElementById('calculate');
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
var sec;
var clock;

function timer (){

  function tick() {

    document.getElementById('title').innerHTML = sec--;
    if (sec < 0) {

      clearInterval(clock);

    }
  }

  function init() {

    sec = 30;
    clock = setInterval(tick, 1000);

  }

  init();

  setTimeout(game, 30100);
}

// Funzione per inserire 5 numeri random da ricordare
var arrUser;

function game (){

  arrUser = [];

  for (var i = 0; i < 5; i++) {

    var numberUser = parseInt(prompt('Inserisci numeri che dovevi ricordare:'))

    if (rndArray.includes(numberUser)) {
      arrUser.push(numberUser);
    }

    console.log(arrUser);

  }


  if (arrUser.length == 5 ) {
    var winer = document.getElementById('winer').innerHTML =
    ('You Win, hai ricordato tutti numeri');
    console.log("You Win, hai ricordato tutti numeri");
  }
  else {
    var loser = document.getElementById('loser').innerHTML =
    ('You Lose, ma hai indovinato: ' + arrUser.length + ' numeri che sono = ' + arrUser);
    console.log('You Lose, ma hai indovinato: ' + arrUser.length + ' numeri che sono = ' + arrUser);
  }

  var numbersPc = document.getElementById('numbersPc').innerHTML = 'Numeri che dovevi ricordare: ' + rndArray;
  var numbersUser = document.getElementById('numbersUser').innerHTML = 'Numeri indovinati: ' + arrUser;
}

// randomNumber(1, 100);
// timer();
// setTimeout(game, 2100);
