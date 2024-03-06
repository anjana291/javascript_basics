const arr=[11,10,2,4,3,12]

//Algorithm
//----------
// searchkey=11;
// low=0;
// up=arr.length-1;
// isPresent=false
//1) sort the given array
// arr.sort((first,last)=>first-last);
//2) find the mid = low+up/2
// mid = Math.floor((low+up)/2)
//3) mid == searchitem - found
// if(arr[mid] == searchkey){
//     isPresent = true;
//     break;
// }
//4) mid > searchitem
//      up = mid-1

//else if(arr[mid] > searchkey){
    // up=mid-1
// }
//5) mid < searchitem
//      low = mid+1

// else if{
    //up = mid -1
// }
//6) repeat till low = up
// while(low<=up){
// }


searchkey=11;
low=0;
up=arr.length-1;
isPresent=false
while(low<=up){
    if(arr[mid] == searchkey){
        isPresent=true;
        false
    }
}
