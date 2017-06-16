module.exports = function (app) {
    let controller = app.controllers.mock;

    app.route("/mock")
        .get(controller.load);
};