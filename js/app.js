'use strict';

console.log('ready to rock');

/////////////global variables///////////////////////
var arrayQ = ['Did I study cooking and food science?', 'Do I own 3 dogs?', 'Am I a Delta V student?', 'Have I managed a fast food restaurant?', 'Do I enjoy making sopes?'];
var arrayT = ['You are right. For one year out of high school. Good work!', 'Correct! I have neither the time nor the money.', 'Yes! And Iowa\'s first Digital Marketing Apprentice.', 'Yep, at 3 different Burger Kings in Omaha, Nebraska.', 'You are right. A solid guess.'];
var arrayF = ['No. Not right. Thanks for trying, though.', 'Good guess, but wrong.', 'Wrong. But I know you can do better!', 'Incorrect.', 'No, I really do.', 'Please answer "yes" or "no".'];
var arrayA = ['yes', 'no', 'yes', 'yes', 'yes'];
var userPoints = 0
var name = prompt('Hello! Who are you?');
var count = 0;
var randomNumber = Math.ceil(Math.random()*10);
console.log('random answer: ' + randomNumber);

////////////////////functions////////////////////////
alert('Hello, ' + name + '. Thanks for visiting!');

alert('Please, answer "yes" or "no" to the following questions.');

for(var i=0; i<5; i++) {
    console.log(i);
    var answer = prompt(arrayQ[i]).toLowerCase();
    console.log(arrayQ[i] + ' = ' + answer);
    if(answer !== 'yes' && answer !== 'no'){
        alert(arrayF[5]);
        i--;
    }else if(answer === arrayA[i]) {
        alert(arrayT[i]);
        userPoints++;
        console.log('gpoints: ' + userPoints);
    }else{alert(arrayF[i]);}
}

for (count = 0; count<=4; count++) {
    console.log('count:' + count);
    prompt('Can you guess what number between 1 and 10 I\'m thinking of? Give it a go!');
}












alert('Thanks for playing ' + name + '.');
