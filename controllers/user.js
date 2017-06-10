module.exports = function (app) {
    var encryption = app.utils.encryption;

    var User = app.models.user;

    var controller = {};

    controller.findById = function (req, res) {
        User.findById(req.params._id, function (err, user) {
            if (err) {
                res.status(500).json(err);
            } else {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({
                        error: "User not found."
                    });
                }
            }
        });
    };

    controller.save = function (req, res) {
        var _id = req.params._id;

        var data = {
            email: req.body.email,
            password: encryption.encrypt(req.body.password),
            fullname: req.body.fullname
        };

        if (_id) {
            User.findByIdAndUpdate(_id, data, function (err) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(201).end();
                }
            });
        } else {
            var user = new User(data);

            user.save(function (err) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(201).json(user);
                }
            });
        }
    };

    return controller;
};