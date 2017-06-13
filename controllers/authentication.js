var jwt = require("jwt-simple");
var moment = require("moment");

module.exports = function (app) {
    const secret = app.parameters.authentication.secret;
  const amount = app.parameters.authentication.amount;
  const duration = app.parameters.authentication.duration;

    var encryption = app.utils.encryption;

    var User = app.models.user;

    var controller = {};

    controller.authenticate = function (req, res) {
        User.findOne({
            "email": req.body.email,
            "password": encryption.encrypt(req.body.password)
        }, function (err, user) {
            if (user) {
                var expires = moment().add(amount, duration).valueOf();

                var token = jwt.encode({
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
        });
    };

    controller.validate = function (req, res, next) {
        var token = req.body.token || req.query.token || req.headers["x-access-token"];

        if (token) {
            try {
                var decoded = jwt.decode(token, secret);

                if (decoded.exp <= Date.now()) {
                    res.status(401).json({
                        error: "Access expired."
                    });
                } else {
                    User.findById({
                        "_id": decoded.iss
                    }, function (err, user) {
                        if (user) {
                            next();
                        } else {
                            res.status(401).json({
                                error: "Unauthorized."
                            });
                        }
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