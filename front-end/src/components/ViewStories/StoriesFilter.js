import React from "react";

export default function StoriesFilter({filters, setFilters}){

  return (
    <form className="stories-filter">
      <label className="story-filter-labels">
        Search by field
        <br/>
        <select 
            value={filters.fieldFilter}
            onChange={(e)=>setFilters({...filters, field: e.target.value})}
            className="filter-input"
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
        <input

        />
      </label>
      <br/>
      <label className="story-filter-labels">
        Search by name
        <br/>
        <input 

        />
      </label>
    </form>
  )
}