import React from 'react'
import '../styles/Search.css'

function Search({ setFilterData, setSearch, search, data }) {

  const filterBySearch = () => {
    if (search !== '') {
      let value = search.toLowerCase()
      let filter = data.filter(e => e.title.toLowerCase().includes(value))
      setFilterData(filter)
    }
  }
  
  return (
    <div>
      <input type="text" id="search" placeholder='Search' value={search} onChange={(e) => { setSearch(e.target.value); filterBySearch() }} />
    </div>
  )
}

export default React.memo(Search)