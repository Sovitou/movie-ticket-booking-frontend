// API calls related to authentication
const BASE_URL = "http://localhost:3000/api";

const authService = {
  // Login user
  login: async (credentials) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      return await response.json();
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  // Register user
  register: async (userData) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      return await response.json();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      return await response.json();
    } catch (error) {
      console.error("Reset password error:", error);
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      return await response.json();
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },
};

export default authService;
