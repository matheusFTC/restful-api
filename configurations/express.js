let bodyParser = require("body-parser");
let cors = require("cors");
let express = require("express");
let load = require("express-load");
let methodOverride = require("method-override");
let fs = require("fs")
let path = require("path")
let rfs = require("rotating-file-stream");
let morgan = require("morgan");

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

let directory = path.join("./", "logs");

if (fs.existsSync(directory) === false) fs.mkdirSync(directory);

var stream = rfs("access.log", {
    interval: "1d",
    path: directory
});

app.use(morgan("common", { stream: stream }));

app.disable("x-powered-by");

load("parameters")
    .then("utils")
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

app.use(function (req, res, next) {
    res.status(404).json({ error: "Resource not found." });
});

app.use(function (err, req, res, next) {
    res.status(500).json({ error: "Internal server error." });
});

module.exports = app;