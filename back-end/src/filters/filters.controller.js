const service = require("./filters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const Treeize = require("treeize");

//! <<------- CRUDL ------->>

async function listMatchesForMapFilter(req, res) {
  const filters = req.body.data;
  const results = await service.filterFromMap(filters);
  let tree = new Treeize().grow(results); // results are treeized to only send back the grads nested inside their respected businesses
  res.json({data: tree.getData()});
}

async function listMatchesForStoryFilter(req, res){
  const filters = req.body.data;
  const results = await service.filterFromStories(filters);
  res.json({data: results});
}

module.exports = {
  mapFilter: [asyncErrorBoundary(listMatchesForMapFilter)],
  storyFilter: [asyncErrorBoundary(listMatchesForStoryFilter)]
};
