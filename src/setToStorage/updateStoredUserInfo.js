import Cookies from "universal-cookie"
import {fetchUserById} from '../apiCalls/apiCalls'

const updateStoredUserInfo = async() => {
  const cookie = new Cookies();
  let user = cookie.get('signedInUser') || ''
  
  if (user !== '') {
    const userInfo = await fetchUserById(user.id);
    cookie.set('signedInUser', userInfo);
  }
}

export default updateStoredUserInfo