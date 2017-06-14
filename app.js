let app = require("./configurations/express");
let mongoose = require("./configurations/mongoose");

mongoose.connect(app.parameters.database.url, app.parameters.database.options);

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        process.exit(0);
    });
});

app.listen(process.env.PORT || app.parameters.infrastructure.port);