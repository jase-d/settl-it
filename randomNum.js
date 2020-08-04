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

  /*----------------------------------------------*/
  var reset = function() {

  }

  /*----------------------------------------------*/

  var magicNum = function() {
    theNumber = Math.floor(Math.random() * (100 - 1) + 1);
    randomNum.textContent = theNumber;
    //if player 1 wins
    if (Math.abs(theNumber - parseFloat(ply1Num.value)) > Math.abs(theNumber - parseFloat(ply2Num.value))) {
      score2.textContent += '*'
      if (score2.textContent.length === 2) {
        randomNum.textContent = ply2Name.value + ' has to: ' + wager.value;
        score1.textContent = '';
        score2.textContent = '';
        // randomNum.textContent = 'Play Again?'
      }
    } else if ((theNumber - parseFloat(ply1Num.value)) === (theNumber - parseFloat(ply2Num.value))) {
      randomNum.textContent = 'You tied, Play Again!'
    } else {
      score1.textContent += '*'
      if (score1.textContent.length === 2) {
        randomNum.textContent = ply2Name.value + ' has to: ' + wager.value;
        score1.textContent = '';
        score2.textContent = '';
        // randomNum.textContent = 'Play Again?'
      }
    }  
  }
  var click = clickBox.addEventListener('click', magicNum);


  
  // var resultWait;
  // var wait = function() {
  //   resultWait = window.setInterval(magicNum, 1000);
  // }
  // var show = function() {
  //   window.clearTimeout(wait);
  // }

  // var click = clickBox.addEventListener('click', wait)
  





  // var windStop = function () {
  //   window.clearInterval(windUp)
  // }
//   window.addEventListener('click', windStop);

  
  
    //variables for log in page
  // var wagerIn = document.getElementById('wager-input');
  // var playerOne = {};
  // var playerTwo = {};
  // playerOne.name = document.getElementById('one-name').value;
  // playerTwo.name = document.getElementById('two-name').value;
  // playerOne.number = document.getElementById('number-one').value;
  // playerTwo.number = document.getElementById('number-two').value;
  // var cont = document.getElementById('continue');
 


 



  
   
  