import React from "react";

export default function LocationModal({grad}){
  console.log(grad)
  
  return(
    <>
      <h3 className="modal-header">Location</h3>
      <p className="modal-blurb">
        {grad.storyDetails.Location.blurb}
      </p>
      <div className="topic-parent">
        <div className="topic-wrapper">
          <h4 className="topic-label">Type of Work</h4>
          <div className="radio-wrapper">
            <label>Remote
              <input type="radio" value={grad.storyDetails.Location.typeOfWork} name="remote" checked={"remote"===grad.storyDetails.Location.typeOfWork}/>
            </label>
            <label>Hybrid
              <input type="radio" value={grad.storyDetails.Location.typeOfWork} name="hybrid" checked={"hybird"===grad.storyDetails.Location.typeOfWork}/>
            </label>
            <label>Home
              <input type="radio" value={grad.storyDetails.Location.typeOfWork} name="home" checked={"home"===grad.storyDetails.Location.typeOfWork}/>
            </label>
          </div>
        </div>
        <div className="topic-wrapper">
          <h4 className="topic-label">Willing To Relocate</h4>
          <div className="radio-wrapper">
            <label>Yes
              <input type="radio" value="yes" name="yes" checked={"yes"===grad.storyDetails.Location.willingToRelocate}/>
            </label>
            <label>No
              <input type="radio" value="no" name="no" checked={"no"===grad.storyDetails.Location.willingToRelocate} />
            </label>
          </div>
        </div>
      </div>
    </>
  )
}