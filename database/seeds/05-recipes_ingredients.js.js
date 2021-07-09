exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        { recipes_id: 1, ingredients_id: 1, quantity: 4, unit_id: 3 },
        { recipes_id: 1, ingredients_id: 2, quantity: 3, unit_id: 1 },
        { recipes_id: 2, ingredients_id: 2, quantity: 1, unit_id: 1 },
        { recipes_id: 3, ingredients_id: 3, quantity: 10, unit_id: 3 },
        { recipes_id: 3, ingredients_id: 4, quantity: 1, unit_id: 3 },
        { recipes_id: 3, ingredients_id: 5, quantity: 2, unit_id: 1 },
      ]);
    });
};
