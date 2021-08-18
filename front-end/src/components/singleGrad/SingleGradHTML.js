import React from "react";
import {shortMonthYear} from "../../utils/dateHandler";
import Button from "../Button";
import { Link } from "react-router-dom";


export default function SingleGradHTML({grad}){
  const enabledDetails = grad.enabled?.map((detail, index) =>{
    return(
      <a href="" className="story sub-details" key={index}>{detail}</a>
    )
  })

  const disabledDetails = grad.disabled?.map((detail, index) =>{
    return(
      <a href="" className="story sub-details disabled" key={index}>{detail}</a>
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

  function disableAnchor(string){
    return !string ? "disabled" : null;
  }
  
  return (
    <section className="section-container">
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
          <Button clickHandler={()=>console.log("clicked")} text="Read More" classname={`${readMoreVisibility()}`} />
        </div>
        <div className="hiring-details-container">
          <p className="story my-story-header">My Hiring Details</p>
          {enabledDetails}
          {disabledDetails}
        </div>
      </div>
      <div>
        <p className="story my-story-header">My Hiring Essentials</p>
        <div className="hiring-essentials">
          <a href={grad.resumeUrl} className={disableAnchor(grad.resumeUrl)}>My Resume</a>
          <a href={grad.portfolioUrl} className={disableAnchor(grad.portfolioUrl)}>My Portfolio/Projects</a>
          <a href={grad.coverLetterUrl} className={disableAnchor(grad.coverLetterUrl)}>My Cover Letter</a>
        </div>
      </div>
    </section> 
  )
}