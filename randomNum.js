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

  /*----------------------------------------------*/
  var reset = function() {

  }

  /*----------------------------------------------*/

  var magicNum = function() {
    button.style.opacity = "0%"
    score1.style.textDecoration= "none"
    theNumber = Math.floor(Math.random() * (100 - 1) + 1);
    randomNum.textContent = theNumber;
    //if player 1 wins
    if (Math.abs(theNumber - parseFloat(ply1Num.value)) > Math.abs(theNumber - parseFloat(ply2Num.value))) {
      score2.textContent += '|'
      if (score2.textContent.length === 5) {
        randomNum.textContent = ply1Name.value + ' has to ' + wager.value;
        score2.style.textDecoration= "line-through"
        score2.style.textDecorationColor= "red"
        score1.textContent = '';
        score2.textContent + ' ';
        // randomNum.textContent = 'Play Again?'
      } else if (score2.textContent.length === 6) {
        button.style.opacity = "100%"
        button.textContent = "Play Again?"
        randomNum.textContent = '';
        score2.textContent = '';
        score1.textContent = '';
      }
    } else if ((theNumber - parseFloat(ply1Num.value)) === (theNumber - parseFloat(ply2Num.value))) {
      randomNum.textContent = 'You tied? Terrible luck please leave!'
    } else {
      score1.textContent += '|'
      if (score1.textContent.length === 5) {
        randomNum.textContent = ply2Name.value + ' has to ' + wager.value;
        score1.style.textDecoration= "line-through";
        score1.style.textDecorationColor= "red";
        score2.textContent = '';
        score1.textContent + ' ';
        // randomNum.textContent = 'Play Again?'
        
      } else if (score1.textContent.length === 6) {
        button.style.opacity = "100%";
        button.textContent = "Play Again?"
        randomNum.textContent = '';
        score2.textContent = '';
        score1.textContent = '';
      }
      
    }
  }
  var start = button.addEventListener('click', function() {
    button.style.opacity = "0%"
  })
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
 


 



  
   
  