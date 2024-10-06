// Creation of Empty Object
let fridge = {};
fridge.veg = 'Tomotos';
fridge.eggs = 20;
console.log(fridge);

// Object Literal
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};
console.log(mobile);

// Access the properties of an Object
console.log(`Brand : ${mobile.brand}`);
console.log(`Color : ${mobile.color}`);

// Access the non-existing property
console.log(`RAM size : ${mobile.ramSize}`);

// Access the property with dot , [] notation
console.log(`Price : ${mobile.price}`);
console.log(`Price : ${mobile['price']}`);

// diff between dot , [] notation for dynamic properties
let propName = 'price';
console.log(`Dynamic Prop : ${mobile.propName}`);
console.log(`Dynamic Prop : ${mobile[propName]}`);

// Nested Object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania Medical College',
    address : {
        street : 'Jublee Hills',
        city  : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);

// access nested Object
console.log(student.address);

// access nested Object Property
console.log(`City : ${student.address.city}`);

// Object Operations CREATE , READ , UPDATE , DELETE

// CREATE
let employee = {};
employee.name = 'John';
employee.age = 40;
employee.designation = 'Project Manager';
console.log(employee);

//  READ
console.log(`NAME : ${employee.name}`);

// UPDATE
employee.designation = 'Sr. Project Manager';
console.log(employee);

// DELETE
delete employee.age;
console.log(employee);