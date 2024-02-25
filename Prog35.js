p=[10,11,12,20,30]
q=[11,20,25,30,33]
//w.a.p to find the common numbers between given two array   //11,20,30

isFound=false; 
for(i of p){
    for(j of q){
        if(i==j){
            isFound=true
            console.log(i);
        }    
    }
}
!isFound && console.log('No duplicate numbers');