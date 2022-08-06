import axios from "axios";
import addNotification from "../components/Notifications/Notifications";
import { getDistance } from "./helper";


const production = true;
const baseUrl = production?"https://fundedlocal-server.herokuapp.com":"http://localhost:8080";


export const fetchStripeAccountLink = async (businessId) => {
  const data = await axios.post(
    `${baseUrl}/api/v1.0/payments/create-stripe-account/${businessId}`,{
      headers:{
        "Access-Control-Allow-Origin": "*"
      }
    }).then((res) => res.data);
  return data;
  
}
export const fetchStripeAccountStatus = async (businessId) =>{
  const data = await axios.get(
    `${baseUrl}/api/v1.0/payments/check-stripe-account/${businessId}`,{
      headers:{
        "Access-Control-Allow-Origin": "*"
      }
    }).then((res) => res.data);
  return data;
}  
export const setProjectRating = async (formData)=>{
  var jwtToken = localStorage.getItem("jwt");
  console.log("here");
  const data =  await axios.post( `${baseUrl}/api/v1.0/ratings/post`,
  formData, {
    headers: { 
      'content-type': 'multipart/form-data',
      Authorization: "Bearer " + jwtToken,
      "Access-Control-Allow-Origin": "*"

    }
  }).then((res)=> {
      console.log(res);
     })
}
export const fetchBusinessByUserId = async (id) => {
    const data = await axios
      .get(
        `${baseUrl}/api/v1.0/businesses/getbusinessesbyuserid/${id}`
      )
      .then((res) => res.data);
  
    return data;
  };
  export const fetchBusinesses = async() => {  
  
    const data = await axios.get(`${baseUrl}/api/v1.0/businesses`)
      .then((res) => res.data)
  
    return data;
  }
  export const fetchCategories = async () => {
    const data = await axios
      .get(`${baseUrl}/api/v1.0/projects/getcategories`)
      .then((res) => res.data);
  
    return data;
  };
  export const fetchRatings = async(userId) =>{
    const data = await axios.get(`${baseUrl}/api/v1.0/ratings/get/${userId}`)
      .then((res) => res.data)
      return data;
  }
  export const fetchProjects = async() => {   
    const ipinfo = await axios.get("https://ipwho.is/");
    localStorage.setItem("longitude",ipinfo.data.longitude);
    localStorage.setItem("latitude",ipinfo.data.latitude); 
    const data = await axios.get(`${baseUrl}/api/v1.0/projects`)
      .then((res) => res.data)
      for (var i = 0; i < data.length; i++)
      {
        const distance = getDistance(data[i].Longitude,localStorage.getItem("longitude"),data[i].Latitude,localStorage.getItem("latitude"));
        const element = {"distance":distance};
        data[i] = Object.assign(data[i],element);
      }
      data.sort((a,b)=> parseFloat(a.distance) - parseFloat(b.distance));  
    return data;
  }
  export const fetchProjectsById = async(id) => {
  
    const data = await axios.get(`${baseUrl}/api/v1.0/projects/${id}`)
                  .then((res) => res.data)
    return data;
  }
  export const fetchUserById = async(id) => {  
    var jwtToken = localStorage.getItem("jwt")
  
    const data = await axios.get(`${baseUrl}/api/v1.0/users/${id}`, {
      headers:{
        Authorization: "Bearer " + jwtToken,
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then((res) => res.data)
  
    return data;
  }
  export const listAProjectApiCall = async(formData) => {
    var jwtToken = localStorage.getItem("jwt")
  
    await axios
    .post(`${baseUrl}/api/v1.0/projects/newproject`, formData, {
      headers: { 
        'content-type': 'multipart/form-data',
        Authorization: "Bearer " + jwtToken,
        "Access-Control-Allow-Origin": "*"

      }
    }).then((res)=> {
      if (res.data.name){
        localStorage.setItem('myProjects', JSON.stringify(res.data.project))
      }else {
        addNotification(res.data, "danger")
      }
       })
  }
  export const processPayments = async() => {
    var jwtToken = localStorage.getItem("jwt")
  
    const data = await axios.get(`${baseUrl}/api/v1.0/payments`, {
      headers:{
        Authorization: "Bearer " + jwtToken,
        "Access-Control-Allow-Origin": "*"

      }
    })
      .then((res) => res.data)
  
    return data;
  }
  
  export const signIn = async(data) => {
    
    return axios.post(
      `${baseUrl}/api/v1.0/users/login`,
      data
    )
  }
  export const signUp = async(userJson) => {
    return axios.post(
      `${baseUrl}/api/v1.0/users/newuser`,
      userJson,
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"

        },
      }
    )
  }
  export const registerABusinessApiCall = async (formData) => {
    var jwtToken = localStorage.getItem("jwt")
    let myBusinesses = [];
    axios.interceptors.request.use(
      config => { 
        config.headers.Authorization = "Bearer " + jwtToken;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    )
  
    await axios
    .post(`${baseUrl}/api/v1.0/businesses/newbusiness`, formData, {
      headers: { 
        Authorization: "Bearer " + jwtToken,
        "Access-Control-Allow-Origin": "*"

      }
      }
    ).then((res) => {
      if (res.data.name) {
        myBusinesses.push(res.data.business)
        localStorage.setItem("myBusinesses",  JSON.stringify(myBusinesses))  
      } else{
        addNotification(res.data, "danger")
      }
    })
  };
      
  