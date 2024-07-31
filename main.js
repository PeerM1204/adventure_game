import chalk from "chalk";
import inquirer from "inquirer";
//classes for Player & Opponent:
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    //function for decreasing fuel:
    fuelDecrease() {
        let fuel = this.fuel - 30;
        this.fuel = fuel;
    }
    //fuel increase:
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    //function for decreasing fuel:
    fuelDecrease() {
        let fuel = this.fuel - 30;
        this.fuel = fuel;
    }
}
//asking for player name and select the opponent:
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Your Name:",
    },
]);
console.log(`PlayerName:${player.name}`); // print the player name....
//for opponent
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "select Your Opponent",
        choices: ["Skeleton", "Zombie"],
    },
]);
// console.log(opponent.select);
//Gather the data:
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do { //condition: for skeleton:
    if (opponent.select == "Skeleton") {
        // console.log(
        //   // `${chalk.bold.green(p1.name)} ${chalk.yellow.bold("VS")} ${chalk.bold.red(
        //   //   o1.name
        //   // )}`
        // );
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select Your Opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life"],
            },
        ]);
        //if select an Attack:
        //for Attack
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 5);
            if (num > 1) {
                //logic for fuel:
                p1.fuelDecrease();
                console.log(chalk.red(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.green(`${o1.name} Fuel is ${o1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.red.bold.italic(`You loose, Better Luck for Next Time..`));
                process.exit();
            }
            if (num <= 0) {
                //logic for fuel:
                o1.fuelDecrease();
                console.log(chalk.green(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.red(`${o1.name} Fuel is ${o1.fuel}`));
            }
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic(` Congratulations! You Win, Better Luck for Next Time..`));
                process.exit();
            }
        }
        //for Drink Portion
        if (ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`${p1.name} Fuel is ${p1.fuel}`));
        }
        //For run
        if (ask.opt == "Run For Your Life") {
            console.log(chalk.red.bold.italic(`You loose, Better Luck for Next Time..`));
        }
    } //  coding end for Skeleton :
    // //Condition for Zombie:
    // if(opponent.select == "Zombie"){
    //     console.log(`${chalk.bold.green(p1.name) } VS ${chalk.bold.red(o1.name)}`);
    //     let ask = await inquirer.prompt([
    //         {
    //             name:'opt',
    //             type:'list',
    //             message:"Select Your Opponent",
    //             choices:['Attack','Drink Portion','Run For Your Life']
    //         }
    //     ])
    //     if(ask.opt == "Attack"){
    //         // console.log("Attack");
    //         let num = Math.floor(Math.random() * 5);
    //         // console.log(num);
    //         if(num > 0){
    //           console.log("Fire");
    //         }
    //         if(num <= 0){
    //           console.log("You are fired");
    //         }
    //     }
    //     if(ask.opt == "Drink Portion"){
    //         console.log("Drink");
    //     }
    //     if(ask.opt == "Run For Your Life"){
    //         console.log("Run");
    //     }
    // }
} while (true);
