import dataService from "../services/dataService";
import { useState, useEffect } from "react";
import Weather from "./Weather";
const { searchData } = dataService;

const api_key = process.env.REACT_APP_API_KEY

const Country = ({ name }) => {
  const [country, setCountry] = useState(null)
  useEffect(() => {
    searchData(name).then(res => setCountry(res.data))
  }, [])

  if (!country) return null
  const languages = [];
  for (const [,value] of Object.entries(country.languages)) {
    languages.push(value)
  }

  const [lat , lon] = country.latlng

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital: {country.capital}</div>
      <div>area: {country.area} km<sup>2</sup></div>
      <h2>languages:</h2>
      <ul>
        {languages.map(lang => <li key={lang}>{lang}</li>)}
      </ul>
      <img width={300} height={200} src={country.flags.svg ? country.flags.svg : country.flags.png} alt={country.flags.alt} />
      <Weather lat={lat} lon={lon} capital={country.capital}/>
    </div>
  )
}


export default Country