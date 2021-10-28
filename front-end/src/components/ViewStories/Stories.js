import React from "react";
import DLBtn from "../DLBtn";
import {useHistory} from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import ErrorHandler from "../ErrorHandler";

function Stories({stories, loadingState, lastElementObserver, hasMore, error}){

  const history = useHistory();
  const grads = stories.map((story, index) => {
    const { first_name, last_name, job_title, business_name } = story;
    if(stories.length === index + 1){
      return(
        <div ref={lastElementObserver} key={story.graduate_id} className="grad-div">
        <span className="story-name">{first_name} {last_name}</span> &nbsp;
        <div className="story-grad-job-details">
          <span className="story-title">{job_title},&nbsp;</span>
          <span className="story-biz-name">{business_name}&nbsp;</span>
          <DLBtn  clickHandler={()=>history.push(`/graduates/${story.graduate_id}`)}/>
        </div>
      </div>
      )
    } else{
      return (
        <div key={story.graduate_id} className="grad-div">
          <span className="story-name">{first_name} {last_name}</span> &nbsp;
          <div className="story-grad-job-details">
            <span className="story-title">{job_title},&nbsp;</span>
            <span className="story-biz-name">{business_name}&nbsp;</span>
            <DLBtn  clickHandler={()=>history.push(`/graduates/${story.graduate_id}`)}/>
          </div>
        </div>
      );
    }
  })

  const noResults = <div className="no-results">No results matching your search</div>

  const container = stories.length !== 0 ? grads : noResults;
  

  return (
    <div>
      <div className="stories-wrapper">
        <h4 className="recent-stories-title">Recent Stories</h4>
        {loadingState && !error ? <LoadingScreen classname="small"/> : container}
        {stories.length!==0 && !hasMore ? <span className="no-more-grads">That's all the grads</span> : null}
        {error && <ErrorHandler wrapperClassName="view-stories" error={error} />}
      </div>
    </div>
  ) 
}
export default Stories;
