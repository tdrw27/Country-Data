const Search = ({ value, onSearchChange }) => {
  return (
    <>find countries <input type="text"
                            value={value} 
                            onChange={onSearchChange}
                             /></>
  )
}

export default Search