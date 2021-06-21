const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 8000;

// Set template engine.
//app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources", "views"));

app.get("/", (req, res) => {
    res.render("home", {});
});

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
})