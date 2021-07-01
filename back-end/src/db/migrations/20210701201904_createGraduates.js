
exports.up = function(knex) {
  return knex.schema.createTable("graduates", (table)=>{
    table.increments("graduate_id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("graduation_date");
    table.integer("story_id").references("story_id").inTable("stories");
  })
};

exports.down = function(knex) {
  
};
