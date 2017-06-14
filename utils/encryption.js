let crypto = require("crypto");

module.exports = function (app) {
    const algorithm = app.parameters.encryption.algorithm;
    const secret = app.parameters.encryption.secret;
    const inputEncoding = app.parameters.encryption.inputEncoding;
    const outputEncoding = app.parameters.encryption.outputEncoding;

    let encryption = {};

    encryption.encrypt = function (value) {
        if (value) {
            let cipher = crypto.createCipher(algorithm, secret);
            let crypted = cipher.update(value, inputEncoding, outputEncoding);

            crypted += cipher.final(outputEncoding);

            return crypted;
        } else {
            return null;
        }
    };

    encryption.decrypt = function (value) {
        if (value) {
            let decipher = crypto.createDecipher(algorithm, secret);
            let decrypted = decipher.update(value, outputEncoding, inputEncoding);

            decrypted += decipher.final(inputEncoding);

            return decrypted;
        } else {
            return null;
        }
    };

    return encryption;
};