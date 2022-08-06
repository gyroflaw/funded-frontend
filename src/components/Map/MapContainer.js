import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="h-[300px] w-[500px] m-auto mb-4 shadow-md">
        <Map
          containerStyle={{ height: "300px", width: "500px" }}
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

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
})(MapContainer);
