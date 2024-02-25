//callback function

function greet(name,callback){
    console.log(`Hai ${name}!`);
    callback();  //child()
}
function child(){
    console.log('inside the child function')
}

greet('Peter',child)

console.log('-----------------------');

//setTimeOut 

console.log('First Console');  //1st
setTimeout(() => {
    console.log('Second Console');  //last bcoz of time delay of 5sec
}, 5000);

console.log('Third Console');  //2nd  
