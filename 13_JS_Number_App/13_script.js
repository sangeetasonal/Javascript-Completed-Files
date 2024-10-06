// get the html elements
let numberBox = document.querySelector('#number');
let displayElement = document.querySelector('#text-number');

numberBox.addEventListener('keyup',function() {
    let textEntered = numberBox.value;
    displayElement.innerText = displayWordNumber(textEntered);
});