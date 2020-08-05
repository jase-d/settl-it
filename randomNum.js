   //variables for main page
  var randomNum = document.getElementById('random');
  var clickBox = document.getElementById('click-box')
  var ply1Num = document.querySelector('.num1-input');
  var ply2Num = document.querySelector('.num2-input');
  var announce = document.querySelector('.announce');
  var score1 = document.getElementById('score1');
  var score2 = document.getElementById('score2');
  var ply1Name = document.querySelector('.name1-input');
  var ply2Name = document.querySelector('.name2-input');
  var wager = document.querySelector('.wager');
  var button = document.getElementById('btn');
  var cont = document.getElementById('continue');
  var theNumber;
  /*----------------------------------------------*/
  //          helper functions

  var winner = function(scoreA, opponent) {
    scoreA.style.textDecoration= "line-through"
    scoreA.style.textDecorationColor= "red"
    randomNum.textContent = opponent.value + ' has to ' + wager.value;
    button.style.opacity = "100%"
    
    cont.textContent = 'Play Again?'
    score1.textContent = '';
    score2.textContent = '';
    score1.style.textDecoration = "none";
    score2.style.textDecoration = "none";
  }


  /*----------------------------------------------*/
  //              game sequence

  var settl = function() {
    clearInterval(randomWheel);
    button.style.opacity = "0%";
    cont.style.opacity = "100";
    theNumber = Math.floor(Math.random() * (100 - 1) + 1);
    randomNum.textContent = theNumber;
    
    if ((theNumber - parseFloat(ply1Num.value)) === (theNumber - parseFloat(ply2Num.value))) {
      randomNum.textContent = 'You tied? Terrible luck please leave!';
    }

    if (Math.abs(theNumber - parseFloat(ply1Num.value)) > Math.abs(theNumber - parseFloat(ply2Num.value))) {
      score2.textContent += '|';

      if (score2.textContent.length === 5) {
        winner(score2, ply1Name);
      } 
    } else {
      score1.textContent += '|';
      if (score1.textContent.length === 5) {
        winner(score1, ply2Name);
      } 
    }
  }

  /*---------------------------------------------------*/
  //                   animations
  
  var windUp = function () {
    theNumber = Math.floor(Math.random() * (100 - 1) + 1);
    randomNum.textContent = theNumber
  }
  
  /*----------------------------------------------------*/
  //                 event listeners

  //stops wind up presents new number and records wins
  var randomWheel;
  var click = clickBox.addEventListener('click', function() {
    button.style.opacity = '100%';
    cont.style.opacity = '0%';
    windUp()
    randomWheel = setInterval(windUp, 250);
  });

  //Starts number wind up
  var start = button.addEventListener('click', function() {
    button.style.opacity = '0%';
    settl();
  });
  
  
  
 


 



  
   
  