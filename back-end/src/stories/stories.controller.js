const service = require("./stories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//! <<------- CRUDL ------->>

async function list(request, response) {
  const data = await service.listWithGrads();
  response.json({ data });
}
function parseData(req, res, next){
  const {
    first_name,
    last_name,
    graduation_date,
    graduate_career_field,
    business_name,
    business_location,
    graduate_id,
    hire_date,
    story,
    interview_count,
    job_title,
    linkedInUrl,
    resumeTitle,
    portfolioUrl,
    coverLetterTitle,
    enabled,
    disabled,
    storyDetails,
    application_count
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
    hire_date,
    story, // validate
    interview_count, // validate
    application_count, // validate
    job_title, // validate
    linkedInUrl, // validate is url if present
    resumeTitle,
    portfolioUrl, // validate is url if present
    coverLetterTitle,
    enabled,
    disabled,
    storyDetails
  }
  res.locals.graduateObj = graduateObj;
  res.locals.businessObj = businessObj;
  res.locals.storyObj = storyObj;
  // console.log("STORY", storyObj);
  // console.log("BUSINESS", businessObj);
  // console.log("GRADUATE", graduateObj);
  next();
}

function _validateProperties(properties){
  for(let prop in properties){
    if(!properties[prop]){
      console.log(`PROPERTY FAILED`)
      return prop
    }
  }
  return "";
}

function validateStoryObj(req, res, next){
  const stor = res.locals.storyObj.story;
  const intCount = res.locals.storyObj.interview_count;
  const appCount = res.locals.storyObj.application_count;
  const jobTitle = res.locals.storyObj.job_title;
  const error = _validateProperties({
    stor,
    intCount,
    appCount,
    jobTitle
  })
  if(error){
    next({
      status: 400,
      message: `Property for ${error} is invalid.`
    })
  }
  next();
}


function validateGradObj(req, res, next){
  for(let field in res.locals.graduateObj){
    if(!res.locals.graduateObj[field]){
      return next({
        status: 400,
        message: `You are missing the ${field} property`
      })
    }
  }
  next();
}

function validateAllDates(req, res, next){
  const gradDate = res.locals.graduateObj.graduation_date;
  const hireDate = res.locals.storyObj.hire_date;
  let error = _areDates({gradDate, hireDate});
  if(error){
    next({
      status: 400,
      message: `The date for ${error} is invalid.`
    })
  }
  next();
}

function _areDates(testDates){ // returns the date property that failed
  const date_regex = /^\d{4}\-\d{2}\-\d{2}$/;
  for(let date in testDates){
    if(!date_regex.test(testDates[date])){
      return date;
    }
  }
  return "";
}

async function post(req, res){
  const result = await service.createStory(res.locals.storyObj, res.locals.graduateObj, res.locals.businessObj);
  res.sendStatus(result ? 200 : 500);
}



module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [parseData, validateGradObj, validateAllDates, validateStoryObj, post],
};