import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import MapContainer from "../Map/MapContainer";
import ProgressBar from "../ProgressBar/ProgressBar";
import SignIn from "../SignIn/SignIn"
import ReactStars from "react-rating-stars-component";
import { setProjectRating } from "../../apiCalls/apiCalls";
import setRatingsToStorage from "../../setToStorage/setRatingsToStorage";
function ProjectsById(props) {
  setRatingsToStorage();
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem('projects'));
    if (projects) {
      setProjects(projects);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);
  //const projects = JSON.parse(localStorage.getItem("projects")) || "";
  
  const cookie = new Cookies();
  const user = cookie.get("signedInUser") || "";
  const myRatings = JSON.parse(localStorage.getItem("myRatings"));
  var projectRating = [];
  if(myRatings!=null)
  {
    projectRating = myRatings.filter(rating=>rating.userId===user.id && rating.projectId===props.projectId);
  }
  const [rating,setRating] = useState(projectRating.length===0?0:projectRating[0].rating)
  const [amount, setAmount] = useState("");
  const donate = (projectId, amount, userId) => {
    if (user === "") {
      return (window.location.href = "/signin");
    }
    window.location.href = `https://fundedlocal-server.herokuapp.com/api/v1.0/payments/${projectId}&${amount}&${userId}`;
  };
  const ratingChanged = (newRating) => {
    const formData = new FormData();
    formData.set("projectId", props.projectId);
    formData.set("userId", user.id);
    formData.set("rateValue",newRating);
    setProjectRating(formData);
    setRatingsToStorage();
    setRating(newRating);

  };
  if (user === "") {
    return <SignIn />;
  }
  function goBack()
  {
    window.location.href = '/home'
  }
  return (
    <>
      <div className="bread-crumb">
          <span onClick={goBack}>&lt; BACK</span>
        </div>
      <div className="max-w-[1200px] m-auto bg-green-50">
        {projects
          .filter((project) => project.id === props.projectId)
          .map((filteredProject) => (
            <div>
              <div
                id="default-carousel"
                className="relative"
                data-carousel={
                  filteredProject.images.length === 1 ? "static" : "slide"
                }
              >
                <div className="overflow-hidden relative h-[70vh]">
                  {[
                    ...filteredProject.images,
                    ...filteredProject.images,
                    ...filteredProject.images,
                  ].map((image) => (
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item
                    >
                      <img
                        src={image}
                        className="block object-contain bg-black h-full absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                      />
                    </div>
                  ))}
                </div>
                <div className="flex absolute w-full bg-[#fffb] backdrop-blur-sm bottom-0 z-50 flex-col items-start px-4 py-2">
                  <h1 className="selectedProjectTitle">
                    {filteredProject.title}
                  </h1>

                  <h6 className="bg-green-500 px-2 py-1  text-white font-medium">
                    {filteredProject.category}
                  </h6>
                  {/* <h5 className='eachProjectAmountRaised'>Raised: ${project.amountRaised}</h5> */}
                  <div>
                    Goal:{" "}
                    <span className="text-green-500 font-medium text-lg">
                      ${filteredProject.goal}
                    </span>
                  </div>
                  <div className="text-left overflow-hidden">
                    Percentage Raised:{" "}
                    <span className="text-green-500 font-medium text-lg">
                    {(filteredProject.amountRaised / filteredProject.goal) * 100}%
                      <ProgressBar
                        width={300}
                        percent={filteredProject.amountRaised / filteredProject.goal}
                      />
                    </span>
                  </div>
                 
                </div>
              </div>
              <div className="px-4 py-7 text-left">
                <h4 className="text-green-500">Description</h4>
                <p>{filteredProject.description}</p>
                <p>Distance: { Math.round(filteredProject.distance * 100) / 100} Miles.</p>
              </div>

              <MapContainer
                lat={filteredProject.latitude}
                lng={filteredProject.longitude}
              />
               <div className="rewardsDiv">
                  <h1 className="heading text-green-500">Rewards:</h1>
                  {
                    filteredProject.extraRewards.map((extraReward)=>
                    <p>Pledge {extraReward.rewardThreshold} or higher and get: {extraReward.reward}</p>    

                    )
                  }      
                </div>
               <div className="project-rating">
                 <div className="project-title"><span>Rate Project:&nbsp;&nbsp;</span></div>
                 <div>
               <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  value={rating}
                  size={24}
                  activeColor="#008E56"
                />
                </div>
               </div>
              <div className="p-4 bg-white w-full">
                <div>How much would you like to donate?</div>
                <div className="flex flex-row justify-center mt-3">
                  <input
                    type="number"
                    id="amount"
                    placeholder="$0.00"
                    required
                    className="form-input w-[200px]"
                    onChange={(e) => setAmount(e.target.value)}
                  />

                  <button
                    className="form-btn w-[100px] ml-5 h-fit"
                    onClick={() => donate(filteredProject.id, amount, user.id)}
                  >
                    Donate!
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ProjectsById;
