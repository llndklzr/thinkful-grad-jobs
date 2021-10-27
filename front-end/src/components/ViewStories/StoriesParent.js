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

  const abortController = new AbortController();


  const [filters, setFiters] = useState({...intitialFilters});
  const [stories, setStories] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [queryLimit, setQueryLimit] = useState(6);
  const [lengthOfRes, setLengthOfRes] = useState(6);
  const observer = useRef();

  async function loadStories(){
    if(hasMore){
      return await filterResultsForStories(filters, queryLimit, abortController.signal)
        .then(res=>{
          setLengthOfRes(res.length);
          setHasMore(queryLimit === res.length);
          setStories(res);
        })
        .then(()=>setLoadingState(false))
    }
  }
  

  useEffect(()=>{
    loadStories();
  },[queryLimit])

  const retrieveGrads = async (e) =>{
    e.preventDefault();
    loadStories();
  }

  const lastElementObserver = useCallback(node =>{
    if(loadingState){return};
    if(observer.current){observer.current.disconnect()};
    observer.current = new IntersectionObserver( entries =>{
      if(entries[0].isIntersecting && hasMore){
        setQueryLimit(prevState => prevState += 6);
      }
    })
    if(node) observer.current.observe(node);
  }, [loadingState])

  return (
    <>
      <h2 className="header">Stories</h2>
      <div className="absolute-story-wrapper">
        <div className="stories-filter-wrapper-in-parent">
          <StoriesFilter filters={filters} setFilters={setFiters} retrieveGrads={retrieveGrads}/>
        </div>
        <div className="stories-wrapper-in-parent">
          <Stories hasMore={hasMore} lastElementObserver={lastElementObserver} stories={stories} loadingState={loadingState}/>
        </div>
        <div className="stories-spacer-wrapper-in-parent"></div>
      </div>
    </>
  )
}