import React, {useState, useEffect} from "react";
import GoogleApiWrapper from "./GoogleApiWrapper";
import MapMenu from "./MapMenu";
import { listBusinesses } from "../../utils/apiFetcher";

export default function MapParent(){
  let [companyFilter, setCompanyFilter] = useState(null);
  let [locationFilter, setLocationFilter] = useState(null);
  let [fieldFilter, setFieldFilter] = useState(null);
  let [businesses, setBusinesses] = useState([]);
  let [errors, setErrors] = useState(null);

  useEffect(()=>{
    async function loadBusinesses(){
      const abortController = new AbortController();
      await listBusinesses(abortController.signal).then(setBusinesses).catch(setErrors);
      return () => abortController.abort();
    }
    loadBusinesses();
  }, []);

  return(
    <div className="absolute-map-wrapper">
      <div className="map-filter-wrapper-in-parent">
        <MapMenu 
          companyFilter={companyFilter}
          locationFilter={locationFilter}
          fieldFilter={fieldFilter}
          setCompanyFilter={setCompanyFilter}
          setLocationFilter={setLocationFilter}
          setFieldFilter={setFieldFilter}
        />
      </div>
      <div className="map-wrapper-in-parent">
        <GoogleApiWrapper 
          companyFilter={companyFilter} 
          locationFilter={locationFilter}
          fieldFilter={fieldFilter}
          businesses={businesses}
        />
      </div>
    </div>
  )
}