const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a Title!"]
      },

    description: {
        type: String,
        required: [true, "Please provide a description of the recipe"]
    },
    
    cook_time: {}, //object type containing prep, cook and total time
    ingredients: {},  //array type containing required ingredients
    date:{}, //date type showing date recipe was created
    nutritional_facts: {} //object type containing calories, fat, carbs and protein

    
})

module.exports = mongoose.model.Recipes || mongoose.model("Recipes", RecipeSchema);
