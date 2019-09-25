exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("water")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("water").insert([
        {
          water_schedule: "Water in 1 day"
        },
        {
          water_schedule: "Water in 2 days"
        },
        {
          water_schedule: "Water in 3 days"
        },
        {
          water_schedule: "Water in 4 days"
        },
        {
          water_schedule: "Water in 5 days"
        },
        {
          water_schedule: "Water in 6 days"
        },
        {
          water_schedule: "Water in 7 days"
        },
        {
          water_schedule: "Water in 8 days"
        },
        {
          water_schedule: "Water in 9 days"
        },
        {
          water_schedule: "Water in 10 days"
        },
        {
          water_schedule: "Water in 11 days"
        },
        {
          water_schedule: "Water in 12 days"
        },
        {
          water_schedule: "Water in 13 days"
        },
        {
          water_schedule: "Water in 14 days"
        },
        {
          water_schedule: "Water in 15 days"
        }
      ]);
    });
};
