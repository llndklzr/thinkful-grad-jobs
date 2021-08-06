import React, { useState } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import MarkerClusterer from '@googlemaps/markerclustererplus';

import icons from "../../styles/icons/icons";

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export function RenderMap(props){
  const businesses = props.businesses;
  const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }
  let [mapState, setMapState] = useState({...initialState});
  let [grads, setGrads] = useState([]);

  const onMarkerClick = async (props, marker, e) =>{
    setGrads(businesses[marker.index].grads.map((grad)=>{
        return(
          <div key={grad.graduate_id}>
            <a className="map modal people" href={`/graduates/${grad.graduate_id}`}>{grad.first_name} {grad.last_name}</a>
          </div>
        )
      })
    )
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

  const mapPins = businesses.map((b, index) => {
    return (
      <Marker 
        key={b.business_id}
        onClick={onMarkerClick}
        position={{lat: b.business_location.lat, lng: b.business_location.lng}}
        name={b.business_name}
        id={b.business_id}
        index={index}
        state={b.business_location.state}
        city={b.business_location.city}
        icon={{
          url: icons.mapIcon,
          anchor: new props.google.maps.Point(32,32),
          scaledSize: new props.google.maps.Size(32,32)
        }}
      />
      )
    }
  )

  const map = (
    <Map 
      onClick={onMapClicked}
      google={props.google} 
      zoom={5} 
      initialCenter={{lat: 39.833333, lng: -98.583333}}
      className={"google-map"}
      fullscreenControl={false}
      streetViewControl={false}
    />
  )

  //const markerCluster = new MarkerClusterer(map, mapPins,{ imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",})

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
            <h4 className="map modal header">{mapState.selectedPlace.name} ({grads.length})</h4>
            <p className="map modal location">{mapState.selectedPlace.city}, {mapState.selectedPlace.state}</p>
            <p>Grads that started here...</p>
            {grads}
          </div>
        </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)