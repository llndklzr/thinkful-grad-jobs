import React, {useState, useEffect} from "react";
import GoogleApiWrapper from "./GoogleApiWrapper";
import MapMenu from "./MapMenu";
import { listBusinesses } from "../../utils/apiFetcher";

export default function MapParent(){

  const initialFilterOptions = {
    companyFilter: "",
    locationFilter: "",
    fieldFilter: "",
  }
  let [filters, setFilters] = useState({...initialFilterOptions});
  let [businesses, setBusinesses] = useState([]);
  let [errors, setErrors] = useState(null);

  const retrieveFilters = (e)=> {

  }

  useEffect(()=>{
    async function loadBusinesses(){
      const abortController = new AbortController();
      await listBusinesses(abortController.signal).then(setBusinesses).catch(setErrors);
      return () => abortController.abort();
    }
    loadBusinesses();
  }, []);

  const errorMsg = "Sorry, there was an error in getting the results!";

  return(
    <div className="absolute-map-wrapper">
      <div className="map-filter-wrapper-in-parent">
        <MapMenu 
          filters={filters}
          setFilters={setFilters}
          retrieveFilters={retrieveFilters}
        />
      </div>
      <div className="map-wrapper-in-parent">
        {errors ? errorMsg : null}
        <GoogleApiWrapper 
          filters={filters}
          businesses={businesses}
        />
      </div>
    </div>
  )
}