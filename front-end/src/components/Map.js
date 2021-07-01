import React, {useState, useEffect} from "react";
import {GoogleApiWrapper, Map, Marker, InfoWindow} from "google-maps-react";
import { listStories } from "../utils/apiFetcher";
import icons from "../styles/icons/icons";

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const data = [
  {lat: 36.09, lng: -98.375, name:"place1", title:"title1"},
  {lat: 34.09, lng: -91.375, name:"place2", title:"title2"},
  {lat: 38.09, lng: -95.375, name:"place3", title:"title4"}
]

export function RenderMap(props){
  let [stories, setStories] = useState([]);
  let [errors, setErrors] = useState(null);

  useEffect(loadPage,[])

  async function loadPage(){
    const abortController = new AbortController();
    await listStories(abortController.signal).then(setStories).catch(setErrors);
    return () => abortController.abort();
  }

  const pins = data.map((story) => (
    <Marker 
      position={{lat: story.lat, lng: story.lng}}
      name={story.name}
      title={story.title}
      icon={{
        url: icons.mapIcon,
        anchor: new props.google.maps.Point(32,32),
        scaledSize: new props.google.maps.Size(32,32)
      }}
    >
      <InfoWindow
        visible={true}
      >
        <div>
          <p>click here</p>
        </div>
      </InfoWindow>
    </Marker>
  ))


  return (
    <Map 
      google={props.google} 
      zoom={5} 
      initialCenter={{lat: 39.833333, lng: -98.583333}}
      className={"google-map"}
    >
    {pins}
    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)