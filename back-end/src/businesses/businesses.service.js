const knex = require("../db/connection");
const tableName = "businesses";

function list(){
  return knex(tableName);
}

function getGradsByBusinessId(id){
  return knex("businesses as b")
    .select("g.*")
    .join("stories as s", "b.business_id", "s.business_id")
    .join("graduates as g", "s.graduate_id", "g.graduate_id")
    .where("b.business_id", id);
}

function getBizByGradId(gradId){
  return knex(`${tableName} as b`)
    .select("*")
    .join("stories as s", "b.business_id", "s.business_id")
    .join("graduates as g", "s.graduate_id", "g.graduate_id")
    .where("g.graduate_id", gradId)
    .then(grad=>grad[0])

}

module.exports = {
  list,
  getGradsByBusinessId,
  getBizByGradId
}