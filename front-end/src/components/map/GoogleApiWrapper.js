import React, { useState } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import { getGradsByBusinessId } from "../../utils/apiFetcher";
import MarkerClusterer from '@googlemaps/markerclustererplus';

import icons from "../../styles/icons/icons";

const KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export function RenderMap(props){
  console.log(props)
  const initialState = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }
  let [mapState, setMapState] = useState({...initialState});
  let [grads, setGrads] = useState([]);

  const onMarkerClick = async (props, marker, e) =>{
    await getGradsByBusinessId(marker.id).then(r => setGrads(r));
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
      setGrads([]);
    }
  };

  const mapPins = props.businesses.map((business) => {
    return (
      <Marker 
        key={business.business_id}
        onClick={onMarkerClick}
        position={{lat: business.business_location.lat, lng: business.business_location.lng}}
        name={business.business_name}
        id={business.business_id}
        state={business.business_location.state}
        city={business.business_location.city}
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


  const gradsByBusiness = grads.map((grad)=>{
    return(
      <div key={grad.graduate_id}>
        <a className="map modal people" href={`/graduates/${grad.graduate_id}`}>{grad.first_name} {grad.last_name}</a>
      </div>
    )
  })

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
            {gradsByBusiness}
          </div>
        </InfoWindow>
    </Map>
  );
}

export default GoogleApiWrapper({apiKey: KEY})(RenderMap)