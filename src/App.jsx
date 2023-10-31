import SearchIcon from "./assets/search.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard.jsx";
function App() {
  const [searchitem, setsearchitem] = useState(' ');
  const [movies, setmovies] = useState([]);
  const API_URL = "http://www.omdbapi.com/?apikey=ff7d7dd0&s=";
 
  const searchMovies = async (title) => {
    const resp = await fetch(`${API_URL}${title}`);
    const data = await resp.json();
    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchitem}
          onChange={(e) =>setsearchitem(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchitem)}} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((each) => (
            <MovieCard movie1={each} />
          ))}
        </div>
      ) : (
        <div className="empty ">
          {" "}
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
