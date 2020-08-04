   //variables for main page
  var randomNum = document.getElementById('random');
  var clickBox = document.getElementById('click-box')
  var ply1Num = document.querySelector('.num1-input');
  var ply2Num = document.querySelector('.num2-input');
  var announce = document.querySelector('.announce');
  var score1 = document.getElementById('score1');
  var score2 = document.getElementById('score2');
  var ply1Name = document.querySelector('.name1-input');
  var ply2Name = document.querySelector('.name2-input')

  /*----------------------------------------------*/

  var magicNum = function() {
    theNumber = Math.floor(Math.random() * (100 - 1) + 1);
    
    randomNum.textContent = theNumber;
    //if player 1 wins
    if (Math.abs(theNumber - parseFloat(ply1Num.value)) > Math.abs(theNumber - parseFloat(ply2Num.value))) {
      announce.textContent = ply2Name.value + ' Wins!';
      score2.textContent += '*'
    } else if ((theNumber - parseFloat(ply1Num.value)) === (theNumber - parseFloat(ply2Num.value))) {
      announce.textContent = 'You tied, Play Again!'
    } else {
      announce.textContent = ply1Name.value + ' wins!';
      score1.textContent += '*'
    }
    // Math.abs(theNumber - parseFloat(ply1Num.value)) > Math.abs(theNumber - parseFloat(ply2Num.value)) ?
    //  announce.textContent = 'Player 2 Wins!' :
    //  //if both tie
    //  (theNumber - parseFloat(ply1Num.value)) === (theNumber - parseFloat(ply2Num.value)) ?
    //   announce.textContent = 'You tied, Play Again!' :
    //   //otherwise player 2 wins
    //   announce.textContent = 'Player 1 wins!';    
  }
  var click = clickBox.addEventListener('click', magicNum);
  





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
 


 



  
   
  