module.exports = function (app) {
    let Item = app.models.item;

    let controller = {};

    controller.findAll = function (req, res) {
        Item.find(req.query)
            .then(function (items) {
                res.status(200).json(items);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    };

    controller.findById = function (req, res) {
        Item.findById(req.params._id)
            .then(function (item) {
                if (item) {
                    res.status(200).json(item);
                } else {
                    res.status(404).json({
                        error: "Item not found."
                    });
                }
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    };

    return controller;
};