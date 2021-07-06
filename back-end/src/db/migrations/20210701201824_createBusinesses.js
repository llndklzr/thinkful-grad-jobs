exports.up = function (knex) {
  return knex.schema.createTable("businesses", (table) => {
    table.increments("business_id").primary();
    table.string("business_name");
    table.string("business_address");
    table.decimal("business_lat", 9,6);
    table.decimal("business_lng", 9,6);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("businesses");
};
