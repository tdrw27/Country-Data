import axios from "axios";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?`
const apiKey = process.env.REACT_APP_API_KEY

const apiUrl = `&appid=${apiKey}`



const getWeather = (lat, lon) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
}


export default getWeather