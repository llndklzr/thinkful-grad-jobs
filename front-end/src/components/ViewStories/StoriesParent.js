import React, {useState, useEffect} from "react";
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

  useEffect(()=>{
    async function loadStories(){
      return await filterResultsForStories(filters, abortController.signal).then(setStories)
        .then(()=>setLoadingState(false))
    }

    loadStories();
  },[])

  const retrieveGrads = async (e) =>{
    e.preventDefault();
    setLoadingState(true);
    return await filterResultsForStories(filters, abortController.signal)
      .then((res)=>setStories(res))
      .then(()=>setLoadingState(false));
  }

  return (
    <>
      <h2 className="header">Stories</h2>
      <div className="absolute-story-wrapper">
        <div className="stories-filter-wrapper-in-parent">
          <StoriesFilter filters={filters} setFilters={setFiters} retrieveGrads={retrieveGrads}/>
        </div>
        <div className="stories-wrapper-in-parent">
          <Stories stories={stories} loadingState={loadingState}/>
        </div>
        <div className="stories-spacer-wrapper-in-parent"></div>
      </div>
    </>
  )
}