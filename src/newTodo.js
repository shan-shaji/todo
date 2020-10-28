const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const adapter = new FileSync("db.json");
const db = low(adapter);
const prompt = require("./prompt");
const chalk = require("chalk");
const { errorLog } = require("./utils");

module.exports = {
  newTodo: () => {
    const question = chalk.blue(
      `
        Type in your todo\n
    
        `
    );
    prompt
      .prompt(question)
      .then((todo) => {
        if (todo == "") {
          errorLog(`Please enter a todo!`);
        } else {
          db.get("todos")
            .push({
              title: todo,
              complete: false,
            })
            .write();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
