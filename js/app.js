'use strict';

console.log('ready to rock');



window.addEventListener('load', (event) => {
    console.log('page is locked and loaded');

var name = prompt('Hello! Who are you?');

alert('Hello, ' + name + '. Thanks for visiting!');

alert('Please, answer "yes" or "no" to the following questions.');



function promptMe() {
    var firstQ = prompt('Did I study cooking and food science?').toLowerCase();
while (firstQ !== 'yes') {
    firstQ = alert('No. Not right. Thanks for trying, though.').toLowerCase();
}
}




while(study !== 'yes' || study !== 'no') {

}


var firstQ = function() {while(study !== 'yes' || study !== 'no') {
       
    
    var study = function () {prompt('Did I study cooking and food science?').toLowerCase();

    // alert('Please enter either "yes" or "no."');
  if(study === 'yes') {
    alert('You are right. For one year out of high school. Good work!');
  } else if(study === 'no') {
    alert('No. Not right. Thanks for trying, though.');
} else {
    alert('Please enter either "yes" or "no."');
}
   }}

















console.log(firstQ);

var dogs = prompt('Do I own 3 dogs?').toLowerCase();

if(dogs === 'yes') {
    alert('Good guess, but wrong.');
} else if(dogs === 'no') {
    alert('Correct! I have neither the time nor the money.');
} else {
    alert('Please enter either "yes" or "no."');
}

console.log(dogs);

var deltaV = prompt('Am I a Delta V student?').toLowerCase();

if(deltaV === 'yes') {
    alert('Yes! And Iowa\'s first Digital Marketing Apprentice.');
} else if(deltaV === 'no') {
    alert('Wrong. But I know you can do better!');
} else {
    alert('Please enter either "yes" or "no."');
}

console.log(deltaV);

var fastFood = prompt('Have I managed a fast food restaurant?').toLowerCase();

if(fastFood === 'yes') {
    alert('Yep, at 3 different Burger Kings in Omaha, Nebraska.');
} else if(fastFood === 'no') {
    alert('Incorrect.');
} else {
    alert('Please enter either "yes" or "no."');
}

console.log(fastFood);

var sopes = prompt('Do I enjoy making sopes?').toLowerCase();

if(sopes === 'yes') {
    alert('You are right. A solid guess.');
} else if(sopes === 'no') {
    alert('No, I  really do.');
} else {
    alert('Please enter either "yes" or "no."');
}

console.log(sopes);

alert('Thanks for playing ' + name + '.');

});