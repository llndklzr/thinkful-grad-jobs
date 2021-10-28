import React, {useState, useEffect, useRef, useCallback} from "react";
import StoriesFilter from "./StoriesFilter";
import Stories from "./Stories";
import {filterResultsForStories} from "../../utils/apiFetcher";

export default function StoriesParent(){
  const intitialFilters = {
    field: "",
    company: "",
    name: "",
  }
  const queryVal = 6;

  const abortController = new AbortController();


  const [filters, setFiters] = useState({...intitialFilters});
  const [stories, setStories] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [queryLimit, setQueryLimit] = useState(queryVal);
  const [error, setError] = useState(null);
  const observer = useRef();

  async function loadStories(){
    if(hasMore){
      return await filterResultsForStories(filters, queryLimit, abortController.signal)
        .then(res=>{
          setHasMore(queryLimit === res.length);
          setStories(res);
        })
        .then(()=>{
          setLoadingState(false);
        })
        .catch((err)=>setError(err));
    }
  }
  

  useEffect(()=>{
    loadStories();
  }, [queryLimit, hasMore])

  const retrieveGrads = (e) =>{
    e.preventDefault();
    setHasMore(true);
    setQueryLimit(queryVal);
    setLoadingState(true);
    loadStories();
  }

  const lastElementObserver = useCallback(node =>{ // from tutorial https://www.youtube.com/watch?v=NZKUirTtxcg
    if(loadingState){return};
    if(observer.current){observer.current.disconnect()};
    observer.current = new IntersectionObserver( entries =>{
      if(entries[0].isIntersecting && hasMore){
        setQueryLimit(prevState => prevState += queryVal);
      }
    })
    if(node) observer.current.observe(node);
  }, [loadingState]);

  return (
    <>
      <h2 className="header">Stories</h2>
      <div className="absolute-story-wrapper">
        <div className="stories-filter-wrapper-in-parent">
          <StoriesFilter filters={filters} setFilters={setFiters} retrieveGrads={retrieveGrads}/>
        </div>
        <div className="stories-wrapper-in-parent">
          <Stories error={error} hasMore={hasMore} lastElementObserver={lastElementObserver} stories={stories} loadingState={loadingState}/>
        </div>
        <div className="stories-spacer-wrapper-in-parent"></div>
      </div>
    </>
  )
}