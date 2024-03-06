accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`Total no.of accounts: ${accounts.length}`);
console.log('--------------------------------------');

//2. print account number whose ac_type is savings
accounts.filter(item=>item.ac_type=='savings').forEach(element => console.log(element.acno));
console.log('--------------------------------------');

//3.print the balance of accnount number 1000
bal=accounts.find(data=>data.acno==1000)
console.log(bal.balance);
console.log('--------------------------------------');

//4. print all gpay transactions
//array of objects,map ->nested array,flat() changes to single array(1 dimension) -> filter gives an array -> foreach
trans=accounts.map(item=>item.transaction).flat().filter(data=>data.mode=='gpay').forEach(element=>console.log(element))
// console.log(trans);
console.log('----------------------------------------------------------');

//5. print all transaction whose amount > 5000
amt=accounts.map(item=>item.transaction).flat().filter(data=>data.amount>5000).forEach(d=>console.log(d))
// console.log(amt);
console.log('----------------------------------------------------------');

//6. print credit transaction of account 1002
credit=accounts.map(item=>item.transaction).flat().filter(data=>data.to==1002)
console.log(credit);
console.log('----------------------------------------------------------');

//7. print debit transaction of account 1002
//debit=accounts.filter(acc=>acc.acno==1002).map(item=>item.transaction).flat().filter(data=>data.to!=1002)
debit=accounts.find(item=>item.acno==1002).transaction
console.log(debit);
console.log('----------------------------------------------------------');

//8. print transaction history of 1002
TransHis = {
    credit:credit,
    debit:debit
}
console.log(TransHis);
console.log('----------------------------------------------------------');

//print the above output(which is an object) as array
// spread operator (...) to merge 2 arrays
TransHis1=[...credit,...debit]
console.log(TransHis1);
console.log('----------------------------------------------------------');

//9. print highest balance account details
high=accounts.reduce((item1,item2)=>item1.balance>item2.balance?item1:item2)
console.log(high);