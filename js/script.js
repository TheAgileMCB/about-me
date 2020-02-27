'use strict';

console.log('ready to rock');

var arrayQ = ['Did I study cooking and food science?', 'Do I own 3 dogs?', 'Am I a Delta V student?', 'Have I managed a fast food restaurant?', 'Do I enjoy making sopes?']

var arrayT = ['You are right. For one year out of high school. Good work!', 'Correct! I have neither the time nor the money.', 'Yes! And Iowa\'s first Digital Marketing Apprentice.', 'Yep, at 3 different Burger Kings in Omaha, Nebraska.', 'You are right. A solid guess.']

var arrayF = ['No. Not right. Thanks for trying, though.', 'Good guess, but wrong.', 'Wrong. But I know you can do better!', 'Incorrect.', 'No, I really do.', 'Please answer "yes" or "no".']

var userPoints = 0
var answer = math.random();

var name = prompt('Hello! Who are you?');

alert('Hello, ' + name + '. Thanks for visiting!');

alert('Please, answer "yes" or "no" to the following questions.');

for(var i=0; i>5; i++) {
    console.log(i);
    var answer = prompt(arrayQ[i]).toLowerCase;
    if(answer === 'yes') {
        alert(arrayT[i]);
        userPoints++;
    }else if(answer === 'no') {
        alert(arrayF[i]);
    }else{alert(arrayF[5]);}
}












alert('Thanks for playing ' + name + '.');
