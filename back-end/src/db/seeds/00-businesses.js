const businesses = require("./00-businesses.json");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE businesses RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("businesses").insert(businesses);
    });
};