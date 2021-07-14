exports.up = function (knex) {
  return knex.schema.createTable("businesses", (table) => {
    table.increments("business_id").primary();
    table.string("business_name");
    table.json("business_location");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("businesses");
};
