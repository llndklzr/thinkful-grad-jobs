const knex = require("../db/connection");
const tableName = "businesses";

function list(){
  return knex(tableName);
}

module.exports = {
  list
}