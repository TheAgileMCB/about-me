'use strict';

console.log('ready to rock');

/////////////global variables///////////////////////
var arrayQ = ['Did I study cooking and food science?', 'Do I own 3 dogs?', 'Am I a Delta V student?', 'Have I managed a fast food restaurant?', 'Do I enjoy making sopes?'];
var arrayT = ['You are right. For one year out of high school. Good work!', 'Correct! I have neither the time nor the money.', 'Yes! And Iowa\'s first Digital Marketing Apprentice.', 'Yep, at 3 different Burger Kings in Omaha, Nebraska.', 'You are right. A solid guess.'];
var arrayF = ['No. Not right. Thanks for trying, though.', 'Good guess, but wrong.', 'Wrong. But I know you can do better!', 'Incorrect.', 'No, I really do.', 'Please answer "yes" or "no".'];
var arrayA = ['yes', 'no', 'yes', 'yes', 'yes'];
var arrayD = ['charlie', 'gideon', 'abby'];
var userPoints = 0;
var count = 0;
var randomNumber = Math.ceil(Math.random() * 10);

////////////////////functions////////////////////////
function greeting() {
  var name = prompt('Hello! Who are you?');
  alert('Hello, ' + name + '. Thanks for visiting!');
}
greeting();

function quiz() {

  alert('Please, answer "yes" or "no" to the following questions.');

  for (var i = 0; i < 5; i++) {
    var answer = prompt(arrayQ[i]).toLowerCase();
    if (answer !== 'yes' && answer !== 'no') {
      alert(arrayF[5]);
      i--;
    } else if (answer === arrayA[i]) {
      alert(arrayT[i]);
      userPoints++;
    } else { alert(arrayF[i]); }
  }

  for (count = 0; count < 4; count++) {
    var guess = parseInt(prompt('Can you guess what number between 1 and 10 I\'m thinking of? Give it a go!'));
    if (guess > randomNumber) { alert('Too high, my friend!'); } else if (guess < randomNumber) { alert('Too low, my friend!'); } else if (guess === randomNumber) {
      alert('Nailed it!');
      userPoints++;
      break;
    } else { alert('Please, enter a number!'); }
  }
  for (var j = 0; j < 1; j++) {
    var answerD = prompt('Which of the following is the name of a dog I have raised?\n Charlie, Moose, Gideon, Abby, Bones, Zack, Scruff McGruff, or Linkin Bark').toLowerCase();
    if (answerD === arrayD[0] || answerD === arrayD[1] || answerD === arrayD[2]) {
      alert('Good work!');
      userPoints++;
    } else { alert('Wrong, but good try!'); }
  }



  alert(userPoints + ' points! Thanks for playing!');
}

