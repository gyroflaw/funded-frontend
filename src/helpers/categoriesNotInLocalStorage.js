const categoriesNotInLocalStorage = () => {
  return !localStorage.getItem("catgeories") ? true : false;
};

export default categoriesNotInLocalStorage;
