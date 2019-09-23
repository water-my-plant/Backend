const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  findPlants,
  add,
  update,
  remove
};

// find plant
function find() {
  return db("plants");
}

// find plant by ID
function findById(id) {
  return db("plants")
    .where({ id })
    .first();
}

function findPlants(plants_id) {
  return db("steps as st")
    .join("schemes as s", "s.id", "st.scheme_id")
    .select(
      "st.scheme_id",
      "s.scheme_name",
      "st.step_number",
      "st.instructions"
    )
    .where({ plants_id });
}

// add new plant
function add(plant) {
  return db("plants")
    .insert(plant)
    .then(ids => {
      return findById(ids[0]);
    });
}

// resolves to updated changes
function update(changes, id) {
  return db("plants")
    .where({ id })
    .update(changes)
    .then(count => {
      return findById(id);
    });
}

// resolves to a count
function remove(id) {
  return db("plants")
    .where({ id })
    .del();
}
