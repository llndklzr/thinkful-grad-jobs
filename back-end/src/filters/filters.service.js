const knex = require("../db/connection");

// select * from businesses as b
// where b.business_location ->> 'address' ilike '%red%'


function filterFromMap(filters){
  return knex("businesses as b")
    .select("*")
    .join("stories as s", "s.business_id", "b.business_id")
    .join("graduates as g", "g.graduate_id", "s.graduate_id")
    .where("business_name", "ilike", `%${filters.companyFilter}%`)
    .andWhere("g.graduate_career_field", "ilike", `%${filters.fieldFilter}%`)
    .andWhereRaw(`business_location ->> 'address' ilike '%${filters.locationFilter}%'`)
}

module.exports = {filterFromMap}