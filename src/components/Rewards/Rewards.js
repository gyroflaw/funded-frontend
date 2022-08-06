import React from "react";
import Cookies from "universal-cookie";
import updateStoredUserInfo from "../../setToStorage/updateStoredUserInfo";
import background from "./images/background.jpg";
import SignIn from "../SignIn/SignIn"

function Rewards(props) {
  updateStoredUserInfo();
  const cookie = new Cookies();
  let user = cookie.get("signedInUser") || "";
  let rewards = user.earnedRewards;

  if (user === "") {
    return <SignIn />;
  }

  if (!rewards) {
    return (
      <div className="text-7xl max-w-[50%] mb-3 absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#2b95f8ce] to-[#5ff398ad] flex flex-col justify-center items-center">
        <img
          src={background}
          className="absolute top-0 left-0 h-full w-full object-cover"
          alt="background"
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-center text-white font-medium text-[50px] drop-shadow">
            You currently do not have any rewards. Support your favorite
            projects today to start earning rewards{" "}
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div className="h-[100vh] flex flex-row">
      <div className="flex flex-1 relative">
        <div className="text-7xl max-w-[50%] mb-3 ">
          <img
            src={background}
            className="absolute top-0 left-0 h-full w-full object-cover"
            alt="background"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#2b95f8ce] to-[#5ff398ad] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-center text-white font-medium text-[50px] drop-shadow">
                Congratulations, you have earned the following rewards
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col flex-1 bg-[#5ff398] h-full justify-center overflow-auto items-center">
        {rewards.map((reward) => (
          <div className="text-base text-justify max-w-[50%] mb-3 text-grey font-medium text-[50px] drop-shadow ">
            <p className="text-center">
              Reward: {reward.name}
            </p>
            <p className="text-center">
              Reward ID: {reward.id} {" "}
            </p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rewards;
