const service = require("./stories.service");
const bizzService = require("../businesses/businesses.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const NodeGeocoder = require("node-geocoder");
const { AuditManager } = require("aws-sdk");

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
    address,
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
    address
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


function validateStoryObj(req, res, next){
  const stor = res.locals.storyObj.story;
  const jobTitle = res.locals.storyObj.job_title;
  const error = _validateProperties({
    stor,
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

async function geocodeAddress(req, res, next){
  const options = {
    provider: 'google',
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
    formatter: null // 'gpx', 'string', ...
  };
  const geocoder = NodeGeocoder(options);
  const givenAddress = res.locals.businessObj.address;
  const result = await geocoder.geocode(givenAddress);
  
  const {
    formattedAddress,
    latitude,
    longitude,
    city,
    administrativeLevels: {level1short},
  } = result[0];

  const business_name = res.locals.businessObj.business_name;

  const businessObj = {
    business_name,
    business_location:{
      address: formattedAddress,
      lat: latitude,
      lng: longitude,
      city: city,
      state: level1short
    }
  }
  res.locals.businessObj = businessObj;
  next();
}

async function post(req, res){
  const bizz = await bizzService.queryForBizzAddress(res.locals.businessObj.business_location.address);
  if(bizz[0]?.business_id){
    await service.createStoryWithExistingBizz(res.locals.storyObj, res.locals.graduateObj, bizz[0].business_id);
    return res.sendStatus(204);
  }
  await service.createStoryWithNewBizz(res.locals.storyObj, res.locals.graduateObj, res.locals.businessObj);
  return res.sendStatus(204);

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


function _validateProperties(properties){
  for(let prop in properties){
    if(!properties[prop]){
      return prop;
    }
  }
  return "";
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [parseData, validateGradObj, validateAllDates, validateStoryObj, geocodeAddress, post],
};