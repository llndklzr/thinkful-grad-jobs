import React, {useState} from "react";
import Toggle from "react-toggle";


export default function MapMenu({filters, setFilters, retrieveFilters}){
  let [companyToggle, setCompanyToggle] = useState(false);
  let [locationToggle, setLocationToggle] = useState(false);
  let [fieldToggle, setFieldToggle] = useState(false);

  function filterInputVisibility(boolean){
    return boolean ? "visible-filter-input" : "invisible-filter-option";
  }

  
  return (
    <div className="map-filter">
      <h3 className="filter-label">Filters</h3>
      <div className="filter-option-container">
        <label>Company</label>
        <Toggle
          defaultChecked={companyToggle}
          icons={false}
          name="company"
          onChange={() => setCompanyToggle(!companyToggle)} 
        />
      </div>
      <div className={filterInputVisibility(companyToggle)}>
        <form onSubmit={retrieveFilters}>
          <input 
            value={filters.companyFilter}
            onChange={(e)=>setFilters({...filters, companyFilter: e.target.value})}
            className="filter-input"
          />
        </form>
      </div>
      
      <div className="filter-option-container">
        <label>Location</label>
          <Toggle
            defaultChecked={locationToggle}
            icons={false}
            name="location"
            onChange={() => setLocationToggle(!locationToggle)} 
          />
      </div>
      <div className={filterInputVisibility(locationToggle)}>
        <form onSubmit={retrieveFilters}>
          <input 
            value={filters.locationFilter}
            onChange={(e)=>setFilters({...filters, locationFilter: e.target.value})}
            className="filter-input"
          />
        </form>
      </div>
      <div className="filter-option-container">
        <label>Field</label>
          <Toggle
            defaultChecked={fieldToggle}
            icons={false}
            name="field"
            onChange={() => setFieldToggle(!fieldToggle)} 
          />
      </div>
      <div className={filterInputVisibility(fieldToggle)}>
        <form onSubmit={retrieveFilters}>
          <input 
            value={filters.fieldFilter}
            onChange={(e)=>setFilters({...filters, fieldFilter: e.target.value})}
            className="filter-input"
          />
        </form>
      </div>
      <div className="bottom-spacer">
        <button onClick={retrieveFilters} className="btn">Apply Filters</button>
      </div>

    </div>
  )
}