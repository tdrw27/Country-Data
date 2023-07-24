import axios from "axios";

const allData = () => {
  return axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
}

const searchData = (name) => {
  return axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
}

export default { searchData, allData }