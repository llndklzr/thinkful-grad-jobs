import React from "react";

export default function LocationModal({grad}){
  console.log(grad)
  
  return(
    <>
      <h3 className="modal-header">Location</h3>
      <p className="modal-blurb">
        {grad.storyDetails.Location.blurb}
      </p>
      <form>
        <div className="topic-parent">
          <div className="topic-wrapper">
            <h4 className="topic-label">Type of Work</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Remote
                <input className="radio-btn" type="radio" value={grad.storyDetails.Location.typeOfWork} name="remote" checked={"remote"===grad.storyDetails.Location.typeOfWork}/>
              </label>
              <label className="radio-label">Hybrid
                <input className="radio-btn" type="radio" value={grad.storyDetails.Location.typeOfWork} name="hybrid" checked={"hybird"===grad.storyDetails.Location.typeOfWork}/>
              </label>
              <label className="radio-label">Home
                <input className="radio-btn" type="radio" value={grad.storyDetails.Location.typeOfWork} name="home" checked={"home"===grad.storyDetails.Location.typeOfWork}/>
              </label>
            </div>
          </div>
          <div className="topic-wrapper">
            <h4 className="topic-label">Willing To Relocate</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Yes
                <input className="radio-btn" type="radio" value="yes" name="yes" checked={"yes"===grad.storyDetails.Location.willingToRelocate}/>
              </label>
              <label className="radio-label">No
                <input className="radio-btn" type="radio" value="no" name="no" checked={"no"===grad.storyDetails.Location.willingToRelocate} />
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}