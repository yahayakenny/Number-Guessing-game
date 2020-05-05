const number = document.getElementById('number');
const submit = document.getElementById('submit');
const output = document.getElementById('output');
var correctNum = Math.floor(Math.random() * 10);
var guessesLeft = 3;//The number of tries the player has 

submit.addEventListener('click', outputText);

function outputText() {
//Check to make sure number entered is within the range of 1-10
  if (number.value > 10 || number.value < 1) {
    return (output.innerHTML = 'Please enter a valid number between 1 and 10');
  }
//Check if the number entered is the correct value
  if (number.value == correctNum) {
    number.disabled = true;//Disable input field if it's correct
    number.style.borderColor = 'green';//Change the border color to green
    output.innerHTML =//Then output the following text
      'Your answer ' +
      '(' +
      number.value +
      ')' +
      ' is correct!!, Congratulations, You win!!';

  } else {
    guessesLeft -= 1;//Subract one from the total number of guesses which was set as 3
      if (guessesLeft === 0){
          number.disabled = true;//Disable the input field if the player has no more guesses
          number.style.borderColor = 'red';//Change the border color to red 
          output.innerHTML =  "GAME OVER! YOU LOST! THE CORRECT NUMBER WAS "  + correctNum //Output the following text
         
      }

    else if (guessesLeft !== 0){//If player still has guesses left, do the following
    number.style.borderColor = 'red';//Also change  border color to red
    output.innerHTML =// And output the following text
      'Your answer ' +
      '(' +
      number.value +
      ')' +
      ' is wrong, Please Try again!'


       }

  }
}
