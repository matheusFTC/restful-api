module.exports = function (app) {
    let controller = app.controllers.item;
    let validate = app.controllers.authentication.validate;

    app.route("/items")
        .get(validate, controller.findAll);

    app.route("/items/:_id")
        .get(validate, controller.findById);
};