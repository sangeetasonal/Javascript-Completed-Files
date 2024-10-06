let course = 'Engineering';
if(course === 'Engineering'){
    let dept = 'Software';
    console.log(course);
}

// scope with for loop
for(let i=0; i<=10; i++){
    //console.log(i);
}

let a = 10;
{
    let a = 20;
    {
        let a = 30;
    }
}
console.log(a);

// function Scoping
a = 100;
let outerFn = () => {
    let a = 200;
    let innerFn = () => {
        let a = 300;
    };
    innerFn();
};
outerFn();
console.log(a);

// nested function
let outerGreet = () => {
    let msg = 'Good Morning';
    let innerGreet = () => {
        let msg = 'Good Afternoon';
        return msg;
    };
    return innerGreet;
};
let result = outerGreet();
console.log(result());


