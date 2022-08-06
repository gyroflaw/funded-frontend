import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import addNotification from "../Notifications/Notifications";
import { signUp } from "../../apiCalls/apiCalls";

function SignUp() {
  const [user, setUser] = useState("");
  const [redirect, setRedirect] = useState(false);
  const cookies = new Cookies();

  const submit = async (event) => {
    event.preventDefault();

    const userJson = JSON.stringify(user);

    await signUp(userJson)
      .then((res) => {
        if (res.data.name) {
          cookies.set("signedInUser", res.data.user);
          localStorage.setItem("signedInUser",res.data.user);
          localStorage.setItem("jwt", res.data.jwt);
          setRedirect(true);
          addNotification(`Welcome ${res.data.name}`, "success");
        } else {
          addNotification(res.data, "danger")
        }
      });
  };

  if (redirect) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="Signup h-[100vh] w-full flex flex-col justify-center items-center bg-[#EFF5F4]">
      <form
        onSubmit={submit}
        className="bg-white p-4 w-[400px] rounded-md shadow-md"
      >
        <header>
          <h3>SIGN UP</h3>
          <br />
        </header>
        <span>
          <input
            className="form-input"
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </span>

        <span>
          <input
            className="form-input"
            type="text"
            placeholder="Username"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
            required
          />
        </span>

        <span>
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </span>

        <span>
          <input
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </span>

        <span>
          <br></br>
          <br />
          <button className="form-btn" type="submit">
            SIGN UP
          </button>
        </span>
      </form>
      <div className="p-3 font-medium">
        Already have account?
        <Link
          className="text-green-500 hover:text-green-400 transition-all no-underline p-2 font-medium"
          to="/signin"
        >
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
