const service = require("./stories.service");
const bizzService = require("../businesses/businesses.service")
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const NodeGeocoder = require("node-geocoder");
const isAuth = require("../authUtils/isAuth");
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
  } = req.body.data;
  res.locals.graduateObj = {
    first_name, // validate
    last_name, // validate
    graduation_date, // validate
    graduate_career_field // validate
  }
  res.locals.businessObj = {
    business_name, // validate
    address // validate
  }
  res.locals.storyObj = {
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
  next();
}

function validateStoryObj(req, res, next){
  const stor = res.locals.storyObj.story;
  const jobTitle = res.locals.storyObj.job_title;
  const invalidProp = _validateProperties({
    stor,
    jobTitle
  })
  if(invalidProp){
    next({
      status: 400,
      message: `Property for ${invalidProp} is invalid.`
    })
  }
  next();
}

function validateGradObj(req, res, next){
  const invalidProp = _validateProperties(res.locals.graduateObj);
  if(invalidProp){
    next({
      status: 400,
      message: `Property for ${invalidProp} is invalid.`
    })
  }
  next();
}

function validateAllDates(req, res, next){
  const gradDate = res.locals.graduateObj.graduation_date;
  const hireDate = res.locals.storyObj.hire_date;
  const invalidDate = _areDates({gradDate, hireDate});
  if(invalidDate){
    next({
      status: 400,
      message: `The date for ${invalidDate} is invalid.`
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
  const result = await geocoder.geocode(res.locals.businessObj.address);
  
  const {
    formattedAddress,
    latitude,
    longitude,
    city,
    administrativeLevels: {level1short},
  } = result[0];

  const businessObj = {
    business_name: res.locals.businessObj.business_name,
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

function validateLengthOfStory(req, res, next){
  if(res.locals.storyObj.story.length > 1000){
    next({
      status: 400,
      message: `The story is longer than 1000 characters.`
    })
  }
  next();
}

async function post(req, res){
  const bizz = await bizzService.queryForBizzAddress(res.locals.businessObj.business_location.address);
  if(bizz?.business_id){
    await service.createStoryWithExistingBizz(res.locals.storyObj, res.locals.graduateObj, bizz.business_id);
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
  return null;
}


function _validateProperties(properties){
  for(let prop in properties){
    if(!properties[prop]){
      return prop;
    }
  }
  return null;
}

module.exports = {
  list: [asyncErrorBoundary(list)],
  create: [
    isAuth,
    parseData, 
    validateGradObj, 
    validateAllDates, 
    validateStoryObj, 
    geocodeAddress,
    validateLengthOfStory,
    post],
};