import { createContext, useContext, useEffect, useState } from "react";
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieContext = createContext()

export default function MovieContextProvider({children}) {
  const [movies, setMovies] = useState([])
  const [inputValue, setInputValue] = useState('')
  
  // get movies
  useEffect(() => {
    getMovies(APIURL)
  }, [])

  async function getMovies(url) {
    const resp = await fetch(url)
    const respData = await resp.json()

    setMovies(respData.results)
  }

  // search movies
  function onChangeHandle(e) {
    setInputValue(e.target.value)
  }

  function searchMovie(e) {
    e.preventDefault()
    
    if(inputValue.trim()) {
      getMovies(SEARCHAPI + inputValue)
      setInputValue('')
    }
  }


  return (
    <movieContext.Provider value={{movies, searchMovie, onChangeHandle, inputValue}}>
      {children}
    </movieContext.Provider>
  )
}

export const useMovieContext = () => useContext(movieContext)