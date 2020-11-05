const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const adapter = new FileSync("db.json");
const db = low(adapter);
const { errorLog, successMsg } = require("../utils/messages");
const prompt = require("../prompt");
const getTodo = require("./getTodo");
const chalk = require("chalk");
const logSymbol = require("log-symbols");


module.exports = {
  updateStatus: () => {
    getTodo.getTodo();
    const question = chalk.blue(
      `
              Type your choice\n
          
            `
    );
    prompt.prompt(question).then((option) => {
      if (option == null || option == "") {
        errorLog("please select your todo!!");
      } else {
        const todos = db.get("todos").value();
        todos.forEach((todo) => {
          db.set(`todos[${option - 1}].complete`, true).write();
        });
        successMsg(`${logSymbol.success} successfully updated!`);

      }
    });
  },
};
