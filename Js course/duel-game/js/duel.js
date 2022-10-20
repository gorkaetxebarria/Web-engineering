const keyF = 70, keyJ = 74;
const wait = "Please, wait for the signal";
const now = "Now!";

var canShoot = false;
var firstShooter = true;
var countPlayer1 = 0, countPlayer2 = 0;

window.onload = function(){
  document.addEventListener('keydown', shoot);
  document.getElementById("restart").addEventListener("click", restart)
}

function restart(){
  let texts = document.getElementsByClassName("changingText");
  document.getElementById("restart").innerHTML = "Restart";
  
  firstShooter = true;
  
  //Update text saying to wait
  for(let i = 0; i< texts.length; i++) texts[i].innerHTML = wait;
  
  //Random counter between 2000 and 5000 (miliseconds)
  let time = Math.random()*3000 + 2000;

  setTimeout(function(){
    //Check if none have already shot
    if(firstShooter){   //SE PUEDE HACER CLEAR TIMEOUT AL DISPARAR ANTES DE TIEMPO PARA DETENER EL TIMEOUT
      canShoot = true;
      for(let j = 0; j< texts.length; j++) texts[j].innerHTML = now;
    }

    },time);
}

function shoot(e){
  let key = e.which;

  if((key == keyF || key == keyJ) && firstShooter){  //F-J
    firstShooter = false;
    if(canShoot) {
      canShoot = false;
      updateWinnerLoser(key, false);
    }
    else{
      updateWinnerLoser(key, true);
    }
  }
}

function updateWinnerLoser(key, early){
  //Probable text updates
  let win = "You win! :)";
  let lose = "You lose! :(";
  let soonLose = "No way, too soon! You lose!";
  let soonWin = "You win! The other player shoot too soon";
  //Elements to update the text
  let player1 = document.getElementById("player1");
  let player2 = document.getElementById("player2");

  if(early){
    
    if(key == keyF){        //Player 1 shot too early
      countPlayer2++;
      winner(player2, countPlayer2, soonWin);
      loser(player1, soonLose);
    }
    else{                   //Player 2 shot too early
      countPlayer1++;
      winner(player1, countPlayer1, soonWin);
      loser(player2, soonLose);
    }
  }
  else if(key == keyF){     //Player 1 shot first
    countPlayer1++;
    winner(player1, countPlayer1, win);
    loser(player2, lose);
  } 
  else{                     //Player 2 shot first
    countPlayer2++;
    winner(player2, countPlayer2, win);
    loser(player1, lose);
  }
}

function winner(element, count, text){ 
  let childs = element.children;
  let str = childs[0].innerHTML;
  let length = childs[0].innerHTML.length;

  let winLength = count.toString().length;

  //Update win count
  childs[0].innerHTML = str.slice(0, length-winLength-1) + count + ")";

  //Update text of winner
  childs[1].innerHTML = text;
}

function loser(element, text){
  let childs = element.children;

  //Update text of loser
  childs[1].innerHTML = text;
}