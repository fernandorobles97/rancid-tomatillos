import './App.css';
import movieData from './movieData'
import Card from '../Card/Card'

function App() {
  const cards = movieData.movies.map(movie => <Card key={movie.id} movieData={movie}/>)

  return (
    <main>
      <h1>All Movies Are Bad</h1>
      {cards}
    </main>
  );
}

export default App;
