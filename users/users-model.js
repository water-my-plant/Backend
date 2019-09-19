const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db();
}

function findBy(filter) {
  return db();
}

async function add(user) {
  return db();
}

function findById(id) {
  return db();
}
