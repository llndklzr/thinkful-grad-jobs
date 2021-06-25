import React from "react";
import {GoogleApiWrapper, Map} from "google-maps-react";
import "../styles/styles.scss";

const KEY = process.env.GOOGLE_MAPS_API_KEY || "AIzaSyBgM-DPWbmr4-dmtU7ADIBANFdiL2XwgTI";
console.log(KEY)


export function RenderMap(props){
  return (
    <Map google={props.google} zoom={12}>

    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)