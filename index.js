#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000; // dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["withdraw", "CheckBalance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount",
            }
        ]);
        // = += -=
        myBalance -= amountAns.amount;
        console.log(`your remaining balacne is ${myBalance}`);
    }
    else if (operationAns.operation === "CheckBalance") {
        console.log(`your ramaining balance is ${myBalance}`);
    }
    if (operationAns.operation === "fast cash") {
        let fastcash = await inquirer.prompt([
            {
                name: "fastcash",
                type: "list",
                message: "Select the cash:",
                choices: [2000, 3000, 40000]
            }
        ]);
        if (fastcash.fastcash === 2000) {
            myBalance -= fastcash.fastcash;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        else if (fastcash.fastcash === 3000) {
            myBalance -= fastcash.fastcash;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        else if (fastcash.fastcash === 40000) {
            myBalance -= fastcash.fastcash;
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin code");
}
