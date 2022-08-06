import React, { useState } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
function Search({ details }) {
  const [filteredDetails, setFilteredDetails] = useState([]);

  const goToProject = (id) => {
    window.location.href = `/projects/${id}`;
  };

  const handleFilter = (event) => {
    const wordEntry = event.target.value
    const newFilter = details.filter((detail) => {
      return detail.title.toLowerCase().includes(wordEntry.toLowerCase());
    });
    return wordEntry === '' ? setFilteredDetails([]) : setFilteredDetails(newFilter);
  }
  return (
    <section className="garamond">
      {/* <div className="w-fit px-1 cursor-pointer border-b-0 border-[#fff0] transition-all hover:border-b-2 h-full flex flex-col justify-center"> */}
        <div className="searchInputs">
          <input
            className="b--none bg-lightest-blue ma3"
            type="search"
            placeholder="Search Projects"
            onChange={(event) => handleFilter(event)}
          />
        </div>
        {filteredDetails.length != 0 && (
          <div className="dataResults">
            {filteredDetails.slice(0, 5).map((value, key) => (
              <div className="dataItem" onClick={() => goToProject(value.id)}>
                {" "}
                <p>{value.title} </p>
              </div>
            ))}
          </div>
        )}
      {/* </div> */}
    </section>
  );
}

export default Search;
