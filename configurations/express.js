var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var load = require("express-load");
var methodOverride = require("method-override");

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

app.disable("x-powered-by");

load("utils")
    .then("models")
    .then("controllers")
    .then("routes")
    .into(app);

app.use(function (req, res, next) {
    res.status(404).json({ error: "Resource not found." });
});

app.use(function (err, req, res, next) {
    res.status(500).json({ error: "Internal server error." });
})

module.exports = app;