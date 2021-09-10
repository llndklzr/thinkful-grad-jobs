import React, {useState, useEffect} from "react";
import GoogleApiWrapper from "./GoogleApiWrapper";
import MapMenu from "./MapMenu";
import { listBusinesses, filterResultsForMap } from "../../utils/apiFetcher";

export default function MapParent(){

  const initialFilterOptions = {
    companyFilter: "",
    locationFilter: "",
    fieldFilter: "",
  }
  let [filters, setFilters] = useState({...initialFilterOptions});
  let [businesses, setBusinesses] = useState([]);
  let [errors, setErrors] = useState(null);
  const abortController = new AbortController();

  const retrieveFilters = async (e)=> {
    e.preventDefault();
    return await filterResultsForMap(filters, abortController.signal)
      .then(res =>{
        setBusinesses(res);
      })
      .catch(setErrors);
  }
  useEffect(()=>{
    async function loadBusinesses(){
      await filterResultsForMap(filters, abortController.signal).then(setBusinesses).catch(setErrors);
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
          businesses={businesses}
        />
      </div>
    </div>
  )
}