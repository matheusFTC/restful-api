module.exports = function (app) {
    let controller = app.controllers.authentication;

    app.route("/authentication")
        .post(controller.authenticate);
};