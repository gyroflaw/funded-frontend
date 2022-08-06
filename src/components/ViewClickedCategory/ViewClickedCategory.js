import React from "react";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import ProjectsByCategory from "../ProjectsByCategory/ProjectsByCategory";

function ViewClickedCategory() {
  const { category } = useParams();
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  console.log(projects);
  const cookie = new Cookies();
  const user = cookie.get("signedInUser") || "";
  return (
    <div>
      <ProjectsByCategory projects={projects} category={category} user={user} />
    </div>
  );
}

export default ViewClickedCategory;
