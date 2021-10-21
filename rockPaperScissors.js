/*Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.
*/
//arrow fuction to allow the user input.
const getUserChoice=userInput=>{
  userInput = userInput.toLowerCase();//to convert all user inputs into lower case letter.
if (userInput ==='rock'|| userInput ==='paper' || userInput==='scissors'){
  return userInput;
}else {
  console.log('Error!');
}
}
//console.log(getUserChoice('Paper')); // should print 'paper'
//console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`
const getComputerChoice=()=>{
  const randomNumber=Math.floor(Math.random()*3);
  switch (randomNumber){
    case 0 :
      return 'rock';
    case 1 :
      return 'paper';
    case 2:
      return 'scissors'
  }
};
//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());


// determine the winner of the game by user choice and computer choice.
const determineWinner=(userChoice,computerChoice)=>{
  if (userChoice===computerChoice){
    return 'The game is a tie';
  }
  if (userChoice ==='rock'){
    if (computerChoice ==='paper'){
      return 'The computer won !';
    }else{
      return 'You won!';
    }
  }

  if (userChoice ==='paper'){
    if (computerChoice==='scissors'){
      return 'The computer won!';
    }else {
      return 'You won!';
    }
  }

  if (userChoice ==='scissors'){
    if(computerChoice ==='rock'){
      return 'The computer won !';
    }else {
      return 'You won !';
    }
  }
};

console.log(determineWinner('paper','scissors'));
console.log(determineWinner('paper','paper'));
console.log(determineWinner('paper','rock'));
//determining who won.
const playGame=()=>{
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
 

