// LoginPage component - user login form
import React, { useState } from "react";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    // Implement login logic here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <p>
          <a href="/reset-password">Forgot password?</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
