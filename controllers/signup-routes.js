const router = require("express").Router();

//handlebars view 
router.get("/", async (req, res) => {
    res.render("signup", {
        loggedIn: req.session.loggedIn,
        loggedInUserData: req.session.loggedInUserData,
    });
});

module.exports = router;
