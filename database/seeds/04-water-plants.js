exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("water_plants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("water_plants").insert([
        {
          water_id: 1,
          plants_id: 1
        },
        {
          water_id: 1,
          plants_id: 2
        },
        {
          water_id: 1,
          plants_id: 3
        },
        {
          water_id: 1,
          plants_id: 4
        },
        {
          water_id: 1,
          plants_id: 5
        },
        {
          water_id: 1,
          plants_id: 6
        },
        {
          water_id: 1,
          plants_id: 7
        },
        {
          water_id: 1,
          plants_id: 8
        },
        {
          water_id: 2,
          plants_id: 1
        },
        {
          water_id: 2,
          plants_id: 2
        },
        ,
        {
          water_id: 2,
          plants_id: 3
        },
        {
          water_id: 2,
          plants_id: 4
        },
        {
          water_id: 2,
          plants_id: 5
        },
        {
          water_id: 2,
          plants_id: 6
        },
        {
          water_id: 2,
          plants_id: 7
        },
        {
          water_id: 2,
          plants_id: 8
        }
      ]);
    });
};
