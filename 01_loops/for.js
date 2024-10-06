
// Looping Statements
// For Loop to print 0 - to 10 diff is 1


console.log('-------------------  for Loop       ---------------');

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


// print 1 to 4 in triangle shape

let result1='';
let num=4;
for(let i=1; i<=num; i++){
    for(let j=1; j<=i; j++){
        result1+=j;
    }
    result1+='\n';
}
console.log(result1);

//test 1
let result2='';
for (let i=1; i<=4; i++){
    for (let j=1; j<=i; j++){
        result2+=i;
    }
    result2+='\n';
}
console.log(result2);

//test 3
let result3='';
for (let i=4; i>=1; i--){
    for (let j=1; j<=i; j++){
        result3+=i;
    }
    result3+='\n';
}
console.log(result3);

// test 4
let result4='';
for(let i=4; i>=1; i--){
    for(let j=1; j<=i; j++){
        result4+=j;
    }
    result4+='\n';
}
console.log(result4);


//test 5

let result5='';
for(let i=1; i<=4; i++){
    for(let j=4; j>=i; j--){
        result5+=j;
    }
    result5+='\n';
}
console.log(result5);

// test 6
let result6='';
for(let i=1; i<=4; i++){
    for(let j=4; j>=i; j--){
        result6+=i;
    }
    result6+='\n';
}
console.log(result6);


