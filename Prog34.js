//w.a.p to print duplicate element from given array
//  0 1  2  3  4  5  6  7  8
a=[10,20,30,20,30,40,50,60,10]    //10,20,30

isPresent=false
for(i=0;i<=a.length-1;i++){ //0
    for(j=i+1;j<=a.length-1;j++){ //1//2//3//4//5//6//7//8//9  //2
        if(a[i]==a[j]){ //10==20//10==30//10==20//10==30//10==40//10==50//10==60//10==10   //20==30
            isPresent=true;
            console.log(a[i]);
        }       
    }
}
// console.log(isPresent?`Present`:`Not Present`);
//truthy operator
!isPresent && console.log('Not Present');