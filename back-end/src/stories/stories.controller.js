const service = require("./stories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//! <<------- CRUDL ------->>

async function list(request, response) {
  const data = await service.listWithGrads();
  response.json({ data });
}
async function parseData(req, res, next){
  const {
    first_name,
    last_name,
    graduation_date,
    graduate_career_field,
    business_name,
    business_location,
    graduate_id,
    hire_data,
    story,
    interview_count,
    job_title,
    linkedInUrl,
    resumeTitle,
    portfolioTitle,
    coverLetterTitle,
    enabled,
    disabled,
    storyDetails
  } = req.body.data
  const graduateObj = {
    first_name,
    last_name,
    graduation_date,
    graduate_career_field
  }
  const businessObj = {
    business_name,
    business_location
  }
  const storyObj = {
    graduate_id,
    hire_data,
    story,
    interview_count,
    job_title,
    linkedInUrl,
    resumeTitle,
    portfolioTitle,
    coverLetterTitle,
    enabled,
    disabled,
    storyDetails
  }
  res.locals.graduateObj = graduateObj;
  res.locals.businessObj = businessObj;
  res.locals.storyObj = storyObj;
  console.log("STORY", storyObj);
  console.log("BUSINESS", businessObj);
  console.log("GRADUATE", graduateObj);
  next();
}

function validateProperty(property){
  if(!property){
    next({
      status: 400,
      message: `You are missing a property in the post`
    })
  }
  next();
}

async function post(req, res){
  console.log(res.locals)
 // const story = req.body.data;
  //console.log("WHOLE STORY BEFORE POST", story);
  //await service.createStory(story);
  res.sendStatus(200);
}



module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [parseData, post],
};
