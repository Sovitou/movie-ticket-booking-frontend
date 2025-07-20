// MovieDetailPage component - detailed view of a specific movie
import React from "react";
import UserLayout from "../../components/layout/UserLayout";

const MovieDetailPage = () => {
  return (
    <UserLayout>
      <div className="movie-detail-page">
        <h1>Movie Details</h1>
        <div className="movie-detail-content">
          <div className="movie-poster">
            <img src="/placeholder-movie.jpg" alt="Movie Poster" />
          </div>
          <div className="movie-info">
            <h2>Movie Title</h2>
            <p>
              <strong>Genre:</strong> Action/Adventure
            </p>
            <p>
              <strong>Duration:</strong> 2h 30min
            </p>
            <p>
              <strong>Rating:</strong> 8.5/10
            </p>
            <p>
              <strong>Description:</strong> Movie description goes here...
            </p>
            <button className="book-tickets-btn">Book Tickets</button>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default MovieDetailPage;
