import React from "react";
import Projects from "../Projects/Projects";

function ProjectsByCategory({ projects, category, user }) {
  
  const projectsByCategory = projects
    .filter((project) => project.category === category)
    .map((filteredProject) => {
      return filteredProject;
    });

  return (
    <div>
      <Projects projects={projectsByCategory} user={user} showBack={true}/>
    </div>
  );
}

export default ProjectsByCategory;
