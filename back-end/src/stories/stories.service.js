const knex = require("../db/connection");

//! <<------- CRUDL ------->>
function list() {
  return knex("stories");
}

module.exports = {
  list,
};
