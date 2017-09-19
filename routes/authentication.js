module.exports = (app) => {
    let controller = app.controllers.authentication;
    let logger = app.utils.logger.access;

    app.route("/authentication")
        .post(logger, controller.authenticate);
};