let mongoose = require("mongoose");

module.exports = function () {
    let schema = mongoose.Schema({
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
            type: String
        },
        nif: {
            type: String
        },
        phone: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            enum: ["M", "F"]
        },
        birth: {
            type: String
        },
        addresses: [{
            label: {
                type: String,
                required: true
            },
            zipCode: {
                type: String,
                required: true
            },
            place: {
                type: String,
                required: true
            },
            number: {
                type: String,
                required: true
            },
            complement: {
                type: String
            },
            reference: {
                type: String
            },
            latLon: {
                type: String
            }
        }]
    });

    return mongoose.model("User", schema);
};