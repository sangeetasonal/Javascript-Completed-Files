// document
let doc = document;
console.log(doc);

// head section
let head = document.head;
console.log(head);

// title of document
let title = document.title;
console.log(title);

// body section of document
let body = document.body;
console.log(body);

// get Elements
let navTag = document.querySelector('#navbar');
console.log(navTag);

// get a tag in navbar
let aTag = doc.querySelector('#navbar a');
console.log(aTag);

// change the Elements
let h1Tag = document.querySelector('#main-div h1');
console.log(h1Tag);

// Change the inner Text
h1Tag.innerText = 'Good Evening';

// Change the styles
h1Tag.style.backgroundColor = 'limegreen';
h1Tag.style.color = 'white';
h1Tag.style.textAlign = 'center';
h1Tag.style.padding = '15px';
h1Tag.style.boxShadow = '0 0 10px black';

// Get the Image Tag
let imageTag = document.querySelector('#image');
console.log(imageTag);
imageTag.setAttribute('width','800');
imageTag.setAttribute('height','400');
imageTag.setAttribute('src','../img/image2.jpg');

imageTag.style.display = 'block';
imageTag.style.margin = 'auto';
imageTag.style.boxShadow = '0 0 10px black';
imageTag.style.borderRadius = '20px';