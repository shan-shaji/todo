const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const adapter = new FileSync("db.json");
const db = low(adapter);
const { errorLog, pleasantMsg } = require("../utils/messages");

module.exports = {
  getTodo: () => {
    let index = 1;
    const todos = db.get("todos").value();
    todos.forEach((todo) => {
      console.log(`${index++}. ${todo.title}`);
      todo.complete == false
        ? errorLog(`status == ${todo.complete}`)
        : pleasantMsg(`status == ${todo.complete}`);
    });
  },
};
