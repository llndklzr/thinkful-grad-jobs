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

  const [filters, setFiters] = useState({...intitialFilters});
  const [stories, setStories] = useState([]);

  useEffect(()=>{
    async function loadStories(){
      const abortController = new AbortController();
      return await filterResultsForStories(filters, abortController.signal).then(setStories)
    }

    loadStories();
  },[])

  return (
    <div className="absolute-story-wrapper">
      <div className="stories-filter-wrapper-in-parent">
        <StoriesFilter filters={filters} setFilters={setFiters}/>
      </div>
      <div className="stories-wrapper-in-parent">
        <Stories stories={stories} />
      </div>
    </div>
  )
}