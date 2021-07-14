const service = require("./businesses.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//! <<------- CRUDL ------->>

async function list(request, response) {
  const data = await service.list();
  response.json({ data });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
