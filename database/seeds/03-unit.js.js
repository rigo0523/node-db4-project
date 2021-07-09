exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("unit")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("unit").insert([
        { unit_name: "cup" },
        { unit_name: "ounce" },
        { unit_name: "whole" },
        { unit_name: "half of" },
        { unit_name: "teaspoon" },
        { unit_name: "tablespoon" },
        { unit_name: "gallon" },
        { unit_name: "ounce" },
        { unit_name: "handful" },
      ]);
    });
};
