// Declare variables below to save the different divs of your story.
let optionTwoBtn = document.querySelector('.option-two');
let optionTwoScreen = document.querySelector('.option-two-screen');
let opening = document.querySelector('.story-opening');
let butHome = document.querySelector('.buttons-home');
let tit = document.querySelector('.title');

optionTwoBtn.addEventListener('click', function() {
    optionTwoScreen.style.display = 'block';
    opening.style.display = 'none';
    butHome.style.display = 'none';
    tit.style.display = 'none';

});

let nept = document.querySelector('.neptnue');
let optionTwoEnd = document.querySelector('.option-two-end');

nept.addEventListener('click', function(){
    optionTwoEnd.style.display = 'block';
    optionTwoScreen.style.display = 'none';

});

let again = document.querySelector('.startAgain');

again.addEventListener('click', function() {
    opening.style.display = 'block';
    butHome.style.display = 'block';
    tit.style.display = 'block';
    optionTwoEnd.style.display = 'none';
    

});


let optionOneBtn = document.querySelector('.option-one');
let optionOneScreen = document.querySelector('.option-one-screen');

optionOneBtn.addEventListener('click', function() {
    optionOneScreen.style.display = 'block';
    opening.style.display = 'none';
    butHome.style.display = 'none';
    tit.style.display = 'none';

});

let nit = document.querySelector('.nitrogen');
let optionOneEnd = document.querySelector('.option-one-end');

nit.addEventListener('click', function() {
    optionOneScreen.style.display = 'none';
    optionOneEnd.style.display = 'block';

});

let again2 = document.querySelector('.startAgain2');

again.addEventListener('click', function() {
    opening.style.display = 'block';
    butHome.style.display = 'block';
    tit.style.display = 'block';
    optionOneEnd.style.display = 'none';
    

});



// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });