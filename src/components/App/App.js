import React, { useState, useEffect } from 'react'
import './App.css'
import Movie from '../Movie/Movie'
import Card from '../Card/Card'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [clickedMovie, setClickedMovie] = useState({})
  const [movieData, setMovieData] = useState([])
  const [goodRequest, setGoodRequest] = useState(true)

  const cards = movieData.map(movie => <Card setClickedMovie={setClickedMovie} setIsClicked={setIsClicked} key={movie.id} movieData={movie}/>)

  useEffect(() => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => {
        if (response.status === 500) {
          setGoodRequest(false)
        } else {
          return response.json()
        }
      })
      .then(data => setMovieData(data.movies))
      .catch(err => alert(err))
  }, [])

  return (
    <main>
      <header>
        <h1>All Movies Are Bad</h1>
      </header>
      {!goodRequest && <h2>Sorry, something went wrong.</h2>}
      {!isClicked ? cards : <Movie clickedMovie={clickedMovie} setClickedMovie={setClickedMovie} setIsClicked={setIsClicked} />}
    </main>
  );
}

export default App;
