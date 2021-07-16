const knex = require("../db/connection");
const tableName = "graduates";

function getUserByEmail(email){
  return knex(tableName)
    .select("*")
    .where({graduate_email: email})
    .then(user => user[0]);
}

function makeUser(user){
  return knex(tableName)
    .insert(user)
    .returning("*")
    .then(grad=>grad[0]);
}

function getUserById(userId){
  return knex(tableName)
    .select("*")
    .where({graduate_id: userId})
    .then(grad => grad[0]);
}

function getAllGrads(){
  return knex(tableName)
    .select("*");
}

module.exports= {
  getUserByEmail,
  makeUser,
  getUserById,
  getAllGrads
}