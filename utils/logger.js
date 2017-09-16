let fs = require("fs");
let moment = require("moment");
let path = require("path");

module.exports = (app) => {

    const pathName = "." + path.sep + "logs";

    if (!fs.existsSync(pathName)) fs.mkdirSync(pathName);

    let write = (message) => {
        let fileName =  pathName + path.sep + moment().format("MMDDYYYY") + ".log";

        message = moment().format("MM/DD/YYYY HH:mm:ss ") + message + "\r\n";

        fs.appendFile(fileName, message, (err) => {
            if (err) throw err;
        });
    };

    let logger = {
        info: (message) => {
            write("INFO: " + message);
        },
        warn: (message) => {
            write("WARN: " + message);
        },
        error: (message) => {
            write("ERROR: " + message);
        },
        access: (req, res, next) => {
            write("ACCESS: " + req.method + " - " + req.url);

            next();
        }
    };

    return logger;
};