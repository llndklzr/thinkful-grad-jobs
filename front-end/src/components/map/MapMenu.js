import React, {useState} from "react";
import Toggle from "react-toggle";
import DLBtn from "../DLBtn";
import { BsSearch, BsX} from "react-icons/bs";


export default function MapMenu({filters, setFilters, retrieveFilters}){
  let [companyToggle, setCompanyToggle] = useState(false);
  let [locationToggle, setLocationToggle] = useState(false);
  let [fieldToggle, setFieldToggle] = useState(false);

  function filterInputVisibility(boolean){
    return boolean ? "visible-filter-input" : "invisible-filter-option";
  }

  const cancelInput = (e) =>{
    e.preventDefault();
    console.log(e.target)
    setFilters({
      ...filters,
      [e.target.name]: ""
    })
    retrieveFilters(e);
  }

  //()=>setFilters({...filters, companyFilter: ""})

  
  return (
    <div className="map-filter">
      <h3 className="filter-label">Filters</h3>
      <div className="filter-option-container">
        <label className="map-filter-label">Company</label>
        <Toggle
          defaultChecked={companyToggle}
          icons={false}
          name="company"
          onChange={() => setCompanyToggle(!companyToggle)} 
        />
      </div>
      <div className={filterInputVisibility(companyToggle)}>
        <form onSubmit={retrieveFilters}>
        <div className="search map">
            <div onClick={retrieveFilters} className="icon-wrapper">
              <BsSearch />
            </div>
            <input 
              value={filters.companyFilter}
              onChange={(e)=>setFilters({...filters, companyFilter: e.target.value})}
              className="search input"
            />
            <div className="icon-wrapper cancel" onClick={cancelInput} name="companyFilter">
              <BsX name="companyFilter"/>
            </div>
          </div> 
        </form>
      </div>
      
      <div className="filter-option-container">
        <label className="map-filter-label">Location</label>
          <Toggle
            defaultChecked={locationToggle}
            icons={false}
            name="location"
            onChange={() => setLocationToggle(!locationToggle)} 
          />
      </div>
      <div className={filterInputVisibility(locationToggle)}>
        <form onSubmit={retrieveFilters}>
          <div className="search map">
            <div onClick={retrieveFilters} className="icon-wrapper">
              <BsSearch />
            </div>
            <input 
              className="search input"
              value={filters.locationFilter}
              onChange={(e)=>setFilters({...filters, locationFilter: e.target.value})}
            />
            <div className="icon-wrapper cancel" onClick={()=>setFilters({...filters, locationFilter: ""})} name="locationFilter">
              <BsX />
            </div>
          </div>
        </form>
      </div>
      <div className="filter-option-container">
        <label className="map-filter-label">Field</label>
          <Toggle
            defaultChecked={fieldToggle}
            icons={false}
            name="field"
            onChange={() => setFieldToggle(!fieldToggle)} 
          />
      </div>
      <div className={filterInputVisibility(fieldToggle)}>
        <form onSubmit={retrieveFilters}>
          <select 
            value={filters.fieldFilter}
            onChange={(e)=>setFilters({...filters, fieldFilter: e.target.value})}
            className="search select map"
          >
            <option value="">Career Field</option>
            <option value="Full Stack Development">Engineering</option>
            <option value="UX/UI"> UX/UI</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Data Science"> Date Science</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Project Management">Project Management</option>
          </select>
        </form>
      </div>
      <div className="bottom-spacer">
        <DLBtn text="Apply Filters" clickHandler={retrieveFilters} />
      </div>

    </div>
  )
}