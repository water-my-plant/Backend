// const db = require("../database/dbConfig.js");

// module.exports = {
//   find,
//   findById,
//   add,
//   update,
//   remove
// };

// // find plant
// function find() {
//   return db("water");
// }

// // find plant by ID
// function findById(id) {
//   return db("water")
//     .where({ id })
//     .first();
// }

// // add new plant
// function add(water) {
//   return db("water")
//     .insert(water)
//     .then(ids => {
//       return findById(ids[0]);
//     });
// }

// // resolves to updated changes
// function update(changes, id) {
//   return db("water")
//     .where({ id })
//     .update(changes)
//     .then(count => {
//       return findById(id);
//     });
// }

// // resolves to a count
// function remove(id) {
//   return db("water")
//     .where({ id })
//     .del();
// }

// it was decided this wasn't needed
