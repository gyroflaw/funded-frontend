
import { React, useState } from "react";
import Spinner from '../Spinner/Spinner'
import { fetchStripeAccountStatus } from "../../apiCalls/apiCalls";

function StripeComplete(){
    const [isLoading, setIsLoading] = useState(true);
    const [isStripePayable, setIsStripePayable] = useState(true);
    let myBusinesses = JSON.parse(localStorage.getItem("myBusinesses")) || [];
    const startStripeFlow = async()=>{
        const link = "/stripe-connect";
        window.location.href = link
    }
    fetchStripeAccountStatus(myBusinesses[0].id).then((data)=>{
        setIsLoading(false);
        console.log(myBusinesses);
        setIsStripePayable(data)
        
        console.log(data);
    });
    return(
        <>
            {isLoading && <div className="spinnerContainer"><Spinner />
            <span>Checking Stripe Status</span>
            </div>}
            {!isStripePayable && <div className="spinnerContainer">
            <button onClick={startStripeFlow}className="bg-green-500 font-semibold text-xl p-2 px-4 text-white rounded-full">
                    Finish Stripe Account Setup
                    </button>
            </div>}

        </>
    );

}

export default StripeComplete;