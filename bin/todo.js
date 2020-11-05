#!/usr/bin/env node
const utils = require("../src/utils");
const low = require("lowdb");
const nt = require("../src/newTodo");
const FileSync = require("lowdb/adapters/FileSync");
const getTodo = require("../src/getTodo");
const args = process.argv;
const commands = ["new", "get", "complete", "help"];

const adapter = new FileSync("db.json");
const db = low(adapter);

const usage = function () {
  const usageText = `
    
    /$$$$$$$$ /$$$$$$  /$$$$$$$   /$$$$$$ 
    |__  $$__//$$__  $$| $$__  $$ /$$__  $$
       | $$  | $$  \ $$| $$  \ $$| $$  \ $$
       | $$  | $$  | $$| $$  | $$| $$  | $$
       | $$  | $$  | $$| $$  | $$| $$  | $$
       | $$  | $$  | $$| $$  | $$| $$  | $$
       | $$  |  $$$$$$/| $$$$$$$/|  $$$$$$/
       |__/   \______/ |_______/  \______/ 
                                           
                                           
                                           
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
};

db.defaults({ todos: [] }).write();

if (args.length > 3) {
  usage();
  utils.errorLog("only one argument can be accepted == 🙄");
} else if (args.length < 3) {
  usage();
  utils.pleasantMsg("\nplease pass arguments to create your todo == 🤕");
} else {
  if (commands.indexOf(args[2]) == -1) {
    errorLog("Invalid command passed");
    usage();
  } else {
    switch (args[2]) {
      case "new":
        nt.newTodo();
        break;
      case "help":
        usage();
        break;
      case "get":
        getTodo();
        break;
      case "complete":
        break;
      default:
        errorLog("invalid command");
        usage();
    }
  }
}
