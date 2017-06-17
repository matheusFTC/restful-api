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
        },
        satisfaction: {
            type: Number,
            enum: [1, 2, 3, 4, 5]
        },
        items: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            additional: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Item"
            }]
        }]
    });

    return mongoose.model("Order", schema);
};