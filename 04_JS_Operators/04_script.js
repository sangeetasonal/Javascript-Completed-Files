// Assignment operator =
let name = 'John';
console.log(`${name}`);

// Arithmetic operators + - * /
let num1 = 10;
let num2 = 20;
console.log(`Sum is : ${num1 + num2}`);
console.log(`Sub is : ${num1 - num2}`);
console.log(`Mul is : ${num1 * num2}`);
console.log(`Div is : ${num1 / num2}`);

// Short hand math += , -= , *= , /=
let a = 10;
let b = 20;
let add = 0;
add = add + (a + b); // 0 + 10 + 20 =>  30
add += (a + b); // 30 + 10 + 20 => 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !==
let marks = 35;
if(marks <= 35){
    console.log(`You failed the Exam`);
}
else{
   console.log(`You Cleared the Exam`);
}

// Unary Operator ++ , --
let x = 10;
x = x - 1;
x -= 1;
x--;
console.log(x);

// Logical operators AND (&&), OR (||)
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else {
    console.log('Wait until parents Agreed');
}

// String Concatenation Operator
// Number + Number => Addition => Number
// all the cases string concatenation
let test = 10 + 20 + '10' + 20 + 20;
console.log(test);

let empName = 'John';
let age = 40;
console.log(empName + " , " + age);
console.log(`${empName} , ${age}`);

// Ternary operator (? :)
// (condition) ? true part : false part;
marks = 25;
let result = '';
(marks <= 35) ? result = 'You failed the Exam' : result = `You Cleared the Exam`;
console.log(result);

// typeof operator
empName = 'Wilson';
console.log(`value : ${empName} Type : ${typeof empName}`);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else {
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else {
    console.log('Both are NOT Equal');
}