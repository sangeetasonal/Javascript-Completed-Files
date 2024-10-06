// Normal Function
function reverseStringNF(str) {
    let tempStr = '';
    for(let i=str.length -1 ; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
}
let result = reverseStringNF('Good Morning');
console.log(result);

// Function Expression
let reverseStringFE = function(str) {
    let tempStr = '';
    for(let i=str.length -1 ; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
result = reverseStringNF('Good Morning');
console.log(result);

// Arrow Function
let reverseStringAF = (str) => {
    let tempStr = '';
    for(let i=str.length -1 ; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
result = reverseStringAF('Good Morning');
console.log(result);