exports.up = function(knex) {
  return (
    knex.schema
      .createTable("users", tbl => {
        tbl.increments();
        tbl.string("fullname", 128).notNullable();
        tbl
          .string("username", 128)
          .notNullable()
          .unique();
        tbl.string("password", 128).notNullable();
        tbl.string("phonenumber", 11);
      })
      // plants
      .createTable("plants", tbl => {
        tbl.increments();
        tbl.string("plant_name", 256).notNullable();
        tbl.string("plant_species", 256).notNullable();
        tbl
          .integer("users_id")
          .notNullable()
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
      // water schedule
      .createTable("water", tbl => {
        tbl.increments();
        tbl
          .integer("plants_id")
          .references("id")
          .inTable("plants")
          .onDelete("CASCADE");
        tbl.dateTime("water schedule");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("plants")
    .dropTableIfExists("water");
};
