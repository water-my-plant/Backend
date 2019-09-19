exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    users.string("fullname", 128).notNullable();
    users
      .string("username", 128)
      .notNullable()
      .unique();
    users.string("password", 128).notNullable();
    users.integer("phonenumber", 11);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
