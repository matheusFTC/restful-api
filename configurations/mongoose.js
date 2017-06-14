let mongoose = require("mongoose");
let bluebird = require("bluebird");

mongoose.Promise = bluebird;

mongoose.set("debug", false);

module.exports = mongoose;