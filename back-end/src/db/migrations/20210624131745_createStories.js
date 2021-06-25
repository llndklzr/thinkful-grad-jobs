exports.up = function (knex) {
  return knex.schema.createTable("stories", (table)=>{
    table.increments("story_id").primary();
    table.string("graduate");
    table.string("employer");
    table.string("job_title");
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("stories");
};
