exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          fullname: "Mark Smith",
          username: "MarkyMark",
          password: "abc123",
          phonenumber: "12125555555"
        },
        {
          fullname: "Jill Dean",
          username: "Jilly",
          password: "abc123",
          phonenumber: "16465555555"
        }
      ]);
    });
};
