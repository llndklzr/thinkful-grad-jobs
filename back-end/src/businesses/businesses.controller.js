const service = require("./businesses.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//! <<------- CRUDL ------->>

async function list(request, response) {
  const data = await service.list();
  response.json({ data });
}

async function getGradsByBusinessId(req, res, next){
  const {businessId} = req.params;
  const result = await service.getGradsByBusinessId(businessId);
  res.status(201).json({data: result});
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  listByBusinessId: [asyncErrorBoundary(getGradsByBusinessId)]
};
