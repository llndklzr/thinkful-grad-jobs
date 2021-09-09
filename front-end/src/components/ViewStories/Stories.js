import React from "react";
import DLBtn from "../DLBtn";
import {useHistory} from "react-router-dom";

function Stories({stories}) {

  const history = useHistory();

  return (
    <div>
      <div className="stories-wrapper">
        <h4 className="recent-stories-title">Recent Stories</h4>
        {stories.map((story) => {
          const { first_name, last_name, job_title, business_name } = story;
          return (
            <div className="grad-div">
              <span className="story-name">{first_name} {last_name}</span> &nbsp;
              <div className="story-grad-job-details">
                <span className="story-title">{job_title},&nbsp;</span>
                <span className="story-biz-name">{business_name}&nbsp;</span>
                <DLBtn  clickHandler={()=>history.push(`/graduates/${story.graduate_id}`)}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Stories;
