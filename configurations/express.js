let bodyParser = require("body-parser");
let cors = require("cors");
let express = require("express");
let load = require("express-load");
let methodOverride = require("method-override");

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.disable("x-powered-by");

load("parameters")
    .then("utils")
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

app.use((req, res, next) => {
    res.status(404).json({ error: "Resource not found." });
});

app.use((err, req, res, next) => {
    res.status(500).json({ error: "Internal server error." });
});

module.exports = app;