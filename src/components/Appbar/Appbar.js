import React, { useEffect, useRef, useState } from "react";
import Cookies from "universal-cookie";
import ListAProject from "../ListAProject/ListAProject";
import Search from "../Search/Search";
import Logo from "./logo_transparent.png";
import { useNavigate } from "react-router-dom";
const AppBar = (props) => {
  const [height, setHeight] = useState(0);
  const [navbar, setNavbar] = useState(false);

  const ref = useRef(null);
  const navigate = useNavigate();
  let cookie = new Cookies();
  let cookieUser = cookie.get("signedInUser") || "";
  let user = props.user;
  let allProjects = JSON.parse(localStorage.getItem("projects")) || "";

  const viewProjectsMap = () => {
    return (window.location.href = "/projects-map");
    //navigate("/projects-map");
  };

  const goHome = () => {
    window.location.href = "/home";
    //navigate("/home");
  };

  const renderSearchBar = (string) => {
    console.log(string);
    return <Search details={allProjects} />;
  };

  const viewRewards = () => {

    window.location.href = "/my-rewards";
    //navigate("/my-rewards");

  };

  const viewForms = () => {
    window.location.href = "/forms";

  }

  const signIn = () => {
    window.location.href = "/signin";
  };
  const register = () => {
    window.location.href = "/signup";
  };

  const logOut = () => {
    cookie.remove("signedInUser");
    cookie.remove("jwt");
    props.updateUser({});
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  return (


    <>

      <nav ref={ref} className="w-full shadow-sm sticky">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <div className="h-full cursor-pointer" onClick={goHome}>
                <img src={Logo} alt="logo" className="h-full w-36" />
              </div>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className=" hover:text-indigo-200">
                  <NavLink
                    onClick={goHome}
                    title="Local Business"
                  />
                </li>
                <li className=" hover:text-indigo-200">
                  <NavLink
                    onClick={goHome}
                    title="Explore Compaigns"
                  />
                </li>

                <li className=" hover:text-indigo-200">
                  <NavLink
                    onClick={viewProjectsMap}
                    title="Project Map"
                  />
                </li>
                <li className=" hover:text-indigo-200">
                  <ListAProject />
                </li>
                <li className=" hover:text-indigo-200">
                  <NavLink onClick={viewForms} title="Forms" />
                </li>
                <li className=" hover:text-indigo-200">
                  <div className=" flex justify-start items-center py-7 relative">
                    <input
                      className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full hover:border-green-500 border rounded border-gray-300  outline-none"
                      type="text"
                      placeholder="Search"
                    />
                    <svg
                      className="absolute right-3 z-10 cursor-pointer"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                        stroke="#4B5563"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21L15 15"
                        stroke="#4B5563"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </li>

              </ul>

              {Object.keys(user).length === 0 && cookieUser === "" && <>
                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-green-500 rounded-md shadow hover:bg-gray-800"
                    onClick={signIn}
                  >
                    Sign in
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    onClick={register}
                  >
                    Sign up
                  </a>
                </div>

              </>}
              {(Object.keys(user).length !== 0 || cookieUser !== "") && <div className="lg:hidden md:inline-block"> <a
                href="javascript:void(0)"
                className="inline-block w-full py-2 text-center px-4 py-2 text-white bg-[#9F0D3E] rounded-md shadow "
                onClick={logOut}
              >
                Logout
              </a> </div>}


            </div>
          </div>
          {Object.keys(user).length === 0 && cookieUser === "" && <>
            <div className="hidden space-x-2 md:inline-block">
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-white bg-green-500 rounded-md shadow hover:bg-gray-800"
                onClick={signIn}
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                onClick={register}
              >
                Sign up
              </a>
            </div>

          </>}
          {(Object.keys(user).length !== 0 || cookieUser !== "") && <div className="hidden space-x-2 md:inline-block"> <a
            href="javascript:void(0)"
            className="px-4 py-2 text-white bg-[#9F0D3E] rounded-md shadow "
            onClick={logOut}
          >
            Logout
          </a> </div>}

        </div>
      </nav>
      {/* <div style={{ height }}></div> */}
    </>



  );
};

const NavLink = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-fit px-3 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 hover:border-green-500 h-full flex flex-col justify-center"
    >
      <div className="font-medium text-gray-700">{title}</div>
    </div>
  );
};

export default AppBar;
