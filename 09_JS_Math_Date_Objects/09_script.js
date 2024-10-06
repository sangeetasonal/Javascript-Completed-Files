/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`Pi value : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`Sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(10,546,891,61,1,61,616,168,16,781,168,4);
console.log(`Min Value : ${min}`);

// find the Max of 4 numbers
let max = Math.max(10,546,891,61,1,61,616,168,16,781,168,4);
console.log(`Max Value : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2, 5);
console.log(`2 ^ 5 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 1000000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let currentDate = new Date().toLocaleDateString();
console.log(currentDate);

// Get current time
let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// get full day of the week using switch statement
let day = new Date().getDay();
let today = `Today is : `;
switch(day) {
    case 0:
        today += 'SUNDAY';
        break;
    case 1:
        today += 'MONDAY';
        break;
    case 2:
        today += 'TUESDAY';
        break;
    case 3:
        today += 'WEDNESDAY';
        break;
    case 4:
        today += 'THURSDAY';
        break;
    case 5:
        today += 'FRIDAY';
        break;
    case 6:
        today += 'SATURDAY';
        break;
    default:
        today += 'Enter Proper Number Dude';
        break;
}
console.log(today);

// Display a Digital Clock on the web page (after DOM)

/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);

// parseInt() , parseFloat()
let str = Number.parseFloat('100.565');
console.log(`Value : ${str} Type : ${typeof str}`);

// toString()
let num1 = Number(1255.125).toString();
console.log(`Value : ${num1} Type : ${typeof num1}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = 'Good Morning';

// Upper Case
console.log(msg.toUpperCase());

// Lower Case
console.log(msg.toLowerCase());

// length
console.log(msg.length); // 12

// charAt
console.log(msg.charAt(0)); // G

// charCodeAt ASCII code
console.log(msg.charCodeAt(0)); // 71

// substring
console.log(msg.substr(0,4)); // Good

// substring
console.log(msg.substr(5)); // Morning

// trim
let message = ' Morning ';
if(message.trim() === 'Morning'){
    console.log('True');
}
else{
    console.log('False');
}

// Programs
// Example 1: count the no of o's in the given string
message = 'Good Morning';
let countZeros = (str) => {
    let count = 0;
    for(let i = 0; i<str.length; i++){
        let char = str.charAt(i);
        if(char === 'o' || char === 'O'){
            count++;
        }
    }
    return count;
};
console.log(`Char Count : ${countZeros(message)}`);

// Example 2 : reverseString
message = 'Good Morning';
let reverseString = (str) => {
    let tempString = '';
    for(let i=str.length-1; i >= 0 ; i--){
         tempString += str.charAt(i);
    }
    return tempString;
};
console.log(reverseString(message));

// Example 3 : isPalindrome or not
message = 'ABA';
let isPalindrome = (str) => {
    return str === reverseString(str);
};
console.log(`${message} is palindrome ? : ${isPalindrome(message)}`);