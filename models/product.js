let mongoose = require("mongoose");

module.exports = () => {
    let schema = mongoose.Schema({
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
        },
        items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Item"
            }
        ]
    });

    return mongoose.model("Product", schema);
};