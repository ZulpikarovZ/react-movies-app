const IMGPATH = "https://image.tmdb.org/t/p/w1280";

export default function Movie({title, vote_average, overview, poster_path}) {

  function getVoteColor(num) {
    return (num >= 8) ? 'green' : (num >= 5) ? 'orange' : 'red'
  }
  
  return (
    <div className="movie">
      <img src= {poster_path ? IMGPATH + poster_path : '/images/john.jpg'} alt={title} />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={getVoteColor(vote_average)}>{vote_average}</span>
      </div>
      <div className='overview'>
        <h3>Overview:</h3>{overview}
      </div>
    </div>
  )
}