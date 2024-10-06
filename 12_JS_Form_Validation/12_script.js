// validate Form
let validateForm = () => {
    let isFormValid = validateUserName()
                       && validateEmail()
                       && validatePassword()
                       && validateConfirmPassword()
                       && validatePasswordMatch();
    if(isFormValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return  false;
    }
};

// validate User Name
let validateUserName = () => {
    let inputField = document.querySelector('#username');
    if(inputField.value === ''){
        applyColors(inputField , 'orangered');
        displayErrorMessage('Username is Required');
        return false;
    }
    else if(inputField.value.length < 5){
        applyColors(inputField , 'orangered');
        displayErrorMessage('Min 5 letters Required');
        return false;
    }
    else if(!inputField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors(inputField , 'orangered');
        displayErrorMessage('No Special Characters');
        return false;
    }
    else{
        applyColors(inputField , 'limegreen');
        return  true;
    }
};

// validate Email
let validateEmail = () => {
    let inputField = document.querySelector('#email');
    if(inputField.value === ''){
        applyColors(inputField , 'orangered');
        displayErrorMessage('Email is Required');
        return false;
    }
    else{
        applyColors(inputField , 'limegreen');
        return  true;
    }
};

// validate Password
let validatePassword = () => {
    let inputField = document.querySelector('#password');
    if(inputField.value === ''){
        applyColors(inputField , 'orangered');
        displayErrorMessage('Password is Required');
        return false;
    }
    else{
        applyColors(inputField , 'limegreen');
        return  true;
    }
};

// validate Confirm Password
let validateConfirmPassword = () => {
    let inputField = document.querySelector('#c_password');
    if(inputField.value === ''){
        applyColors(inputField , 'orangered');
        displayErrorMessage('Confirm Password is Required');
        return false;
    }
    else{
        applyColors(inputField , 'limegreen');
        return  true;
    }
};

// validate Password Match
let validatePasswordMatch = () => {
    let passwordField = document.querySelector('#password');
    let confirmPasswordField = document.querySelector('#c_password');
    if(passwordField.value !== confirmPasswordField.value){
        applyColors(passwordField , 'orangered');
        applyColors(confirmPasswordField , 'orangered');
        displayErrorMessage('Passwords are NOT Matched');
        return false;
    }
    else{
        applyColors(passwordField , 'limegreen');
        applyColors(confirmPasswordField , 'limegreen');
        return  true;
    }
};

// apply Colors
let applyColors = (inputField , color) => {
    inputField.style.borderColor = color;
    inputField.style.boxShadow = `0 0 10px ${color}`;
};

// display Error Message
let displayErrorMessage = (message) => {
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = message;
    document.querySelector('#error-msg').appendChild(h3Tag);
    setTimeout(removeErrorMessage,2000);
};

// remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};