let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    college : 'Osmania Medical College',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// Destructuring
let { name , age , college , course} = student;
console.log(`NAME : ${name}
             AGE : ${age}
             COURSE : ${course}
             COLLEGE : ${college}`);

// Destructuring
let {city , state , country} = student.address;
console.log(`CITY : ${city}
             STATE : ${state}
             COUNTRY : ${country}`);