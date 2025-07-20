// Custom hook for authentication logic
import { useState, useEffect } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (e.g., from localStorage or token)
    const token = localStorage.getItem("token");
    if (token) {
      // Validate token and set user
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };
};

export default useAuth;
