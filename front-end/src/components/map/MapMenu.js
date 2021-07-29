import React, {useState} from "react";
import Toggle from "react-toggle";


export default function MapMenu(){
  let [companyToggle, setCompanyToggle] = useState(false);
  let [locationToggle, setLocationToggle] = useState(false);
  let [fieldToggle, setFieldToggle] = useState(false);

  
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
        <div className="filter-input">
          {companyToggle ? 
            <form>
              <input />
            </form>
          : null}
        </div>
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
      {locationToggle ? 
            <form>
              <input />
            </form>
          : null}
      <div className="filter-option-container">
        <label>Field</label>
          <Toggle
            defaultChecked={fieldToggle}
            icons={false}
            name="field"
            onChange={() => setFieldToggle(!fieldToggle)} 
          />
      </div>
      {fieldToggle ? 
        <form>
          <input />
        </form>
      : null}
    </div>
  )
}