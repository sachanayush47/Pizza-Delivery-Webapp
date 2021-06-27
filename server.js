const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static("public"));

// Set template engine and layouts.
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join("resources", "views"));

app.get("/", (req, res) => {
    res.render("home", {});
});

app.get("/cart", (req, res) => {
    res.render("customers/cart", {});
});

app.get("/login", (req, res) => {
    res.render("auth/login", {});
});

app.get("/register", (req, res) => {
    res.render("auth/register", {});
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});