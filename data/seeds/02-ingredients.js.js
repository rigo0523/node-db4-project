exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "tacos" },
        { name: "water" },
        { name: "cilantro" },
        { name: "steak" },
        { name: "ice" },
        { name: "tort" },
        { name: "carn" },
        { name: "corn" },
        { name: "salt" },
        { name: "pepper" },
      ]);
    });
};
