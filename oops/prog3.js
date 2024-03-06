class Bank{
    accountDetails={
        1000:{acno:1000,username:'userone',password:'userone',balance:5000},
        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:4000},
        1003:{acno:1003,username:'userthree',password:'userthree',balance:10000},
        1004:{acno:1004,username:'userfour',password:'userfour',balance:3000}
    }
    //method to validate the account
    validate(accountnumber){
       return accountnumber in this.accountDetails?true:false
    }
    //method to authenticate the account
    authenticate(acn,pword){
        if(this.validate(acn)){
            if(this.accountDetails[acn].password==pword){
                console.log("Authenticated Successfully");
            }
            else{
                console.log("Invalid Password");
            }
        }   
        else{
            console.log("Invalid account number");
        }     
    }
    //method to check the balance
    balanceCheck(accn,pwrd){
        if(this.validate(accn)){
            if(this.accountDetails[accn].password==pwrd){
                console.log(`Balance of account number ${accn} is : ${this.accountDetails[accn].balance}`);
            }
            else{
                console.log('Invalid password');
            }
        }
        else{
            console.log("Invalid account number");
        }
    }
    //method to transfer the money
    moneyTransfer(fromacc,toacc,amount,frompwd){
        if(this.validate(fromacc) && this.validate(toacc)){
            if(this.accountDetails[fromacc].password==frompwd){
                if(this.accountDetails[fromacc].balance>=amount){
                    console.log(`Balance of from account number ${fromacc} is ${this.accountDetails[fromacc].balance}
                    and balance from account number ${toacc} is ${this.accountDetails[toacc].balance} before money transfer`);

                    this.accountDetails[fromacc].balance-=amount
                    this.accountDetails[toacc].balance+=amount

                    console.log(`Balance of from account number ${fromacc} is ${this.accountDetails[fromacc].balance}
                    and balance from account number ${toacc} is ${this.accountDetails[toacc].balance} after money transfer`);
                }
                else{
                    console.log('Insufficient Balance');
                }
            }
            else{
                console.log('Invalid Password');
            }
        }
        else{
            console.log('Invalid account');
        }
    }
}

user = new Bank()
// console.log(user.validate(1003)?'Account is valid':'There is no such account');
// user.authenticate(1000,"userone")
user.moneyTransfer(1000,1001,2000,'userone')