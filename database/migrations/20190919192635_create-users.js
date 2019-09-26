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
      // .createTable("water", tbl => {
      //   tbl.increments();
      //   tbl.string("water_schedule", 256);
      // })
      .createTable("plants", tbl => {
        tbl.increments();
        tbl.string("plant_name", 256).notNullable();
        tbl.string("plant_species", 256).notNullable();
        tbl.string("water_schedule", 512).notNullable();
        // foreign key setup using knex
        // tbl
        //   .integer("water_id")
        //   .unsigned()
        //   .references("id")
        //   // this table must exist
        //   .inTable("water")
        //   .onDelete("CASCADE")
        //   .onUpdate("CASCADE");
        // })
        // .createTable("water_plants", tbl => {
        //   tbl
        //     .integer("water_id")
        //     .unsigned()
        //     .notNullable()
        //     .references("id")
        //     // this table must exist
        //     .inTable("water")
        //     .onDelete("CASCADE")
        //     .onUpdate("CASCADE");
        //   tbl
        //     .integer("plants_id")
        //     .unsigned()
        //     .notNullable()
        //     .references("id")
        //     // this table must exist
        //     .inTable("plants")
        //     .onDelete("CASCADE")
        //     .onUpdate("CASCADE");
        //   tbl.primary(["water_id", "plants_id"]);
      })
  );
};

exports.down = function(knex) {
  // reverse order of creation
  return knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
};
