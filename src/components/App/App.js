import React, { useState } from 'react';
import './App.css';
import movieData from './movieData'
import Movie from '../../Movie';
import Card from '../Card/Card'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [clickedMovie, setClickedMovie] = useState({})
  const cards = movieData.movies.map(movie => <Card setClickedMovie={setClickedMovie} setIsClicked={setIsClicked} key={movie.id} movieData={movie}/>)

  return (
    <main>
      <header>
        <h1>All Movies Are Bad</h1>
      </header>
      {!isClicked ? cards : <Movie clickedMovie={clickedMovie} isClicked={isClicked} /> }
    </main>
  );
}

export default App;
