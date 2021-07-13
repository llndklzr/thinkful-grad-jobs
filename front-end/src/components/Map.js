import React, {useState, useEffect} from "react";
import {GoogleApiWrapper, Map, Marker, InfoWindow} from "google-maps-react";
import { listStories } from "../utils/apiFetcher";
import icons from "../styles/icons/icons";

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const data = [
  {lat: 36.09, lng: -98.375, name:"place1", title:"title1"},
  {lat: 34.09, lng: -91.375, name:"place2", title:"title2"},
  {lat: 38.09, lng: -95.375, name:"place3", title:"title3"}
]

export function RenderMap(props){
  const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }
  let [stories, setStories] = useState([]);
  let [errors, setErrors] = useState(null);
  let [mapState, setMapState] = useState({...initialState});
  console.log("MAP STATE", mapState)

  const onMarkerClick = (props, marker, e) =>{
    console.log(e)
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

  //useEffect(loadPage,[]) need to fix the API to call first

  async function loadPage(){
    const abortController = new AbortController();
    await listStories(abortController.signal).then(setStories).catch(setErrors);
    return () => abortController.abort();
  }

  const mapPins = data.map((story) => (
    <Marker 
      key={story.lat}
      onClick={onMarkerClick}
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
        marker={mapState.activeMarker}
        visible={mapState.showingInfoWindow}
      >
        <p>{mapState.selectedPlace.name}</p>
      </InfoWindow>
    </Marker>
  ))


  return (
    <Map 
      onClick={onMapClicked}
      google={props.google} 
      zoom={5} 
      initialCenter={{lat: 39.833333, lng: -98.583333}}
      className={"google-map"}
    >
      {mapPins}
    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)