const knex = require("../db/connection");

// select * from businesses as b
// where b.business_location ->> 'address' ilike '%red%'


function filterFromMap(filters){
  return knex("businesses as b")
    .join("stories as s", "s.business_id", "b.business_id")
    .join("graduates as g", "g.graduate_id", "s.graduate_id")
    .where("business_name", "ilike", `%${filters.companyFilter}%`)
    .andWhere("g.graduate_career_field", "ilike", `%${filters.fieldFilter}%`)
    .andWhereRaw(`business_location ->> 'address' ilike '%${filters.locationFilter}%'`)
    .select(
      "b.*",
      "g.first_name as grads:first_name",
      "g.last_name as grads:last_name",
      "g.graduate_id as grads:graduate_id"
    )
}

function filterFromStories(filters, queryLimits){
  return knex("businesses as b")
    .join("stories as s", "s.business_id", "b.business_id")
    .join("graduates as g", "g.graduate_id", "s.graduate_id")
    .where("business_name", "ilike", `%${filters.company}%`)
    .andWhere("g.first_name", "ilike", `%${filters.name}%`)
    .andWhere("g.graduate_career_field", "ilike", `%${filters.field}%`)
    .select(
      "b.business_name",
      "g.*",
      "s.*"
    )
    .orderBy("s.created_at", "desc")
    .limit(queryLimits)
}

module.exports = {filterFromMap, filterFromStories}