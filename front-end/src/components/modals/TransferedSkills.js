import React, { useState } from "react";
import DLBtn from "../DLBtn";

export default function TransferedSkills({grad, createMode = false, setFormData, setWhichModal}){
  const initialSkills = {
    ...grad.storyDetails["Transferred Skills"]
  }

  const [skills, setSkills] = useState(initialSkills);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const tempGrad = {...grad}
    tempGrad.storyDetails["Transferred Skills"] = skills;
    setFormData(tempGrad);
    setWhichModal("");
  }

  const handleChange = ({ target }) => {
    if(createMode){
      setSkills({
        ...skills,
        [target.name]: target.value,
      });
    }
  };


  return(
    <>
      <h3 className="modal-header">Transferred Skills</h3>
      {createMode ? <p className="ux-writing">
        Use this space to discuss any techinical or soft skills you brought from
        your previous education or jobs.
        <br/>
        <br/>
        Maybe you were a nurse now working on a digital product for a hospital,
        or a military vet redesigning a benefits portal for servicemen. Tell your
        fellow grads how your old life impacts your current profession.</p> : null}
        <form>

      {createMode ? <textarea name="blurb" onChange={handleChange} value={skills.blurb} className="modal-textarea"/> : <p className="modal-blurb">
        {grad.storyDetails["Transferred Skills"].blurb}
      </p>}
        {createMode ? 
          <div className="btn-wrapper margin-for-modal">
            <DLBtn text="Save" clickHandler={handleSubmit}/>
          </div>
        : null}
      </form>
    </>
  )
}