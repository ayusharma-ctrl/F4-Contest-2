import './App.css';
import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import Post from './components/Post';


function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState([])

  const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`

  useEffect(() => {
    fetchData();
  }, [page])

  async function fetchData() {
    try {
      const request = await fetch(url)
      const response = await request.json()
      const newData = [...data, ...response]
      setData(newData)
      console.log(newData)
    }
    catch (error) {
      console.error("Unable to fetch data -->", error)
    }
  }

  return (
    <div className='appContainer'>
      <Search setFilterData={setFilterData} setSearch={setSearch} search={search} data={data} />
      <div className='App'>
        {
          search === '' ?
            data.length > 0
              ? data.map((e, index) => {
                return (<Post key={index} userID={e.id} title={e.title} imgUrl={`https://picsum.photos/200?random=${e.id}`} />
                )
              }) : "Loading Data..."
            : filterData.map((e, index) => {
              return (<Post key={index} userID={e.id} title={e.title} imgUrl={`https://picsum.photos/200?random=${e.id}`} />
              )
            })
        }
      </div>
      <div>
        <button id='loadMore' onClick={(e) => { setPage(page + 1) }}>Load More Posts</button>
      </div>
    </div>
  );
}

export default App;