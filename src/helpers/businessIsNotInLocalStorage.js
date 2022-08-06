const businessIsNotInLocalStorage = () => {
  return !localStorage.getItem("business") ? true : false;
};

export default businessIsNotInLocalStorage;
