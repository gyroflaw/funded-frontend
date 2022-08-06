import React from "react";
import MapContainerAllProjects from "./Map/MapContainerAllProjects";

function MapWithAllProjects() {
  let projects = JSON.parse(localStorage.getItem("projects")) || "";
  let latAndLng = []

  const loadLatAndLng = () => {
    projects.map(project => {latAndLng.push({ lat: project.latitude, lng: project.longitude })})
  }
  loadLatAndLng();

  return (
    <div>
      <MapContainerAllProjects
        latAndLng={latAndLng}
      />
    </div>
  );
}

export default MapWithAllProjects;
