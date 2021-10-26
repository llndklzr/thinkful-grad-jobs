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

function createStory(story, grad, bizz){
  let gradId;
  let bizzId;
  return knex.transaction(trx =>{
    return trx
      .insert(grad, "graduate_id")
      .into("graduates")
      .then(id => {
        gradId = id
        return trx.insert(bizz, "business_id")
          .into("businesses")
          .then(id =>{
            bizzId = id;
            return trx.insert({
              ...story,
              business_id: Number(bizzId),
              graduate_id: Number(gradId)
            })
            .into("stories")
            .then(trx.commit)
            .catch(trx.rollback)
          })
      })
  })
}

module.exports = {
  list,
  getStoryByGradId,
  listWithGrads,
  createStory
};
