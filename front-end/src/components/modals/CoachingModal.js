import React, { useState } from "react";
import DLBtn from "../DLBtn";

export default function CoachingModal({grad, createMode = false, setFormData, setWhichModal}){
  const initialTopic = {
    ...grad.storyDetails["Coaching/Mentorship"],
  }
  const [topic, setTopic] = useState(initialTopic);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const tempGrad = {...grad}
    tempGrad.storyDetails["Coaching/Mentorship"] = topic;
    setFormData(tempGrad);
    setWhichModal("");
  }

  const handleChange = ({ target }) => {
    if(createMode){
      setTopic({
        ...topic,
        [target.name]: target.value,
      });
    }
  };
  
  return (
    <>
      <h3 className="modal-header">Coaching/Mentorship</h3>
      {createMode ? <p className="ux-writing">
        Use this space to discuss how a mentor (provided by Thinkful or 
        otherwise) helped you land your first job in your new field.
        <br/>
        <br/>
        Whether techinal knowledge or inspiration, tell your fellow grads how
        someone in a position ahead of you impacted your job search.</p> : null}
      {createMode ? <textarea name="blurb" onChange={handleChange} value={topic?.blurb} className="modal-textarea"/> : <p className="modal-blurb">
        {grad.storyDetails["Coaching/Mentorship"].blurb}
      </p>}
      <form onSubmit={handleSubmit}>
        <div className="topic-parent">
          <div className="topic-wrapper">
            <h4 className="topic-label">Were you hired at your mentor's company?</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Yes
                <input 
                  onChange={handleChange}
                  className="radio-btn" 
                  type="radio" 
                  value="yes" 
                  name="hiredAtMentorsCompany" 
                  checked={"yes"===topic.hiredAtMentorsCompany}/>
              </label>
              <label className="radio-label">No
                <input 
                  onChange={handleChange}
                  className="radio-btn" 
                  type="radio" 
                  value="no"
                  name="hiredAtMentorsCompany" 
                  checked={"no"===topic.hiredAtMentorsCompany}/>
              </label>
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