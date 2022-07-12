const router = require("express").Router();

//render handlebars view
router.get("/", async (req, res) => {
    res.render("logout", {
        loggedIn: false,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;
