// es5 importing
// var utils = require("../util/sleep");
// then utils.sleep(1000);

function sleep(ms) {
  var time = new Date().valueOf();
  var newTime = time;

  while (newTime < (time + ms)) {
    newTime = new Date().valueOf();
  }
}

module.exports = {
  sleep: sleep
};