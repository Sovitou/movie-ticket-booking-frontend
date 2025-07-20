// Header component for navigation
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>MovieBooking</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/movies">Movies</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
