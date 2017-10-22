function Account(balance, type){
    this.balance = balance;
    this.debit = 0;
    this.credit = 0;
    this.type = type;

    var self = this;
    this.deposit = function deposit(amount, type){
        self.balance += amount;
        self.credit += amount;
        console.log(`Deposited: ${amount} to ${self.type} and new balance is ${self.balance}`)
    }

    this.withdrawl = function withdrawl(amount, type){
        self.balance -= amount;
        self.debit -= amount;
        console.log(`Withdrawl: ${amount} from ${self.type} and the new balance is ${self.balance}`)
    }

    self.statement = function statement(){
        console.log(`My ${self.type} balance is ${self.balance} with ${self.debit} in debits and ${self.credit} in credits`)
    }
}

var testAccount = new Account(5000);
//console.log(testAccount)
testAccount.withdrawl(4999);
testAccount.deposit(6000);
testAccount.statement();

function Customer(initChecking, initSavings){
    this.checking = new Account(initChecking, "Checking");
    this.savings = new Account(initSavings, "Savings");

    var self = this;
    this.accountOverview = function accountOverview(){
        self.checking.statement();
        self.savings.statement();
    }
}

var testCustomer = new Customer(5000, 2500);
console.log(testCustomer);

testCustomer.checking.deposit(1000);
testCustomer.checking.withdrawl(300);
testCustomer.savings.deposit(2000);
testCustomer.accountOverview();