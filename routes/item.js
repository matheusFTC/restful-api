module.exports = (app) => {
    let controller = app.controllers.item;
    let logger = app.utils.logger.access;

    app.route("/items")
        .get(logger, controller.findAll);

    app.route("/items/:_id")
        .get(logger, controller.findById);
};