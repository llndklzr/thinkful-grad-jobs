import React from "react";
import { BsSearch, BsX } from "react-icons/bs";

export default function StoriesFilter({filters, setFilters, retrieveGrads}){

  return (
    <form className="stories-filter" onSubmit={retrieveGrads}>
      <label className="story-filter-labels">
        Search by field
        <br/>
        <select 
            value={filters.fieldFilter}
            onChange={(e)=>setFilters({...filters, field: e.target.value})}
            className="search select drop-shadow"
          >
            <option value="">Career Field</option>
            <option value="Full Stack Development">Engineering</option>
            <option value="UX/UI"> UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science"> Date Science</option>
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
            onChange={(e)=>setFilters({...filters, company: e.target.value})}
            value={filters.company}
          />
          <div className="icon-wrapper cancel" onClick={()=>setFilters({...filters, company: ""})}>
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
            onChange={(e)=>setFilters({...filters, name: e.target.value})}
            value={filters.name}
          />
          <div className="icon-wrapper cancel" onClick={()=>setFilters({...filters, name: ""})}>
            <BsX />
          </div>
        </div>
      </label>
    </form>
  )
}