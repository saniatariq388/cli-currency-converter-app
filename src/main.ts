#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Interface for Account Number
interface BankAccount{
    accountNumber:number;
    balance:number;
    withdraw(amount:number):void;
    deposit(amount:number):void;
    checkBalance():void
}

//Class for Account Number
class BankAccount implements BankAccount{
    accountNumber: number;
    balance: number;

    constructor(accountNumber:number,balance:number){
        this.accountNumber = accountNumber;
        this.balance = balance
    }
    withdraw(amount: number): void {
        if(amount < this.balance){
            this.balance -= amount       
            console.log(chalk.red(`Widthdraw Successful! Your Current Balance is $${this.balance}.`))   
        }
        else{console.log(chalk.yellow("Insificent Balance."))
            console.log(chalk.green(`Your Current Balance is $${this.balance}.`));
            };
    }

    deposit(amount: number): void {
        if(amount > 100 ){
            amount -= 1
            this.balance += amount;           // Update the balance with the amount
            console.log(chalk.bold.blue(`Deposit of $${amount} is Succussfully Done! $1 deposit charges is Deduct From Your Deposit.\n Your New Balance is $${this.balance}.`))}
            
        else if(amount <= 100){
                amount -= 0
                this.balance += amount         // Update the balance with the amount
                console.log(chalk.bold.yellow(`Deposit of $${amount} is Successfully Done! Your New Balance is $${this.balance}.`));
            }
            }
    checkBalance(): void {
        console.log(chalk.green(`Your Balance is $${this.balance}.`));
        }
}
 //  create class for customers
 class Customer{
    firstName:string;
    lastName:string;
    gender:string;
    age:number;
    mobileNumber:number;
    account: BankAccount;

    constructor(firstName:string,lastName:string,gender:string,age:number,mobileNumber:number,account:BankAccount){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account
    }

}
 // create Bank account
let accounts: BankAccount[] =[
    new BankAccount (2202,2000),
    new BankAccount (2203,2500),
    new BankAccount(2204,5000)
]
 
//   create Customers
let customers:Customer[] =[
    new Customer ("Tariq","Ali","Male",48,30057467,accounts[0]),
    new Customer ("Sania","Tariq","Female",45,774934935,accounts[1]),
    new Customer ("Nasir","Ali","Male",12,2134037345,accounts[2])
]

 async function accountHolder(){
    do{
    let accountNumber = await inquirer.prompt({
        name:"accountnumber",
        type:"input",
        message:"Enter Your Account Number:"
    })
     let customer = customers.find(customer => customer.account.accountNumber == accountNumber.accountnumber)   
    
    if(customer){
        console.log(chalk.magenta.bold(`Welcome ${customer.firstName} ${customer.lastName} to Our OOP Bank.`))

        let answer = await inquirer.prompt({
            name:"select",
            type:"list",
            message:"Please Enter Your Operation:",
            choices:["Deposit","Withdraw","Check Balance","Exit"]
        })
        
        if(answer.select ==="Deposit"){
            let amountDeposit = await inquirer.prompt({
                name:"amount",
                type:"input",
                message:"Enter your Amount To Deposit:"
            })
        customer.account.deposit(amountDeposit.amount)
        }
         else if(answer.select === "Withdraw"){
            let amountWithdraw = await inquirer.prompt({
                name:"amount",
                type:"input",
                message:"Enter your Amount To Withdraw:"
            })
        customer.account.withdraw(amountWithdraw.amount)
        }
        else if(answer.select === "Check Balance"){
            console.log(chalk.yellow(`Your Balance is $${customer.account.balance}`));
            }
        else if(answer.select === "Exit"){
            console.log(chalk.red("Exiting..."));
            console.log(chalk.magenta("*** Thank You For Using Our Services ***"));
            return;
            }
            
}
else {console.log(chalk.yellow("Invalid Account Number"));
}
    
}while(true);
}
accountHolder()