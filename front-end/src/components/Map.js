import React from "react";
import {GoogleApiWrapper, Map} from "google-maps-react";
import styles from "../styles/styles.scss";

const KEY = process.env.GOOGLE_MAPS_API_KEY //|| "AIzaSyBgM-DPWbmr4-dmtU7ADIBANFdiL2XwgTI";

console.log("NUM", KEY)


export function RenderMap(props){
  return (
    <Map 
      google={props.google} 
      zoom={16} 
      initialCenter={{lat: 37.234332396, lng: -115.80666344}} 
      className="google-map"
      style={{marginRight: "8px",height: "60vh"}} // may have to style it like this
    >
    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)