module.exports = {
    login: (req, res) => {
        res.render("auth/login", {
            title: "Login"
        });
    },
    register: (req, res) => {
        res.render("auth/register", {
            title: "Register"
        });
    }
}