exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("plants")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("plants").insert([
        {
          plant_name: "Abutilon",
          plant_species: "Flowering Maple",
          water_id: 1
        },
        {
          plant_name: "Summer Bloom",
          plant_species: "Ageratum",
          water_id: 2
        },
        {
          plant_name: "Aloe Vera",
          plant_species: "Aloe barbadensis",
          water_id: 3
        },
        {
          plant_name: "Barberton Daisy",
          plant_species: "Gebera Jamesonii",
          water_id: 4
        },
        {
          plant_name: "Bird of Paradise",
          plant_species: "Strelitzia Reginae",
          water_id: 5
        },
        {
          plant_name: "Busy Lizzie",
          plant_species: "Impatiens Walleriana",
          water_id: 6
        },
        {
          plant_name: "Calla lily",
          plant_species: "Zantedeschia aethiopica",
          water_id: 7
        },
        {
          plant_name: "Eternal Flame",
          plant_species: "Calathea Crocata",
          water_id: 8
        },
        {
          plant_name: "Lollipop",
          plant_species: "Pachystachys Lutea",
          water_id: 9
        }
      ]);
    });
};
