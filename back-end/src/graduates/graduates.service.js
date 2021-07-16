const knex = require("../db/connection");
const tableName="graduates";

function getUserByEmail(email){
  return knex(tableName)
    .select("*")
    .where({graduate_email: email})
    .then(user => user[0]);
}

module.exports= {
  getUserByEmail,
}