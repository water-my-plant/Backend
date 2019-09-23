exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        {
          plant_species: "Abutilon",
          plant_name: "flowering maple",
          users_id: 1
        },
        { plant_species: "Ageratum", plant_name: "Summer Bloom", users_id: 2 }
      ]);
    });
};
