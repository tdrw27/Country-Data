import { useState, useEffect } from "react";
import getWeather from "../services/weatherSerice";

const Weather = ( { lat, lon, capital }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather(lat, lon).then(res => setWeather(res.data)).catch(err => console.log('error', err))
  }, [])

  if (!lat || !lon || !weather ) return null

  const iconCode = weather.weather[0].icon;

  
  const weatherUrl = (code) => {
    return `https://openweathermap.org/img/wn/${code}@2x.png`
  }

  return (
    <>
      <h3>Weather in {capital}</h3>
      <div>temperature {weather.main.temp} °Fahrenheit</div>
      <img width={100} height={100} src={weatherUrl(iconCode)} />
      <div>wind {weather.wind.speed} mph</div>
    </>
  )
}

export default Weather