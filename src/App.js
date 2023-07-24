import { useState, useEffect } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import dataService from "./services/dataService"



const App = () => {
  const [ search, setSearch ] = useState('')
  const [data , setData] = useState(null)

  useEffect(() =>{
    dataService
      .allData()
      .then(res => setData(res.data))
  },[])

  return (
    <>
      <Search value={search} onSearchChange={e => setSearch(e.target.value)}/>
      <Results data={data} toSearch={search} handleSearch={setSearch}/>
    </>
  )
}

export default App;
