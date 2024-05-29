#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

const currency :{[key : string]: number}  = {
    USD:1, // base currency
    EUR :0.92,
    GBP :0.78,
    JPY :156.95,
    CAD :1.36,
    AUD :1.50,
    CNY :7.24,
    ZAR :18.40,
    PKR :278.70,
    YEN :156.96
};
console.log("***************************************************");

console.log("****************Currency Converter App************");



console.log("***************************************************");


let userAnswer = await inquirer.prompt(
  [
    
    {
   
     name: 'from',
    message:chalk.yellow("Converting From Currency"),
    type: 'list',
    choices: ['USD','EUR','GBP','JPY','CAD','AUD','CNY','ZAR','YEN','PKR'] 

   },

   {
    name: 'to',
    message:chalk.yellow("converting To Currency"),
    type: 'list',
    choices: ['USD','EUR','GBP','JPY','CAD','AUD','CNY','ZAR','YEN','PKR']

   },
   
   {
    name: 'amount',
    message:chalk.yellow("Enter Your Amount To Convert"),
    type: 'number'
   }

 ]
)

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;

console.log("***************************************************");

console.log (chalk.greenBright(`Converted amount ` + convertedAmount));


console.log("***************************************************");

console.log (chalk.red(`Convert from currency: ` + fromAmount));

console.log("***************************************************");
console.log (chalk.blue(`Convert to currency ` + toAmount));

console.log("***************************************************");

console.log(chalk.magenta(`How much amount ` + amount));

console.log("***************************************************");


