const chalk = require("chalk");

module.exports = {
  errorLog: function (error) {
    const eLog = chalk.red(error);
    console.log(eLog);
  },
  pleasantMsg: function (message) {
    const eMsg = chalk.blue(message);
    console.log(eMsg);
  },
};
