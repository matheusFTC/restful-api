var mongoose = require("mongoose");

module.exports = function () {
    var schema = mongoose.Schema({
        email: {
            type: String,
            required: true,
            index: {
                unique: true
            }
        },
        password: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: true
        }
    });

    return mongoose.model("User", schema);
};