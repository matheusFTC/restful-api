var mongoose = require("mongoose");
var bluebird = require("bluebird");

mongoose.Promise = bluebird;

mongoose.set("debug", false);

module.exports = mongoose;