// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Create an Array
let array = [10,true,'test',{ name : 'John'}, [ 10 , 20] , undefined , null];
console.log(array);

// access the element of array
console.log(array[0]); // 10
console.log(array[6]); // null

// functions
/*
shift() -> remove the first element from array
unshift() -> add the first element to array
push() -> add the last element to array
pop() -> remove the last element from array
sort() -> to sort the array in ascending order
reverse() -> to reverse the array elements
splice() -> to remove / replace from the middle
split() -> to split a string to an array
join() -> to join the array elements to string
slice() -> to create a new copy of an array
forEach() -> to loop the array elements
find() -> find exact element with condition from array
filter() -> to filter the array elements
 */

// shift() remove the first element from array
console.log('---------------------- shift() -----------------------');
let technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unshift() add the first element to array
console.log('---------------------- unshift() -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);

// pop() remove the last element from array
console.log('---------------------- pop() -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// push() add the last element to array
console.log('---------------------- push() -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.push('mongo db');
console.log(technologies);

// splice(index) removes all the elements from the given index
console.log('---------------------- splice(index) -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.splice(1);
console.log(technologies);

// splice(index,no of elements) removes no of elements from the given index
console.log('---------------------- splice(index , no of elements) -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.splice(1,2);
console.log(technologies);

// splice(index,1,replace Element) replace element in the given index
console.log('---------------------- splice(index,1,replace Element) -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.splice(0,1,'node js');
console.log(technologies);

// sort() -> to sort the array in ascending order
console.log('---------------------- sort() -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.sort();
console.log(technologies);

// reverse() -> to reverse the array
console.log('---------------------- reverse() -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

// reverse Sort
console.log('---------------------- reverse Sort -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

// join()
console.log('---------------------- join() -----------------------');
technologies = ['html' , 'css' , 'javascript' , 'bootstrap' , 'jquery'];
console.log(technologies);
let str = technologies.join(' - ');
console.log(str);

// split()
console.log('---------------------- split() -----------------------');
console.log(str);
let newTech = str.split(' - ');
console.log(newTech);

// slice() to create a new copy of an array
let array1 = [10,20,30,40,50];
let array2 = array1.slice();
array1.splice(2);
console.log(array2);

// length of array
console.log(array2.length); // 5

// Normal for Loop from an array
let colors = ['white','black','orange','blue','purple','silver'];
let result = '';
for(let i =0; i< colors.length; i++){
    result += `${colors[i]} `;
}
console.log(result);

// for-in loop ES5
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

// for-of loop ES6
result = '';
for(let color of colors){
    result += `${color} `;
}
console.log(result);

// forEach function ES5
result = '';
colors.forEach(function (color) {
    result += `${color} `;
});
console.log(result);

// forEach function ES6
result = '';
colors.forEach(color => result += `${color} `);
console.log(result);

// Array of Objects
let employees = [
    {
        name : 'John',
        age : 38,
        designation : 'Project Manager',
        active : true
    },
    {
        name : 'Wilson',
        age : 45,
        designation : 'Delivery Manager',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        active : true
    },
    {
        name : 'Mahesh',
        age : 28,
        designation : 'Team Lead',
        active : false
    }
];

// get all designations
for(let employee of employees){
    console.log(employee.designation);
}

// junior Employees
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// Senior Employees
let seniorEmployees = employees.filter(function(employee) {
    return employee.age > 30;
});
console.log(seniorEmployees);

// Short cut
let sEmployees = employees.filter(employee => employee.age > 30);
console.log(sEmployees);