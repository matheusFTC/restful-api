module.exports = (app) => {
    let controller = app.controllers.authentication;

    app.route("/authentication")
        .post(logger, controller.authenticate);
};