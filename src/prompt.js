const rl  = require("readline");
const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');



module.exports = {
    prompt: (question)=>{
        const r = rl.createInterface({
         input: process.stdin,
         output: process.stdout,
         terminal: false   
        })

    const newPromise =  new Promise((resolve, error) => {
            r.question(question, (answer) =>{
                r.close();
                resolve(answer);
            }) 
        
        })
        return newPromise;
    }
}