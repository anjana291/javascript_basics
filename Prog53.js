//w.a.p to check whether the given number is mobile number or not
number='9922992211'
console.log((number.length==10)?'Is a mobile number':'Not a mobile number')

console.log('--------------------------------------------------------');

const validateFn = (number) => {
    return number.length==10?'Is a mobile number':'Not a mobile number'
}

console.log(validateFn('8921592192'));

console.log('--------------------------------------------------------');
//w.a.p to check whether a email id is gmail or not
mail = 'anjanababum123@gmal.com'
console.log(mail.endsWith('@gmail.com')?'Yes it is a mail ID':'Not a mail ID');

console.log('--------------------------------------------------------');

//w.a.p to check whether a given string starts with letter q or not

word = 'qgsaxhsbxjg'
console.log(word.startsWith('q') || word.startsWith('Q') ? 'Starts with q':'Doesnot starts with q');
console.log('--------------------------------------------------------');
