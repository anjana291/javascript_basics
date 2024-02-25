// w.a.p to print the numbers from the given array whose sum is 6

const arr=[2,3,4,5]
sum=15
isPair=false
for(i=0;i<=arr.length-1;i++){
    for(j=i+1;j<=arr.length-1;j++){
        if((arr[i]+arr[j])==sum)
        {
            isPair=true
            console.log(`(${arr[i]},${arr[j]})`)
        }
    }
}
!isPair && console.log('No such pair');
