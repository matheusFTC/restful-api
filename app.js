var app = require("./configurations/express");
var mongoose = require("./configurations/mongoose");

mongoose.connect("mongodb://@ds119772.mlab.com:19772/restful-api", {
    server: {
        poolSize: 5
    },
    user: "root",
    pass: "root"
});

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        process.exit(0);
    });
});

app.listen(8080);