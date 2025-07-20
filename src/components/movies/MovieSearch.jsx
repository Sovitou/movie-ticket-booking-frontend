// MovieSearch component for searching movies
import React, { useState } from "react";

const MovieSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="movie-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default MovieSearch;
