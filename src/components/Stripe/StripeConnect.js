import setBusinessesToStorage from "../../setToStorage/setBusinessesToStorage";
import { fetchStripeAccountLink } from "../../apiCalls/apiCalls";
import setMyBusinessesToStorage from "../../setToStorage/setMyBusinessesToStorage";
import Cookies from "universal-cookie";

export default function StripeConnect(){
    let cookies = new Cookies();
    let user = cookies.get("signedInUser") || "";
    let myBusinesses = JSON.parse(localStorage.getItem("myBusinesses")) || [];
    const startStripeFlow = async()=>{
      const link = await fetchStripeAccountLink(myBusinesses[0].id);
      console.log(link);
      window.location.href = link
  }
    if (user === "") {
        return (window.location.href = "/signin");
      }
      setBusinessesToStorage();
      setMyBusinessesToStorage();
      return(
        <div className="">
        <button onClick={startStripeFlow}className="bg-green-500 font-semibold text-xl p-2 px-4 text-white rounded-full">
          Connect Stripe Account
        </button>
      </div>
      )
      
   
}
  