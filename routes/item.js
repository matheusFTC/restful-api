module.exports = function (app) {
    let controller = app.controllers.item;

    app.route("/items")
        .get(controller.findAll);

    app.route("/items/:_id")
        .get(controller.findById);
};