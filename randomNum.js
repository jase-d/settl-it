 
  var randomNum = document.getElementById('random');
  var clickBox = document.getElementById('click-box')
  var ply1Num = document.querySelector('.num1');
  var ply2Num = document.querySelector('.num2');
  var announce = document.querySelector('.announce');
  ply1Num.textContent = 24;
  ply2Num.textContent = 78;
  var theNumber, windUp;
  var x = 0;

  var magicNum = function() {
    theNumber = Math.floor(Math.random() * (100 - 1) + 1);
    randomNum.textContent = theNumber;
    Math.abs(theNumber - 24) > Math.abs(theNumber - 78) ? announce.textContent = 'Player 2 Wins!' : (theNumber - ply1Num) === (theNumber - ply2Num) ? announce.textContent = 'You tied, Play Again!' : announce.textContent = 'Player 1 wins!'
    // windUp = window.setInterval(magicNum, 3000); 
    
    x++

    
  }
  var click = clickBox.addEventListener('click', magicNum);
  
  var windStop = function () {
    window.clearInterval(windUp)
  }
//   window.addEventListener('click', windStop);

  
  
  
 


 



// var magicNum = function(x, ply1, ply2, round) {

//   let results1 = [];
//   let results2 = [];
//   let i = 1

//   while (i <= round) {
//   var num = Math.floor(Math.random() * (x - 1) + 1);
//   var score1 = Math.abs(num - ply1);
//   var score2 = Math.abs(num - ply2);
//   console.log(score1, score2)
//   score1 < score2 ? results1.push('ply1 wins') : 
//   score1 === score2 ? 'tie' : results2.push('ply2 wins!');
//   i++
//   }

//   var winner = function() {
//   return results1.length > results2.length ? 'ply2 ' + wager : results1.length === results2.length ? 'tied!' : 'ply1 ' + wager
// }
//   return winner()
// }

  
//   var winner = function(results1, results2) {
//     return results1.length > results2.length ? 'ply2 ' + wager : results1.length === results2.length ? 'tied!\nAgain?' : 'ply1 ' + wager
  
  
  
  
  
//   var player1 = 50;
//   var player2= 30;
//   var wager = 'will do the dishes'
//   var highest = 100;
//   var rounds = 3;
//   magicNum(highest, player1, player2, rounds)
  
   
  