import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'; 

function App() {

  const [jokes, setJokes] = useState ([])
  const [query, setQuery] = useState('teeth')

  useEffect(()=> {
    getResults();
  })

  const getResults = async () => {
    const response = await axios
    .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
    setJokes(response.data.result)
  }
  
  const handlesearch = (e) => {
    e.preventDefault()
    getResults();
  }
  return (
    <div>
      <form onSubmit={handlesearch}>
        <input type="text"
            onChange={e=> setQuery(e.target.value)}
            value={query}
            />
          <button type="submit">Search</button>
      </form>

      {jokes.map(joke => {
        return(
          <p>{joke.value}</p>
        )
      })}
    </div>
  );
}

export default App;
