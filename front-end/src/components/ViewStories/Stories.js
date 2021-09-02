import React from "react";
import DLBtn from "../DLBtn";

function Stories({stories}) {
  console.log("STORIES", stories)

  return (
    <div>
      <h4>Recent Stories</h4>
      {stories.map((story) => {
        const { first_name, last_name, job_title, business_name } = story;
        return (
          <div className="grad-div">
            <span>{first_name} {last_name}</span> &nbsp;
            <span>{job_title},&nbsp;</span>
            <span>{business_name}&nbsp;</span>
            <DLBtn />
          </div>
        );
      })}
    </div>
  );
}
export default Stories;
