exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("water")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("water").insert([
        {
          water_schedule: "2019-09-24 12:00"
        },
        {
          water_schedule: "2019-09-25 17:00"
        },
        {
          water_schedule: "2019-09-26 13:00"
        },
        {
          water_schedule: "2019-09-27 15:00"
        },
        {
          water_schedule: "2019-09-28 10:00"
        },
        {
          water_schedule: "2019-09-29 17:30"
        },
        {
          water_schedule: "2019-09-30 15:00"
        },
        {
          water_schedule: "2019-10-01 11:30"
        },
        {
          water_schedule: "2019-10-02 10:00"
        },
        {
          water_schedule: "2019-10-03 11:00"
        },
        {
          water_schedule: "2019-10-04 12:00"
        },
        {
          water_schedule: "2019-10-05 13:00"
        },
        {
          water_schedule: "2019-10-06 14:00"
        },
        {
          water_schedule: "2019-10-07 15:00"
        },
        {
          water_schedule: "2019-10-08 16:00"
        }
      ]);
    });
};
