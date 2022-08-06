import {fetchBusinesses} from "../apiCalls/apiCalls";

const setBusinessesToStorage = async () => {
  const allBusinesses = await fetchBusinesses();
  localStorage.setItem("businesses", JSON.stringify(allBusinesses));
};

export default setBusinessesToStorage;
