// var vs let vs const
// 'var' does not support block scoping , but supports function scoping
// but 'let' supports both

let course = 'Engineering';
if(course === 'Engineering'){
    var dept = 'Software';
}
console.log(dept);

// var vs let
for(var i=0; i<=10; i++){

}
console.log(i);

// var vs let with functions
let greet = () => {
    var msg = "Good Morning";
};
greet();
//console.log(msg);

// let vs const
const month = 'September';
//month = 'December'; // Assignment to constant variable
console.log(month);

// var vs let vs const with functions
let wishMsg = () => {
    var msg_1 = "Good Morning";
    let msg_2 = "Good Afternoon";
    const msg_3 = "Good Evening";
};
wishMsg();
//console.log(msg_1); // Error
//console.log(msg_2); // Error
//console.log(msg_3); // Error

// const with Object
const mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000
};
mobile.price = 45000;
console.log(mobile);


