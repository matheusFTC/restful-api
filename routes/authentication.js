module.exports = function (app) {
    var controller = app.controllers.authentication;

    app.route("/authentication")
        .post(controller.authenticate);
};