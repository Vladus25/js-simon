// Funzione di random
var rndArray;

function randomNumber (min, max){

  rndArray = [];

  for (var i = 0; i < 5; i++) {
    var rndMin = min;
    var rndMax = max - min + 1;
    var rnd = Math.floor(Math.random() * rndMax) + rndMin;
    var nuovo = true;

    // Ciclo per distinguere numeri presenti dentro arrei
    for(var x = 0; x < i; x++){

      if(rndArray[x] == rnd) nuovo = false;

    }
    // Se un numero non presente gia dentro arrei lo aggiunge
    if(nuovo){

      rndArray[i] = rnd;

    }
    // Se un numero presente gia dentro arrei lo toglie
    else{

      i--;

    }

  }

  console.log(rndArray);
  alert('Ricordati questi numeri:' + rndArray);
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

    sec = 5;
    clock = setInterval(tick, 1000);

  }

  init();
}

// Funzione per inserire 5 numeri random da ricordare
var arrUser;

function game (){

  var arrUser = [];

  for (var i = 0; i < rndArray.length; i++) {

    var numberUser = parseInt(prompt('Inserisci numeri che dovevi ricordare:'))

    if (rndArray.includes(numberUser)) {
      arrUser.push(numberUser);
    }

    console.log(arrUser);

  }
  // var numbersUser = document.getElementById('numbersUser').innerHTML = 'Numeri indovinati: ' + arrUser;

  if (rndArray = arrUser) {
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

randomNumber(1, 100);
timer();
setTimeout(game, 6100);
