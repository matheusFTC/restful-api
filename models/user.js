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
        },
        nif: {
            type: String,
            index: {
                unique: true
            }
        },
        phone: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        birth: {
            type: Date
        },
        adresses: [{
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