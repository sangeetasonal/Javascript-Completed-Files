// if else
let time = 14;
if(time >= 0 && time <= 12){
    console.log('Good Morning');
}
else if(time >12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time >17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter Proper Time Dude.');
}

//
let week = 10;
let today = '';
switch(week) {
    case 0:
        today = 'SUNDAY';
        break;
    case 1:
        today = 'MONDAY';
        break;
    case 2:
        today = 'TUESDAY';
        break;
    case 3:
        today = 'WEDNESDAY';
        break;
    case 4:
        today = 'THURSDAY';
        break;
    case 5:
        today = 'FRIDAY';
        break;
    case 6:
        today = 'SATURDAY';
        break;
    default:
        today = 'Enter Proper Number Dude';
        break;
}
console.log(`Today is : ${today}`);

// Looping Statements
// For Loop to print 0 - to 10 diff is 1
let result = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// for loop to print 20 - 0 diff 2
result = '';
for(let i = 20 ; i >= 0 ; i -= 2){
    if(i > 0){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
}
console.log(result);

// print stars using for loop
result = '';
let theNumber = 5;
for(let i = 1; i<= theNumber ; i++){
    for(let j=1; j<=i; j++){
        result += '*';
    }
    result += '\n';
}
console.log(result);

// Print the numbers in triangle ascending
theNumber = 9;
result = '';
for(let i=1; i<=theNumber; i++){
    for(let j=1; j<=i; j++){
        result += `${j}`
    }
    result += '\n';
}
console.log(result);

// Print the same numbers in triangle ascending
theNumber = 9;
result = '';
for(let i=1; i<=theNumber; i++){
    for(let j=1; j<=i; j++){
        result += `${i}`
    }
    result += '\n';
}
console.log(result);

// Print the same numbers in triangle descending
theNumber = 9;
result = '';
for(let i = theNumber; i >= 1 ; i--){
    for(let j=1; j<=i; j++){
        result += `${i}`
    }
    result += '\n';
}
console.log(result);

// Print the numbers in triangle Descending
theNumber = 9;
result = '';
for(let i = theNumber; i >= 1 ; i--){
    for(let j = i; j >= 1 ; j--){
        result += `${j}`;
    }
    result += `\n`;
}
console.log(result);

// While Loop
console.log('-------------------   While Loop       ---------------');

// print 0 - 10 using while loop
result = '';
let i = 0;
while(i <= 10){
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++; // incre
}
console.log(result);

// to print from 20 to 0 diff 2
result = '';
i = 20;
while(i >= 0){
    if(i > 0){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i -= 2; // decre
}
console.log(result);

// Print Stars using while loop
result = '';
theNumber = 5;
i = 1;
while(i<= theNumber){
    let j=1;
    while(j<=i){
        result += '*';
        j++;
    }
    result += '\n';
    i++;
}
console.log(result);

// Print the numbers in triangle ascending
theNumber = 9;
result = '';
i=1;
while(i<=theNumber){
    let j=1;
    while(j<=i){
        result += `${j}`;
        j++;
    }
    result += '\n';
    i++;
}

console.log(result);

// Print the same numbers in triangle ascending
theNumber = 9;
result = '';
i=1;
while(i<=theNumber){
    let j=1;
    while(j<=i){
        result += `${i}`;
        j++;
    }
    result += '\n';
    i++;
}
console.log(result);

// Print the same numbers in triangle descending
theNumber = 9;
result = '';
i = theNumber;
while(i >= 1){
    let j=1;
    while(j<=i){
        result += `${i}`;
        j++;
    }
    result += '\n';
    i--;
}
console.log(result);

// Print the numbers in triangle Descending
theNumber = 9;
result = '';
i = theNumber;
while(i >= 1){
    let j = i;
    while(j >= 1){
        result += `${j}`;
        j--;
    }
    result += `\n`;
    i--;
}
console.log(result);

// Do - While loop
console.log('----------------------- Do While -----------------------');

// print 0 - 10 using while loop
result = '';
i = 0;
do{
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++; // incre
}
while(i <= 10);
console.log(result);

// to print from 20 to 0 diff 2
result = '';
i = 20;
do{
    if(i > 0){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i -= 2; // decre
}
while(i >= 0);
console.log(result);

// Print Stars using while loop
result = '';
theNumber = 5;
i = 1;
do{
    let j=1;
    do{
        result += '*';
        j++;
    }
    while(j<=i);
    result += '\n';
    i++;
}
while(i<= theNumber);
console.log(result);

// Print the numbers in triangle ascending
theNumber = 9;
result = '';
i=1;
do{
    let j=1;
    do{
        result += `${j}`;
        j++;
    }
    while(j<=i);
    result += '\n';
    i++;
}
while(i<=theNumber);
console.log(result);

// Print the same numbers in triangle ascending
theNumber = 9;
result = '';
i=1;
do{
    let j=1;
    do{
        result += `${i}`;
        j++;
    }
    while(j<=i);
    result += '\n';
    i++;
}
while(i<=theNumber);
console.log(result);

// Print the same numbers in triangle descending
theNumber = 9;
result = '';
i = theNumber;
do{
    let j=1;
    do{
        result += `${i}`;
        j++;
    }
    while(j<=i);
    result += '\n';
    i--;
}
while(i >= 1);
console.log(result);

// Print the numbers in triangle Descending
theNumber = 9;
result = '';
i = theNumber;
do{
    let j = i;
    do{
        result += `${j}`;
        j--;
    }
    while(j >= 1);
    result += `\n`;
    i--;
}
while(i >= 1);
console.log(result);