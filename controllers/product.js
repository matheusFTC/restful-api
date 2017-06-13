module.exports = function (app) {
    var Product = app.models.product;

    var controller = {};

    controller.findAll = function (req, res) {
        Product.find(req.query, function (err, products) {
            res.status(200).json(products);
        });
    };

    controller.findById = function (req, res) {
        Product.findById(req.params._id, function (err, product) {
            if (err) {
                res.status(500).json(err);
            } else {
                if (product) {
                    res.status(200).json(product);
                } else {
                    res.status(404).json({
                        error: "Product not found."
                    });
                }
            }
        });
    };

    return controller;
};