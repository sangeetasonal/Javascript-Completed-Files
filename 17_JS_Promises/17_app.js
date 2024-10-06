// promise concept with call back functions
let doTask = (success, failure) => {
    // doing the task
    let isDone = true;
    if(isDone){
        success('Task is Done');
    }
    else{
        failure('Task is NOT Done');
    }
};

doTask((message) => {
    console.log(message);
},(message) => {
    console.log(message);
});

// Actual Promise in Javascript
let cleanLaptop = new Promise((resolve, reject) => {
    // cleaning laptop
    let isDone = false;
    if(isDone){
        resolve('cleaning is Done');
    }
    else{
        reject('cleaning is NOT Done');
    }
});

cleanLaptop.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

// Dependent Promises
let doProject = new Promise((resolve, reject) => {
    // doing project
    let isDone = true;
    if(isDone){
        resolve('Project is Finished');
    }
    else{
        reject('Project is NOT Finished');
    }
});

let doTechnicalRound = new Promise((resolve, reject) => {
    // doing TechnicalRound
    let isDone = true;
    if(isDone){
        resolve('Technical Round  is Finished');
    }
    else{
        reject('Technical Round  is NOT Finished');
    }
});

let doManagerRound = new Promise((resolve, reject) => {
    // doing Manager Round
    let isDone = true;
    if(isDone){
        resolve('Manager Round  is Finished');
    }
    else{
        reject('Manager Round  is NOT Finished');
    }
});

let doHRRound = new Promise((resolve, reject) => {
    // doing HR Round
    let isDone = true;
    if(isDone){
        resolve('HR Round  is Finished & Got JOB');
    }
    else{
        reject('HR Round  is NOT Finished');
    }
});

// calling the dependent promises
doProject.then((message) => {
    let result = `${message} => ` ;
    doTechnicalRound.then((message) => {
        result += `${message} => ` ;
        doManagerRound.then((message) => {
            result += `${message} => ` ;
            doHRRound.then((message) => {
                result += `${message}` ;
                console.log(result);
            }).catch((message) => {
                console.error(message);
            });
        }).catch((message) => {
            console.error(message);
        });
    }).catch((message) => {
        console.error(message);
    });
}).catch((message) => {
    console.error( message);
});