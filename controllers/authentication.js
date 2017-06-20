let jwt = require("jwt-simple");
let moment = require("moment");

module.exports = function (app) {
    const secret = app.parameters.authentication.secret;
    const amount = app.parameters.authentication.amount;
    const duration = app.parameters.authentication.duration;

    let encryption = app.utils.encryption;

    let User = app.models.user;

    let controller = {};

    controller.authenticate = function (req, res) {
        User.findOne({
            "email": req.body.email,
            "password": encryption.encrypt(req.body.password)
        }).then(function (user) {
            if (user) {
                let expires = moment().add(amount, duration).valueOf();

                let token = jwt.encode({
                    iss: user._id,
                    exp: expires
                }, secret);

                res.status(200).json({
                    token: token,
                    expires: expires
                });
            } else {
                res.status(401).json({
                    error: "Unauthorized."
                });
            }
        }).catch(function (err) {
            res.status(500).json(err);
        });
    };

    controller.validate = function (req, res, next) {
        let token = req.body.token || req.query.token || req.headers["x-access-token"];

        if (token) {
            try {
                let decoded = jwt.decode(token, secret);

                if (decoded.exp <= Date.now()) {
                    res.status(401).json({
                        error: "Access expired."
                    });
                } else {
                    User.findById({
                        "_id": decoded.iss
                    }).then(function (user) {
                        if (user) {
                            next();
                        } else {
                            res.status(401).json({
                                error: "Unauthorized."
                            });
                        }
                    }).catch(function (err) {
                        res.status(500).json(err);
                    });
                }
            } catch (err) {
                res.status(400).json({
                    error: "Invalid token."
                });
            }
        } else {
            res.status(404).json({
                error: "No token provided."
            });
        }
    };

    return controller;
};