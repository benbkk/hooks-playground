import React, { useEffect, useState, useRef } from 'react'
import fetch from 'isomorphic-unfetch'

export default function App() {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('react hooks')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const searchInputRef = useRef()
  

  useEffect(() => {
    getResults()
  }, [])

  
  const getResults = async () => {
    setLoading(true)
    try {
      const response = await fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
      const data = await response.json()
      setResults(data.hits)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    getResults()
  }

  const handleClearSearch = (e) => {
    setQuery('')
    searchInputRef.current.focus()
  }
  
  return (
    <>       
    <form
      onSubmit={handleOnSubmit}
    >
    
      <input 
      type='search'
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={searchInputRef}
      />
      <button type='submit'>Search</button>
      <button type='button' onClick={handleClearSearch}>Clear</button>
    </form>
    { loading ? (
      <p>Loading results...</p>
    ) : (    
    <ul>
      {console.log(results)}
      {results && results.map(result => (
        <li key={result.objectID}>
          <a href={result.url}>{result.title}</a>
        </li>
      ))}
    </ul>
    )}

    {error && <p>{error.message}</p>}
    </>
  )
}
