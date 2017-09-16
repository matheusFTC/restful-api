module.exports = (app) => {
    let controller = app.controllers.user;
    let validate = app.controllers.authentication.validate;
    let logger = app.utils.logger.access;

    app.route("/users")
        .post(logger, controller.save);

    app.route("/users/:_id")
        .get(logger, validate, controller.findById)
        .put(logger, validate, controller.save);
};