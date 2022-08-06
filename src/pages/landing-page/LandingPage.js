import React from "react";
import { Link } from "react-router-dom";
import background from "./images/background.jpg";

function LandingPage() {
  return (
    <div className="h-[100vh] flex flex-row">
      <div className="flex flex-1 relative">
        <img
          src={background}
          className="absolute top-0 left-0 h-full w-full object-cover"
          alt="background"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#2b95f8ce] to-[#5ff398ad] flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-white font-medium text-[50px] drop-shadow">
              FundedLocal{" "}
            </h1>
            <div className="text-white text-[24px] drop-shadow">
            Strengthening Communities
            </div>
          </div>
        </div>
      </div>
      <div className="signup-in flex flex-col flex-1 bg-[#008E56] h-full justify-center items-center">
        <Link to="/signin" className="signin">
          <button className="form-btn mb-2 w-[250px] bg-white text-black shadow">
            Sign In
          </button>
        </Link>

        <Link to="/signup" className="signup">
          <button className="form-btn w-[250px] bg-white text-black shadow">
            Sign Up
          </button>
        </Link>
         <br /><br />
        <Link to="/home">
          <h6> Explore FundedLocal</h6>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
