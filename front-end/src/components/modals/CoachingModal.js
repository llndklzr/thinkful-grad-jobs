import React from "react";

export default function CoachingModal({grad}){
  return (
    <>
      <h3 className="modal-header">Coaching/Mentorship</h3>
      <p className="modal-blurb">
        {grad.storyDetails["Coaching/Mentorship"].blurb}
      </p>
      <form>
        <div className="topic-parent">
          <div className="topic-wrapper">
            <h4 className="topic-label">Were you hired at your mentor's company?</h4>
            <div className="radio-wrapper">
              <label className="radio-label">Yes
                <input readOnly className="radio-btn" type="radio" value={grad.storyDetails["Coaching/Mentorship"].hiredAtMentorsCompany} name="hybrid" checked={"yes"===grad.storyDetails["Coaching/Mentorship"].hiredAtMentorsCompany}/>
              </label>
              <label className="radio-label">No
                <input readOnly className="radio-btn" type="radio" value={grad.storyDetails["Coaching/Mentorship"].hiredAtMentorsCompany} name="hybrid" checked={"no"===grad.storyDetails["Coaching/Mentorship"].hiredAtMentorsCompany}/>
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}