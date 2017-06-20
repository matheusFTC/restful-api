let frisby = require("frisby");

frisby.create("Find All Items")
    .get("http://localhost/items/")
    .expectStatus(200)
    .toss();