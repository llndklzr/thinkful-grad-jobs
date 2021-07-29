import React, {useState} from "react";
import GoogleApiWrapper from "./GoogleApiWrapper";
import MapMenu from "./MapMenu";

export default function MapParent(){
  let [companyFilter, setCompanyFilter] = useState(null);
  let [locationFilter, setLocationFilter] = useState(null);
  let [fieldFilter, setFieldFilter] = useState(null);

  return(
    <div className="absolute-map-wrapper">
      <div className="map-filter-wrapper-in-parent">
        <MapMenu 

        />
      </div>
      <div className="map-wrapper-in-parent">
        <GoogleApiWrapper 
          companyFilter={companyFilter} 
          locationFilter={locationFilter}
          fieldFilter={fieldFilter}
        />
      </div>
    </div>
  )
}