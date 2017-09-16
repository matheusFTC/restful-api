module.exports = (app) => {
    let controller = app.controllers.product;
    let logger = app.utils.logger.access;

    app.route("/products")
        .get(logger, controller.findAll);

    app.route("/products/:_id")
        .get(logger, controller.findById);
};