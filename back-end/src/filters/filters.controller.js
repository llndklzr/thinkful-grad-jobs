const service = require("./filters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const Treeize = require("treeize");

//! <<------- CRUDL ------->>

async function listMatchesForMapFilter(req, res) {
  const filters = req.body.data;
  console.log("FILTERS IN CONTROLLER", filters);
  const results = await service.filterFromMap(filters);
  let tree = new Treeize().grow(results); // results are treeized to only send back the grads nested inside their respected businesses
  res.json({data: tree.getData()});
}

module.exports = {
  mapFilter: [asyncErrorBoundary(listMatchesForMapFilter)],
};
