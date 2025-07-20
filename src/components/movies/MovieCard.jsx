// MovieCard component for displaying individual movies
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.poster || "/placeholder-movie.jpg"} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-duration">{movie.duration} min</p>
        <p className="movie-rating">Rating: {movie.rating}/10</p>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  );
};

export default MovieCard;
