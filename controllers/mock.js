module.exports = function (app) {
    let Item = app.models.item;
    let Product = app.models.product;

    let controller = {};

    controller.load = function (req, res) {

        Product.remove({}).then(function () {
            console.log("Remove all products.");

            Item.remove({}).then(function () {
                console.log("Remove all items.");

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

                    egg.save().then(function () {
                        console.log("Added the egg item.");

                        bacon.save().then(function () {
                            console.log("Added the bacon item.");

                            cheese.save().then(function () {
                                console.log("Added the cheese item.");

                                let sandwich = new Product({
                                    name: "Sandwich",
                                    description: "Bread toast, fried egg, fried bacon and roasted cheese.",
                                    image: "http://lorempixel.com/400/400/food/",
                                    price: 5.00,
                                    items: [
                                        bread._id,
                                        egg._id,
                                        bacon._id,
                                        cheese._id
                                    ]
                                });

                                sandwich.save().then(function () {
                                    console.log("Added the sandwich product.");
                                });
                            });
                        });
                    });
                });

                let refrigerant = new Product({
                    name: "Refrigerant",
                    description: "Refrigerant 350 ml.",
                    image: "http://lorempixel.com/400/400/food/",
                    price: 2.20,
                    items: null
                });

                refrigerant.save().then(function () {
                    console.log("Added the refrigerant product.");
                });

                let frenchFries = new Product({
                    name: "French Fries",
                    description: "Salted French Fries.",
                    image: "http://lorempixel.com/400/400/food/",
                    price: 4.20,
                    items: null
                });

                frenchFries.save().then(function () {
                    console.log("Added the french fries product.");
                });

                res.status(201).end();
            });
        });
    };

    return controller;
};