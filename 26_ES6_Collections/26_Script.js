/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Create a new map
let techMap = new Map();
console.log(techMap);

// add keys
techMap.set(1 , 'html');
techMap.set(2 , 'css');
techMap.set(3 , 'javascript');
techMap.set(4 , 'bootstrap');
techMap.set(5 , 'node js');
console.log(techMap);

// get Key()
console.log(techMap.get(3)); // javascript

// has Key()
console.log(techMap.has(1));

// size
console.log(`Size : ${techMap.size}`);

// delete
techMap.delete(1);
console.log(techMap);

// keys
let result = '';
for(let key of techMap.keys()){
    result += `${key} `;
}
console.log(result);

// value
result = '';
for(let value of techMap.values()){
    result += `${value} `;
}
console.log(result);

// entries
result = '';
for(let entry of techMap.entries()){
    result += `Key : ${entry[0]} : Value : ${entry[1]} \n`;
}
console.log(result);

// clear
techMap.clear();
console.log(techMap);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once means no duplicates.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let colorSet = new Set();

// add elements
colorSet.add('html');
colorSet.add('html');
colorSet.add('css');
colorSet.add('css');
colorSet.add('javascript');
colorSet.add('javascript');
colorSet.add('jquery');
console.log(colorSet);

//  has()
console.log(colorSet.has('html'));

// delete()
colorSet.delete('css');
console.log(colorSet);

// size
console.log(`Size : ${colorSet.size}`);

// clear
colorSet.clear();
console.log(colorSet);
