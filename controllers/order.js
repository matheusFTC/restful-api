module.exports = function (app) {
    let Order = app.models.order;

    let controller = {};

    controller.findAll = function (req, res) {
        Order.find(req.query)
            .populate("items")
            .exec()
            .then(function (orders) {
                res.status(200).json(orders);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    };

    controller.findById = function (req, res) {
        Order.findById(req.params._id)
            .populate("items")
            .exec()
            .then(function (order) {
                if (product) {
                    res.status(200).json(order);
                } else {
                    res.status(404).json({
                        error: "Order not found."
                    });
                }
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    };

    controller.findByUser = function (req, res) {
        let user = req.query.user;

        if (user) {
            Order.find({user: user})
                .populate("items")
                .exec()
                .then(function (orders) {
                    res.status(200).json(orders);
                })
                .catch(function (err) {
                    res.status(500).json(err);
                });
        } else {
            res.status(404).json({
                error: "No user provided."
            });
        }
    };

    return controller;
};