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
        const { story_id, graduate, employer, job_title } = story;
        return (
          <div className="card" key={story_id}>
            <div className="card-header">{`${graduate}`}</div>
            <div className="card-body">
              <p className="card-text">{`${employer}`}</p>
              <p className="card-hover-text">{`${job_title}`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Stories;
