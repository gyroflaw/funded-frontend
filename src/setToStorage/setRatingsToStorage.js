import {fetchRatings} from '../apiCalls/apiCalls'

const setRatingsToStorage = async () => {
    let user = JSON.parse(localStorage.getItem("signedInUser")) || "";   
    const allRatings = await fetchRatings()
    if (user !== '') {
        const allRatings = await fetchRatings(user.id);
        localStorage.setItem('myRatings', JSON.stringify(allRatings));
      }
   
}
export default setRatingsToStorage