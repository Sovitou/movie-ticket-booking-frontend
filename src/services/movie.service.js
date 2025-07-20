// API calls for movies
const BASE_URL = "http://localhost:3000/api";

const movieService = {
  // Get all movies
  getAllMovies: async () => {
    try {
      const response = await fetch(`${BASE_URL}/movies`);
      return await response.json();
    } catch (error) {
      console.error("Get movies error:", error);
      throw error;
    }
  },

  // Get movie by ID
  getMovieById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/movies/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Get movie error:", error);
      throw error;
    }
  },

  // Search movies
  searchMovies: async (searchTerm) => {
    try {
      const response = await fetch(
        `${BASE_URL}/movies/search?q=${encodeURIComponent(searchTerm)}`
      );
      return await response.json();
    } catch (error) {
      console.error("Search movies error:", error);
      throw error;
    }
  },

  // Create movie (Admin only)
  createMovie: async (movieData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(movieData),
      });
      return await response.json();
    } catch (error) {
      console.error("Create movie error:", error);
      throw error;
    }
  },

  // Update movie (Admin only)
  updateMovie: async (id, movieData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(movieData),
      });
      return await response.json();
    } catch (error) {
      console.error("Update movie error:", error);
      throw error;
    }
  },

  // Delete movie (Admin only)
  deleteMovie: async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/movies/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Delete movie error:", error);
      throw error;
    }
  },
};

export default movieService;
