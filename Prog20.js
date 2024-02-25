//    *
//   * *
//  * * *
// * * * *
for(row=1;row<=4;row++){
    str="";
    for(space=4;space>row;space--){
        str=str+ ' ';
    }
    for(col=1;col<=row;col++){
        str=str+' *';
    }
    console.log(str);
}
console.log('---------------------------');
//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *

 for(row=1;row<=4;row++){
     str='';
     for(space=row;space>=1;space--){
        str=str+' &'
     }
     for(col=1;col<=row;col++){
         str=str+' *';
      }
     console.log(str);
 }
console.log('---------------------------');

//    *
//   * *
//  *   *
// *******

for(row=1;row<=4;row++){
    str= '';
    for(col=1;col<=7;col++){
        if(col+row==5 || col-row==3 || row==4){
            str=str+"*";
        }
        else{
            str=str+' ';
        }
    }
    console.log(str);
}
console.log('---------------------------');

