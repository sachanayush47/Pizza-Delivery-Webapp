const mongoose = require("mongoose");

const url = "mongodb://localhost/pizzaDB";

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error.'));

db.once("open", () => {
    console.log("Database connected.")
});

module.exports = db;