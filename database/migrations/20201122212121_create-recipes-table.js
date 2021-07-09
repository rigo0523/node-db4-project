exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 128).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 128).notNullable();
    })
    .createTable("unit", (tbl) => {
      tbl.increments("id");
      tbl.string("unit_name", 128).notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("id");
      tbl.string("title", 128).notNullable();
      tbl.integer("step_number").notNullable();
      tbl.string("instructions", 255).notNullable();
      tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("recipes_ingredients", (tbl) => {
      tbl
        .integer("recipes_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.float("quantity").notNullable();
      tbl
        .integer("unit_id")
        .unsigned()
        .notNullable()
        .references("unit.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("unit")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
