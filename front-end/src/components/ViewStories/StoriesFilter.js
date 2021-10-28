import React from "react";
import { BsSearch, BsX } from "react-icons/bs";
import DLBtn from "../DLBtn";

export default function StoriesFilter({filters, setFilters, retrieveGrads}){

  const changeHandler=(e) =>{
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    retrieveGrads(e);
  }

  return (
    <form className="stories-filter" onSubmit={retrieveGrads}>
      <label className="story-filter-labels">
        Search by field
        <br/>
        <select 
            value={filters.fieldFilter}
            onChange={changeHandler}
            name="field"
            className="search select drop-shadow"
          >
            <option value="">Career Field</option>
            <option value="Full Stack Development">Engineering</option>
            <option value="UX/UI"> UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science"> Data Science</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Project Management">Project Management</option>
          </select>
      </label>
      <br/>
      <label className="story-filter-labels">
        Search by company
        <br/>
        <div className="search drop-shadow">
          <div onClick={retrieveGrads} className="icon-wrapper">
            <BsSearch />
          </div>
          <input
            className="search input"
            name="company"
            onChange={changeHandler}
            value={filters.company}
          />
          <div 
            className="icon-wrapper cancel" 
            onClick={(e)=>{setFilters({...filters, company: ""}); retrieveGrads(e)}}
          >
            <BsX />
          </div>
        </div>
      </label>
      <br/>
      <label className="story-filter-labels">
        Search by name
        <br/>
        <div className="search drop-shadow">
          <div onClick={retrieveGrads} className="icon-wrapper">
            <BsSearch />
          </div>
          <input 
            className="search input"
            name="name"
            onChange={changeHandler}
            value={filters.name}
          />
          <div 
            className="icon-wrapper cancel" 
            onClick={(e)=>{setFilters({...filters, name: ""}); retrieveGrads(e)}}
          >
            <BsX />
          </div>
        </div>
      </label>
      <div>
        <DLBtn text="Apply Filters" clickHandler={retrieveGrads}/>
      </div>
    </form>
  )
}