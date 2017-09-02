module.exports = (app) => {
    let encryption = app.utils.encryption;

    let User = app.models.user;

    let controller = {};

    controller.findById = (req, res) => {
        User.findById(req.params._id)
            .populate("adresses")
            .exec()
            .then((user) => {
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({
                        error: "User not found."
                    });
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    };

    controller.save = (req, res) => {
        let _id = req.params._id;

        let data = {
            email: req.body.email,
            fullname: req.body.fullname,
            nif: req.body.nif,
            phone: req.body.phone,
            gender: req.body.gender,
            birth: req.body.birth,
            addresses: req.body.addresses
        };

        if (data.addresses) {
            data.addresses = data.addresses.filter((address) => {
                return address !== null;
            });
        } else {
            data.addresses = null;
        }

        if (_id) {
            User.findById(_id)
                .then((user) => {
                    if (user) {
                        let password = encryption.encrypt(req.body.password);
                        let newPassword = encryption.encrypt(req.body.newPassword);
                        let newPasswordConfirm = encryption.encrypt(req.body.newPasswordConfirm);

                        if (user.password !== password) {
                            res.status(401).json({
                                error: "Unauthorized."
                            });
                        } else {
                            if (newPassword || newPasswordConfirm) {
                                if (newPassword === newPasswordConfirm) {
                                    data.password = newPassword;
                                } else {
                                    res.status(403).json({
                                        error: "The passwords you entered for change are not the same."
                                    });
                                }
                            } else {
                                data.password = password;
                            }

                            if (data.password)
                                User.findByIdAndUpdate(_id, { $set: data, $inc: { __v: 1 } }, { "new": true })
                                    .then((user) => {
                                        res.status(200).json(user);
                                    })
                                    .catch((err) => {
                                        res.status(500).json(err);
                                    });
                        }
                    } else {
                        res.status(404).json({
                            error: "User not found."
                        });
                    }
                })
                .catch((err) => {
                    res.status(500).json(err);
                });
        } else {
            data.password = encryption.encrypt(req.body.password);

            let user = new User(data);

            user.save()
                .then(() => {
                    res.status(201).json(user);
                })
                .catch((err) => {
                    res.status(500).json(err);
                });
        }
    };

    return controller;
};