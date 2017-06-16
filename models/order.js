let mongoose = require("mongoose");

module.exports = function () {
    let schema = mongoose.Schema({
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        inclusion: {
            type: Date,
            required: true
        },
        finalization: {
            type: Date
        },
        status: {
            type: String,
            required: true,
            enum: ["P", "E"]
        }
    });

    return mongoose.model("Order", schema);
};