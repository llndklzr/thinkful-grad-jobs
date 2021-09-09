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

  useEffect(()=>{
    async function loadStories(){
      return await filterResultsForStories(filters, abortController.signal).then(setStories)
    }

    loadStories();
  },[])

  async function retrieveGrads(){
    console.log('WE GOT CALLED')
    await filterResultsForStories(filters, abortController.signal).then(setStories);
  }

  return (
    <>
      <h2 className="header">Stories</h2>
      <div className="absolute-story-wrapper">
        <div className="stories-filter-wrapper-in-parent">
          <StoriesFilter filters={filters} setFilters={setFiters} retrieveGrads={retrieveGrads}/>
        </div>
        <div className="stories-wrapper-in-parent">
          <Stories stories={stories} />
        </div>
        <div className="stories-spacer-wrapper-in-parent"></div>
      </div>
    </>
  )
}