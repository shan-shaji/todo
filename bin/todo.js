#!/usr/bin/env node
const chalk = require("chalk");
const args = process.argv;
const commands = ['new', 'get', 'complete', 'help'];


const usage = function () {
    const usageText = `
        todo helps you manage your todo tasks.
        usage:
            todo <command>


            commands can be:

            new:        used to create a new todo
            get:        used to retrive your todos
            complete:   used to mark todo as complete
            help:       used to print the usage guide

    `;

    console.log(usageText);
}




function errorLog(error) {
    const eLog = chalk.red(error);
    console.log(eLog);
}

function pleasantMessage(message) {
    const eMsg = chalk.blue(message);
    console.log(eMsg);
}

if (args.length > 3) {
    errorLog('only one argument can be accepted == 🙄')
    usage();
} else if (args.length < 3) {
    pleasantMessage('\nplease pass arguments to create your todo == 🤕')
    usage();
} else {
    if (commands.indexOf(args[2]) == -1) {
       
        errorLog('Invalid command passed');
        usage();
    } else {
        switch (args[2]) {
            case 'new':
                break;
            case 'help':
                usage();
                break;
            case 'get':
                break;
            case 'complete':
                break
            default:
                errorLog('invalid command');
                usage();

        }
    }
}

