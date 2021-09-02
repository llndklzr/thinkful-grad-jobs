const service = require("./stories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//! <<------- CRUDL ------->>

async function list(request, response) {
  const data = await service.listWithGrads();
  response.json({ data });
}



module.exports = {
  list: [asyncErrorBoundary(list)]
};
