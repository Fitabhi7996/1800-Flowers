import axios from "axios";
const FetchSearchData = (query) => {
  return axios.get(
    `https://flowers18.onrender.com/flowers?q=${query}`
  );
};

export default FetchSearchData;

