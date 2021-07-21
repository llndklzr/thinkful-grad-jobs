const service = require("./businesses.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//! <<------- CRUDL ------->>

async function list(req, res) {
  const data = await service.list();
  res.json({ data });
}

async function getGradsByBusinessId(req, res, next) {
  const { businessId } = req.params;
  const result = await service.getGradsByBusinessId(businessId);
  res.status(200).json({ data: result });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  listByBusinessId: [asyncErrorBoundary(getGradsByBusinessId)],
};
