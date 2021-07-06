exports.up = function (knex) {
  return knex.schema.createTable("stories", (table)=>{
    table.increments("story_id").primary();
    table.integer("graduate_id").references("graduate_id").inTable("graduates").unique();
    table.date("hire_date");
    table.string("story");
    table.integer("interview_count");
    table.string("job_title");
    table.integer("business_id").references("business_id").inTable("businesses");
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("stories");
};
