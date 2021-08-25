import React, {useState} from "react";
import {shortMonthYear} from "../../utils/dateHandler";
import DLBtn from "../DLBtn";
import icons from "../../styles/icons/icons";

export default function SingleGradHTML({grad, setWhichModal}){
  const [renderMainBlock, setMainBlock] = useState(true);
  
  const enabledDetails = grad.enabled?.map((detail, index) =>{
    return(
      <a onClick={()=>setWhichModal(detail.toLowerCase())} className="story sub-details" key={index}>{detail}</a>
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

  const mainBlock = (
    <>
      <div className="main-container">
        <div className="my-story-container">
          <span className="story my-story-header">My Story </span>
          <span className="story date">{grad.graduate_career_field} - {shortMonthYear(grad.graduation_date)}</span>
          <br/>
          <span className="story date hired">Hired In Field - {shortMonthYear(grad.hire_date)}</span>
          <p className="story story-block">&nbsp;&nbsp;&nbsp;&nbsp;{trimStory(grad.story)}</p>
          <DLBtn clickHandler={()=>setMainBlock(false)} modal="fullStory" text="Read More" classname={`${readMoreVisibility()}`} />
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
          <a onClick={() => setWhichModal("resume")} className={disableAnchor(grad.resumeTitle)}>My Resume</a>
          <a href={grad.portfolioUrl} className={disableAnchor(grad.portfolioUrl)}>My Portfolio/Projects</a>
          <a href={grad.coverLetterTitle} className={disableAnchor(grad.coverLetterTitle)}>My Cover Letter</a>
        </div>
      </div>
    </>
  )

  const fullStory = (
    <div className="full-story">
      <div className="modal-btn-container">
        <button className="modal-btn" onClick={()=>setMainBlock(true)}>X</button>
      </div>
      <p>{grad.story}</p>
    </div>
  )
  
  return (
    <section className="section-container">
      <div>
        <div className="name-linkedin-wrapper">
          <h3 className="grad-page grad-header">{grad.first_name} {grad.last_name} &nbsp;</h3>
          <a target="blank" href={grad.linkedInUrl} className="linkedin btn">
            <img className="linkedin img"  src={icons.linkedInIcon}/>
          </a>
        </div>
        <p className=" grad-page grad-discription">{grad.job_title}, {grad.business_name}</p>
      </div>
      {renderMainBlock ? mainBlock : fullStory}
    </section> 
  )
}