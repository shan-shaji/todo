#!/usr/bin/env node
const chalk = require("chalk");
const args = process.argv;


const usage = function(){
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



// used to log errors to the console in red color
function errorLog(error){
    const eLog = chalk.red(error);
    console.log(eLog);
}

function pleasantMessage(message){
    const eMsg = chalk.blue(message);
    console.log(eMsg);
}

if(args.length > 3){
    errorLog('only one argument can be accepted')
    usage();
}else if(args.length < 3){
   pleasantMessage('\nplease pass arguments to create your todo')
    usage();
}