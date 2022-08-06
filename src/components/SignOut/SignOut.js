import React from "react";
import Cookies from "universal-cookie";

function SignOut() {
  let cookie = new Cookies();

  const logOut = () => {
    cookie.remove("signedInUser");
    cookie.remove("jwt");
    localStorage.removeItem("jwt");
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="max-w-[1080px] mx-auto">
      <button
        className="bg-green-500 font-semibold text-xl p-2 px-4 text-white rounded-full"
        onClick={logOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
