let frisby = require("frisby");

frisby.create("Find All Products")
    .get("http://localhost/products/")
    .expectStatus(200)
    .toss();