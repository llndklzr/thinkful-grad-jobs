const { Translate } = require("aws-sdk");

exports.up = function (knex) {
  return knex.schema.createTable("stories", (table) => {
    table.increments("story_id").primary();
    table.integer("graduate_id").unique().unsigned().notNullable();
    table
      .foreign("graduate_id")
      .references("graduate_id")
      .inTable("graduates")
      .onDelete("cascade");
    table.date("hire_date");
    table.string("story", 2000);
    table.integer("interview_count");
    table.string("job_title");
    table.integer("business_id").unsigned().notNullable();
    table
      .foreign("business_id")
      .references("business_id")
      .inTable("businesses")
      .onDelete("cascade");
    table.json("storyDetails");
    table.specificType("enabled", "text ARRAY");
    table.specificType("disabled", "text ARRAY");
    table.string("linkedInUrl");
    table.string("resumeTitle");
    table.string("portfolioUrl");
    table.string("coverLetterTitle");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("stories");
};
