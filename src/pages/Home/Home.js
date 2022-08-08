import React,{useEffect,useState} from "react";
import Cookies from "universal-cookie";
import Category from "../../components/Category/Category";
import Projects from "../../components/Projects/Projects";
import setProjectsToStorage from "../../setToStorage/setProjectsToStorage";

function Home(props) {
  setProjectsToStorage()
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
  
  //const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const cookie = new Cookies();
  const user = cookie.get("signedInUser") || "";
  return (
    <div>
      <div className=" w-full">
        <div className="exploreCategories">
          <div className="text-center font-bold pt-4 ">
            Explore Categories
          </div>
        </div>{" "}
        <div className="place-items-center items-center p-4  ">
          <Category /> <Projects projects={projects} user={user} showBack={false}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
