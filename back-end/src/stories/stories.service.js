const knex = require("../db/connection");
const tableName = "stories";

//! <<------- CRUDL ------->>
function list() {
  return knex(tableName);
}

function listWithGrads(){
  return knex(`${tableName} as s`)
    .join("graduates as g", "s.graduate_id", "g.graduate_id")
    .orderBy("s.created_at")
}

function getStoryByGradId(gradId){
  return knex(`${tableName} as s`)
    .select("*")
    .join("graduates as g", "g.graduate_id", "s.graduate_id")
    .where("g.graduate_id", gradId)
    .then(grad=>grad[0])
}

function createStory(parsedStory){
  return knex()
  // we have some transaction here
}

module.exports = {
  list,
  getStoryByGradId,
  listWithGrads,
  createStory
};
