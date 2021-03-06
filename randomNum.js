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
  var stopButton = document.getElementById('stop');
  var continueButton = document.getElementById('continue');
  var theNumber;
  /*----------------------------------------------*/
  //          helper functions
  
  var winner = function(scoreA, scoreB, opponent) {
    // scoreA.style.textDecoration= "line-through";
    // scoreA.style.textDecorationColor= "red";
    scoreA.textContent = '';
    scoreB.textContent = '';
    randomNum.textContent = opponent.value + ' has to ' + wager.value;
    continueButton.textContent = 'Play Again?'
  }

  var initial = function() {
    clearInterval(randomWheel);
    continueButton.textContent = 'Continue'
    theNumber = Math.floor(Math.random() * (100 - 1) + 1);
    randomNum.textContent = theNumber;
  }
  /*----------------------------------------------*/
  //              game sequence

  var settl = function() {
    //clears style & animation, posts random number
    initial();
    //if both players tie
    if ((theNumber - parseFloat(ply1Num.value)) === (theNumber - parseFloat(ply2Num.value))) {
      randomNum.textContent = 'You tied? Terrible luck please leave!';
    }
    //if player 2 wins round
    if (Math.abs(theNumber - parseFloat(ply1Num.value)) > Math.abs(theNumber - parseFloat(ply2Num.value))) {
      score2.textContent += '|';
    //if player 2 wins game
      if (score2.textContent.length === 5) {
        winner(score2, score1, ply1Name);
      }
    //if player 1 wins round
    } else {
      score1.textContent += '|';
    //if player 1 wins game
      if (score1.textContent.length === 5) {
        winner(score1, score2, ply2Name);
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
  var click = continueButton.addEventListener('click', function() {
    stopButton.style.display = 'block';
    continueButton.style.display = 'none';
    windUp()
    randomWheel = setInterval(windUp, 250);
  });

  //Starts number wind up
  var start = stopButton.addEventListener('click', function() {
    stopButton.style.display = 'none';
    continueButton.style.display = 'block';
    settl();
  });