text = 'Please visit microsoft office'
t=text.replace('microsoft','google')
console.log(t);
// Please visit google office

text1 = 'Please visit microsoft office. microsoft is great place'
t1=text1.replace('microsoft','google')
console.log(t1);
// Please visit google office. microsoft is great place

text1 = 'Please visit microsoft office. microsoft is great place'
t1=text1.replaceAll('microsoft','google')
console.log(t1);
// Please visit google office. google is great place
