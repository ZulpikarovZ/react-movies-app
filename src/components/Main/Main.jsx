import Movie from '../Movie/Movie';
import { useMovieContext } from '../../context/context';

export default function Main() {
  const {movies} = useMovieContext()

  return (
    <div className="main"> {movies.length > 0 && 
      movies?.map((movie) => <Movie key={movie.id} {...movie}/> )}
    </div>
  )
}