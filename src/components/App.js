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
    <div className="container max-w md mx-auto p-4 m-2 bg-purple-lightest shadow-lg rounded">
    <img src="https://icon.now.sh/react/c0c" alt="React" className="right" />
    <h1 className="text-grey-darkest font-thin">Hooks News</h1>   
    <form
      onSubmit={handleOnSubmit}
      className="mb-2"
    >
    
      <input 
        type='search'
        value={query}
        onChange={e => setQuery(e.target.value)}
        ref={searchInputRef}
        className="border p-1 rounded"
      />
      <button 
        type='submit'
        className="bg-orange rounded m-1 p-1"
      >
        Search
      </button>
      <button
        type='button'
        onClick={handleClearSearch}
        className="bg-teal text-white p-1 rounded"
      >
        Clear
      </button>
    </form>
    { loading ? (
      <p className="font-bold text-orange-dark">Loading results...</p>
    ) : (    
    <ul className="list-reset leading-normal">
      {console.log(results)}
      {results && results.map(result => (
        <li
          key={result.objectID}
          className="text-indigo-dark hover:text-indigo-darkest my-2"
        >
          <a href={result.url} className="no-underline py-4">{result.title}</a>
        </li>
      ))}
    </ul>
    )}

    {error && <p className="text-red font-bold">{error.message}</p>}
    </div>
  )
}
