//function convertToF(celcius){
//    console.log('calling convertToF');
//    console.log('converting celcius: ', celcius);
//    return (9 / 5) * celcius + 32;
//}
//
//const fTemp = convertToF(42);
//console.log(fTemp);

const preElem = document.getElementById('prefix');
const nameElem = document.getElementById('name');
const lastElem = document.getElementById('last-name');
const greetElem = document.getElementById('greeting');

preElem.textContent = 'Sir';
nameElem.textContent = 'black';
nameElem.textContent = 'Connor';
nameElem.style.color = 'black';
lastElem.textContent = 'McCue';
lastElem.style.color = 'black';
greetElem.textContent = 'Hello welcome to Chilis';
greetElem.style.color = 'red';
const container = document.getElementById('name-tag');
container.style.backgroundColor = 'white';
console.log('containers are cool');

// PREFIX BUTTON - Update Prefix
// make a variable for the button, the input, and nameDiv
const preInput = document.getElementById('prefix-input');
const preButton = document.getElementById('pre-btn');
const preDiv = document.getElementById('prefix');
// example to update if name changes
preInput.addEventListener('input', ()=> {
    console.log('I want my baby-back baby-back baby-back...');
});

// add event listener to the button -- "listen for the click"

preButton.addEventListener('click', () => {
    console.log('I wish I was at Chilis');
  // get the value from the input
    const value = preInput.value;
    console.log(value);
  // replace the value in the name div with the input
    preDiv.textContent = value;
});


// BUTTON 1 - Update First Name
// make a variable for the button, the input, and nameDiv
const nameInput = document.getElementById('name-input');
const updateButton = document.getElementById('update-btn');
const nameDiv = document.getElementById('name');
// example to update if name changes
nameInput.addEventListener('input', ()=> {
    console.log('Anyone know any good TexMex chain restaurants??');
});

// add event listener to the button -- "listen for the click"

updateButton.addEventListener('click', () => {
    console.log('clicking the button');
  // get the value from the input
    const value = nameInput.value;
    console.log(value)
  // replace the value in the name div with the input
    nameDiv.textContent = value;
});

// BUTTON 2 - Update Last Name
// make a variable for input, button, and lastDiv
const lastInput = document.getElementById('last-name-input');
const lastButton = document.getElementById('last-btn');
const lastDiv = document.getElementById('last-name');

// example to update if name changes
lastButton.addEventListener('input', ()=> {
    console.log('huh??');
});

// add event listener
lastButton.addEventListener('click', ()=> {
    console.log('quit touching me!');
// get the value from the button input
    const value = lastInput.value;
    console.log(value);
// replace the value of fontDiv with the input
    lastDiv.textContent = value;
}

);

// BUTTON Small - Increase Font Size
// make a variable for input, button, and lastDiv
const smallButton = document.getElementById('small-btn');
// add event listener
smallButton.addEventListener('click', ()=> {
    console.log('is this an name tag for ants????');
// change font size
    document.getElementById('greeting').style.fontSize = 'smaller';
    document.getElementById('prefix').style.fontSize = 'smaller';
    document.getElementById('name').style.fontSize = 'smaller';
    document.getElementById('last-name').style.fontSize = 'smaller';

}
)
// BUTTON Big - Increase Font Size
// make a variable for input, button, and lastDiv
const bigButton = document.getElementById('big-btn');
// add event listener
bigButton.addEventListener('click', ()=> {
    console.log('need glasses much???');
// change font size
    document.getElementById('greeting').style.fontSize = 'larger';  
    document.getElementById('prefix').style.fontSize = 'larger';
    document.getElementById('name').style.fontSize = 'larger';
    document.getElementById('last-name').style.fontSize = 'larger';
}
);

// BUTTON Normal - Increase Font Size
// make a variable for input, button, and lastDiv
const normalButton = document.getElementById('normal-btn');
// add event listener
normalButton.addEventListener('click', ()=> {
    console.log('we all just want to be normal');
// change font size
    document.getElementById('greeting').style.fontSize = 'initial';
    document.getElementById('prefix').style.fontSize = 'initial';
    document.getElementById('name').style.fontSize = 'initial';
    document.getElementById('last-name').style.fontSize = 'initial';
}

);

//document.getElementById("demo").style.fontSize = "x-large";

// same function as updateButton but in 3 lines
//function clickHandler(){
//  console.log("clicking");
//};

