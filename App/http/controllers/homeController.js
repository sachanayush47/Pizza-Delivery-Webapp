const Menu = require("../../models/menu")

module.exports = {

    // Render the home page.
    home: (req, res) => {

        // Find all the pizza from the menus.
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