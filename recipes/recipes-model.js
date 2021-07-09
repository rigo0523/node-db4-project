const db = require("../database/dbConfig");

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes").where({ id }).first();
}

function getShoppingList(id) {
  return db("recipes_ingredients as ri")
    .join("ingredients as i", "ri.ingredients_id", "i.id")
    .join("unit as u", "u.id", "ri.unit_id")
    .select("i.name", "u.unit_name", "ri.quantity")
    .where("ri.recipes_id", id);
}

function getInstructions(recipe_id) {
  return db("steps as s")
    .select("s.step_number", "s.title", "s.instructions")
    .where("s.recipes_id", recipe_id)
    .orderBy("step_number");
}
