const Menu = require("../../models/menu")

module.exports = {
    home: (req, res) => {

        Menu.find({}, (err, menus) => {
            if(err) {
                console.log("Error in fetching menus from pizzaDB");
                return;
            } else {
                return res.render("home", {
                    title: "Home",
                    menu_list: menus
                });
            }
        });

    }
}