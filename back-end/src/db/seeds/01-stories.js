const stories = require("./00-stories.json");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE stories RESTART IDENTITY CASCADE")
    .then(function () {
      // Inserts seed entries
      return knex("stories").insert(stories);
    });
};
