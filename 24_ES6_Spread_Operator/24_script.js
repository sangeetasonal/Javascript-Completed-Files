let numbers = [10,54,5,100,9844,1843,13,1,31,16,8,494,99];
let min = numbers[0];
for(let number of numbers){
    if(min > number){
        min = number;
    }
}
console.log(`min Number is : ${min}`);


// Spread operator
let minNumber = Math.min(...numbers);
console.log(`min Number is : ${minNumber}`);

// merge two arrays using spread operator
let array1 = [10,20,30,40];
let array2 = [...array1 , 50,60,70];
console.log(array2);

// create a new copy of an array
let arr1 = [10,20,30,40];
//let arr2 = arr1.slice();
let arr2 = [...arr1];
arr1.splice(1);
console.log(arr2);

