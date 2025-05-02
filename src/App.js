import React, { useState, useEffect } from "react";
import "./styles.css";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// REACT_APP_API_URL = "https://www.omdbapi.com?apikey=b23c258d";
const API_URL = process.env.REACT_APP_API_URL;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Marvel");
  }, []);

  return (
    <div className="app">
      <h1>Movie Library</h1>
      <div className="search">
        <input
          placeholder="Search For Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies && movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movies found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
