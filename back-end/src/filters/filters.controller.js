const service = require("./filters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//! <<------- CRUDL ------->>

async function listMatchesForMapFilter(req, res) {
  const filters = req.body.data;
  console.log("FILTERS IN CONTROLLER", filters);
  const results = await service.filterFromMap(filters);
  res.json({data: results})
}

module.exports = {
  mapFilter: [asyncErrorBoundary(listMatchesForMapFilter)],
};
