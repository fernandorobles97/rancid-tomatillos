import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import './Movie.css';

const Movie = () => {
  const [clickedMovie, setClickedMovie] = useState()
  const movieID = useParams().id

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => response.json())
      .then(data => setClickedMovie(data))
      .catch(err => alert(err))
  }, [])

  if (clickedMovie) {
    return (
      <main id="individualMovie">
       
        <img src={clickedMovie.movie.poster_path} alt={`poster for ${clickedMovie.movie.title}`} />
        <section className="fade-in">
          <div className="info" id="info1">
            <h1>{clickedMovie.movie.title}</h1>
            <Link to="/">
              <button>back to home</button>
            </Link>
          </div>
          <div className="info" id="info2"><p>{clickedMovie.movie.genres}</p></div>
          <div className="info" id="info3">
            {clickedMovie.movie.runtime && <p>Runtime: {clickedMovie.movie.runtime}</p>}
            <p>Release date: {clickedMovie.movie.release_date}</p>
          </div>
          <div className="info" id="info4">
            <div>Rating: {clickedMovie.movie.average_rating} / 10</div>
            <p>{clickedMovie.movie.overview}</p>
          </div>
          <div className="info" id="info5">
            <h2>Other details</h2>
            {clickedMovie.movie.budget && <p>Budget: ${clickedMovie.movie.budget}</p>}
            {clickedMovie.movie.revenue && <p>Revenue: ${clickedMovie.movie.revenue}</p>}
          </div>
        </section> 
      </main>
    )
  }
}
  

export default Movie
