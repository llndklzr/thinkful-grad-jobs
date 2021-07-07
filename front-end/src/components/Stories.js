import "../styles/styles.scss";
import { listStories } from "../utils/apiFetcher";
import { useState, useEffect } from "react";

function Stories() {
  const [stories, setStories] = useState([]);
  const [storiesError, setStoriesError] = useState(null);

  useEffect(loadStories, []);

  function loadStories() {
    const abortController = new AbortController();
    listStories(abortController.signal).then(setStories).catch(setStoriesError);
    return () => abortController.abort();
  }

  return (
    <div className="card-page">
      {stories.map((story) => {
        const { story_id, hire_date, interview_count, job_title } = story;
        return (
          <div className="card" key={story_id}>
            <div className="card-header">{`${hire_date}`}</div>
            <div className="card-body">
              <p className="card-text">{`${story.story}`}</p>
              <p className="card-hover-text">{`${interview_count}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Stories;
