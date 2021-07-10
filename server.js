require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
const path = require("path");
const session = require("express-session");
const flash = require("express-flash");
const MongoStore = require("connect-mongo")(session);

const app = express();
const PORT = process.env.PORT || 8000;

// Acquire databse connection.
const db = require("./App/config/mongoose");



// Session config.
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    // Session store.
    store: new MongoStore({
        mongooseConnection: db,
        collection: "sessions"
    }, (err) => {
        console.log("Error in connecting with mongo-store: ", err);
    }),
    cookie: {
        // Age of cookie, currently set to 15 days.
        maxAge: 1000 * 60 * 60 * 24 * 15
    },

}));

app.use(flash());

// Assets.
app.use(express.static("public"));

// Parses the JSON to javascript object.
app.use(express.json());

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
})

// Set template engine and layouts.
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join("resources", "views"));

// Using express routers.
app.use("/", require("./routes/web"));

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});