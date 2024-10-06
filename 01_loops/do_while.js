
// Looping Statements
// do-while Loop to print 0 - to 10 diff is 1

console.log('-------------------  do-While Loop       ---------------');
let result = '';
let i=0;
do{
    if(i <= 9){
        result += `${i} , `;
    }
    else{
        result += `${i}`;
    }
    i++;
}
while (i<=10);
console.log(result);

// do-while loop to print 20 - 0 diff 2
result = '';
i = 20;
do{
if(i > 0){
    result += `${i} , `;
}
else{
    result += `${i}`;
}
i -= 2;
}
while (i >= 0);
console.log(result);

// print stars using do-while loop
result = '';
let theNumber = 5;
i = 1;
do{
    let j=1;
    do{
       result += '*';
       j++;//incre
     }
    while (j<=i);
    result += '\n';
    i++;
}
while (i<= theNumber);
console.log(result);


// print numbers in triangle shape ascending

let result1='';
let num=4;
i=1;
do{
    let j=1;
     do{
         result1+=j;
         j++;
       }
       while (j<=i);
       result1+='\n';
       i++;
}
while (i<=num);
console.log(result1);

//print same numbers in triangle ascending
let result2='';
i=1;
do{
    let j=1;
    do{
        result2+=i;
        j++;
      }
    while (j<=i);
    result2+='\n';
    i++;
}
while (i<=4);
console.log(result2);

// print same numbers in triangle descending
let result3='';
i=4;
do{
    let j=1;
    do{
        j++;
        result3+=i;
      }
    while (j<=i);
    result3+='\n';
    i--;
  }
while (i>=1);
console.log(result3);

// print different numbers in triangle descenfing
let result4='';
i=4;
do{
    let j=1;
    do{
       result4+=j;
       j++;
      }
    while (j<=i);
    result4+='\n';
    i--;
 }
while (i>=1);
console.log(result4);


// print numbers in ascending triangle

let result5='';
i=1;
do{
    let j=4;
    do{
        result5+=j;
        j--;
      }
    while (j>=i);
    result5+='\n';
    i++;
}
while (i<=4);
console.log(result5);

// test 6
let result6='';
i=1;
do{
    let j=4;
    do{
        result6+=i;
        j--;
      }
    while (j>=i);
    result6+='\n';
    i++;
 }
while (i<=4);
console.log(result6);


