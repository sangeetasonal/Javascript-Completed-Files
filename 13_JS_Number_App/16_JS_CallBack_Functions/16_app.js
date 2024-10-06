let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callback) => {
    let result = 0;
    result = callback(a , b);
    return result;
};
console.log(calculate(10,20, sum));
console.log(calculate(10,20, mul));
console.log(calculate(10,20,(a , b) => {
    return a - b;
}));

console.log(calculate(10,20,(a , b) => {
    return 2 * (a + b);
}));
