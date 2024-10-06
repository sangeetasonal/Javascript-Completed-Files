
// Looping Statements
// while Loop to print 0 - to 10 diff is 1

console.log('-------------------   While Loop       ---------------');
let result = '';
let i=0;
while (i<=10){
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
console.log(result);

// while loop to print 20 - 0 diff 2
result = '';
 i = 20;
while (i >= 0){
    if(i > 0){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i -= 2;
}
console.log(result);

// print stars using while loop
result = '';
let theNumber = 5;
i = 1;
while (i<= theNumber){
    let j=1;
    while (j<=i){
        result += '*';
        j++;//incre
    }
    result += '\n';
    i++;
}
console.log(result);


// print numbers in triangle shape ascending

 let result1='';
 let num=4;
 i=1;
 while (i<=num){
     let j=1;
     while (j<=i){
         result1+=j;
         j++;
     }
     result1+='\n';
     i++;
 }
console.log(result1);

//print same numbers in triangle ascending
let result2='';
i=1;
while (i<=4){
    let j=1;
    while (j<=i){
        result2+=i;
        j++;
    }
    result2+='\n';
    i++;
}
console.log(result2);

// print same numbers in triangle descending
let result3='';
i=4;
while (i>=1){
    let j=1;
    while (j<=i){
        j++;
        result3+=i;
    }
    result3+='\n';
    i--;
}
console.log(result3);

// print different numbers in triangle descenfing
let result4='';
i=4;
while (i>=1){
    let j=1;
    while (j<=i){
        result4+=j;
        j++;
    }
    result4+='\n';
    i--;
}
console.log(result4);


// print numbers in ascending triangle

let result5='';
i=1;
while (i<=4){
    let j=4;
    while (j>=i){
        result5+=j;
        j--;
    }
    result5+='\n';
    i++;
}
console.log(result5);

// test 6
let result6='';
i=1;
while (i<=4){
    let j=4;
    while (j>=i){
        result6+=i;
        j--;
    }
    result6+='\n';
    i++;
}
console.log(result6);


