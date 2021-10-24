import {useMovieContext} from '../../context/context'

export default function Header() {
  const {searchMovie, onChangeHandle, inputValue} = useMovieContext()

  return (    
      <div className="header">
        <h2>ZZMovies</h2>
        <form onSubmit={searchMovie} action="">
          <input onChange={onChangeHandle} value={inputValue} type="text" className="search" placeholder="search" />
        </form>
      </div>    
  )
}