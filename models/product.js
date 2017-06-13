var mongoose = require("mongoose");

module.exports = function () {
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        image: {
            type: String
        },
        price: {
            type: Number
        }
    });

    return mongoose.model("Product", schema);
};