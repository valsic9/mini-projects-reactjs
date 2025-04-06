import { useCallback, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from "just-debounce-it";



function App() {
  const { search, setSearch, error } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useMovies({ search, sort })

  // debounce needs to be called inside a useMemo or useCallback to avoid creating a new function in every render
  const debouncedGetMovies = useCallback(debounce(search => { getMovies({ search }) }, 350), [getMovies])

  // // Uncontrolled way of handling a form in React, using FormData API
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   // Creating and object for all fields in the form (in this case, just one) and getting the value of
  //   // the input with the name 'movie' (specified in the HTML)
  //   const { movie } = Object.fromEntries(new window.FormData(event.target))
  //   console.log(movie)
  // }

  // Controlled way of handling a form in React, using useState (in custom hook useSearch)
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newVal = event.target.value
    setSearch(newVal)
    debouncedGetMovies(newVal)
  }

  const handleSort = () => {
    setSort(!sort)
  }


  return (
    <>
      <header>
        <h1>Movie searcher</h1>
        <form action="#" method='GET' className='form' onSubmit={handleSubmit}>
          <input className={error ? `search invalid` : `search`} onChange={handleChange} value={search} type="text" name='movie' id='movie' placeholder='Avengers, Matrix...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}

      </header>

      <main>
        {
          loading ? <p>Loading movies...</p> : <Movies movies={movies} />
        }
      </main>
    </>
  )
}

export default App;
