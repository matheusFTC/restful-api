var crypto = require("crypto");

module.exports = function (app) {
    const algorithm = "aes-256-ctr";
    const secret = "eyJ0eeyJ0eXAiOiJeyJ0eeyJ0eXAiOiJKV1XAiOiJKV1KV1XAiOiJKV1JeyJ0eeyJ0eXAiOiJKV";
    const inputEncoding = "utf8";
    const outputEncoding = "hex";

    var encryption = {};

    encryption.encrypt = function (value) {
        var cipher = crypto.createCipher(algorithm, secret);
        var crypted = cipher.update(value, inputEncoding, outputEncoding);

        crypted += cipher.final(outputEncoding);

        return crypted;
    };

    encryption.decrypt = function (value) {
        var decipher = crypto.createDecipher(algorithm, secret);
        var decrypted = decipher.update(value, outputEncoding, inputEncoding);

        decrypted += decipher.final(inputEncoding);

        return decrypted;
    };

    return encryption;
};