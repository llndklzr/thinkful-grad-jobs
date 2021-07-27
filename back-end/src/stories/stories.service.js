const knex = require("../db/connection");
const tableName = "stories";

//! <<------- CRUDL ------->>
function list() {
  return knex("stories");
}

function getStoryByGradId(gradId){
  return knex(`${tableName} as s`)
    .select("*")
    .join("graduates as g", "g.graduate_id", "s.graduate_id")
    .where("g.graduate_id", gradId)
    .then(grad=>grad[0])
}

module.exports = {
  list,
  getStoryByGradId
};
