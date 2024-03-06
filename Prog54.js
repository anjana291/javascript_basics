word = 'good'
w=word.split('')
console.log(w);
// [ 'g', 'o', 'o', 'd' ]

word1 = 'good evening guys!'
w1=word1.split(' ')
console.log(w1);
// [ 'good', 'evening', 'guys!' ]

w2=word1.split('')
console.log(w2);
// [
//     'g', 'o', 'o', 'd', ' ',
//     'e', 'v', 'e', 'n', 'i',
//     'n', 'g', ' ', 'g', 'u',
//     'y', 's', '!'
// ]

w3=word1.split('o')
console.log(w3);
// [ 'g', '', 'd evening guys!' ]

w4=word1.split('e')
console.log(w4);
// [ 'good ', 'v', 'ning guys!' ]

//w.a.p to print all vowels in the given string
givenWord='Good Evening All'
vowel = ['a','e','i','o','u','A','E','I','O','U']
p=[]
letter=givenWord.split('')
// console.log(letter);
q=[]
for(let char of letter){
    if(vowel.includes(char)){
        q.push(char)
    }
}
console.log(q);

//to remove repeatation
for(let char of letter){
    if(vowel.includes(char) && !p.includes(char)){
        p.push(char)
    }
}
console.log(p);

//removes capital & small letter repeatation
volwels = ['a','e','i','o','u','A','E','I','O','U']
r=[]
chars=givenWord.toLowerCase().split('')
console.log(chars);
for(let char of chars){
    if(vowel.includes(char) && !r.includes(char)){
        r.push(char)
    }
}
console.log(r);

r=[]
a=Array.from(givenWord.toLowerCase()).filter(item=>vowel.includes(item) && !r.includes(item) && r.push(item))
console.log(a);