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
    <div>
      <h2>Stories</h2>
      {stories.map(story=> {
        const {story_id, graduate, employer, job_title} = story
        return <div key={story_id}>
          <h4>{`${graduate}`}</h4>
          <p>{`${employer}`}</p>
          <p>{`${job_title}`}</p>
        </div>
      })}
    </div>
  );
}
export default Stories;
