let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get("/", (req, res) => {
    Controllers.recipeController.getRecipes(res);
});
// Adds a POST route to create a new user
router.post("/create", (req, res) => {
    Controllers.recipeController.createRecipe(req.body, res);
});
module.exports = router;
