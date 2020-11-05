#!/usr/bin/env node
const utils = require("../src/utils/messages");
const low = require("lowdb");
const nt = require("../src/functions/newTodo");
const FileSync = require("lowdb/adapters/FileSync");
const getTodo = require("../src/functions/getTodo");
const { updateStatus } = require("../src/functions/updateStatus");
const args = process.argv;
const commands = ["new", "list", "completed", "help"];
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
            list:        used to retrive your todos
            completed:   used to mark todo as complete
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
      case "list":
        getTodo.getTodo();
        break;
      case "completed":
        updateStatus();
        break;
      default:
        errorLog("invalid command");
        usage();
    }
  }
}
