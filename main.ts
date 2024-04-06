#! /usr/bin/env node

import inquirer from 'inquirer'
import chalk from "chalk"

const currencyRates :any = {
        USD: 1, //Basic currency //US DOLLER
        EUR: 0.92,               //EURO
        GBP: 0.79,               //BRITISH POUND
        INR: 83.29,              //INDIAN RUPEE
        PKR: 277.85,             //PAKISTANI RUPEE
        JPY: 151.61,             //JAPANESE YEN
        SAR: 3.75,               //SAUDIA ARABIA RIYAL
        TRY: 32.03,              //TURKISH LIRA
        CNY: 7.23,                //CHINESE YUAN RENMINBI
};

let userAnswer = await inquirer.prompt(
    [
        {
            name : "from",
            message: chalk.blue.bold("Enter from currency:"),
            type: "list",
            choices: ["USD", "ERU" , "GBP" , "INR" , "PKR" , "JPY" , "SAR" , "TRY" , "CNY"]
        },
        {
            name : "to",
            message: chalk.blue.bold("Enter to currency:"),
            type: "list",
            choices: ["USD", "ERU" , "GBP" , "INR" , "PKR"  , "JPY" , "SAR" , "TRY" , "CNY"]
        },
        {
            name : "amount",
            message: chalk.blue.bold("Enter your Amount:"),
            type: "number",
        }
    ]
)

let fromAmount = currencyRates[userAnswer.from] //exchange rate
let toAmount =currencyRates[userAnswer.to] //exchange rate
let amount = userAnswer.amount
let baseAmount = amount / fromAmount       //USD base cerrency
let convertedAmount = baseAmount * toAmount
console.log(chalk.green.italic.bold(convertedAmount));

