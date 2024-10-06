//digit in words
let textBox=document.querySelector('#number');
let h3Tag=document.querySelector('#text-number');
textBox.addEventListener('keyup',function () {
    let theStr= newWordStr(textBox.value);
    h3Tag.textContent=theStr;
});
let arr=['zero ','one ','two ','three ','four ','five ','six ','seven ','eight ','nine '];
let newWordStr=(str)=>{
    let tempStr='';
    for(let i=0;i<=str.length;i++){
        tempStr+=arr[parseInt(str.charAt(i))]+'';
    }
    return tempStr;
};