import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainerAllProjects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const currentLongitude = localStorage.getItem("longitude");
    const currentLatitude = localStorage.getItem("latitude");
    console.log(currentLongitude);
    return (
      <div
        className="grid place-items-center h-screen"
      >
        <Map
          containerStyle={{ maxHeight: "1000px", maxWidth: "2000px" }}
          google={this.props.google}
          zoom={3}
          initialCenter={{
            lat: currentLatitude,
            lng: currentLongitude,
          }}
        >
          <Marker 
            
            name={"Current Location"}
            icon={{url:"https://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
            position={{ lat: currentLatitude, lng: currentLongitude }}
            />
          {this.props.latAndLng.map((eachMarker) => {
            return (
              <Marker
                onClick={this.onMarkerClick}
                name={"Project"}
                position={{ lat: eachMarker.lat, lng: eachMarker.lng }}
              />
            );
          })}

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
             <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> 
        </InfoWindow> */}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBKjQ7O0KZo8bUmUlRxN-w1maCu0KRdGZA",
})(MapContainerAllProjects);
