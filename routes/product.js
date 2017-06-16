module.exports = function (app) {
    let controller = app.controllers.product;

    app.route("/products")
        .get(controller.findAll);

    app.route("/products/:_id")
        .get(controller.findById);
};