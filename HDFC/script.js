let rangeSelectBox = document.querySelector('#range');
let rangeValElement = document.querySelector('#range-val');
rangeSelectBox.addEventListener('change',function() {
    let currencyNumber = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(rangeSelectBox.value);
    rangeValElement.innerText = currencyNumber;
});

let rangeSelectBoxTwo = document.querySelector('#range-tenure');
let rangeValElementTwo = document.querySelector('#range-tenur-value');
rangeSelectBoxTwo.addEventListener('change',function() {
    let currencyNumberTwo = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(rangeSelectBoxTwo.value);
    rangeValElementTwo.innerText = currencyNumberTwo;
});
