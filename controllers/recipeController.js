"use strict";
let Models = require("../models"); // matches index.js
const getRecipes = (res) => {
    // finds all Recipes
    Models.Recipe.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const createRecipe = (data, res) => {
    // creates a new Recipe using JSON data POSTed in request body
    console.log(data);
    new Models.Recipe(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
module.exports = {
    getRecipes,
    createRecipe,
};
