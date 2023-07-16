import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import './Movie.css';

const Movie = () => {
  const [clickedMovie, setClickedMovie] = useState()
  const [requestFailed, setRequestFailed] = useState()
  const movieID = useParams().id

  useEffect(() => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => {
        if(!response.ok) {
          setRequestFailed(true)
          throw new Error(response.status)
        }
        else return response.json()
      })
      .then(data => setClickedMovie(data))
      .catch(err => console.log(err))
  }, [])

  if (clickedMovie) {
    return (
      <main id="individualMovie">
        <img src={clickedMovie.movie.backdrop_path} id="background" alt={`background for ${clickedMovie.movie.title}`}/>
        <img src={clickedMovie.movie.poster_path} id="cover" alt={`poster for ${clickedMovie.movie.title}`} />
        <section className="fade-in">
          <div className="info" id="info1">
            <h1>{clickedMovie.movie.title}</h1>
            <Link to="/">
              <button>back to home</button>
            </Link>
          </div>
          <div className="info" id="info2"><p>{clickedMovie.movie.genres.join(' / ')}</p></div>
          <div className="info" id="info3">
            <p>Runtime: {clickedMovie.movie.runtime}</p>
            <p>Release date: {clickedMovie.movie.release_date}</p>
          </div>
          <div className="info" id="info4">
            <div className="nowrap">Rating: {clickedMovie.movie.average_rating} / 10</div>
            <p>{clickedMovie.movie.overview}</p>
          </div>
          <div className="info" id="info5">
            <h2>Other details</h2>
            <div>
              <p>Budget: ${clickedMovie.movie.budget}</p>
              <p>Revenue: ${clickedMovie.movie.revenue}</p>
            </div>
          </div>
        </section> 
      </main>
    )
  } else if (requestFailed) {
    return (
      <h2 style={{color: "black"}}>This movie doesn't exist, please return home and try again</h2>
    )
  }
}
  
export default Movie
