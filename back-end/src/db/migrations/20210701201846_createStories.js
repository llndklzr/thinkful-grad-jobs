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
    table.string("story");
    table.integer("interview_count");
    table.string("job_title");
    table.integer("business_id").unsigned().notNullable();
    table
      .foreign("business_id")
      .references("business_id")
      .inTable("businesses")
      .onDelete("cascade");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("stories");
};
