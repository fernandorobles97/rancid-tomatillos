import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Movie from '../Movie/Movie'
import Card from '../Card/Card'

function App() {
  const [movieData, setMovieData] = useState([])
  const [goodRequest, setGoodRequest] = useState(true)

  const cards = movieData.map(movie => <Card key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} average_rating={movie.average_rating} release_date={movie.release_date} />)

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
      <Routes>
        <Route path='/' element={!goodRequest ? <h2>Sorry, something went wrong.</h2> : cards}/>
        <Route path=':id' element={<Movie />}/>
      </Routes>
    </main>
  );
}

export default App;
