module.exports = function (app) {
    let Item = app.models.item;
    let Product = app.models.product;

    let controller = {};

    controller.load = function (req, res) {

        Product.remove({}).then(function () {
            console.log("Remove all products.");
        });

        Item.remove({}).then(function () {
            console.log("Remove all items.");
        });

        let bread = new Item({
            name: "Bread",
            description: "Bread toast.",
            price: 0.00
        });

        let egg = new Item({
            name: "Egg",
            description: "Fried egg.",
            price: 1.50
        });

        let bacon = new Item({
            name: "Bacon",
            description: "Fried bacon.",
            price: 1.50
        });

        let cheese = new Item({
            name: "Cheese",
            description: "Roasted cheese.",
            price: 1.50
        });

        bread.save().then(function () {
            console.log("Added the bread item.");
        });

        egg.save().then(function () {
            console.log("Added the egg item.");
        });

        bacon.save().then(function () {
            console.log("Added the bacon item.");
        });

        cheese.save().then(function () {
            console.log("Added the cheese item.");
        });

        let sandwich = new Product({
            name: "Sandwich",
            description: "Bread toast, fried egg, fried bacon and roasted cheese.",
            image: null,
            price: 5.00,
            items: [
                bread._id,
                egg._id,
                bacon._id,
                cheese._id
            ]
        });

        let refrigerant = new Product({
            name: "Refrigerant",
            description: "Refrigerant 350 ml.",
            image: null,
            price: 2.20,
            items: null
        });

        sandwich.save().then(function () {
            console.log("Added the sandwich product.");
        });

        refrigerant.save().then(function () {
            console.log("Added the refrigerant product.");
        });

        res.status(201).end();
    };

    return controller;
};