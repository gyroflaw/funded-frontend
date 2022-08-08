import React from "react";
import { useNavigate } from "react-router-dom";

function Category() {
  let categories = JSON.parse(localStorage.getItem("categories")) || [];
  const navigate = useNavigate();

  const viewClickedCategory = (category) => {
    return window.location.href=`/categories/${category}`
    //navigate(`/categories/${category}`);

  }

  return (
    <div className="categories grid md:grid-cols-4 sm:grid-cols-1 align-middle  p-4">
      {categories.map((category) => (
        <div className="p-4  ">
          <div
            className="w-full cursor-pointer rounded-md h-[100px]  flex items-center justify-center overflow-hidden  bg-white hover:bg-green-500 shadow-md  text-green-500 hover:text-white  "
            id="eachCategoryCard"
            onClick={() => viewClickedCategory(category)}
          >
            <h4 className=" font-bold line-clamp-2" >
              {category}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
