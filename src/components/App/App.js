import React, { useState, useEffect } from 'react';
import './App.css';
import movieData from './movieData'
import Movie from '../Movie/Movie';
import Card from '../Card/Card'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [clickedMovie, setClickedMovie] = useState({})
  const [movieData, setMovieData] = useState([])

  const cards = movieData.map(movie => <Card setClickedMovie={setClickedMovie} setIsClicked={setIsClicked} key={movie.id} movieData={movie}/>)

  useEffect(() => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(res => res.json())
      .then(data => setMovieData(data.movies))
      .catch(err => console.log(err))
  }, [])

  return (
    <main>
      <header>
        <h1>All Movies Are Bad</h1>
      </header>
      {!isClicked ? cards : <Movie clickedMovie={clickedMovie} setClickedMovie={setClickedMovie} setIsClicked={setIsClicked} /> }
    </main>
  );
}

export default App;
