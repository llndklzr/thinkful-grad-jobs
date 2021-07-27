import React, {useState} from "react";
import GoogleApiWrapper from "./GoogleApiWrapper";
import MapMenu from "./MapMenu";

export default function MapParent(){
  let [companyFilter, setCompanyFilter] = useState(null);
  let [locationFilter, setLocationFilter] = useState(null);
  let [fieldFilter, setFieldFilter] = useState(null);

  return(
    <div>
      <div>
        <MapMenu 

        />
      </div>
      <div>
        <GoogleApiWrapper 
          companyFilter={companyFilter} 
          locationFilter={locationFilter}
          fieldFilter={fieldFilter}
        />
      </div>
    </div>
  )
}