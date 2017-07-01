module.exports = function (app) {
    let Order = app.models.order;

    let controller = {};

    controller.findAll = function (req, res) {
        if (req.query.user) {
            Order.find(req.query)
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
                error: "It is necessary to provide the user."
            });
        }
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

    controller.save = function (req, res) {
        let _id = req.params._id;

        let data = {
            user: req.body.user,
            inclusion: req.body.inclusion,
            finalization: req.body.finalization,
            status: req.body.status,
            satisfaction: req.body.satisfaction,
            items: req.body.items
        };

        if (_id) {
            Order.findByIdAndUpdate(_id, { $set: data, $inc: { __v: 1 } }, { "new": true })
                .then(function (order) {
                    res.status(200).json(order);
                })
                .catch(function (err) {
                    res.status(500).json(err);
                });
        } else {
            let order = new Order(data);

            order.save()
                .then(function () {
                    res.status(201).json(order);
                })
                .catch(function (err) {
                    res.status(500).json(err);
                });
        }
    };

    return controller;
};