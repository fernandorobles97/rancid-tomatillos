import React from "react";

const Movie = (props) => {
  return (
    <main>
        <img src={props.clickedMovie.poster_path} alt={`poster for ${props.clickedMovie.title}`} />
        <section>
          <div>
            <h1>{props.clickedMovie.title}</h1>
            <button>back to home</button>
          </div>
          <div>
            {props.clickedMovie.genres}
          </div>
          <div>
            <p>{props.clickedMovie.runtime}</p>
            <p>{props.clickedMovie.release_date}</p>
          </div>
          <div>
            <div>
              {props.clickedMovie.average_rating}
            </div>
            <p>  {props.clickedMovie.overview}</p>
          </div>
          <div>
            <h2>Other details</h2>
            <p>Budget: ${props.clickedMovie.budget}</p>
            <p>Revenue: ${props.clickedMovie.revenue}</p>
          </div>
        </section>
    </main>
  )
}

export default Movie