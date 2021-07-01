
exports.up = function(knex) {
  return knex.schema.createTable("businesses", (table) =>{
    table.increments("business_id").primary();
    table.string("business_name");
    table.string("business_address");
    table.integer("business_lat");
    table.integer("business_lng");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("businesses");
};
