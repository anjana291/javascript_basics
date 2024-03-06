//w.a.p to print the numbers from given array whose sum is 6

const arr = [2,3,4,5];
pairSum=7;
low=0;
up=arr.length-1;
isPresent=false
count = 0
// sum=arr[low]+arr[up]; 
// console.log(sum);
while(low<up){
    count=count+1
    currSum=arr[low]+arr[up]
    if(currSum==pairSum){
        isPresent=true;
        console.log(`(${arr[low]},${arr[up]})`);
        low++;
        up--;
    }
    else if(currSum>pairSum){
        up--;
    }
    
}
!isPresent && console.log('no such pair');
console.log(count);