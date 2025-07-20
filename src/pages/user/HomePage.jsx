// HomePage component - main landing page for users
import React from "react";
import UserLayout from "../../components/layout/UserLayout";
import MovieList from "../../components/movies/MovieList";
import MovieSearch from "../../components/movies/MovieSearch";

const HomePage = () => {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Implement search logic here
  };

  const sampleMovies = [
    {
      id: 1,
      title: "Sample Movie 1",
      genre: "Action",
      duration: 120,
      rating: 8.5,
    },
    {
      id: 2,
      title: "Sample Movie 2",
      genre: "Comedy",
      duration: 95,
      rating: 7.2,
    },
  ];

  return (
    <UserLayout>
      <div className="homepage">
        <h1>Welcome to Movie Booking</h1>
        <MovieSearch onSearch={handleSearch} />
        <MovieList movies={sampleMovies} />
      </div>
    </UserLayout>
  );
};

export default HomePage;
