const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const adapter = new FileSync("db.json");
const db = low(adapter);
const prompt = require("./prompt");
const chalk = require("chalk");
const { errorLog } = require("./utils");

module.exports = {
    getTodo: ()=>{
        let index = 1;
       const todos =  db.get("todos").value()
       todos.forEach(todo => {
           console.log(`${index++}. ${todo.title} status == ${todo.complete}`);
       });
    }
}