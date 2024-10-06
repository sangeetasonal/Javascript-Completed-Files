// Array
let colors = ['html','css','javascript','bootstrap'];

// for-loop
let result = '';
for(let i=0; i<colors.length; i++){
    result += `${colors[i].toUpperCase()} `;
}
console.log(result);

// for-in loop
result = '';
for(let index in colors){
    result += `${colors[index].toUpperCase()} `;
}
console.log(result);

// for of loop
result = '';
for(let color of colors){
    result += `${color.toUpperCase()} `;
}
console.log(result);

// forEach function
result = '';
colors.forEach(function (color) {
    result += `${color.toUpperCase()} `;
});
console.log(result);

// forEach with arrow function
result = '';
colors.forEach(color => result += `${color.toUpperCase()} `);
console.log(result);

// Example
// 1) count the sum of each element [1,2,5] , [1,3,5]
let sumOfElements = (array1 , array2) => {
    let sum = 0;
    for(let element of array1){
        sum += element;
    }
    for(let element of array2){
        sum += element;
    }
    return sum;
};
result = sumOfElements([1,2,3] , [1,2,4]);
console.log(result);

// 2) [1,2,3]
let doubleSecond = (array) => {
    return array[1] === 2 * array[0];
};
console.log(doubleSecond([5,10,40]));