import React, { useState } from "react";

const Forms = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="h-full">
      {showModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className=" p-5 border-b border-solid border-gray-300 rounded-t ">
                <div className="flex justify-end items-end mb-4">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setShowModal(!showModal)}
                  >
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
                  </button>
                </div>
                <h3 className="text-3xl font=semibold">General Info</h3>
                <p>
                  Hey Heads up we don’t have enough info to give you the most
                  personalized and acccurate predictions! Please Fill out the
                  quick form below. It auto saves and updates so if you dont
                  have enough time you can x out of it and reopen it, on the
                  button called forms! Its also scrollable, as there are quite a
                  few questions to match your taste correctly! Cheers-Robert and
                  Peter (Form is below or google form integration)
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Forms;
