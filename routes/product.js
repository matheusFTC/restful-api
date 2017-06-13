module.exports = function (app) {
    var controller = app.controllers.user;
    var validate = app.controllers.authentication.validate;

    app.route("/products")
        .get(validate, controller.findAll);

    app.route("/products/:_id")
        .get(validate, controller.findById);
};