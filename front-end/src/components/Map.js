import React from "react";
import {GoogleApiWrapper, Map} from "google-maps-react";

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export function RenderMap(props){
  return (
    <Map 
      google={props.google} 
      zoom={5} 
      initialCenter={{lat: 39.833333, lng: -98.583333}}
    >
    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)