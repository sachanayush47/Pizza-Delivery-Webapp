const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user");

passport.use(new LocalStrategy({ usernameField: "email"}, (email, password, done) => {
    // Login

    // Check is user exists.
    User.findOne({email: email}, (err, user) => {

        if(!user) {
            return done(null, false, { message: "No user found with this email."});
        }

        bcrypt.compare(password, user.password).then((match) => {
            if(match) {
                return done(null, user, { message: "Logged in successfully" })
            }

            return done(null, false, { message: "Wrong password" });
        
        }).catch((err) => {
            return done(null, false, { message: "Something went wrong" });
        })

    });

}));

// Adding the user to session.
passport.serializeUser((user, done) => {
    done(null, user._id)
});

// Fetching the user from session.
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});

// Middleware: check if the user is authenticated.
passport.checkAuthentication = function(req, res, next) {
    // If the user is signed in, then pass on the next function.
    if(req.isAuthenticated()) {
        console.log("checkAuthentication");
        console.log(req.isAuthenticated());
        return res.redirect("/");
    }
    
    // If the user is not signed in.
    return next();
}

module.exports = passport;