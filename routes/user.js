module.exports = function (app) {
    let controller = app.controllers.user;
    let validate = app.controllers.authentication.validate;

    app.route("/users")
        .post(controller.save);

    app.route("/users/:_id")
        .get(validate, controller.findById)
        .put(validate, controller.save);
};