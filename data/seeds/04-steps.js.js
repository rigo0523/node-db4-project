exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        {
          title: "boil",
          step_number: 1,
          instructions: "warm up water",
          recipes_id: 1,
        },
        {
          title: "cook",
          step_number: 2,
          instructions: "cook contents for some mins.",
          recipes_id: 1,
        },
        {
          title: "serve",
          step_number: 3,
          instructions: "serve on a platee.",
          recipes_id: 1,
        },
        {
          title: "water",
          step_number: 1,
          instructions: "get water",
          recipes_id: 2,
        },
        {
          title: "freeze",
          step_number: 2,
          instructions: "put in freezer.",
          recipes_id: 2,
        },
        {
          title: "serve",
          step_number: 3,
          instructions: "serve it all",
          recipes_id: 2,
        },
        {
          title: "prep",
          step_number: 1,
          instructions: "get tortilla",
          recipes_id: 3,
        },
        {
          title: "cook",
          step_number: 2,
          instructions: "place in pan, cook for about half an hour on med",
          recipes_id: 3,
        },
        {
          title: "serve",
          step_number: 3,
          instructions: "plate and let cook before serving.",
          recipes_id: 3,
        },
      ]);
    });
};
