class Person {

    constructor(name,age){
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

class Employee extends Person{

    constructor(name , age , designation , address){
        super(name , age);
        this._designation = designation;
        this._address = address;
    }

    get designation() {
        return this._designation;
    }

    set designation(value) {
        this._designation = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    printEmployee() {
        console.log(`NAME : ${this.name}
                     AGE : ${this.age}
                     DESIGNATION : ${this.designation}
                     ADDRESS : ${this.address}`);
    }
}

// create an object
let employee = new Employee('John',40, 'Manager','Hyderabad');
employee.printEmployee();
