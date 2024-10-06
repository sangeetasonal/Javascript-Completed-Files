// Key up event on the text Box
let textBox = document.querySelector('#text-box');
let h3Tag = document.querySelector('#msg');
textBox.addEventListener('keyup',function() {
   h3Tag.innerText = textBox.value;
});

// Change event
let selectBox = document.querySelector('#select-box');
let spanTag = document.querySelector('#span-tag');
selectBox.addEventListener('change',function() {
   spanTag.innerText = selectBox.value;
});

// Change Password
let passwordBox = document.querySelector('#password-box');
let checkBox = document.querySelector('#check-box');
checkBox.addEventListener('change',function() {
   let attribute = passwordBox.getAttribute('type');
   if(attribute === 'password'){
      passwordBox.setAttribute('type','text');
   }
   else{
      passwordBox.setAttribute('type','password');
   }
});

// change event on range
let rangeSelectBox = document.querySelector('#range');
let rangeValElement = document.querySelector('#range-val');
rangeSelectBox.addEventListener('change',function() {
   let currencyNumber = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(rangeSelectBox.value);
   rangeValElement.innerText = currencyNumber;
});

// Copy address to text area
let copyCheckBox = document.querySelector('#copy-check');
let currentTextArea = document.querySelector('#current');
let count = 0;
let permanentTextArea = document.querySelector('#permanent');
copyCheckBox.addEventListener('change',function() {
   if(count %2 === 0){
      permanentTextArea.value = currentTextArea.value;
      count++;
   }
   else{
      permanentTextArea.value = "";
      count++;
   }
});

// inner HTML
let wishMessage = `<span style="color: blueviolet">Good</span>
                   <span style="color: orangered">Morning</span>`;
let h1Tag = document.querySelector('#wish-msg');
h1Tag.innerHTML = wishMessage;

// inject to body tag
let h1Element = document.createElement('h1');
let spanTagOne = document.createElement('span');
spanTagOne.innerText = 'Good';
spanTagOne.style.color = 'blueviolet';

let spanTagTwo = document.createElement('span');
spanTagTwo.innerText = 'Morning';
spanTagTwo.style.color = 'orangered';

h1Element.appendChild(spanTagOne);
h1Element.appendChild(spanTagTwo);
document.querySelector('#wish-msg-div').appendChild(h1Element);









