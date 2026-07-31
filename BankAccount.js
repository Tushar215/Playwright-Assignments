class BankAccount
{
    constructor(accountHolder,balance=0)
   {
     this.accountHolder=accountHolder;
     this.balance=balance;
   }
deposit(amount)
{
 this.balance += amount;
 console.log("New Balance After Deposit", this.balance);
}
withdraw(amount)
{
  if(amount >this.balance)
  {
   console.log(`can't Withdraw ${amount}. Insufficient balance!`);
  }
  else
  {
    this.balance -=amount;
    console.log("New Balance After Withdrawal :",this.balance);
  }
}
checkBalance()
{
    console.log(`${this.accountHolder} balance: ${this.balance}`);
}
}

let obj= new BankAccount("Tushar",100);
obj.checkBalance();
obj.deposit(50);
obj.withdraw(30);
obj.withdraw(30);

