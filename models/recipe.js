const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    title: { type: String, trim: true, required: true },
    imgUrl: { type: String, trim: true },
    methods: { type: Array, trim: true },
    categories: { type: Array },
    instructions: { type: Array },
    ingredients: { type: Array },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("recipe", recipeSchema);
