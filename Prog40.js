//w.a.p to find the common numbers b/w the given array
p = [10,11,12,20,30]
q = [11,20,25,30,33]

i=0;
j=0;
isPresent=false;
count=0;
while(i<=p.length-1 && j<=q.length-1){
    count++;
    if(p[i]==q[j]){
        isPresent=true;
        console.log(p[i]);
        i++;
        j++;
    }
    else if(p[i]<q[j]){
        i++;
    }
    else{
        j++;
    }
}
!isPresent && console.log('No common numbers');
console.log(count);