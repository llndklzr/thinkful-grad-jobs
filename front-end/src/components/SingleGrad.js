import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { getGradById } from "../utils/apiFetcher";
import { shortMonthYear } from "../utils/dateHandler";


export default function SingleGrad(){
  const [grad, setGrad] = useState({});
  const [error, setError] = useState(null);
  const gradId = useParams().graduate_id;
  const [showLoader, setLoader] = useState(true);
  console.log(grad);
  
  useEffect(()=>{
    async function loadGrad(id){
      return await getGradById(id).then(setGrad).catch(setError).then(()=>setLoader(false));
    }

    loadGrad(gradId);
  }, [gradId])
  
  const details = grad.storyDetails?.map((detail, index) =>{
    return(
      <a href="" className="story sub-details" key={index}>{detail.category}</a>
    )
  })

  function trimStory(story){
    if(story?.length<=420){
      return story;
    } else{
      return `${story?.slice(0, 419)}...`
    }
  }

  function readMoreVisibility(){
    if(grad.story?.length<=420){
      return "invisible";
    }
  }

  const loading = <h3>Loading...</h3>
  
  
  const result = (
    <section>
      <div>
        <h3 className="grad-page grad-header">{grad.first_name} {grad.last_name}</h3>
        <p className=" grad-page grad-discription">{grad.job_title}, {grad.business_name}</p>
      </div>
      <div className="main-container">
        <div className="my-story-container">
          <span className="story my-story-header">My Story </span>
          <span className="story date">{grad.graduate_career_field} - {shortMonthYear(grad.graduation_date)}</span>
          <br/>
          <span className="story date hired">Hired In Field - {shortMonthYear(grad.hire_date)}</span>
          <p className="story story-block">&nbsp;&nbsp;&nbsp;&nbsp;{trimStory(grad.story)}</p>
          <button className={`story btn ${readMoreVisibility()}`}>Read More</button>
        </div>
        <div className="hiring-details-container">
          <p className="story my-story-header">My Hiring Details</p>
          {details}
        </div>
      </div>
      <div>
        <p className="story my-story-header">My Hiring Essentials</p>
        <div className="hiring-essentials">
          <a href="" className="disabled">My Resume</a>
          <a href="">My Portfolio/Projects</a>
          <a href="">My Cover Letter</a>
        </div>
      </div>
    </section> 
  )

  return showLoader ? loading : result;
}