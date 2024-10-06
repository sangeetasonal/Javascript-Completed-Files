let numbers = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let displayWordNumber = (number) => {
    let tempStr = '';
    let givenStr = number.toString();
    for(let i=0; i<givenStr.length; i++){
        let digit = Number.parseInt(givenStr.charAt(i));
        tempStr += ` ${numbers[digit]} `;
    }
    return tempStr;
};