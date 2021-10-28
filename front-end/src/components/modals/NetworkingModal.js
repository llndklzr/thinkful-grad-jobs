import React, { useState } from "react";
import DLBtn from "../DLBtn";

export default function NetworkingModal({grad, createMode = false, setFormData, setWhichModal}){
  const initialNetwork = {
    ...grad.storyDetails.Networking
  };
  
  const [networking, setNetworking] = useState(initialNetwork);

  const handleChange = ({ target }) => {
    if(createMode){
      setNetworking({
        ...networking,
        [target.name]: target.value,
      });
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const tempGrad = {...grad}
    tempGrad.storyDetails.Networking = networking;
    setFormData(tempGrad);
    setWhichModal("");
  };
  
  return (
    <>
      <h3 className="modal-header">Networking</h3>
      {createMode ? <p className="ux-writing">
        Use this space to discuss your networking experiences, whether it was 
        online meetups, local oganizations, or lots of time on Linkedin.
        <br/>
        <br/>
        Please mention if your job was avaible ONLY through your 
        professional network, or if you were just pointed in the right direction.</p> : null}
      {createMode ? <textarea name="blurb" onChange={handleChange} value={networking?.blurb} className="modal-textarea"/> : <p className="modal-blurb">
        {grad.storyDetails.Networking.blurb}
      </p>}
      <form>
        <div className="topic-parent">
          <div className="topic-wrapper">
            <h4 className="topic-label">Were you hired directly due to your network?</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Yes
                <input 
                  onChange={handleChange} 
                  className="radio-btn" 
                  type="radio" 
                  value="yes"
                  name="hiredByNetworking" 
                  checked={"yes"===networking.hiredByNetworking}/>
              </label>
              <label className="radio-label">No
                <input 
                  onChange={handleChange}
                  className="radio-btn" 
                  type="radio" 
                  value="no" 
                  name="hiredByNetworking" 
                  checked={"no"===networking.hiredByNetworking}/>
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