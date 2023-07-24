import Country from "./Country"
import {useState} from 'react'




const Results = ({ data, toSearch, handleSearch }) => {
  const [country, setCountry] = useState(null);

  if (!data || !toSearch) return null
  const listOfCountries = data.map(d => d.name.common)
  const filtered = listOfCountries.filter(item => item.toLowerCase().includes(toSearch.toLowerCase()))

  if (filtered.length === 1) {
    return (
      <Country name={filtered[0]}/>
    )
  }
  else if (filtered.length === 2 && filtered[0].includes(filtered[1])) {
    return (
      <Country name={filtered[1]} />
    )
  }
  else if (filtered.length >= 10) {
    return <div>Too many matches, specify further</div>
  }
  else {
    return (
      <>
        {filtered.map((country, i) => {
          return (
            <div key={i}>{country}<button onClick={() => handleSearch(country)}>show</button></div>
          )
        })}
      </>
    )
  }
}
export default Results