const User = require("../../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");

module.exports = {

    // Render the login page.
    login: (req, res) => {
        res.render("auth/login", {
            title: "Login"
        });
    },

    // When user tries to login.
    postLogin: (req, res, next) => {
        passport.authenticate("local", (err, user, info) => {
            if(err) {
                req.flash("error", info.message);
                return next(err);
            }

            if(!user) {
                req.flash("error", info.message);
                return res.redirect("/auth/login");
            }

            req.logIn(user, (err) => {
                if(err) {
                    req.flash("error", info.message);
                    return next(err);
                }
                return res.redirect("/");
            });

        })(req, res, next);
    },

    // Render the registration page.
    register: (req, res) => {
        res.render("auth/register", {
            title: "Register"
        });
    },
    
    // Registering the user.
    postRegister: (req, res) => {   

        const {name, email, password} = req.body;        
        console.log(req.body);   

        // Check if email exist.
        User.exists({email: email}, async (err, result) => {
            if(result) {
                req.flash("error", "Email already exist");
                res.redirect("/auth/register");
            }

            // Hash password.
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a user.
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword
            });

            // Automatically login the user after registration.
            req.logIn(user, (err) => {
                if(err) {
                    req.flash("error", err);
                }
                return res.redirect("/");
            });
        });

    },

    // Logout the user.
    logout: (req, res) => {
        req.logout();
        req.session.destroy();
        return res.redirect("/");
    }
}