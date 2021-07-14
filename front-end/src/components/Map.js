import React, {useState, useEffect} from "react";
import {GoogleApiWrapper, Map, Marker, InfoWindow} from "google-maps-react";
import { listBusinesses, listStories } from "../utils/apiFetcher";
import icons from "../styles/icons/icons";

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export function RenderMap(props){

  const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }
  let [businesses, setBusinesses] = useState([]);
  let [errors, setErrors] = useState(null);
  let [mapState, setMapState] = useState({...initialState});

  const onMarkerClick = (props, marker, e) =>{
    setMapState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    })
  };

  const onMapClicked = (props) => {
    if (mapState.showingInfoWindow) {
      setMapState({
        showingInfoWindow: false,
        activeMarker: null,
        selectedPlace: {}
      })
    }
  };

  useEffect(loadPage,[])

  async function loadPage(){
    const abortController = new AbortController();
    await listBusinesses(abortController.signal).then(setBusinesses).catch(setErrors);
    return () => abortController.abort();
  }

  const mapPins = businesses.map((business) => {
    return (
      <Marker 
        key={business.business_id}
        onClick={onMarkerClick}
        position={{lat: business.business_lat, lng: business.business_lng}}
        name={business.business_name}
        icon={{
          url: icons.mapIcon,
          anchor: new props.google.maps.Point(32,32),
          scaledSize: new props.google.maps.Size(32,32)
        }}
      />
      )
    }
  )

  return (
    <Map 
      onClick={onMapClicked}
      google={props.google} 
      zoom={5} 
      initialCenter={{lat: 39.833333, lng: -98.583333}}
      className={"google-map"}
      fullscreenControl={false}
      streetViewControl={false}
    >
      {mapPins}
      <InfoWindow
          marker={mapState.activeMarker}
          visible={mapState.showingInfoWindow}
        >
          <div>
            <h4>{mapState.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)