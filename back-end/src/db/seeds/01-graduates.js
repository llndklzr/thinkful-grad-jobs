const graduates = require("./01-graduates.json");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE graduates RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("graduates").insert(graduates);
    });
};
