// displayWishMessage
let displayWishMessage = (message , color) => {
    let h1Tag = document.querySelector('#msg-1');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.color = 'white';
    h1Tag.style.padding = '10px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Change Image
let changeImage = (imageName) => {
    let imageTag = document.querySelector('#image');
    imageTag.setAttribute('src' , `../img/${imageName}`);
};

// Event Listeners
let printWishMessage = (message , color) => {
    let h1Tag = document.querySelector('#msg-2');
    h1Tag.innerText = message;
    h1Tag.style.backgroundColor = color;
    h1Tag.style.color = 'white';
    h1Tag.style.padding = '10px';
    h1Tag.style.boxShadow = '0 0 10px black';
};

// Good Morning Button
let goodMorningButton = document.querySelector('#gm-btn');
goodMorningButton.addEventListener('click',function () {
    printWishMessage('Good Morning','limegreen');
});

// Good Afternoon Button
let goodAfternoonButton = document.querySelector('#ga-btn');
goodAfternoonButton.addEventListener('click',function () {
    printWishMessage('Good Afternoon','blueviolet');
});

// Good Evening Button
let goodEveningButton = document.querySelector('#ge-btn');
goodEveningButton.addEventListener('click',function () {
    printWishMessage('Good Evening','orangered');
});

// Good Night Button
let goodNightButton = document.querySelector('#gn-btn');
goodNightButton.addEventListener('click',function () {
    printWishMessage('Good Night','purple');
});