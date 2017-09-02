let app = require("./configurations/express");
let mongoose = require("./configurations/mongoose");

mongoose.connect(app.parameters.database.url, app.parameters.database.options);

process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        process.exit(0);
    });
});

app.listen(process.env.PORT || app.parameters.infrastructure.port);