/*
###The Ultimate Life Decider Never make a decision again!
####Part One - The Coin of Inevitability
Create a file called decider.js
Write a function called coinFlip that 'console.logs' HEADS or TAILS when called
Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.
*/

var winner;
var noOfFlip = 5;
var countHeads = 0;
var countTails = 0;
var scoreIndex = 0;
var coinInterval= 0;
var interval =0;

var x = document.querySelectorAll('.flipCoin')[0];
x.addEventListener("click",flipCoin);

function runFlip(){
  coinFlip();
  noOfFlip--;
  if (noOfFlip <= 0){
    clearInterval(interval);
    clearInterval(coinInterval);
  }
}

function coinFlip(){
  var result = Math.random() >= 0.5;
  if(result === true){
    countHeads = countHeads + 1;
    document.querySelectorAll('.scores')[scoreIndex].innerHTML = 'Coffee';
    document.querySelectorAll('.scores')[scoreIndex].style.backgroundColor = 'purple';
    document.querySelectorAll('.scores')[scoreIndex].style.color = 'white';

  } else {
    countTails = countTails+ 1;
    document.querySelectorAll('.scores')[scoreIndex].innerHTML = 'Savings';
    document.querySelectorAll('.scores')[scoreIndex].style.backgroundColor = 'lightgrey';
    document.querySelectorAll('.scores')[scoreIndex].style.color = 'black';
  }
  scoreIndex = scoreIndex+ 1;
}

function computeResult(){
  clearInterval(coinInterval);
  if(countHeads > countTails){
    winner = "Coffee";
    x.classList = "coin2";
  }else {
    winner = "Savings";
    x.classList = "flipCoin";
  }
  console.log("The winner is "+ winner);
  document.querySelectorAll('.center h3')[0].innerHTML = 'Your $4 goes to '+winner;
}
/*
#####Part Two - The Coin App
Create a file called decider.html
Find any coin image online
Link the .js file, while you're there you may also decide to add a .css file for some styling
Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.
*/

function flipCoin() {
  reset();
  x.classList = "flipCoin";
  coinInterval = setInterval(function(){x.classList.toggle("coin2");},500);
  interval = setInterval(runFlip,1000);
  setTimeout(computeResult,5000);
  }

function reset(){
  console.log('reseting!');
  noOfFlip = 5;
  countHeads = 0;
  countTails = 0;
  scoreIndex = 0;
  winner = "";

  document.querySelectorAll('.center h3')[0].innerHTML = 'Coffee or Savings?';
  for (i=0; i<5; i++){
    document.querySelectorAll('.scores')[i].innerHTML = 'Coin '+ (i+1);
    document.querySelectorAll('.scores')[i].style.backgroundColor = 'white';
    document.querySelectorAll('.scores')[i].style.color = 'grey';
  }

  for (y=0; y<=interval; y++){
    clearInterval(interval);
  }

  for(z=0; z<=coinInterval;z++){
    clearInterval(coinInterval);
  }
}
