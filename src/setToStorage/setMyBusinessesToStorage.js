import Cookies from "universal-cookie"
import {fetchBusinessByUserId} from "../apiCalls/apiCalls"

const setMyBusinessesToStorage = async () => {
  const cookie = new Cookies();
  //let user = cookie.get('signedInUser') || '';
  let user = JSON.parse(localStorage.getItem("signedInUser")) || ""; 
 
  if (user !== '') {
    const myBusinesses = await fetchBusinessByUserId(user.id);
    localStorage.setItem('myBusinesses', JSON.stringify(myBusinesses));
  }
}

export default setMyBusinessesToStorage