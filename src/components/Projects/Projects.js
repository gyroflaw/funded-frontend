import React from "react";
import Cookies from "universal-cookie";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import {round} from "../../apiCalls/helper";
function Projects({ projects, user, showBack }) {
  const navigate = useNavigate();
  const viewEachProduct = (projectId) => {
    return (window.location.href = `/projects/${projectId}`);
    
  };
  function goBack()
  {
    navigate(-1);
  }
  return (
    <>
      {showBack && 
        <div className="bread-crumb">
          <span onClick={goBack}>&lt; BACK</span>
        </div>}
      <div className="projects grid grid4:grid-cols-4 grid3:grid-cols-3 grid2:grid-cols-2 grid1:grid-cols-1 bg-[#EFF5F4] p-4">
        {projects.map((project) => (
          <div className="p-4 cursor-pointer" onClick={() => viewEachProduct(project.id)}>
            <div
              className="w-full rounded-md h-[500px] overflow-hidden bg-white shadow-md"
              id="eachProjectCard"
            >
              <img
                id="eachProjectImg"
                src={project.images[0]}
                className="object-cover w-full h-[200px]"
                alt="Project_Img"
              />
              <div
                id="eachProjectContent"
                className="flex flex-col items-start relative p-4"
              >
                <header>
                  <h5 className=" font-bold text-left line-clamp-2">
                    {project.title}
                  </h5>
                </header>{" "}
                <br />
                <p className="eachProjectCategory absolute top-0 bg-green-500 text-white font-medium px-3 py-1 translate-y-[-50%]">
                  {project.category}
                </p>
                <h6 className="eachProjectGoal">
                  Goal: <span className="text-green-500">${project.goal}</span>
                </h6>
                <div className="progressBar overflow-hidden">
                  <h6 className="text-left">
                    Amount Raised:{" "}
                    <span className="text-green-500">
                      ${project.amountRaised}
                    </span>
                  </h6>
                  <span className="text-green-500 text-right">
                    {(project.amountRaised / project.goal) * 100}%
                  </span>
                  <ProgressBar
                    width={300}
                    percent={project.amountRaised / project.goal}
                  />
                  <br />
                </div>
                <p className="text-left">
                  <span className="eachProjectDescription text-left text-sm text-gray-600 line-clamp-4">
                    Description: {project.description}
                  </span>
                </p>
                <br></br>
                <p className="text-left">
                  <span className="eachProjectDescription text-left text-sm text-gray-600 line-clamp-4">
                    Distance: {Math.round(project.distance * 100) / 100} Miles.
                  </span>
                </p>
                <p className="text-left">
                  <span className="eachProjectDescription text-left text-sm text-gray-600 line-clamp-4">
                    Rating: {round(project.rateCount===0?0:project.rateValue/project.rateCount,0.5)} - {project.rateCount} Vote(s)&nbsp;
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
