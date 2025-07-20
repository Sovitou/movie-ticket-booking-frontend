// API calls for cinemas
const BASE_URL = "http://localhost:3000/api";

const cinemaService = {
  // Get all cinemas
  getAllCinemas: async () => {
    try {
      const response = await fetch(`${BASE_URL}/cinemas`);
      return await response.json();
    } catch (error) {
      console.error("Get cinemas error:", error);
      throw error;
    }
  },

  // Get cinema by ID
  getCinemaById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/cinemas/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Get cinema error:", error);
      throw error;
    }
  },

  // Get cinema showtimes
  getCinemaShowtimes: async (cinemaId, date) => {
    try {
      const response = await fetch(
        `${BASE_URL}/cinemas/${cinemaId}/showtimes?date=${date}`
      );
      return await response.json();
    } catch (error) {
      console.error("Get showtimes error:", error);
      throw error;
    }
  },

  // Create cinema (Admin only)
  createCinema: async (cinemaData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/cinemas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cinemaData),
      });
      return await response.json();
    } catch (error) {
      console.error("Create cinema error:", error);
      throw error;
    }
  },

  // Update cinema (Admin only)
  updateCinema: async (id, cinemaData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/cinemas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cinemaData),
      });
      return await response.json();
    } catch (error) {
      console.error("Update cinema error:", error);
      throw error;
    }
  },

  // Delete cinema (Admin only)
  deleteCinema: async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/cinemas/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Delete cinema error:", error);
      throw error;
    }
  },
};

export default cinemaService;
