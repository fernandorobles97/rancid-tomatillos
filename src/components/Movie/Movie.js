import React from "react";
import './Movie.css';

const Movie = (props) => {
  console.log(props)
  const handleClick = () => {
    props.setIsClicked(false);
    props.setClickedMovie({})
  }
  
  return (
    <main id="individualMovie">
        <img src={props.clickedMovie.poster_path} alt={`poster for ${props.clickedMovie.title}`} />
        <section className="fade-in">
          <div className="info" id="info1">
            <h1>{props.clickedMovie.title}</h1>
            <button onClick={handleClick}>back to home</button>
          </div>
          <div className="info" id="info2"><p>{props.clickedMovie.genres}</p></div>
          <div className="info" id="info3">
            {props.clickedMovie.runtime && <p>Runtime: {props.clickedMovie.runtime}</p>}
            <p>Release date: {props.clickedMovie.release_date}</p>
          </div>
          <div className="info" id="info4">
            <div>Rating: {props.clickedMovie.average_rating.toFixed(2)} / 10</div>
            <p>{props.clickedMovie.overview}</p>
          </div>
          <div className="info" id="info5">
            <h2>Other details</h2>
            {props.clickedMovie.budget && <p>Budget: ${props.clickedMovie.budget}</p>}
            {props.clickedMovie.revenue && <p>Revenue: ${props.clickedMovie.revenue}</p>}
          </div>
        </section>
    </main>
  )
}

export default Movie
