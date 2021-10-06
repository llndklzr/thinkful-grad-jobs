import React, {useState} from "react";
import DLBtn from "../DLBtn";

export default function LocationModal({grad, createMode = false, setFormData, setWhichModal}){
  const initialLocation = {
    ...grad.storyDetails.Location
  }
  const [location, setLocation] = useState(initialLocation);



  const handleSubmit = (e) =>{
    e.preventDefault();
    const tempGrad = {...grad}
    tempGrad.storyDetails.Location = location;
    setFormData(tempGrad);
    console.log("Grad location -> ", grad.storyDetails.Location);
    setWhichModal("");
  }

  const handleChange = ({ target }) => {
    if(createMode){
      setLocation({
        ...location,
        [target.name]: target.value,
      });
      console.log("location ->", location)
    }
  };
  

  return(
    <>
    
      <h3 className="modal-header">Location</h3>
      {createMode ? <p className="ux-writing">
          Use this space to discuss how location played into your hiring process.
        <br/>
        <br/>
          Were you willing to relocated for a job, or were your determined to stay 
          in your local area? Let your fellow grads know if you had to make any
          adjustments to your mindset in order to get hired.</p> : null}
        <form>

      {createMode ? <textarea name="blurb" onChange={handleChange} value={location.blurb} className="modal-textarea"/> : <p className="modal-blurb">
        {grad.storyDetails.Location.blurb}
      </p>}
        <div className="topic-parent">
          <div className="topic-wrapper">
            <h4 className="topic-label">Type of Work</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Remote
                <input 
                  onChange={handleChange}
                  className="radio-btn" 
                  type="radio" 
                  value="remote" 
                  name="typeOfWork"
                  checked={"remote"===location.typeOfWork}
                />
              </label>
              <label className="radio-label">Hybrid
                <input 
                  onChange={handleChange}
                  className="radio-btn" 
                  type="radio" 
                  value="hybrid" 
                  name="typeOfWork" 
                  checked={"hybrid"===location.typeOfWork}
                />
              </label>
              <label className="radio-label">Home
                <input 
                  onChange={handleChange}
                  className="radio-btn" 
                  type="radio" 
                  value="home" 
                  name="typeOfWork" 
                  checked={"home"===location.typeOfWork}/>
              </label>
            </div>
          </div>
          <div className="topic-wrapper">
            <h4 className="topic-label">Willing To Relocate</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Yes
                <input 
                  onChange={handleChange} 
                  name="willingToRelocate" 
                  className="radio-btn" 
                  type="radio" 
                  value="yes" 
                  checked={"yes"===location.willingToRelocate}/>
              </label>
              <label className="radio-label">No
                <input 
                onChange={handleChange} 
                name="willingToRelocate" 
                className="radio-btn" 
                type="radio" 
                value="no" 
                checked={"no"===location.willingToRelocate} />
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