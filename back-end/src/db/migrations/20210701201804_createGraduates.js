exports.up = function(knex) {
  return knex.schema.createTable("graduates", (table)=>{
    table.increments("graduate_id").primary();
    table.string("first_name");
    table.string("last_name");
    table.string("graduation_date");
    table.string("graduate_email");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("graduates");
};
