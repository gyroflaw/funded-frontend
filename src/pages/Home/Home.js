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
      <div className="">
        <div className="exploreCategories bg-[#EFF5F4]">
          <header className="text-center font-bold green">
            Explore Categories
          </header>
        </div>{" "}
        <div className="place-items-center content-center h-screen bg-[#EFF5F4] p-4">
          <Category /> <Projects projects={projects} user={user} showBack={false}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
