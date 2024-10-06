// function Declaration
function printNumbers(startNumber , endNumber , increNumber) {
    let result = '';
    for(let i= startNumber; i <= endNumber; i+= increNumber){
        result += `${i} `;
    }
    console.log(result);
}

// function execution / invocation // call
printNumbers(10,50, 2);
printNumbers(100,500, 10);

// Normal Function function without parameters
function greet() {
    console.log('Welcome to JS Functions');
}
greet();

// Function Expression without Parameter
let greetFn = function() {
    console.log('Iam from green Fn Function');
};
greetFn();

// function with parameter
let sum = function(a , b) {
  let result = a  +  b + (2 * (a + b));
  return result;
};
console.log(sum(10,20));

// calculate Numbers
let calculateNumbers = function(a , b) {
    let result = 5 * (sum(a,b)) - 2 * (sum(a,b));
    console.log(result);
};
calculateNumbers(10,20);

// String as a parameter
let wishMe = function(name , age) {
    let message = `Hello ${name} You are ${age} yrs Old`;
    return message;
};
let result = wishMe('John' , 40);
console.log(result);

// object as a parameter
let studentOne = {
    name : 'Rajan',
    age: 20,
    course : 'Engineering'
};
let printObject = function(object) {
    let message = `Name : ${object.name}
                   AGE : ${object.age}
                   COURSE : ${object.course}`;
    return message;
};
let theMessage = printObject(studentOne);
theMessage = printObject({name : 'Arjun' , age : 23 , course: 'MBBS'});
console.log(theMessage);

// Array as a parameter
let printArray = function(array) {
     let temp = '';
     for(let index in array){
         temp += `${index} => ${array[index]} \n`;
     }
     return temp;
};
let colors = ['white','black' , 'red'];
theMessage = printArray(colors);
console.log(theMessage);

theMessage = printArray([10,20,30]);
console.log(theMessage);

theMessage = printArray(['html','css','javascript'].sort());
console.log(theMessage);

// Function inside an object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function () {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student.fullName());

// Nested Function
let outerFn = function() {
  console.log('Iam from Outer Fn');
  let a = 10;
  let innerFn = function() {
      console.log('Iam from innerFn');
  };
  innerFn();
};
outerFn();

// Twisted Function
let outerFunction = function() {
  let a = 10;
  let b = 'John';
  let c = [10 ,20 , 30];
  let innerFunction = function() {
      let student = {
          name : 'Rajan',
          age : 20
      };
      return student;
  };
  return innerFunction;
};
let output = outerFunction();
console.log(output());

// Arrow function ES6
let calculate = (a , b) => {
    let sum = a + b;
    return sum;
};
result = calculate(10,20);
console.log(result);

