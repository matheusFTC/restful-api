module.exports = function (app) {
    let controller = app.controllers.order;
    let validate = app.controllers.authentication.validate;

    app.route("/orders")
        .get(validate, controller.findAll)
        .post(validate, controller.save);;

    app.route("/orders/:_id")
        .get(validate, controller.findById)
        .put(validate, controller.save);
};