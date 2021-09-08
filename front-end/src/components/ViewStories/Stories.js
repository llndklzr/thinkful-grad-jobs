import React from "react";
import DLBtn from "../DLBtn";
import {useHistory} from "react-router-dom";

function Stories({stories}) {

  const history = useHistory();

  return (
    <div className="stories-wrapper">
      <h4 className="recent-stories">Recent Stories</h4>
      {stories.map((story) => {
        const { first_name, last_name, job_title, business_name } = story;
        return (
          <div className="grad-div">
            <span>{first_name} {last_name}</span> &nbsp;
            <span>{job_title},&nbsp;</span>
            <span>{business_name}&nbsp;</span>
            <DLBtn iconClassname="small" clickHandler={()=>history.push(`/graduates/${story.graduate_id}`)}/>
          </div>
        );
      })}
    </div>
  );
}
export default Stories;
