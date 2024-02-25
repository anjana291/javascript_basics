//w.a.p print the following o/p for given i/p
// i/p: 2 o/p:24
// i/p: 3 o/p:369
// i/p: 4 o/p:4936                   

// pattern1 : 2*12  3*123 4*1234
// pattern2 : 2+22  3+33+333 4+44+444+4444

num=2;
i=1;
str=' ';
while(i<=num){
    str=str+i;
    i++;
} 
console.log(num*str);

// pattern2 : 2+22  3+33+333 4+44+444+4444
n = 3;
j = 1;
s = '';
sum = 0;
while(j<=n){
    s=s+n;
    // console.log(s);
    sum = sum + Number(s);
    j++;
}
console.log(sum);


// num=2;
// i=1;
// sum=0;
// while(i<=num){
//     sum=sum+(num*i);
//     i++;
// }
// console.log(sum)

//w.a.p to display given number in reverse order 
// i/p :123
// o/p :321


num1 = 123;
str1 = ' ';

while(num1>0){  //123>0   12>0   1>0   0!>0
    last = num1%10;//123%10=3  12%10=2 1%10=1
    str1 = str1 + last; //''+3='3'  '3'+2=''32'  '32'+1='321'
    num1 = Math.floor(num1/10)
}
console.log(str1);

//check whether the given no is palindrome or not
//121 12321

no = 121;
x = ' ';
temp = no;
while(no>0){
    ld = no%10;
    x = x + ld;
    no = parseInt(no/10);
}
console.log(temp == x?'palindrom':'not palindrom');
// if(temp == x){
//     console.log('Palindrom');
// }
// else{
//     console.log('Not Palindrom');
// }
