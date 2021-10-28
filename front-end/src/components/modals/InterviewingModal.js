import React, { useState } from "react";
import DLBtn from "../DLBtn";

export default function InterviewingModal({grad, createMode = false, setFormData, setWhichModal}){
  const initialInterviewing = {
    ...grad.storyDetails.Interviewing
  }

  const [interviewing, setInterviewing] = useState(initialInterviewing);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const tempGrad = {...grad}
    tempGrad.storyDetails.Interviewing = interviewing;
    setFormData(tempGrad);
    setWhichModal("");
  }

  const handleChange = ({ target }) => {
    if(createMode){
      setInterviewing({
        ...interviewing,
        [target.name]: target.value,
      });
    }
  };
  return(
    <>
      <h3 className="modal-header">Interviewing</h3>
      {createMode ? <p className="ux-writing">
        Use this space to discuss your experiences while inteviewing. Break
        down any differences between established companies and start ups. 
        <br/>
        <br/>
        If there were any mistakes you’d do differently, or smooth moves that
        worked, let your fellow grads know. </p> : null}
      <form>
        {createMode ? <textarea name="blurb" onChange={handleChange} value={interviewing?.blurb} className="modal-textarea"/> : <p className="modal-blurb">
          {grad.storyDetails.Location.blurb}
        </p>}
        <div className="topic-parent">
          <div className="topic-wrapper">
            <h4 className="topic-label">Number Of Applications</h4>
            <div className="radio-wrapper">
              <input 
                onChange={handleChange}
                className={`modal-input ${createMode ? "" : "disabled-number-field"}`}
                type="number" 
                value={interviewing.numberOfApps} 
                name="numberOfApps"
              />
            </div>
          </div>
          <div className="topic-wrapper">
            <h4 className="topic-label">Number Of Interviews</h4>
            <div className="radio-wrapper">
              <input 
                onChange={handleChange} 
                className={`modal-input ${createMode ? "" : "disabled-number-field"}`} 
                type="number" 
                value={interviewing.numberOfInterviews} 
                name="numberOfInterviews" 
              />
            </div>
          </div>
        </div>
        {createMode ? 
          <div className="btn-wrapper margin-for-modal">
            <DLBtn text="Save" clickHandler={handleSubmit}/>
          </div>
        : null}
      </form>
    </>
  )
}