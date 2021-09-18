import React from "react";

export default function NetworkingModal({grad}){
  return (
    <>
      <h3 className="modal-header">Networking</h3>
      <p className="modal-blurb">
        {grad.storyDetails.Networking.blurb}
      </p>
      <form>
        <div className="topic-parent">
          <div className="topic-wrapper">
            <h4 className="topic-label">Were you hired directly due to your network?</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Yes
                <input readOnly className="radio-btn" type="radio" value={grad.storyDetails.Networking.hiredByNetworking} name="hybrid" checked={"yes"===grad.storyDetails.Networking.hiredByNetworking}/>
              </label>
              <label className="radio-label">No
                <input readOnly className="radio-btn" type="radio" value={grad.storyDetails.Networking.hiredByNetworking} name="hybrid" checked={"no"===grad.storyDetails.Networking.hiredByNetworking}/>
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  )