function parent() {
    const parentvar = 'parent';
    console.log(`var inside parent is: ${parentvar}`);
    console.log(`var inside child is: ${childvar}`);      //error 


    function child() {
        const childvar = 'child'; 
        console.log(`var inside child is: ${childvar}`);       
        console.log(`var inside parent function is: ${parentvar}`);
    }
    child();    
}

parent();