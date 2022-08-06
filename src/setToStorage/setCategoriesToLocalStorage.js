import {fetchCategories} from "../apiCalls/apiCalls";

const setCategoriesToLocalStorage = async () => {
  const allCategories = await fetchCategories();
  localStorage.setItem("categories", JSON.stringify(allCategories));
};

export default setCategoriesToLocalStorage;
