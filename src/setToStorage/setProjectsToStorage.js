import {fetchProjects} from '../apiCalls/apiCalls'

const setProjectsToStorage = async () => {

  const allProjects = await fetchProjects()
  console.log("getting projects");
  localStorage.setItem('projects', JSON.stringify(allProjects))
}

export default setProjectsToStorage